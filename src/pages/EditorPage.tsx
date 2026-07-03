import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBoardstories } from "../hooks/useBoardstories";
import type { Boardstory } from "../types/boardstory";

function createNewStory(title: string): Boardstory {
  return {
    id: crypto.randomUUID(),
    title,
    boards: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export function EditorPage() {
  const { stories, save, deleteById } = useBoardstories();
  const [newTitle, setNewTitle] = useState("");
  const navigate = useNavigate();

  function handleCreate() {
    if (!newTitle.trim()) return;
    const story = createNewStory(newTitle.trim());
    save(story);
    setNewTitle("");
    navigate(`/editor/${story.id}`);
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-bold">Editor</h1>
          <Link to="/" className="text-white/60 hover:text-white text-sm">
            ← Startseite
          </Link>
        </div>

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            placeholder="Titel der neuen Boardstory..."
            className="flex-1 bg-white/10 text-white placeholder-white/40 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            onClick={handleCreate}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            + Erstellen
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3"
            >
              <span className="text-white font-medium">{story.title}</span>
              <div className="flex gap-2">
                <Link
                  to={`/boardstory/${story.id}`}
                  className="text-sm bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded"
                >
                  ▶ Abspielen
                </Link>
                <Link
                  to={`/editor/${story.id}`}
                  className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                  ✎ Bearbeiten
                </Link>
                <button
                  onClick={() => deleteById(story.id)}
                  className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
