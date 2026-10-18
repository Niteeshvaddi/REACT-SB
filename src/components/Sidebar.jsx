
import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Users', to: '/dashboard/users' },
  { label: 'Settings', to: '/dashboard/settings' },
]

function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-gray-900 p-5 text-white">
      <h2 className="mb-8 text-xl font-bold">Admin Panel</h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/dashboard'}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
