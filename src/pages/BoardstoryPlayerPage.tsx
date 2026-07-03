import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useBoardstories } from "../hooks/useBoardstories";
import { BoardView } from "../components/boardstory/BoardView";
import { BoardstoryControls } from "../components/boardstory/BoardstoryControls";

export function BoardstoryPlayerPage() {
  const { id } = useParams();
  const { getById } = useBoardstories();
  const [currentIndex, setCurrentIndex] = useState(0);

  const story = getById(id ?? "");

  if (!story) {
    return (
      <div className="text-white p-8">
        Boardstory nicht gefunden.{" "}
        <Link to="/" className="underline">
          Zurück
        </Link>
      </div>
    );
  }

  const currentBoard = story.boards[currentIndex];

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-xl font-bold">{story.title}</h1>
          <Link to="/" className="text-white/60 hover:text-white text-sm">
            ✕ Schließen
          </Link>
        </div>
        <BoardView key={currentBoard.id} board={currentBoard} />
        <BoardstoryControls
          currentIndex={currentIndex}
          total={story.boards.length}
          onPrev={() => setCurrentIndex((i) => i - 1)}
          onNext={() => setCurrentIndex((i) => i + 1)}
        />
      </div>
    </div>
  );
}
