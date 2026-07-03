import { useMediaStore, useMediaRemote } from "@vidstack/react";

export function VolumeControl() {
  const { volume, muted } = useMediaStore();
  const remote = useMediaRemote();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => remote.toggleMuted()}
        className="text-white w-8 text-center"
      >
        {muted || volume === 0 ? "🔇" : volume < 0.5 ? "🔉" : "🔊"}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={muted ? 0 : volume}
        onChange={(e) => remote.changeVolume(Number(e.target.value))}
        className="w-24 accent-white cursor-pointer"
      />
    </div>
  );
}
