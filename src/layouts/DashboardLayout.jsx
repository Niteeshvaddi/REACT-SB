
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="min-w-0 flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default DashboardLayout
