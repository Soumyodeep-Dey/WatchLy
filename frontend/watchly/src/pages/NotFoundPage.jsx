import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-white">
      <h1 className="text-6xl font-bold text-gold">404</h1>
      <p className="text-xl text-white mb-6">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="text-lg text-gold hover:text-white transition duration-300">
        Go back to Home
      </Link>
    </div>
  );
}
