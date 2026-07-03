import { useMediaStore, useMediaRemote } from "@vidstack/react";

export function FullscreenButton() {
  const { fullscreen } = useMediaStore();
  const remote = useMediaRemote();

  return (
    <button
      onClick={() => remote.toggleFullscreen()}
      className="text-white bg-white/20 hover:bg-white/30 rounded px-2 py-1 text-xs"
    >
      {fullscreen ? "Verkleinern" : "Vollbild"}
    </button>
  );
}
