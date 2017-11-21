const storeOptions = {
}

/**
 * Save and merge human options
 * @param  {Object} [options]
 * @return {Object} options
 */
export default function options (options) {
  // return some
  if (options === undefined) {
    return storeOptions
  }

  // merge some
  Object.assign(storeOptions, options)
  console.log('The storeOptions has changed.', storeOptions)
  return storeOptions
}
