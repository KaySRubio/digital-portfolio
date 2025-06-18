import { useState, useEffect } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import PlayButton from './PlayButton';
import MoreInformation from './MoreInformation';
import Toggle from './Toggle';
import waveIcon  from '@/assets/svg/wave_diagram.svg';
import spectrogramIcon  from '@/assets/svg/spectrogram.svg';
import type { DemoBoard } from '../../types/portfolioTypes';

type VisualizerType = 'Waveform' | 'Spectrogram';
type Toggle = {
  displayText: string,
  isOn: boolean,
  onToggle: () => void,
  moreInformation: boolean,
  onMoreInformationClick?: () => void,
}

type VizualizerProps = {
  data: DemoBoard,
}

export default function Visualizer({data}: VizualizerProps) {
  const {
    waveformRef,
    spectrogramContainerRef,
    showSpectrogram,
    setShowSpectrogram,
    showZoom,
    setShowZoom,
    setZoomLevel,
    zoomLevel,
    fileAvailable,
    setPlaybackSpeed,
    playbackSpeed,
    preservePitch,
    setPreservePitch,
    showRegionGroups,
    setShowRegionGroups,
  } = useDemoContext();
  const [visualizerType, setVisualizerType] = useState<VisualizerType>('Waveform');
  const [isSpectrogramPopoverOpen, setIsSpectrogramPopoverOpen] = useState(false);
  const [showSpectrogramHelp, setShowSpectrogramHelp] = useState(false);
  const [showSpectrogramOffHelp, setShowSpectrogramOffHelp] = useState(false);

  const spectrogramHelpText = 'Spectrograms are awesome! ...but they are also large and may slow down the page so turn on with caution.'
  const spectrogramOffHelpText = 'Refresh the browser tab to turn off the spectrogram'

  // Add toggles and other input for users to update visualizer settings
  const toggles: Toggle[] = [];
  const regionGroups = data.results?.regionSetup;
  const spectrogramSetting = data.input?.audioVisualizerSettings?.spectrogram;
  const zoomSetting = data.input?.audioVisualizerSettings?.zoom;
  const speedSetting = data.input?.audioVisualizerSettings?.changeSpeed;

  if (regionGroups && regionGroups.length > 0) {
    // Set up a variable in a state array
    regionGroups.forEach((regionGroup, i) => {
      toggles.push({
        displayText: regionGroup.displayText,
        isOn: showRegionGroups[i],
        onToggle: () => {
            setShowRegionGroups(prev => {
              const updated = [...prev];
                updated[i] = !showRegionGroups[i];
                return updated;
            })
          },
          moreInformation: false,
        })
      }) 
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
    if(regionGroups && regionGroups.length > 0) {
      regionGroups.forEach((regionGroup, i) => {
        let toggleShouldStartOn = false;
        if (regionGroup.default === 'on' || regionGroup.default === 'userToggleStartOn') {
          toggleShouldStartOn = true;
        }
        setShowRegionGroups(prev => {
            const updated = [...prev];
            updated[i] = toggleShouldStartOn;
            return updated;
          })
        
      })
    }
    if (spectrogramSetting === 'on' || spectrogramSetting === 'userToggleStartOn') {
      setShowSpectrogram(true);
    }
    if(zoomSetting) {
      setShowZoom(true);
    }
  }, [data.results?.regionSetup, data.input?.audioVisualizerSettings?.spectrogram])

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
