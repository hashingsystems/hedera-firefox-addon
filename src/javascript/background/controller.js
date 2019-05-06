import {
    iconConfigured,
    iconInstalled,
    iconBlocked,
    iconActive
} from '../ui-utils'
import { StateManager, AccountManager } from '../models'
import k from '../models/constants'
import i from '../hedera/internal'
import { setLocalStorage } from '../models/db'
import { cookiesGet, tabsQuery } from '../chrome-promise'
import { HostRule } from '../models'
import debug from 'debug'
import featureFlags from '../features'

const log = debug('all:background:controller')

/**
 * check if we have a current user account
 * @returns {object | undefined}
 */
const manageUser = async () => {
    let am = await new AccountManager().init()
    let currentAccount = await am.getCurrentAccountObject()

    if (currentAccount === undefined) {
        let accountID = currentAccount
        let type = 'login'
        let msg = {
            type,
            accountID
        }
        return { currentAccount, msg }
    }

    if (currentAccount) {
        let accountID = currentAccount.accountID
        let type = 'login'
        let msg = {
            type,
            accountID
        }
        return { currentAccount, msg }
    }
    return undefined
}

/**
 * manage the smart contract information by saving into local storage
 * and switch the browser extension icon to green
 * @param {*} url
 * @param {*} response
 */
const manageSmartContract = async (url, response) => {
    const contractTag = response
    const prefix = 'hedera-contract-'
    const contractTagKey = prefix + url.origin + url.pathname
    await setLocalStorage({ [contractTagKey]: contractTag })
    log('GREEN') // indicate to user that he/she should open the extension popup
    iconActive()
}

const manageStateSmartContract = async (url, response) => {
    if (response !== undefined) {
        if (i.contractIdExistsAndIsValid(response.contractid)) {
            log('contract scenario with hedera-contract object', response)

            // Community Testing V2 feature flag
            // hedera-contract will only be handled for hash-hash.info
            if (featureFlags.communityTestingV2) {
                let handleSmartContract
                if (ENV_NAME === 'development') {
                    handleSmartContract =
                        url.origin === 'https://hash-hash.info' ||
                        url.origin === 'http://localhost:8080'
                } else {
                    handleSmartContract =
                        url.origin === 'https://hash-hash.info'
                }

                if (handleSmartContract) {
                    await manageSmartContract(url, response)
                }
            } else {
                // hedera-contract is handled for any website
                await manageSmartContract(url, response)
            }
            return true
        }
    }
    return false
}

const manageStateMicropayment = async (currTab, url, response) => {
    let sm = await new StateManager().init(url, response)
    let state = sm.getState()
    // log(enumKeyByValue(k.ICON_STATE, state.icon), typeof state.icon)
    if (state.icon === k.ICON_STATE.RED) {
        iconBlocked()
        log('RED', state)
        if (state.msg !== null) chrome.tabs.sendMessage(currTab.id, state.msg)
    } else if (state.icon === k.ICON_STATE.BLACK) {
        iconConfigured()
        log('BLACK', state)
        if (state.msg !== null) chrome.tabs.sendMessage(currTab.id, state.msg)
    } else if (state.icon === k.ICON_STATE.GREEN) {
        iconActive()
        log('GREEN', state)
        if (state.msg !== null) chrome.tabs.sendMessage(currTab.id, state.msg)
    } else {
        iconInstalled()
        log('GREY', state)
        if (state.msg !== null) chrome.tabs.sendMessage(currTab.id, state.msg)
    }
}

const manageState = async (currTab, url, response) => {
    // contract scenario
    const isFound = await manageStateSmartContract(url, response)
    if (isFound) return // skips micropayment handling if hedera-contract is found

    // micropayment scenario is handled by StateManager
    await manageStateMicropayment(currTab, url, response)
}

const manageRuntimeError = response => {
    let lastError = chrome.runtime.lastError
    if (lastError) {
        log(lastError.message)
        if (response === undefined) {
            iconInstalled()
            // true, there is an error
            return true
        }
    }
    // no error
    return false
}

/**
 * Handles undefined tab error
 */
const manageTabError = async () => {
    let active = true
    let lastFocusedWindow = true
    let q = { active, lastFocusedWindow }
    let tabs = await tabsQuery(q)
    let currTab = tabs[0]
    if (currTab === undefined) {
        // icon grey, ie not active
        iconInstalled()
        return undefined
    }
    return currTab
}

const manageHostRule = async url => {
    if (ignoreNonHttp(url)) return
    log(url.origin)
    let hostRule = await new HostRule().init(url.origin)
    let statusRule = await hostRule.getOrSetStatusRule()
    log(statusRule)
}

/**
 * Get the customerID from the website cookie for later use
 * @param {URL} url
 */
const manageUserCookies = async url => {
    if (ignoreNonHttp(url)) return

    let cookie
    try {
        cookie = await cookiesGet(url.origin, 'micropaymentID')
    } catch (e) {
        return
    }

    if (cookie !== undefined && cookie !== null) {
        let customerID = cookie.value
        await setLocalStorage({
            customerID
        })
    }
}

const ignoreNonHttp = url => {
    return url.protocol !== 'http:' && url.protocol !== 'https:'
}

export {
    manageUser,
    manageState,
    manageRuntimeError,
    manageTabError,
    manageHostRule,
    manageUserCookies
}
