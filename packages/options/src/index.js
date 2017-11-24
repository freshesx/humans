/**
 * Global options share in @human component
 * @example
 * import options from '@freshes/options'
 * // Do not use import { Options } from '@freshes/options'.
 * // Use 'static function: options' instead of 'constructor function'.
 *
 * options.get('loading')
 */
export class Options {
  /**
   * constructor
   */
  constructor () {
    /**
     * @protected
     * @type {Object}
     * @property {Object} options.loading - e.g. { name: 'mn-card' }
     */
    this.options = {
      loading: undefined
    }
  }

  /**
   * Get value by name from options
   * @param  {String} name
   * @return {*}
   */
  get (name) {
    return this.options[name]
  }

  /**
   * Set value by name to options
   * @param {String} name
   * @param {*} value
   * @return {*} Updated value
   */
  set (name, value) {
    const old = this.get(name)
    this.options[name] = value
    console.log(`The option '${name}' has changed.`, value, old)
    return this.get(name)
  }
}

/**
 * Default function
 * @example
 * import options from '@freshes/options'
 * import appLoadingIcon from './appLoadingIcon'
 *
 * // set
 * options.set('loading', appLoadingIcon)
 *
 * // get
 * options.get('loading')
 */
export default new Options()
