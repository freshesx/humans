import fs from 'fs'
import path from 'path'

export default function dependencies (packageName) {
  const file = path.join(process.cwd(), `./packages/${packageName}/package.json`)
  const pkg = JSON.parse(fs.readFileSync(file))

  if (!pkg.dependencies) return []
  return Object.keys(pkg.dependencies)
}
