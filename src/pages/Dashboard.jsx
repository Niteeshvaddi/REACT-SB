
const stats = [
  { title: 'Total Users', value: '1,250', change: '+12%' },
  { title: 'Total Orders', value: '320', change: '+8%' },
  { title: 'Revenue', value: '₹85,400', change: '+15%' },
  { title: 'Pending Orders', value: '24', change: '-3%' },
]

function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h2>
        <p className="mt-1 text-gray-500">
          Here is a summary of your application.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-gray-500">{stat.title}</p>

            <div className="mt-3 flex items-center justify-between gap-2">
              <h3 className="text-2xl font-bold text-gray-800">
                {stat.value}
              </h3>

              <span className="text-sm font-medium text-green-600">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">
          Recent Activity
        </h3>

        <p className="mt-2 text-gray-500">
          Your recent activities will appear here.
        </p>
      </div>
    </div>
  )
}

export default Dashboard
