import { getLocalStorage } from './models/db'
import { tabsQuery } from './chrome-promise'
import debug from 'debug'

const log = debug('all:smart-contract')

document.addEventListener('DOMContentLoaded', async () => {
    // which URL is the user on
    const q = { active: true, currentWindow: true }
    let tabs = await tabsQuery(q)
    let currTab = tabs[0]
    let url = new URL(currTab.url)

    log(url.origin + url.pathname)

    let prefix = 'hedera-contract-'
    let contractTagKey = prefix + url.origin + url.pathname
    let contractTag = await getLocalStorage(contractTagKey)
    log(contractTag)

    // The user is currently on a hedera-contract tag page
    if (contractTag !== undefined && contractTag !== null) {
        window.location.href = 'smart-contract-details.html'
    }

    // else {
    //     // The user is NOT on a hedera-contract tag page
    //     window.location.href = 'smart-contract.html'
    // }
})
