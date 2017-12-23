export default class Validator {
  constructor (validator, type = 'vuelidate') {
    this.validator = validator
    this.type = type
  }

  touch () {
    return this.validator.$touch()
  }

  invalid () {
    return this.validator.$invalid
  }
}
