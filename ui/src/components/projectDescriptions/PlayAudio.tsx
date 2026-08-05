import React, { useRef, useState, useEffect } from "react";
import play from '@/assets/svg/play.svg';
import pause from '@/assets/svg/pause.svg';

type PlayAudioProps = {
  src: string;
  className?: string;
};

const PlayAudio: React.FC<PlayAudioProps> = ({ src, className }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Failed to play audio:", err);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => setDuration(audio.duration);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={className}>
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setIsPlaying(false)}
      />

      <button
        className={`${!isPlaying ? 'play-button' : 'pause-button'} enabled`}
        onClick={togglePlayback}
        aria-label="Play audio"
      >
        {!isPlaying ? (
          <img className='input-icon' alt="" src={play} />
        ) : (
          <img className='pause-icon' alt="" src={pause} />
        )}
      </button>
      <div className='play-audio-progress-bar'>
        <span>{formatTime(currentTime)}</span>

        <input
          className='play-audio-progress-indicator'
          type="range"
          min={0}
          max={duration || 0}
          step={0.01}
          value={currentTime}
          onChange={(e) => {
            const time = Number(e.target.value);
            setCurrentTime(time);
            if (audioRef.current) {
              audioRef.current.currentTime = time;
            }
          }}
        />

        <span>{formatTime(duration)}</span>

      </div>
    </div>
  );
};

export default PlayAudio;