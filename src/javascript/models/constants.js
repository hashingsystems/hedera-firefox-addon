/**
 * @module Models 
 */

/**
 * An enumaration of various user's limit preference.
 * @enum {Object}
 */
const PREF = Object.freeze({
    YES_ONCE: Symbol('yes-once'),
    YES_ALWAYS: Symbol('yes-always'),
    NO_ONCE: Symbol('no-once'),
    NO_ALWAYS: Symbol('no-always'),
    NOT_SET: Symbol('not-set')
})

/**
 * An enumaration of various icon coloured states.
 * @enum {Object}
 */
const ICON_STATE = Object.freeze({
    GREY: 0,
    BLACK: 1,
    GREEN: 2,
    RED: 3
})

/**
 * @const {number} DEFAULT_LIMIT
 */
const DEFAULT_LIMIT = 0

export default {
    PREF,
    DEFAULT_LIMIT,
    ICON_STATE
}