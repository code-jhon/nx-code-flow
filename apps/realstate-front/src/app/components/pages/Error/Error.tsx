import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
      <p className="text-xl text-gray-600 mb-8">Something went wrong. Please try again later.</p>
      <Link to="/" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Go Back
      </Link>
    </div>
  )
}

export default Error