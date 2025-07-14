import { useDemoContext } from "../../context/DemoContext";
import waveIcon  from '@/assets/svg/wave_diagram.svg';
import spectrogramIcon  from '@/assets/svg/spectrogram.svg';

type Props = {
  onClick: () => void;
}

export default function VisualizerMenu({onClick}: Props) {
  const { visualizerType, setVisualizerType } = useDemoContext();

  return (
    <div className='interactive-box-menu' role="radiogroup" aria-label='Select type of audio visualization'>
      <li role="presentation">
        <button
          onClick={() => {
            setVisualizerType('Waveform')
            onClick()
          }}
          className={`
            interactive-box-menu-item
            ${visualizerType === 'Waveform' ? 'active-interactive-box-menu' : ''}
          `}
          role="radio"
        >
          <img className='input-icon-large' alt="" src={waveIcon} />
          Waveform
        </button>
      </li>
      <li role="presentation">
        <button
          onClick={() => {
            setVisualizerType('Spectrogram')
            onClick()
          }}
          className={`
            interactive-box-menu-item
          ${visualizerType === 'Spectrogram' ? 'active-interactive-box-menu' : ''}
          `}
          role="radio"
        >
          <img className='input-icon-large' alt="" src={spectrogramIcon} />
          Spectrogram
        </button>
      </li>
    </div>
  )

}