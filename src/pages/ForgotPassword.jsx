
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setMessage(`Reset instructions requested for ${email}`)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-800">
          Forgot Password?
        </h1>

        <p className="mt-3 text-center text-gray-500">
          Enter your email address to request password reset instructions.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setMessage('')
              }}
              placeholder="Enter your registered email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Request Password Reset
          </button>
        </form>

        {message && (
          <p role="status" className="mt-4 text-center text-sm text-green-600">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link
            to="/"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
