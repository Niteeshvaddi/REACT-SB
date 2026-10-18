
function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl font-bold text-gray-800">
        My Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="hidden text-sm text-gray-600 sm:block">
          Welcome, User
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
          U
        </div>
      </div>
    </header>
  )
}

export default Header
