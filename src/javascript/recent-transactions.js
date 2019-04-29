import { Transactions, AccountManager } from './models'
import List from 'list.js'
import debug from 'debug'

const log = debug('all:recent-transactions')

document.addEventListener('DOMContentLoaded', async function() {
    // current account
    let am = await new AccountManager().init()
    let a = await am.getCurrentAccountObject()

    // retrieve micropayment transactions for this account
    let txs = await new Transactions().init(a.accountID)
    log(txs)
    let transactionList = await txs.retrieve()
    log('Retrieved transactions', transactionList)
    let options = {
        valueNames: ['host', 'amount', 'created'],
        item:
            '<li><span class="host"></span>' +
            '<span class="amount"></span>' +
            '<span class="created"></span></li>'
    }
    // render into UI
    new List('recent-transactions', options, transactionList)
})
