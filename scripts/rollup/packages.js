import fs from 'fs'
import path from 'path'

const folders = fs.readdirSync(path.join(process.cwd(), './packages'))
const excludes = [ '.DS_Store' ]

excludes.forEach(item => {
  const index = folders.indexOf(item)
  folders.splice(index, 1)
})

export default function packages (prefix) {
  if (!prefix) return folders
  return folders.map(item => prefix + item)
}
