import HederaTag from '../hedera-tags'
import { alertBanner, setButtonGroupOptions } from '../ui-utils'
import { tinyBarsToDollarsUnit } from '../hedera/currency'
import { cryptoTransferController } from '../viewcontroller/grpc'
import debug from 'debug'

const log = debug('all:content')
const name = 'hedera-channel'
const port = chrome.runtime.connect({
    name
})

async function contentListener(msg, sender, sendResponse) {
    log(msg)
    // check that websites contain hedera-tag
    let micropaymentTag = HederaTag.micropayment(document, chrome.runtime.id)
    let contractTag = HederaTag.contract(document, chrome.runtime.id)

    if (msg.type === 'login') {
        // if there is a micropayment tag on this web page and
        // the user is not already logged in (i.e. accountID being undefined),
        // we will trigger the alertBanner
        if (micropaymentTag !== null && msg.accountID === undefined) {
            msg.redirect = micropaymentTag.redirect.noAccount
            let alertString =
                "Hang tight! We're redirecting you to the steps on setting up your Hedera Browser Extension."

            await alertBanner(alertString, false, false)
            setTimeout(() => {
                // msg.redirect defaults to /no-account
                window.location.href = msg.redirect
            }, 6000)
        }
    }

    // If the received message has the expected format...
    if (msg.type === 'hedera-tag') {
        log(msg.type)
        log('contractTag', contractTag)
        log('micropaymentTag', micropaymentTag)
        // Contract tag takes precedence when hedera-tag is detected, micropayment tag will not be
        // executed because sendResponse for micropayment will no longer be triggered
        if (contractTag !== null) {
            // contractTag can be 3 possible values - a valid object OR false OR null
            if (contractTag === false) {
                // false, because the hedera-micropayment tag is invalid
                let alertString = `Invalid contract tag provided .`
                await alertBanner(alertString, false, false)
            } else {
                // valid object
                log('send contractTag', contractTag)
                sendResponse(contractTag)
            }
        }

        if (micropaymentTag !== null) {
            // micropaymentTag can be 3 possible values - a valid object OR false OR null
            if (micropaymentTag === false) {
                // false, because the hedera-micropayment tag is invalid
                let alertString = `Invalid micropayment tag provided by publisher. Please contact publisher directly.`
                await alertBanner(alertString, false, false)
            } else {
                // valid object
                log('send micropaymentTag', micropaymentTag)
                sendResponse(micropaymentTag)
            }
        }
    }

    if (msg.type === 'redirect') {
        log(msg.type, msg.redirect)
        setTimeout(() => {
            // defaults to /non-paying-account ("paywall")
            window.location.href = msg.redirect
        }, 4000)
    }

    if (msg.type === 'redirect-homepage') {
        log(msg.type, msg.redirect)
        // defaults to /
        setTimeout(() => {
            window.location.href = msg.redirect
        }, 4000)
    }

    // If the message is raise-threshold
    if (msg.type === 'raise-threshold') {
        log(msg.type)
        // handle conversion of tinyBars into currency string for rendering
        log(typeof tinyBarsToDollarsUnit(msg.currThr))
        log(msg.currThr, typeof msg.currThr)
        log(msg.requestedPayment, typeof msg.requestedPayment)
        let requestedPaymentUSD = `$${tinyBarsToDollarsUnit(
            msg.requestedPayment
        )}`

        let alertString = `The Daily Timestamp has content that costs up to 
        <span class="bold-text">${requestedPaymentUSD}</span>. Would you
        like to approve browsing up to this amount?`
        let document = await alertBanner(alertString)
        // approveOnly true results in one single button
        // approveOnly false results in 4 buttons
        setButtonGroupOptions(document, port, micropaymentTag, msg, true)
    }

    // if the message is crypto-transfer
    if (msg.type === 'crypto-transfer') {
        log(msg.type)
        await cryptoTransferController(msg.response, port, msg.url)
    }
    return true
}

chrome.runtime.onMessage.addListener(contentListener)
