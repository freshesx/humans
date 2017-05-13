import Suites from '../../utils/Suites'
import dashboard from './dashboard'
import dashboardMenu from './dashboardMenu'
import dashboardNavbar from './dashboardNavbar'
import dashboardSidebar from './dashboardSidebar'
import dashboardBody from './dashboardBody'

export default new Suites([
  dashboard,
  dashboardMenu,
  dashboardNavbar,
  dashboardSidebar,
  dashboardBody
])
