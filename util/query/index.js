import { toNumber, toLower } from 'lodash'

export default class Query {
  parse (importQueries) {
    let outputQueries = {}

    for (var name in importQueries) {
      if (importQueries.hasOwnProperty(name)) {
        outputQueries[name] = this.parseQuery(name, importQueries[name])
      }
    }

    return outputQueries
  }

  parseQuery (name, query) {
    if (this.parseOther) {
      return this.parseOther(query, name)
    }

    if (['', 'undefined'].includes(toLower(query))) {
      return this.parseUndefined(query)
    }

    if (toLower(query) === 'null') {
      return this.parseNull(query)
    }

    if (!Number.isNaN(query)) {
      return this.parseNumber(query)
    }

    if (typeof query === 'object' && query.constructor === Object) {
      return this.parseObject(query)
    }

    if (typeof query === 'object' && query.constructor === Array) {
      return this.parseObject(query)
    }
  }

  parseNumber (query) {
    return toNumber(query)
  }

  parseUndefined (query) {
    return undefined
  }
  parseNull (query) {
    return null
  }

  handle (object) {
    let storage = {}

    for (var name in object) {
      if (object.hasOwnProperty(name)) {
        let prop = object[name]
        storage[name] = typeof prop === 'string' || typeof prop === 'number'
          ? prop
          : JSON.stringify(prop)
      }
    }

    return storage
  }
}
