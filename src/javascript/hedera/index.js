import { CryptoServiceClient } from '../../pbweb/CryptoService_grpc_web_pb'
import { FileServiceClient } from '../../pbweb/FileService_grpc_web_pb'
import { ResponseType } from '../../pbweb/QueryHeader_pb'

import i from './internal'
import getAccountBalance from './getaccountbalance'
import cryptoTransfer from './cryptotransfer'
import getTransactionReceipts from './gettransactionreceipts'
import fileGetContents from './filegetcontents'
import contractTag from './tags/contracttagvalidation'
import micropaymentTag from './tags/micropaymenttagvalidation'
import contractCall from './contractcall'
import cryptoGetInfo from './cryptogetinfo'
/**
 * @module Hedera
 */

/**
 * @const {Object} rt a Hedera ResponseType object
 */
const rt = ResponseType

/**
 * @class Hedera
 * Hedera is a simple ES6 class that manages transactions and queries with Hedera public ledger.
 */
class Hedera {
    /**
     * @constructs
     * @param {*} build is a builder function
     */
    constructor(build) {
        this.clientCrypto = build.clientCrypto
        this.clientFile = build.clientFile
        this.nodeAccountID = build.nodeAccountID
        this.operator = build.operator
    }

    /**
     * contract checks whether the HTML document of a website contains a hedera-contract tag.
     * It returns the assembled tag json if it exists, or returns null if it does not exist, or false if the tag is invalid
     * @param {document} document a HTML document object that contains a hedera-contract tag.
     * @returns {Object} an object OR null OR false
     */
    static contract(document, currentExtensionId) {
        return contractTag.validate(document, currentExtensionId)
    }
    /**
     *
     * micropayment checks whether the HTML document of a website contains a hedera-micropayment tag.
     * It returns the assembled tag json if it exists, or returns null if it does not exist, or false if the tag is invalid
     * @param {Object} document a HTML document object that contains a hedera-micropayment tag.
     * @param {string} currentExtensionId - derived from chrome.runtime.id as a string
     * @returns {Object} an object OR null OR false
     */
    static micropayment(document, currentExtensionId) {
        return micropaymentTag.validate(document, currentExtensionId)
    }

    /**
     *
     * @example
     * // returns hedera
     * let hedera = Hedera.Client(address, nodeAccount)
     *  @returns {Object} returns a hedera object to be used withOperator/connect
     */
    static get Client() {
        class Client {
            /**
             *
             * @param {string} address address is a string in the form of "localhost:50211" or "testnet.hedera.com:8000".
             * @param {string} nodeAccount nodeAccount is a string delimited by dots, in the format "shardID.realmID.accountID".
             */
            constructor(address, nodeAccount) {
                this.clientCrypto = new CryptoServiceClient(address, null, null)
                this.clientFile = new FileServiceClient(address, null, null)
                this.nodeAccountID = i.accountIDFromString(nodeAccount)
            }

            /**
             *
             * withOperator allows us to designate the account that will be paying for the current query or transaction calls.
             * we can call withOperator anytime to designate a new paying account and the following gRPC calls will be paid by said account.
             * @param {Object} keypair keypair is an ed25519 keypair object, which contains a publicKey and a privateKey in hex string.
             * @param {*} account is a string delimited by dots, e.g. "0.0.1234", in the format "shardID.realmID.accountID"
             */
            withOperator(keypair, account) {
                this.operator = {}
                this.operator.keypair = keypair
                this.operator.account = i.accountIDFromString(account)
                return this
            }
            /**
             * connect makes the connection to Hedera node
             */
            connect() {
                return new Hedera(this)
            }
        }
        return Client
    }

    /**
     *
     * getAccountBalance is a crypto query that asks for an account's balance
     * @param {string} account is the account whom we are querying the account balance from. It is a string delimited by dot, of the format 'shardNum.realmNum.accountNum'.
     * @param {string} memo is an optional string memo.
     * @param {Object} resType is a Hedera QueryHeader ResponseType.
     */
    getAccountBalance(account, memo = '', resType = rt.ANSWER_ONLY) {
        this._type = 'query'
        this._data = getAccountBalance(this, account, memo, resType)
        return this
    }

    /**
     *
     * getTransactionReceipts is a crypto query that asks for a receipt for a particular transaction object with a TransactionID.
     * @param {Object} txID is a Hedera TransactionID object whom we are querying the transaction receipt from.
     */
    getTransactionReceipts(txID) {
        this._type = 'query'
        this._data = getTransactionReceipts(this, txID)
        return this
    }

    /**
     *
     * cryptoTransfer is a crypto transaction that transfers hbars from sender to recipient.
     * @param {string} senderAccount refers to the paying account. It is a string delimited by dot, of the format 'shardNum.realmNum.accountNum'.
     * @param {string} recipientAccount refers to the account receiving the payment. It is a string delimited by dot, of the format 'shardNum.realmNum.accountNum'.
     * @param {number} amount is a number, designating the amount that is transferred from sender to recipient.
     * @param {object} recipientList refers to the list of accounts receiving the payment. It is a list in that contains ie: [{tinybars: amount, to:recipient}].
     * @param {string=} memo is an optional memo string.
     * @param {number} fee is service fee to Hedera nodes.
     */
    cryptoTransfer(
        senderAccount,
        recipientAccount,
        amount,
        recipientList,
        memo,
        fee
    ) {
        this._type = 'transaction'
        let tx = cryptoTransfer(
            this,
            senderAccount,
            recipientAccount,
            amount,
            recipientList,
            memo,
            fee
        )
        this._data = tx
        this._id = tx.getBody().getTransactionid()
        return this
    }

    cryptoGetInfo(account, memo, resType) {
        this._type = 'query'
        let q = cryptoGetInfo(this, account, memo, resType)
        this._data = q
        return this
    }
    /**
     *
     * fileGetContents is a file query that gets the contents in a file.
     * @param {string} file refers to the file. It is a string delimited by dot, of the format 'shardNum.realmNum.fileNum'.
     */
    fileGetContents(file) {
        this._type = 'query'
        this._data = fileGetContents(this, file)
        return this
    }

    contractCall(contract, gas, amount, sender, functionParams, memo, fee) {
        this._type = 'transaction'
        let tx = contractCall(
            this,
            contract,
            gas,
            amount,
            sender,
            functionParams,
            memo,
            fee
        )
        this._data = tx
        this._id = tx.getBody().getTransactionid()
        return this
    }

    /**
     * prepare prepares the transactionBody by serializing the query or transaction types into binary
     */
    prepare() {
        // transaction object also includes an id attribute that is the transaction id
        if (this._type === 'transaction') {
            return {
                type: this._type,
                data: this._data.serializeBinary(),
                id: this._id,
                idString: this.transactionIdAsString()
            }
        }
        // query object does not need transaction id
        return {
            type: this._type,
            data: this._data.serializeBinary()
        }
    }

    /**
     * transactionIdAsString converts Hedera TransactionID object into string
     */
    transactionIdAsString() {
        let id = this._id
        let txValidStart = id.getTransactionvalidstart()
        let accountString = i.accountStringFromAccountID(id.getAccountid())
        let transactionId = `${accountString}@${txValidStart.getSeconds()}.${txValidStart.getNanos()}`
        return transactionId
    }
}

export default Hedera
