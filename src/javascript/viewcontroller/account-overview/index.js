import { HostRule } from '../../models'
import {
    dollarsToHbarsCurr,
    dollarsToTinyBarsUnit
} from '../../hedera/currency'
import debug from 'debug'

const log = debug('all:viewcontroller:account-view')

/**
 * A module that handles account-overview's view logic
 * @module AccountOverview
 */

/**
 *
 * hostRuleViewController gets and sets the host rule from @see HostRule
 * It manages what is shown in the UI of account-overview.
 * @param {string} hostname
 * @param {Document} document
 */
async function hostRuleViewController(hostname, document) {
    let hostRule = await new HostRule().init(hostname)
    let statusRule = await hostRule.getOrSetStatusRule()
    log('statusRule', statusRule)
    let limitMultiCurr = await hostRule.getCurrentLimitInMultiCurrency()

    // update view
    let thresholdDollarsElem = document.getElementById('localThresholdDollars')
    let thresholdBarsElem = document.getElementById('localThresholdBars')
    thresholdDollarsElem.value = limitMultiCurr.USDNum
    thresholdBarsElem.innerHTML = limitMultiCurr.hBars

    // when user changes the localThresholdDollars in the input field, update localThresholdBarsElem
    thresholdDollarsElem.oninput = function(e) {
        let value = e.target.value
        thresholdBarsElem.innerHTML = dollarsToHbarsCurr(value)
    }

    // once user leaves the localThresholdDollars input field, we save the value in tinyBars (which is an integer number)
    thresholdDollarsElem.onblur = async function() {
        let value = thresholdDollarsElem.value
        let tinyBarsNum = dollarsToTinyBarsUnit(value)
        await hostRule.setLimit(tinyBarsNum)
    }
}

export default hostRuleViewController
