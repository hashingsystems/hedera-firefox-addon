import io from 'socket.io-client'
import { TransactionBody } from '../../../pbweb/Transaction_pb'
import { Query } from '../../../pbweb/Query_pb'
import Hedera from '../../hedera'
import { enumKeyByValue } from '../../hedera/utils'
import { alertBanner } from '../../ui-utils'
import errorHandler from './errorhandler'
import { AccountManager } from '../../models'
import { ResponseCodeEnum } from '../../../pbweb/ResponseCode_pb'
import address from '../../hedera/address'
import i from '../../hedera/internal'
import debug from 'debug'

const log = debug('all:viewcontroller:grpc:cryptotransfer')

/**
 * A module that makes gRPC calls to Hedera network
 * @module gRPC
 */

/**
 * @const {Uint8Array} Tx Hedera TransactionBody in Uint8Array
 */
const Tx = TransactionBody.DataCase
/**
 * @const {string} CRYPTOTRANSFER string generated using @see enumKeyByValue
 */
const CRYPTOTRANSFER = enumKeyByValue(Tx, Tx.CRYPTOTRANSFER)
/**
 * @const {} Q enum from Hedera Query
 */
const Q = Query.QueryCase
/**
 * @const {string} TRANSACTIONGETRECEIPT string generated using @see enumKeyByValue
 */
const TRANSACTIONGETRECEIPT = enumKeyByValue(Q, Q.TRANSACTIONGETRECEIPT)

let count = 0

/**
 *
 * cryptoTransfer handles all cryptoTransfer calls to Hedera using socketio
 * @param {*} micropayment micropayment is the micropayment tag object (hedera-micropayment) parsed from publisher's website
 * @param {*} urlString urlString is the current url
 * @param {*} port port is chrome's long-lived connection
 */
async function cryptoTransferController(micropayment, urlString, port) {
    log('Is our port object present?', port)
    // current account
    let am = await new AccountManager().init()
    let a = await am.getCurrentAccountObject()
    log('current account, a', a)
    log('urlString is', urlString)
    // sender details
    let sender = a.accountID
    let keypair = a.keypair
    // recipient details
    let recipientList = micropayment.recipientList
    let amount = i.getSumOfTransfer(recipientList)
    let memo = `${urlString}|${micropayment.memo}`
    let mps = micropayment.paymentServer
    let fee = TRANSACTION_FEE
    log('submissionNode parsed in is: ', micropayment.submissionNode)
    log('submissionNode parsed in is recipientList: ',micropayment.recipientList)
    log('submissionNodeparsed in is paymentserver: ',micropayment.paymentServer)
    let submissionNode = micropayment.submissionNode
    // prepare (and sign) the tx object to be forwarded to micropayment-server
    let node = address.getNodeAddr(submissionNode)
    log('node : ', node)
    const hedera = new Hedera.Client(node.address, node.account)
    let client = hedera.withOperator(keypair, sender).connect()
    let tx = client.cryptoTransfer(sender, recipientList, memo, fee).prepare()
    let transactionId = tx.idString

    // data for indexedDB: accountID, host, path etc
    let accountID = a.accountID
    let url, host, path
    try {
        url = new URL(urlString)
        host = url.origin
        path = url.pathname
    } catch (e) {
        return
    }

    let data = {
        accountID,
        host,
        path,
        amount,
        transactionId
    }

    // connect to micropayment-server and pass the request, and get a response
    const socket = io(mps, {
        autoConnect: false
    })

    socket.on('connect', function() {
        log('socket.on connect count', count)
        count = count + 1
    })

    log('CRYPTOTRANSFER execute: cryptoTransferController')
    socket.binary(true).emit(CRYPTOTRANSFER, tx.data)

    socket.on(`${CRYPTOTRANSFER}_RESPONSE`, async function(res) {
        // unexpected or undefined response, handle any error here, likely due to network errors
        log(`${CRYPTOTRANSFER}_RESPONSE`, res)
        try {
            errorHandler(res)
            // cryptoTransfer succeeded, save into indexed-db
            indexedDBSave(data, port)
            // cryptoTransfer succeeded, call getTransactionReceipt to confirm
            let q = client.getTransactionReceipts(tx.id).prepare()
            socket.binary(true).emit(TRANSACTIONGETRECEIPT, q.data)
        } catch (e) {
            // here is a good place to prompt user that something went wrong
            // alertBanner
            log('What is the error?', e.message)
            await alertBanner(
                `Your micropayment has failed; <a href="${
                    window.location.href
                }">please try again</a>. For help, visit <a href="https://help.hedera.com" target="_blank">help.hedera.com</a>.`,
                false
            )
            if (port) {
                port.postMessage({
                    text: 'change-icon'
                })
            }
            showOnlyAbstract()
        }
    })

    socket.on(`${TRANSACTIONGETRECEIPT}_RESPONSE`, async res => {
        log(`${TRANSACTIONGETRECEIPT}_RESPONSE`, res)
        if (res.receiptStatus === ResponseCodeEnum.SUCCESS) data.receipt = true
        indexedDBSave(data, port)
        socket.disconnect()
    })

    socket.open()
}

/**
 * Evil function to remove everything but leave only article abstract if cryptotransfer fails,
 * abstract is specific to publisher. Right now, hardcoded for the-timestamp
 */
function showOnlyAbstract() {
    let content = document.getElementsByClassName('news__content')[0]
    log('content', content)
    if (content !== undefined) {
        while (content.childNodes.length > 3) {
            content.removeChild(content.lastChild)
        }
    }
}

/**
 *
 * @param {object} data has the following keys accountID (required), host, path, amount, created, transactionId (required) and receipt (boolean)
 * @param {object} port is chrome's long lived connection
 *
 */
function indexedDBSave(data, port) {
    // defensive code, do not save to indexed-db if there's no current account
    if (data.accountID === undefined || data.transactionId === undefined) return
    if (data.created === undefined) data.created = Date.now()
    log('indexedDBSave', data)
    if (port) {
        port.postMessage({
            text: 'indexeddb-save',
            data
        })
    }
}

export default cryptoTransferController
