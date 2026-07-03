import type { TextSection } from "../../types/boardstory";

interface Props {
  sections: TextSection[];
  visibleCount: number;
  onRevealNext: () => void;
}

export function TextReveal({ sections, visibleCount, onRevealNext }: Props) {
  const hasMore = visibleCount < sections.length;

  return (
    <div className="flex flex-col gap-3">
      {sections.slice(0, visibleCount).map((section) => (
        <p key={section.id} className="text-white text-lg">
          {section.content}
        </p>
      ))}
      {hasMore && (
        <button
          onClick={onRevealNext}
          className="self-start text-white/60 hover:text-white text-sm underline"
        >
          Weiter ▼
        </button>
      )}
    </div>
  );
}
