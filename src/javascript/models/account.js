import { tinyBarsToDollarsUnit, tinyBarsToHBarsCurr } from '../hedera/currency'
import AbstractLocalStorage from './abstract-local-storage'
import NetworkManager from './network-manager'
import debug from 'debug'

const log = debug('all:models')

/**
 * @module Account
 */

/**
 * Account is a simple class to manage user's account details easily backed by Local Storage.
 */
class Account extends AbstractLocalStorage {
    constructor() {
        super()
    }

    /**
     * Constructs a new Account
     * @param {string|Object} - acc is either an
     * accountID, a string, denoted as "0.0.1000" (shardNum.realmNum.accountNum); or
     * accountDetails, containing accountID, privateKey, publicKey, accountIndex, accountLabel.
     * @example
     * let a = await new Account().init(acc)
     */
    async init(acc) {
        if (this._validate(acc) === false) return undefined
        if (typeof acc === 'string') await this._isString(acc)
        if (typeof acc === 'object') await this._isObject(acc)
        // define a dynamic property name based on the current network and the accountID string
        Object.defineProperty(this, this.name, {
            value: this.details,
            writable: true
        })
        let details = await this.getDetails()
        if (details === undefined) {
            await this.setDetails(this.details)
        } else {
            this.details = details
            this.keypair = {
                privateKey: details.privateKey,
                publicKey: details.publicKey
            }
        }
        return this
    }

    /**
     *
     * setDetails sets the accountDetails of an account which contains accountID, privateKey, publicKey, accountIndex, accountLabel
     * @param {Object} details
     * @example
     * let a = await new Account().init('0.0.1000')
     * let details = await a.setDetails(config.accountDetails)
     */
    async setDetails(details) {
        if (details === undefined) return
        if (this.accountID !== details.accountID) {
            let e = new Error('Mismatched this.accountID and details accountID')
            throw e
        }
        let accountID = this.accountID
        this[accountID] = details
        let detailsString = JSON.stringify(details)
        await this.setItem({
            [accountID]: detailsString
        })
    }

    /**
     * getDetails returns the accountDetails of the requested accountID
     * @example
     * let a = await new Account().init('0.0.1000')
     * let details = await a.getDetails()
     */
    async getDetails() {
        // defensive coding
        if (this.accountID === undefined) return undefined
        // actual logic that matters
        let detailsString = await this.getItem(this.accountID)
        if (detailsString === undefined || detailsString === null) {
            return undefined
        }
        let details = JSON.parse(detailsString)
        return details
    }

    /**
     *
     * setBalance sets the account balance in terms of tinyBars
     * @param {number} balance
     * @example
     * let a = await new Account().init('0.0.1001')
     * await a.setBalance(415000)
     */
    async setBalance(balance) {
        this.details = await this.getDetails()
        log('1111111 setBalance', this.details)

        this.details.balance = balance
        log('2222222 setBalance', balance)
        await this.setDetails(this.details)
    }

    /**
     *
     * getBalance returns the balance of an account in different units of measure, ie, tinyBars, hBars, USD
     * @example
     * let a = await new Account().init('0.0.1000')
     * let all = await a.getBalance()
     * log('USD', all.USD)
     * log('HBars', all.hBars)
     */
    async getBalance() {
        this.details = await this.getDetails()
        if (this.details.balance !== undefined) {
            let balance = this.details.balance
            log('Balance', balance)

            if (balance < 0) {
                log('less than 0 tinybars, USD is ', undefined)
                return {
                    tinyBars: undefined,
                    hBars: undefined,
                    USD: undefined
                }
            }
            // less than 0.000000999 USD
            if (balance < 100) {
                let USD = tinyBarsToDollarsUnit(balance).toFixed(10)
                log('less than 0.000000999 USD, USD is ', USD)
                return {
                    tinyBars: balance,
                    hBars: tinyBarsToHBarsCurr(balance, 8),
                    USD: `$${USD}`
                }
            }
            // less than 0.0000999 USD
            if (balance < 83325) {
                let USD = tinyBarsToDollarsUnit(balance).toFixed(9)
                log('less than 0.0000999 USD, USD is ', USD)
                return {
                    tinyBars: balance,
                    hBars: tinyBarsToHBarsCurr(balance, 8),
                    USD: `$${USD}`
                }
            }
            // less than 0.00999 USD
            if (balance < 8333325) {
                let USD = tinyBarsToDollarsUnit(balance).toFixed(8)
                log('less than 0.00999 USD, USD is ', USD)
                return {
                    tinyBars: balance,
                    hBars: tinyBarsToHBarsCurr(balance, 8),
                    USD: `$${USD}`
                }
            }
            // less than 0.9999 USD
            if (balance < 833333325) {
                let USD = tinyBarsToDollarsUnit(balance).toFixed(6)
                log('less than 0.9999 USDs, USD is ', USD)
                return {
                    tinyBars: balance,
                    hBars: tinyBarsToHBarsCurr(balance, 8),
                    USD: `$${USD}`
                }
            }
            // less than 999.9999 USD
            if (balance < 833333333325) {
                let USD = tinyBarsToDollarsUnit(balance).toFixed(4)
                log('less than 999.9999 USD, USD is', USD)
                return {
                    tinyBars: balance,
                    hBars: tinyBarsToHBarsCurr(balance, 8),
                    USD: `$${USD}`
                }
            }
            // less than 99 999.9999 USD
            if (balance < 83333333333325) {
                let USD = tinyBarsToDollarsUnit(balance).toFixed(3)
                log('less than 99 999.9999 USD, USD is', USD)
                return {
                    tinyBars: balance,
                    hBars: tinyBarsToHBarsCurr(balance, 8),
                    USD: `$${USD}`
                }
            }

            let USD = tinyBarsToDollarsUnit(balance).toFixed(2)
            log('more than 99 999.9999USD', USD)
            return {
                tinyBars: balance,
                hBars: tinyBarsToHBarsCurr(balance, 8),
                USD: `$${USD}`
            }
            // return {
            //     tinyBars: balance,
            //     hBars: tinyBarsToHBarsCurr(balance, 8),
            //     USD: tinyBarsToDollarsUnit(balance)
            // }
        }
        log('0000000 getBalance', this.details)
        log('111111 getBalance', this.details.balance)
        return {
            tinyBars: 0,
            hBars: 0,
            USD: 0
        }
    }

    /**
     *
     * @typicalname _
     * @param {string|Object} acc
     * acc is either
     * accountID, a string, denoted as "0.0.1000" (shardNum.realmNum.accountNum); or
     * accountDetails, containing accountID, privateKey, publicKey, accountIndex, accountLabel.
     */
    async _isString(acc) {
        let currentNetwork = await this._currentNetwork()
        this.accountID = acc
        this.details = {
            accountID: acc,
            privateKey: undefined,
            publicKey: undefined,
            accountIndex: undefined,
            accountLabel: undefined,
            balance: undefined
        }
        this.name = `${currentNetwork},${this.accountID}`
    }

    /**
     *
     * @typicalname _
     * @param {string|Object} acc
     * acc is either
     * accountID, a string, denoted as "0.0.1000" (shardNum.realmNum.accountNum); or
     * accountDetails, containing accountID, privateKey, publicKey, accountIndex, accountLabel.
     */
    async _isObject(acc) {
        let currentNetwork = await this._currentNetwork()
        this.accountID = acc.accountID
        this.details = {
            accountID: acc.accountID,
            privateKey: acc.privateKey,
            publicKey: acc.publicKey,
            accountIndex: acc.accountIndex,
            accountLabel: acc.accountLabel,
            balance: acc.balance
        }
        this.name = `${currentNetwork},${this.accountID}`
    }

    /**
     *
     *
     * @typicalname _
     */
    async _currentNetwork() {
        let nm = await new NetworkManager().init()
        let currentNetwork = await nm.getCurrentNetwork()
        return currentNetwork
    }

    /**
     *
     * @typicalname _
     * @param {string} accountIDString
     */
    _validateAccountIDStr(accountIDString) {
        let accountIDArray = accountIDString.split('.').map(Number)
        if (accountIDArray.length !== 3) return false
        return true
    }

    /**
     *
     * @typicalname _
     * @param {string|Object} acc
     * acc is either
     * accountID, a string, denoted as "0.0.1000" (shardNum.realmNum.accountNum); or
     * accountDetails, containing accountID, privateKey, publicKey, accountIndex, accountLabel.
     */
    _validate(acc) {
        if (typeof acc === 'string') {
            return this._validateAccountIDStr(acc)
        }
        if (typeof acc === 'object') {
            let accountIDStr = acc.accountID
            let accountIDStrValidation = this._validateAccountIDStr(
                accountIDStr
            )
            if (accountIDStrValidation === false) return false
            return true
        }
        return false
    }
}

export default Account
