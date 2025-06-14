import { useState, useEffect } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import PlayButton from './PlayButton';
import MoreInformation from './MoreInformation';
import Toggle from './Toggle';
import waveIcon  from '@/assets/svg/wave_diagram.svg';
import spectrogramIcon  from '@/assets/svg/spectrogram.svg';
import type { Input } from '../../types/portfolioTypes';
// import { Popover } from 'react-tiny-popover'

type VisualizerType = 'Waveform' | 'Spectrogram';
type Toggle = {
  displayText: string,
  isOn: boolean,
  onToggle: () => void,
  moreInformation: boolean,
  onMoreInformationClick?: () => void,
}

type VizualizerProps = {
  data: Input,
}

export default function Visualizer({data}: VizualizerProps) {
  const {
    waveformRef,
    spectrogramContainerRef,
    showSpectrogram,
    setShowSpectrogram,
    showRegions,
    setShowRegions,
    showZoom,
    setShowZoom,
    setZoomLevel,
    zoomLevel,
    fileAvailable,
    setPlaybackSpeed,
    playbackSpeed,
    preservePitch,
    setPreservePitch,
  } = useDemoContext();
  const [visualizerType, setVisualizerType] = useState<VisualizerType>('Waveform');
  const [isSpectrogramPopoverOpen, setIsSpectrogramPopoverOpen] = useState(false);
  const [showSpectrogramHelp, setShowSpectrogramHelp] = useState(false);
  const [showSpectrogramOffHelp, setShowSpectrogramOffHelp] = useState(false);

  const spectrogramHelpText = 'Spectrograms are awesome! ...but they are also large and may slow down the page so turn on with caution.'
  const spectrogramOffHelpText = 'Refresh the browser tab to turn off the spectrogram'

  // Add toggles and other input for users to update visualizer settings
  const toggles: Toggle[] = [];
  const regionsSetting = data.audioVisualizerSettings?.regions;
  const spectrogramSetting = data.audioVisualizerSettings?.spectrogram;
  const zoomSetting = data.audioVisualizerSettings?.zoom;
  const speedSetting = data.audioVisualizerSettings?.changeSpeed;
  if (
    regionsSetting === 'userToggleStartOn' ||
    regionsSetting === 'userToggleStartOff'
  ) {
    toggles.push({
      displayText: 'Show regions',
      isOn: showRegions,
      onToggle: () => {
        console.log('onToggle was clicked, showRegions: ', showRegions);
        setShowRegions((prev) => !prev);
      },
      moreInformation: false,
    });
  }
  
  if (spectrogramSetting === 'userToggleStartOn' || spectrogramSetting === 'userToggleStartOff') {
    toggles.push(
      {
        displayText: 'Show spectrogram',
        isOn: showSpectrogram,
        onToggle: () => {
          if(!showSpectrogram) {
            setShowSpectrogram(true)
          } else {
            setShowSpectrogramOffHelp((prev) => !prev)
          }
        },
        moreInformation: true,
        onMoreInformationClick: () => setIsSpectrogramPopoverOpen(!isSpectrogramPopoverOpen), // set up react-popover?
      }
    )
  }

  const optionsToLetUserChangeSpeed = (
    <>
      <div className="toggle-option">
        <label htmlFor="speed">Speed {playbackSpeed}x</label>
        <input
          className='slider'
          id="speed"
          type="range"
          min="0.25"
          max="2"
          step="0.25"
          value={playbackSpeed}
          onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
        />
      </div>
      <div className="toggle-option">
        <label htmlFor='pitch'>Preserve pitch</label>
        <Toggle id='pitch' isOn={preservePitch} onToggle={() => setPreservePitch((prev) => !prev)} />
      </div>
    </>
  )
  
  // Set visualizer default settings
  useEffect(() => {
    if (regionsSetting === 'on' || regionsSetting === 'userToggleStartOn') {
      setShowRegions(true);
    }
    if (spectrogramSetting === 'on' || spectrogramSetting === 'userToggleStartOn') {
      setShowSpectrogram(true);
    }
    if(zoomSetting) {
      setShowZoom(true);
    }
  }, [data.audioVisualizerSettings?.regions, data.audioVisualizerSettings?.spectrogram])

  return (
    <div className={`interactive-box visualizer`}>
      <div className='interactive-box-header'>
        <h3>Audio Visualizer</h3>
      </div>
      {fileAvailable && <div className="vizualizer-options">
        <div className="play-button-area"><PlayButton /></div>
        {toggles.map((toggle, i) => (
          <div className="toggle-option" key={`toggle-option-${i}`}>
            {toggle.displayText}
            <div className="toggle-and-button">
              <Toggle id={`toggle-${i}`} isOn={toggle.isOn} onToggle={toggle.onToggle} />
              {toggle.moreInformation && toggle.onMoreInformationClick && (
                

                <MoreInformation onClick={() => {setShowSpectrogramHelp((prev) => (!prev))}} />


              )}
            </div>
          </div>
        ))}
        {showZoom && 
          <div className="toggle-option">
            <label htmlFor="zoom">Zoom</label>
            <input
              className='slider'
              id="zoom"
              type="range"
              min="10"
              max="1000"
              value={zoomLevel}
              onChange={(e) => setZoomLevel(parseInt(e.target.value, 10))}
            />
          </div>
        }
        {speedSetting && optionsToLetUserChangeSpeed}
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
        
      <h4 className='sr-only'>Waveform and Spectrogram</h4>
      {showSpectrogramHelp && <p className='visualizer-help-text'>{spectrogramHelpText}</p>}
      {showSpectrogramOffHelp && <p className='visualizer-help-text'>{spectrogramOffHelpText}</p>}
      
      <div className='visualizer-body'>
        {/* To show spectrogram, waveform needs to be rendered, not hidden or opacity: 0 in any way */}
        <div 
          id='waveform'
          ref={waveformRef}
          className={`waveform-area ${visualizerType !== 'Waveform' ? 'offscreen' : ''}`}
        />
        {showSpectrogram && <div 
          id='spectrogram'
          ref={spectrogramContainerRef}
          className={`spectrogram-area ${visualizerType !== 'Spectrogram' ? 'offscreen' : ''}`}
        />}
      </div>

    </div>
  );
}

//(note: spectrograms are awesome but also large so page may update more slowly)
/*
      {directions.length > 0 && <div className='vizualizer-directions'>
        {directions.map((direction: string, i: number) => (
          <p className='visualizer-direction' key={`vizualizer-direction-${i}`}>
            Tip: {direction}
          </p>
        ))}
      </div>} */

/*
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
*/


/*

      <Popover
        isOpen={isSpectrogramPopoverOpen}
        positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
        content={<div>Hi! I'm popover content.</div>}
      >
        <div>
        </div>
      </Popover>;
*/