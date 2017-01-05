import defaultIcons from './icons.json'

let icons = null

export default function (customIcons) {
  if (!icons) {
    icons = { ...defaultIcons, ...customIcons }
  }

  return icons
}
