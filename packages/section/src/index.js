import section from './section.vue'
import sectionNote from './sectionNote.vue'
import sectionBtn from './sectionBtn.vue'
import './index.scss'

const suite = {
  [section.name]: section,
  [sectionNote.name]: sectionNote,
  [sectionBtn.name]: sectionBtn
}

export {
  suite as section
}
