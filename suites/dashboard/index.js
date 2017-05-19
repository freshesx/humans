import Suites from '../../utils/Suites'
import dashboard from './dashboard'
import dashboardMenu from './dashboardMenu'
import dashboardSidebar from './dashboardSidebar'
import dashboardBody from './dashboardBody'
import dashboardBrand from './dashboardBrand'

export default new Suites([
  dashboard,
  dashboardMenu,
  dashboardSidebar,
  dashboardBody,
  dashboardBrand
])
