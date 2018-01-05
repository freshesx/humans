import fs from 'fs'
import path from 'path'

const folders = fs.readdirSync(path.join(process.cwd(), './packages'))
const excludes = [ '.DS_Store', '.babelrc' ]

// splice excludes name
excludes.forEach(item => {
  const index = folders.indexOf(item)
  if (index > -1) folders.splice(index, 1)
})

// Check the folder name, and package.json valid.
folders.forEach(folder => {
  // Only allow a-z and -, if it has camelCase, throw error
  if (!/^[a-z-]+$/.test(folder)) {
    throw new Error(`The folder name is wrong. Only allow [a-z] and -: ${folder}`)
  }

  // Check the folder name is equal package name
  const pkg = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), 'packages', folder, './package.json')
    )
  )
  const pkgName = pkg.name.replace('@humans/', '')

  if (folder !== pkgName) {
    throw new Error(`The package.json name happend wrong: ${folder} and ${pkgName}.`)
  }
})

export default function packages (prefix) {
  if (!prefix) return folders
  return folders.map(item => prefix + item)
}
