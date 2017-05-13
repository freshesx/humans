import Suites from '../../utils/Suites'
import dashboard from './dashboard'
import dashboardMenu from './dashboardMenu'
import dashboardStatus from './dashboardStatus'
import dashboardSidebar from './dashboardSidebar'

export default new Suites([
  dashboard,
  dashboardMenu,
  dashboardStatus,
  dashboardSidebar
])
