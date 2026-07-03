import type { Board } from "../../types/boardstory";
import { TextReveal } from "./TextReveal";
import { useState } from "react";
import { BoardAudio } from "./BoardAudio";

interface Props {
  board: Board;
}

export function BoardView({ board }: Props) {
  const [visibleCount, setVisibleCount] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <img
        src={board.imageUrl}
        alt="Board Bild"
        className="w-full rounded-lg object-cover"
      />
      {board.audioUrl && <BoardAudio audioUrl={board.audioUrl} />}
      <TextReveal
        sections={board.textSections}
        visibleCount={visibleCount}
        onRevealNext={() => setVisibleCount((n) => n + 1)}
      />
    </div>
  );
}
