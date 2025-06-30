import { useDemoContext } from "../../context/DemoContext";
import waveIcon  from '@/assets/svg/wave_diagram.svg';
import spectrogramIcon  from '@/assets/svg/spectrogram.svg';

type Props = {
  onClick: () => void;
}

export default function VisualizerMenu({onClick}: Props) {
  const { visualizerType, setVisualizerType } = useDemoContext();

  return (
    <menu className='interactive-box-menu'>
        <li>
          <button
            onClick={() => {
              setVisualizerType('Waveform')
              onClick()
            }}
            className={`
              interactive-box-menu-item
              ${visualizerType === 'Waveform' ? 'active-interactive-box-menu' : ''}
            `}
          >
            <img className='input-icon-large' alt="" src={waveIcon} />
            Waveform
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setVisualizerType('Spectrogram')
              onClick()
            }}
            className={`
              interactive-box-menu-item
            ${visualizerType === 'Spectrogram' ? 'active-interactive-box-menu' : ''}
            `}
          >
            <img className='input-icon-large' alt="" src={spectrogramIcon} />
            Spectrogram
          </button>
        </li>
    </menu>
  )

}