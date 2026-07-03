import { Link } from "react-router-dom";
import { useBoardstories } from "../hooks/useBoardstories";

export function HomePage() {
  const { stories } = useBoardstories();

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-white text-3xl font-bold">Boardstory App</h1>
          <div className="flex gap-3">
            <Link
              to="/player"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Video Player
            </Link>
            <Link
              to="/editor"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Editor
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stories.map((story) => (
            <Link
              key={story.id}
              to={`/boardstory/${story.id}`}
              className="bg-white/10 hover:bg-white/20 rounded-lg overflow-hidden"
            >
              {story.boards[0]?.imageUrl && (
                <img
                  src={story.boards[0].imageUrl}
                  alt={story.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-3">
                <p className="text-white font-medium">{story.title}</p>
                <p className="text-white/40 text-sm">
                  {story.boards.length} Boards
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
