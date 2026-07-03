  import { Link } from 'react-router-dom';

  export function HomePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white gap-6">
        <h1 className="text-3xl font-bold">Boardstory App</h1>
        <div className="flex gap-4">
          <Link to="/player" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
            Video Player
          </Link>
          <Link to="/editor" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg">
            Editor
          </Link>
        </div>
      </div>
    );
  }