import type { Board, TextSection } from "../../types/boardstory";

interface Props {
  board: Board;
  index: number;
  total: number;
  onChange: (board: Board) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export function BoardEditor({
  board,
  index,
  total,
  onChange,
  onDelete,
  onMoveUp,
  onMoveDown,
}: Props) {
  function updateField(field: keyof Board, value: string) {
    onChange({ ...board, [field]: value });
  }

  function updateSection(sectionId: string, content: string) {
    onChange({
      ...board,
      textSections: board.textSections.map((s) =>
        s.id === sectionId ? { ...s, content } : s,
      ),
    });
  }

  function addSection() {
    const newSection: TextSection = { id: crypto.randomUUID(), content: "" };
    onChange({ ...board, textSections: [...board.textSections, newSection] });
  }

  function deleteSection(sectionId: string) {
    onChange({
      ...board,
      textSections: board.textSections.filter((s) => s.id !== sectionId),
    });
  }

  return (
    <div className="bg-white/10 rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-white font-medium">Board {index + 1}</span>
        <div className="flex gap-1">
          <button
            onClick={onMoveUp}
            disabled={index === 0}
            className="text-white/60 hover:text-white disabled:opacity-30 px-2"
          >
            ↑
          </button>
          <button
            onClick={onMoveDown}
            disabled={index === total - 1}
            className="text-white/60 hover:text-white disabled:opacity-30 px-2"
          >
            ↓
          </button>
          <button
            onClick={onDelete}
            className="text-red-400 hover:text-red-300 px-2"
          >
            ✕
          </button>
        </div>
      </div>

      <input
        type="text"
        value={board.imageUrl}
        onChange={(e) => updateField("imageUrl", e.target.value)}
        placeholder="Bild-URL..."
        className="bg-white/10 text-white placeholder-white/40 rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-white/30"
      />
      {board.imageUrl && (
        <img
          src={board.imageUrl}
          alt="Vorschau"
          className="w-full h-32 object-cover rounded"
        />
      )}

      <input
        type="text"
        value={board.audioUrl ?? ""}
        onChange={(e) => updateField("audioUrl", e.target.value)}
        placeholder="Audio-URL (optional)..."
        className="bg-white/10 text-white placeholder-white/40 rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-white/30"
      />

      <div className="flex flex-col gap-2">
        <span className="text-white/60 text-xs uppercase tracking-wide">
          Textabschnitte
        </span>
        {board.textSections.map((section, i) => (
          <div key={section.id} className="flex gap-2">
            <input
              type="text"
              value={section.content}
              onChange={(e) => updateSection(section.id, e.target.value)}
              placeholder={`Abschnitt ${i + 1}...`}
              className="flex-1 bg-white/10 text-white placeholder-white/40 rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-white/30"
            />
            <button
              onClick={() => deleteSection(section.id)}
              className="text-red-400 hover:text-red-300 px-2"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          onClick={addSection}
          className="self-start text-white/60 hover:text-white text-sm"
        >
          + Abschnitt
        </button>
      </div>
    </div>
  );
}
