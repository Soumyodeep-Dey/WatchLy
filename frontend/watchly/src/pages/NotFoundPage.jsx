import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-lg text-blue-500 hover:text-blue-700">
        Go back to Home
      </Link>
    </div>
  );
}
