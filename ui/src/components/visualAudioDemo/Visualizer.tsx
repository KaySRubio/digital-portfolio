import { useState } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import PlayButton from './PlayButton';
import MoreInformation from './MoreInformation';
import Toggle from './Toggle';
import waveIcon  from '@/assets/svg/wave_diagram.svg';
import spectrogramIcon  from '@/assets/svg/spectrogram.svg';

export default function Visualizer() {
  const { waveformRef, spectrogramContainerRef, showSpectrogram, setShowSpectrogram } = useDemoContext();
  const [visualizerType, setVisualizerType] = useState('Waveform');
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const onToggle = () => {
    setShowSpectrogram(prev => !prev);
  }

  const onMoreInformationClick = () => {
    setShowMoreInfo(prev => !prev);
  }

  return (
    <div className={`interactive-box visualizer`}>
      <div className='interactive-box-header'>
        <h3>Audio Visualizer</h3>
      </div>
      {!showSpectrogram && <div className='toggle-options'>
        <div className='toggle-option'>
          Show spectrogram
          <div className='toggle-and-button'>
            <Toggle isOn={showSpectrogram} onToggle={onToggle} />
            <MoreInformation onClick={onMoreInformationClick} />
          </div>
        </div>
        {showMoreInfo && <div className='visualizer-more-info'>
          Spectrograms are awesome! ...but they are also large and may slow down the page. To turn off, refresh browser tab.
        </div>}
      </div>}
      {showSpectrogram && <menu className='interactive-box-menu'>
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
      </menu>}
      <div className='visualizer-body'>
        <PlayButton />
        <h4 className='sr-only'>Waveform and Spectrogram</h4>
        {/* To show spectrogram, waveform needs to be rendered, not hidden or opacity: 0 in any way */}
        <div 
          id='waveform'
          ref={waveformRef}
          className={`waveform-area ${visualizerType !== 'Waveform' ? 'offscreen' : ''}`}
        />
        {showSpectrogram && <div 
          id='spectrogram'
          ref={spectrogramContainerRef}
          className={`waveform-area ${visualizerType !== 'Spectrogram' ? 'offscreen' : ''}`}
        />}
      </div>
    </div>
  );
}

//(note: spectrograms are awesome but also large so page may update more slowly)
