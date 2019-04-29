import debug from 'debug'

const log = debug('all:ui-utils:buttons')

/**
 *
 * @module UI-Utils
 */
/**
 * buttonState allows us to easily toggle between button 'normal', 'loading' and 'hide'.
 * @param {HTMLElement} button
 * @param {string=} state
 * @param {number=} timing
 * @example
 * buttonState(button, 'loading')
 */
const buttonState = (button, state = 'normal', timing = 3000) => {
    let img = button.getElementsByTagName('img')[0]
    if (state === 'loading') {
        log('loading')
        button.style.visibility = 'visible'
        button.disabled = true
        button.style.pointerEvents = 'none'
        img.src = 'images/loading.gif'
    } else if (state === 'hide') {
        button.style.visibility = 'hidden'
    } else {
        log('back to normal')
        button.style.visibility = 'visible'
        log(img.dataset.src)
        log(img)
        button.disabled = false
        button.style.pointerEvents = 'visible'
        img.src = img.dataset.src
    }
}

/**
 * Hide or show button dependning on whether socketIO payment server is available
 * @param {object} socket
 * @param {object} button
 */
const buttonSocketStatus = (socket, button) => {
    let id = setInterval(socketStatus, 2000, socket)
    function socketStatus(io) {
        if (socket.connected) {
            buttonState(button, 'normal')
            clearInterval(id)
        } else {
            buttonState(button, 'hide')
        }
    }
}

export { buttonState, buttonSocketStatus }
