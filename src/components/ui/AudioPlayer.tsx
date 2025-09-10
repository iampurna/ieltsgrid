import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Button from "./Button";
import { formatTime } from "@/lib/utils";

interface AudioPlayerProps {
  src: string;
  onProgress?: (currentTime: number) => void;
  onTimeUpdate?: (currentTime: number) => void;
  allowRewind?: boolean;
  showTranscript?: boolean;
  playbackSpeed?: number[];
}

export default function AudioPlayer({
  src,
  onProgress,
  onTimeUpdate,
  allowRewind = true,
  showTranscript = false,
  playbackSpeed = [0.75, 1, 1.25],
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      onTimeUpdate?.(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const updateProgress = () => {
      onProgress?.(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("progress", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("progress", updateProgress);
    };
  }, [onProgress, onTimeUpdate]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
    }
    setVolume(newVolume);
  };

  const handleSpeedChange = () => {
    const currentIndex = playbackSpeed.indexOf(speed);
    const nextIndex = (currentIndex + 1) % playbackSpeed.length;
    const newSpeed = playbackSpeed[nextIndex];

    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = newSpeed;
    }
    setSpeed(newSpeed);
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-4">
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Progress Bar */}
      <div className="mb-4">
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>{formatTime(Math.floor(currentTime))}</span>
          <span>{formatTime(Math.floor(duration))}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {allowRewind && (
            <Button variant="ghost" size="sm" onClick={() => skip(-10)}>
              <SkipBack className="w-4 h-4" />
            </Button>
          )}

          <Button variant="primary" size="md" onClick={togglePlay}>
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </Button>

          <Button variant="ghost" size="sm" onClick={() => skip(10)}>
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          {/* Speed Control */}
          <Button variant="ghost" size="sm" onClick={handleSpeedChange}>
            {speed}x
          </Button>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-gray-500" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
