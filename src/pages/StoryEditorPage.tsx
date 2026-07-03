import { useParams, Link } from "react-router-dom";
import { useBoardstories } from "../hooks/useBoardstories";
import { BoardEditor } from "../components/editor/BoardEditor";
import type { Board, Boardstory } from "../types/boardstory";

function createBoard(): Board {
  return {
    id: crypto.randomUUID(),
    imageUrl: "",
    textSections: [{ id: crypto.randomUUID(), content: "" }],
  };
}

export function StoryEditorPage() {
  const { id } = useParams();
  const { getById, save } = useBoardstories();

  const story = getById(id ?? "");

  if (!story) {
    return (
      <div className="text-white p-8">
        Nicht gefunden.{" "}
        <Link to="/editor" className="underline">
          Zurück
        </Link>
      </div>
    );
  }

  const currentStory: Boardstory = story;

  function updateStory(updated: Boardstory) {
    save({ ...updated, updatedAt: new Date().toISOString() });
  }

  function addBoard() {
    updateStory({ ...currentStory, boards: [...currentStory.boards, createBoard()] });
  }

  function updateBoard(index: number, board: Board) {
    const boards = [...currentStory.boards];
    boards[index] = board;
    updateStory({ ...currentStory, boards });
  }

  function deleteBoard(index: number) {
    updateStory({
      ...currentStory,
      boards: currentStory.boards.filter((_, i) => i !== index),
    });
  }

  function moveBoard(index: number, direction: "up" | "down") {
    const boards = [...currentStory.boards];
    const target = direction === "up" ? index - 1 : index + 1;
    [boards[index], boards[target]] = [boards[target], boards[index]];
    updateStory({ ...currentStory, boards });
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl font-bold">{story.title}</h1>
          <div className="flex gap-3">
            <Link
              to={`/boardstory/${story.id}`}
              className="text-sm bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg"
            >
              ▶ Vorschau
            </Link>
            <Link
              to="/editor"
              className="text-white/60 hover:text-white text-sm py-2"
            >
              ← Übersicht
            </Link>
          </div>
        </div>

        {story.boards.map((board, index) => (
          <BoardEditor
            key={board.id}
            board={board}
            index={index}
            total={story.boards.length}
            onChange={(b) => updateBoard(index, b)}
            onDelete={() => deleteBoard(index)}
            onMoveUp={() => moveBoard(index, "up")}
            onMoveDown={() => moveBoard(index, "down")}
          />
        ))}

        <button
          onClick={addBoard}
          className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-4 py-3 text-sm"
        >
          + Board hinzufügen
        </button>
      </div>
    </div>
  );
}
