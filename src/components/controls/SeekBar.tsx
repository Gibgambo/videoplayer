import { useMediaStore, useMediaRemote } from '@vidstack/react';

    export function SeekBar() {
        const { currentTime, duration } = useMediaStore();
        const remote = useMediaRemote();


        function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
            remote.seek(Number(e.target.value));
        }

        return (
            <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleChange}
            className="w-full accent-white cursor-pointer"
            />
        );
    }
