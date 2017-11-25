/**
 * Component level state shared for @human
 * @example
 * import share from '@humans/share'
 * // Do not use import { Share } from '@humans/share'.
 * // Use 'static function: share' instead of 'constructor function'.
 *
 * share.getLoading()
 */
export default class Share {
  /**
   * constructor
   */
  constructor () {
    /**
     * @protected
     * @type {Object}
     * @property {Object} state.loading - e.g. { name: 'mn-card' }
     */
    this.state = {
      loading: undefined
    }
  }

  /**
   * Get loading state
   * @return {VueObject} - e.g. { name: 'mn-card' }
   */
  getLoading () {
    return this.state.loading
  }

  /**
   * Set loading state
   * @param {VueObject} vueElement - e.g. { name: 'mn-card' }
   */
  setLoading (vueElement) {
    this.state.loading = vueElement
    return this.state.loading
  }
}
