import vue from '../index'

export default function (name) {
  let classes = {}
  const defaultClasses = vue.options.cssPrefix
  classes[`${defaultClasses}${name}`] = true
  return Object.assign({}, classes)
}
