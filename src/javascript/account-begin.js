import setDevEnvironment from './environment'

document.addEventListener('DOMContentLoaded', async function() {
    await setDevEnvironment('all:account-begin')
    document.getElementById('pair').onclick = function(e) {
        e.preventDefault()
        window.location.href = 'account-link.html'
    }
})
