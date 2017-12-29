import fs from 'fs'
import path from 'path'

const folders = fs.readdirSync(path.join(process.cwd(), './packages'))
const excludes = [ '.DS_Store', '.babelrc' ]

// splice excludes name
excludes.forEach(item => {
  const index = folders.indexOf(item)
  if (index > -1) folders.splice(index, 1)
})

// @todo if it has camelCase, throw error

export default function packages (prefix) {
  if (!prefix) return folders
  return folders.map(item => prefix + item)
}
