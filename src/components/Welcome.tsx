
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Welcome() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white font-mono"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1687837492951-904cd17213c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <nav className="absolute top-5 left-5 flex space-x-4">
      </nav>
      <div className="text-center">
        <h1 className="text-9xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-200 to-white font-bold mb-4">
          FarmBazaar
        </h1>
        <h2 className="text-3xl font-bold mb-6">
        समृद्धि की खेती, स्मार्ट समाधान के साथ
        </h2>
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-300 to-white mb-8">
          Coming Soon
        </h1>
        <div className="flex items-center justify-center gap-5">
          <a href="https://github.com/piyusesh/farmbazaar" className="text-3xl hover:text-green-500">
            <FaGithub />
          </a>
          <a href="https://twitter.com/" className="text-3xl hover:text-green-500">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
