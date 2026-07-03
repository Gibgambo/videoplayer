import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { ControlBar } from "../components/controls/ControlBar";

export function VideoPlayerPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-3xl">
        <MediaPlayer
          title="Mein erster Video Player"
          src="https://files.vidstack.io/sprite-fight/720p.mp4"
        >
          <MediaProvider />
          <ControlBar />
        </MediaPlayer>
      </div>
    </div>
  );
}
