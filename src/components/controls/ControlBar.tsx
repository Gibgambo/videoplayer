import { PlayPauseButton } from "./PlayPauseButton";
import { SeekBar } from "./SeekBar";
import { TimeDisplay } from "./TimeDisplay";
import { VolumeControl } from "./VolumeControl";
import { FullscreenButton } from "./FullscreenButton";

export function ControlBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col gap-2">
      <SeekBar />
      <div className="flex items-center gap-3">
        <PlayPauseButton />
        <TimeDisplay />
        <VolumeControl />
        <div className="ml-auto">
          <FullscreenButton />
        </div>
      </div>
    </div>
  );
}
