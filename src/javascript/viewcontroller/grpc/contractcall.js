import Hedera from '../../hedera'
import { enumKeyByValue } from '../../hedera/utils'
import io from 'socket.io-client'
import { TransactionBody } from '../../../pbweb/TransactionBody_pb'
import nodeAddress from '../../hedera/address'
import { AccountManager } from '../../models'
import { AbiCoder } from 'web3-eth-abi'
import i from '../../hedera/internal'
import debug from 'debug'

const log = debug('all:viewcontroller:grpc:contractcall')

/**
 *
 * A module that makes gRPC calls to Hedera network
 * @module gRPC
 */

/**
 * @const {Uint8Array} Tx Hedera TransactionBody in Uint8Array
 */
const Tx = TransactionBody.DataCase
/**
 * @const {string} CONTRACTCALL string generated using @see enumKeyByValue
 */
const CONTRACTCALL = enumKeyByValue(Tx, Tx.CONTRACTCALL)

let count = 0

/**
 *
 * getContractCallController will send to composed contract call transaction body back
 * @param {*} contractTag
 * @param {*} urlString
 */
async function getContractCallController(contractTag, urlString) {
    log('contractTag', contractTag)

    let paymentServer = contractTag.paymentserver
    let submissionNode = contractTag.submissionNode // which is null
    // prepare (and sign) the tx object to be forwarded back to Nik
    let node = nodeAddress.getNodeAddr(submissionNode)
    log('node', node)

    let am = await new AccountManager().init()
    let a = await am.getCurrentAccountObject()
    log('current account, a', a)
    log('urlString is', urlString)
    // sender details
    let sender = a.accountID
    log('sender', sender, typeof sender)
    let keypair = a.keypair
    let contract = contractTag.contractid
    let abi = contractTag.abi
    let params = contractTag.params
    let memo = contractTag.memo

    // To send composed body directly or do more operator work here??
    log('node address', node.address)
    log('node account', node.account)
    const hedera = new Hedera.Client(node.address, node.account)
    let client = hedera.withOperator(keypair, sender).connect()

    // prepend buyer inputs
    abi.inputs.unshift({ name: 'buyer', type: 'address' })
    // prepend buyer contract account id (translated by Hedera)
    let address = i.solidityAddressFromAccountIDString(sender)
    params.unshift(address)

    const abiCoder = new AbiCoder()
    // Additionally remove the first byte "0x" with `slice(2)`
    // This first bye "0x" denotes a hex string
    // because the extra "0x" byte deserializes incorrectly in other languages
    // and causes transaction to fail on Hedera
    const functionParams = abiCoder.encodeFunctionCall(abi, params).slice(2)
    const gas = 100000
    log('GASSSS', gas)

    const amount = params[2]
    log('AMOUNT', amount)

    const fee = 100000

    let tx = client
        .contractCall(contract, gas, amount, sender, functionParams, memo, fee)
        .prepare()

    // connect to payment-server and pass the request, and get a response
    log(paymentServer)
    const socket = io.connect(paymentServer)

    socket.on('connect', function() {
        log('socket.on connect count', count)
        count = count + 1
        // We might want to check in indexed-db if this CONTRACTCALL has ever been made successfully
        // if it has been made successfully, we might want to stop the socketio event CONTRACTCALL
        // from emitting again

        // Send tx data over
        log('CONTRACTCALL execute: contractCallController')
        socket.binary(true).emit(CONTRACTCALL, tx.data)

        // To be completed once clarified
        socket.on(`${CONTRACTCALL}_RESPONSE`, async function(res) {
            log(`${CONTRACTCALL}_RESPONSE`, res)
            // we will need to persist successful response into indexed-db
            // and render a message to show user that the purchase is successful or not

            socket.disconnect()
        })
    })
}

export default getContractCallController
