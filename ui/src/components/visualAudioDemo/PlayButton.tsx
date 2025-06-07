import { useDemoContext } from "../../context/DemoContext";
import play from '@/assets/svg/play.svg';
import pause from '@/assets/svg/pause.svg';

export default function PlayButton() {
  const { audioFileAvailable, audioPlaying, onPlay } = useDemoContext();
  // const { audioFileAvailable } = useDemoContext();

  return (
    <button
      className={`
        ${!audioPlaying ? 'play-button' : 'pause-button'}
        ${audioFileAvailable ? 'enabled' : 'disabled'}
      `}
      disabled={!audioFileAvailable}
      aria-disabled={!audioFileAvailable}
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
