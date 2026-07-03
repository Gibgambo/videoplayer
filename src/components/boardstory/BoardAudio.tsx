import {
  MediaPlayer,
  MediaProvider,
  useMediaStore,
  useMediaRemote,
} from "@vidstack/react";

function AudioControls() {
  const { playing } = useMediaStore();
  const remote = useMediaRemote();

  return (
    <button
      onClick={() => remote.togglePaused()}
      className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg"
    >
      {playing ? "⏸ Pause" : "▶ Vorlesen"}
    </button>
  );
}

interface Props {
  audioUrl: string;
}

export function BoardAudio({ audioUrl }: Props) {
  return (
    <MediaPlayer src={audioUrl} viewType="audio">
      <MediaProvider />
      <AudioControls />
    </MediaPlayer>
  );
}
