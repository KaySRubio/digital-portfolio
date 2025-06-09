import { useDemoContext } from "../../context/DemoContext";
import play from '@/assets/svg/play.svg';
import pause from '@/assets/svg/pause.svg';

export default function PlayButton() {
  const { fileAvailable, audioPlaying, onPlay } = useDemoContext();

  return (
    <button
      className={`
        ${!audioPlaying ? 'play-button' : 'pause-button'}
        ${fileAvailable ? 'enabled' : 'disabled'}
      `}
      disabled={!fileAvailable}
      aria-disabled={!fileAvailable}
      onClick={onPlay}
      aria-label="Play audio"
    >
      {!audioPlaying ? (
        <img className='input-icon' alt="" src={play} />
      ) : (
        <img className='pause-icon' alt="" src={pause} />
      )}
    </button>
  );
}
