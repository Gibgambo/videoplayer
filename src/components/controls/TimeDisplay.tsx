import { useMediaStore } from "@vidstack/react";

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function TimeDisplay() {
  const { currentTime, duration } = useMediaStore();

  return (
    <span className="text-white text-sm font-mono">
      {formatTime(currentTime)} / {formatTime(duration)}
    </span>
  );
}
