import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { SideMenu } from './SideMenu'

const Layout = () => {
  return (
    <main className="main">
      <Header />
      <SideMenu />
      <Outlet />
    </main>
  )
}

export { Layout }
