import {
    limitViewController,
    accountViewController
} from './viewcontroller/account-settings/index'

// account-settings page will show the current default limit
document.addEventListener('DOMContentLoaded', async function() {
    // update elements with id 'account-id' and 'pub;
    await accountViewController(document)

    // update elements with id 'thresholdDollars' and 'thresholdBars'
    // await limitViewController(document)
})
