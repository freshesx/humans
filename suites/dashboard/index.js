import Suites from '../../utils/Suites'
import dashboard from './dashboard'
import dashboardMenu from './dashboardMenu'
import dashboardStatus from './dashboardStatus'
import dashboardSidebar from './dashboardSidebar'
import dashboardBody from './dashboardBody'

export default new Suites([
  dashboard,
  dashboardMenu,
  dashboardStatus,
  dashboardSidebar,
  dashboardBody
])
