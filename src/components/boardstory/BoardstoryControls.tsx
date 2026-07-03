interface Props {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export function BoardstoryControls({
  currentIndex,
  total,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="px-4 py-2 bg-white/20 hover:bg-white/30 disabled:opacity-30 text-white rounded-lg"
      >
        ← Zurück
      </button>
      <span className="text-white/60 text-sm">
        {currentIndex + 1} / {total}
      </span>
      <button
        onClick={onNext}
        disabled={currentIndex === total - 1}
        className="px-4 py-2 bg-white/20 hover:bg-white/30 disabled:opacity-30 text-white rounded-lg"
      >
        Weiter →
      </button>
    </div>
  );
}
