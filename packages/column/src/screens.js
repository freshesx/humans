import { share } from '@humans/share'

const defaultScreens = [
  { name: 'mobile', min: 0 },
  { name: 'tablet', min: 768 },
  { name: 'desktop', min: 992 },
  { name: 'widescreen', min: 1200 }
]

export default share.getScreens() || defaultScreens
