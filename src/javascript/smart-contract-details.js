import { getLocalStorage } from './models/db'
import { tabsQuery } from './chrome-promise'
import { buttonState } from './ui-utils/buttons'
import getContractCallController from './viewcontroller/grpc/contractcall'
import { tinyBarsToHBarsCurr, tinyBarsToDollarsUnit } from './hedera/currency'
import debug from 'debug'

const log = debug('all:smart-contract-details')

document.addEventListener('DOMContentLoaded', async () => {
    // which URL is the user on
    const q = { active: true, currentWindow: true }
    let tabs = await tabsQuery(q)
    let currTab = tabs[0]
    let url = new URL(currTab.url)

    log(url.origin + url.pathname)

    let prefix = 'hedera-contract-'
    let urlString = url.origin + url.pathname
    let contractTagKey = prefix + urlString
    let contractTag = await getLocalStorage(contractTagKey)
    log(contractTag)

    if (window.location.protocol !== 'file:') {
        if (contractTag === undefined || contractTag === null) {
            window.location.href = 'smart-contract.html'
            return
        }
    }

    // locate our dom elements (UI elements)
    let transactionCostEl = document.getElementById('transaction-cost')
    let propertyLocationEl = document.getElementById('property-location')
    let acceptButtonEl = document.getElementById('accept')
    // what about the deny button? What if the user clicks on "deny"? TODO?

    // assign the params
    if (contractTag !== undefined) {
        let params = contractTag.params
        if (transactionCostEl !== undefined) {
            let amountInUsdObj = tinyBarsToDollarsUnit(200000)
            let amountInHbar = tinyBarsToHBarsCurr(200000)
            document.getElementById('transaction-cost').value =
                `$ ${amountInUsdObj.toNumber()}` + ' / ' + amountInHbar
        }
        let x = params[2]
        let y = params[3]
        let propertyLocation = 'x: ' + x + ', y: ' + y
        if (propertyLocationEl !== undefined) {
            document.getElementById(
                'property-location'
            ).value = propertyLocation
        }

        let starPrice = params[1]
        if (starPrice !== undefined) {
            let purchasedPriceInUsdObj = tinyBarsToDollarsUnit(
                parseInt(starPrice) + 200000
            )
            let purchasedPriceInUsd = `$${purchasedPriceInUsdObj.toNumber()}`
            let purchasedPriceInHbar = tinyBarsToHBarsCurr(
                parseInt(starPrice) + 200000
            )
            document.getElementById('purchased-price').value =
                purchasedPriceInUsd + ' / ' + purchasedPriceInHbar
        }

        if (acceptButtonEl !== undefined) {
            acceptButtonEl.onclick = async function(e) {
                e.preventDefault()
                buttonState(acceptButtonEl, 'loading')
                await getContractCallController(contractTag, urlString)
            }
        }
    }
})
