import { popupSetAndSegue } from './ui-utils'
import { Response } from '../pbweb/Response_pb'
import { getAccountBalanceController } from './viewcontroller/grpc'
import { AccountManager } from './models'
import hostRuleViewController from './viewcontroller/account-overview'
import { buttonState, buttonSocketStatus } from './ui-utils/buttons'
import setDevEnvironment from './hedera/environment'
import io from 'socket.io-client'

document.addEventListener('DOMContentLoaded', async function() {
    const log = await setDevEnvironment('all:account-overview', true)
    log(ADDRESS_BOOK)

    // get current account, redirect to account-begin.html if no current account
    let am = await new AccountManager().init()
    let currentAccount = await am.getCurrentAccountObject()
    if (currentAccount === undefined || currentAccount === null) {
        popupSetAndSegue('account-begin.html')
        return
    }
    log(currentAccount.accountID)

    // Update UI with balance from local storage
    let all = await currentAccount.getBalance()
    document.getElementById('currentBalanceDollars').innerHTML = all.USD
    document.getElementById('currentBalanceHBars').innerHTML = all.hBars

    // Get current url and update host rule
    let query = {
        currentWindow: true,
        active: true
    }
    chrome.tabs.query(query, async function(tabs) {
        let url = new URL(tabs[0].url)
        let local = url.origin
        if (local !== undefined) {
            await hostRuleViewController(local, document)
        }
    })

    // Call get account balance to
    // save latest balance in local storage and render to view
    let button = document.getElementById('getAccountBalanceButton')
    button.onclick = async function(e) {
        e.preventDefault()
        buttonState(button, 'loading')
        let am = await new AccountManager().init()
        let a = await am.getCurrentAccountObject()
        await getAccountBalanceController(a.details)
    }

    const socket = io.connect(PAYMENT_SERVER)
    buttonSocketStatus(socket, button)
})
