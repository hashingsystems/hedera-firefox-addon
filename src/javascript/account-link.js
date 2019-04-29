import { getAccountDetailsFromMobile, getLocalIPs } from './network'
import { decryptAccountDetails } from './key-management'
import KeyPairing from '../javascript/models/key-pairing'
import { alertNotification } from './ui-utils'
import { buttonState } from './ui-utils/buttons'
import { getAccountBalanceController } from './viewcontroller/grpc'
import validate from './validate'
import debug from 'debug'

const log = debug('all:account-link')

document.addEventListener('DOMContentLoaded', async function() {
    getLocalIPs(async function(ips) {
        log('Local IP addresses:\n ' + ips.join('\n '))
        // validated ip address
        let result = await validate.listOfIPs(ips)
        if (result === false) {
            let alertObj = {
                alertString: 'We currently only support IPv4'
            }
            await alertNotification(alertObj)
        }
    })

    document.forms['pinForm'].onsubmit = async function(event) {
        event.preventDefault()
        let pinInput = document.forms['pinForm']['pinInput'].value
        let button = document.getElementById('getAccountBalanceButton')

        // validate pin
        try {
            buttonState(button, 'loading')
            pinInput = validate.checkPin(pinInput)
        } catch (e) {
            let alertObj = {
                alertString: e.message,
                elem: button,
                cb: buttonState
            }
            await alertNotification(alertObj)
            return
        }

        // call the mobile device's web server
        let accountDetails = {}
        try {
            buttonState(button, 'loading')
            let result = await getAccountDetailsFromMobile(pinInput)
            if (result.success) {
                let temporaryKey = await new KeyPairing().getTemporaryKey()
                accountDetails = await decryptAccountDetails(
                    result.data,
                    temporaryKey
                )
            }
            log('mobile-to-extension account transfer succeeded')
        } catch (e) {
            log('mobile-to-extension account transfer error', e)
            if (e instanceof SyntaxError) {
                e.message = 'Your activation code has expired'
            }
            let alertObj = {
                alertString: e.message,
                elem: button,
                cb: buttonState
            }
            await alertNotification(alertObj)
            return
        }

        // grpc call via socketio to get account balance
        await getAccountBalanceController(accountDetails, true)
    }
})
