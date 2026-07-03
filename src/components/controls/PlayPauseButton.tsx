import { useMediaStore, useMediaRemote } from "@vidstack/react";

export function PlayPauseButton() {
  const { playing } = useMediaStore();
  const remote = useMediaRemote();

  return (
    <button
      onClick={() => remote.togglePaused()}
      className="text-white bg-white/20 hover:bg-white/30 rounded-full w-10 h-10 flex items-center justify-center"
    >
      {playing ? "⏸" : "▶"}
    </button>
  );
}
