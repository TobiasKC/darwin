import {Header, AppDrawer} from '../../components/Index'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <><Header/>
  <AppDrawer/></>
}

export default DashboardLayout
