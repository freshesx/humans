import { loadingIcon } from '@humans/loading-icon'
import { icon } from '@humans/icon'
import { scroller } from '@humans/scroller'
import { btn } from '@humans/btn'
import { link } from '@humans/link'
import { card } from '@humans/card'
import { container } from '@humans/container'
import { section } from '@humans/section'
import { column } from '@humans/column'
import { letter } from '@humans/letter'
import { page } from '@humans/page'
import { form } from '@humans/form'
import { label } from '@humans/label'
import { helper } from '@humans/helper'
import { image } from '@humans/image'
import './index.scss'

const suites = Object.assign(
  {},
  loadingIcon,
  icon,
  scroller,
  btn,
  link,
  card,
  container,
  section,
  column,
  letter,
  page,
  form,
  label,
  helper,
  image
)

export { suites as core }
