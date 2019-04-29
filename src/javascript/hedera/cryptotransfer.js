import i from './internal'
import { CryptoTransferTransactionBody } from '../../pbweb/CryptoTransfer_pb'
import { TransactionID, SignatureList } from '../../pbweb/BasicTypes_pb'
import { TransactionBody, Transaction } from '../../pbweb/Transaction_pb'
import forge from 'node-forge'
import setRecipientTransferLists from './cryptotransferlist'
import debug from 'debug'

const log = debug('all:hedera:cryptotransfer')

/**
 * @module cryptotransfer
 */

/**
 * cryptoTransfer prepares the cryptoTransfer object in a protobuf acceptable format to be parsed to Hedera node subsequently.
 * @param {Object} self refers to the instance of Hedera (Hedera object).
 * @param {string} sender refers to the paying account. It is a string delimited by dot, of the format 'shardNum.realmNum.accountNum'.
 * @param {Array} recipientList refers to the list of accounts receiving the payment. It consists of the amount and accountID of receiver.
 * @param {string} memo is an optional memo string.
 * @param {number} fee is service fee to Hedera nodes.
 * @returns {Object} returns a Hedera Transaction.
 */
function cryptoTransfer(self, sender, recipientList, memo, fee) {
    if (self.operator === undefined) {
        // operator (e.g. the current account that's paying the service fee to Hedera nodes)
        log(
            'please set the operator who will pay for this transaction before calling getAccountBalance'
        )
        return
    }
    log(`Recipient List ${recipientList}`)
    log('sender', sender)
    // log("recipient", amount)
    // log("amount", amount)
    log('recipientList', recipientList)
    log('fee', fee)
    // let acctAmtSender = new AccountAmount()
    // acctAmtSender.setAccountid(i.accountIDFromString(sender))
    // acctAmtSender.setAmount(-amount)
    // let acctAmtRecipient = new AccountAmount()
    // acctAmtRecipient.setAccountid(i.accountIDFromString(recipient))
    // acctAmtRecipient.setAmount(amount)
    // let transferList = new TransferList()
    // transferList.setAccountamountsList([acctAmtRecipient, acctAmtSender])

    let transferList = setRecipientTransferLists(sender, recipientList)

    let cryptoTransferTransactionBody = new CryptoTransferTransactionBody()
    cryptoTransferTransactionBody.setTransfers(transferList)
    let txID = new TransactionID()
    txID.setAccountid(i.accountIDFromString(sender))
    txID.setTransactionvalidstart(i.getTimestamp())

    log(`The fee is ${fee}`)
    let txBody = new TransactionBody()
    txBody.setTransactionid(txID)
    txBody.setTransactionfee(fee)
    txBody.setTransactionvalidduration(i.getDuration())
    txBody.setGeneraterecord(true)
    txBody.setCryptotransfer(cryptoTransferTransactionBody)
    txBody.setNodeaccountid(self.nodeAccountID)
    txBody.setMemo(memo)

    // sign
    let txBodyBytes = txBody.serializeBinary()
    let privateKeyHex = self.operator.keypair.privateKey
    let publicKeyHex = self.operator.keypair.publicKey
    let sig = i.signWithKeyAndVerify(txBodyBytes, privateKeyHex, publicKeyHex)

    let sigList = new SignatureList()
    sigList.setSigsList([sig, sig])

    let tx = new Transaction()
    tx.setBody(txBody)
    // tx.setSigs(sigMain.getSignaturelist())
    tx.setSigs(sigList)
    log('tx body bytes')
    log(tx)
    log(forge.util.bytesToHex(tx.serializeBinary()))
    return tx
}

export default cryptoTransfer
