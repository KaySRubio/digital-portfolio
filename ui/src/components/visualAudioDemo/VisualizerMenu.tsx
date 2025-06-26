import { useDemoContext } from "../../context/DemoContext";
import waveIcon  from '@/assets/svg/wave_diagram.svg';
import spectrogramIcon  from '@/assets/svg/spectrogram.svg';

export default function VisualizerMenu() {
    const { visualizerType, setVisualizerType } = useDemoContext();

  return (
    <menu className='interactive-box-menu'>
        <li>
          <button
            onClick={() => setVisualizerType('Waveform')}
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
            onClick={() => setVisualizerType('Spectrogram')}
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