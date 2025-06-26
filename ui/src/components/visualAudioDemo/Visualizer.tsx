import { useState, useEffect, createRef } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import PlayButton from './PlayButton';
import MoreInformation from './MoreInformation';
import { Toggle } from './Toggle';
import waveIcon  from '@/assets/svg/wave_diagram.svg';
import spectrogramIcon  from '@/assets/svg/spectrogram.svg';
import type { DemoBoard } from '../../types/portfolioTypes';

// type VisualizerType = 'Waveform' | 'Spectrogram';

type VizualizerProps = {
  data: DemoBoard,
}

type ToggleSetup = {
  displayText: string,
  onToggle: () => void
  moreInformation: boolean,
  onMoreInformationClick: () => void;
}

type HelpInfo = {
  show: boolean,
  text: string
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
    waveformOverlayRefs,
    spectrogramOverlayRefs,
    waveformOverlays,
    setWaveformOverlays,
    spectrogramOverlays,
    setSpectrogramOverlays,
    showWaveformLineOverlays,
    setShowWaveformLineOverlays,
    showSpectrogramLineOverlays,
    setShowSpectrogramLineOverlays,
    visualizerType,
    setVisualizerType,
  } = useDemoContext();

  // const [visualizerType, setVisualizerType] = useState<VisualizerType>('Waveform');
  const [showSpectrogramHelp, setShowSpectrogramHelp] = useState(false);
  const [showSpectrogramOffHelp, setShowSpectrogramOffHelp] = useState(false);

  // Set up different types of toggles and associated help text for different state groups
  // They have to be in separate groups because the 'checked' property can't be passed as a property
  const [regionToggles, setRegionToggles] = useState<ToggleSetup[]>([]);
  const [regionHelp, setRegionHelp] = useState<HelpInfo[]>([]);
  const [waveformLineOverlayToggles, setWaveformLineOverlayToggles] = useState<ToggleSetup[]>([]);
  const [waveformLineOverlayHelp, setWaveformLineOverlayHelp] = useState<HelpInfo[]>([]);
  const [spectrogramLineOverlayToggles, setSpectrogramLineOverlayToggles] = useState<ToggleSetup[]>([]);
  const [spectrogramLineOverlayHelp, setSpectrogramLineOverlayHelp] = useState<HelpInfo[]>([]);

  const spectrogramHelpText = 'Spectrograms are awesome! ...but they are also large and may slow down the page so turn on with caution.'
  const spectrogramOffHelpText = 'Refresh the browser tab to turn off the spectrogram'

  const toggles = [];
  const regionGroups = data.results?.regionSetup;
  const spectrogramSetting = data.input?.audioVisualizerSettings?.spectrogram;
  const zoomSetting = data.input?.audioVisualizerSettings?.zoom;
  const speedSetting = data.input?.audioVisualizerSettings?.changeSpeed;
  const lineOverlaySetup = data.results?.lineOverlaySetup;


  // Set visualizer default settings for spectrogram and zoom
  useEffect(() => {
    if (spectrogramSetting === 'on' || spectrogramSetting === 'userToggleStartOn') {
      setShowSpectrogram(true);
    }
    if(zoomSetting) {
      setShowZoom(true);
    }
  }, [data.input?.audioVisualizerSettings?.spectrogram, data.input?.audioVisualizerSettings?.zoom])
  
  // Set up basic toggles that don't use a toggle in state
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
        <Toggle
          id='pitch'
          checked={preservePitch}
          onChange={() => setPreservePitch((prev) => !prev)}
        />
      </div>
    </>
  )

  // Set up toggles for groups of regions and regionHelp
  useEffect(() => {
    if (regionGroups && regionGroups.length > 0) {
      const newRegionToggles: ToggleSetup[] = [];
      const helpInfoGroup: HelpInfo[] = []
      regionGroups.forEach((regionGroup, i) => {

      // Set up default setting, if toggle starts on or off
      let toggleShouldStartOn = false;
      if (regionGroup.default === 'on' || regionGroup.default === 'userToggleStartOn') {
        toggleShouldStartOn = true;
      }
      setShowRegionGroups(prev => {
        const updated = [...prev];
        updated[i] = toggleShouldStartOn;
        return updated;
      }) 

      newRegionToggles.push({
        displayText: regionGroup.displayText,
        onToggle: () => {
            setShowRegionGroups(prev => {
              const updated = [...prev];
                updated[i] = !prev[i];
                return updated;
            }
          )
        },
        moreInformation: regionGroup.moreInfo ? true : false,
        onMoreInformationClick: () => {
          setRegionHelp((prev) => {
            const updated = [...prev];
            updated[i] = {
              ...updated[i],
              show: !updated[i].show,
            };
            return updated;
            })
          }
        })
      
        const helpInfo = {
          show: false,
          text: regionGroup.moreInfo ? regionGroup.moreInfo : ''
        }
        helpInfoGroup.push(helpInfo);
      
      }) 
      setRegionToggles(newRegionToggles);
      setRegionHelp(helpInfoGroup);
    }
  }, [data.results?.regionSetup])


  // Set up canvases for drawing on top of the waveform & spectrogram
  useEffect(() => {
    if(lineOverlaySetup && lineOverlaySetup.length > 0) {
      const waveformCanvasOverlays = lineOverlaySetup.filter(lineOverlay => lineOverlay.overlay === 'waveform' && lineOverlay.default !== 'off');

      if(waveformCanvasOverlays.length > 0) {
        setWaveformOverlays(waveformCanvasOverlays);
        waveformOverlayRefs.current = waveformCanvasOverlays.map((_, i) =>
          waveformOverlayRefs.current[i] ?? createRef<HTMLCanvasElement>()
        );

        // Set up the state to show/hide the waveform overlays
        const onOffSettings: boolean[] = [];
        waveformCanvasOverlays.forEach((waveformCanvasOverlay) => {
          if(waveformCanvasOverlay.default === 'on' || waveformCanvasOverlay.default === 'userToggleStartOn') {
            onOffSettings.push(true);
          } else {
            onOffSettings.push(false);
          }
        })
        setShowWaveformLineOverlays(onOffSettings);
      }
      // TODO - add spectrogram canvases
      const spectrogramCanvasOverlays = lineOverlaySetup.filter(lineOverlay => lineOverlay.overlay === 'spectrogram' && lineOverlay.default !== 'off');
      if(spectrogramCanvasOverlays.length > 0) {
        setSpectrogramOverlays(spectrogramCanvasOverlays);
        spectrogramOverlayRefs.current = spectrogramCanvasOverlays.map((_, i) =>
          spectrogramOverlayRefs.current[i] ?? createRef<HTMLCanvasElement>()
        );

        // Set up the state to show/hide the spectrogram overlays
        const onOffSettings: boolean[] = [];
         spectrogramCanvasOverlays.forEach((spectrogramCanvasOverlay) => {
          if(spectrogramCanvasOverlay.default === 'on' || spectrogramCanvasOverlay.default === 'userToggleStartOn') {
            onOffSettings.push(true);
          } else {
            onOffSettings.push(false);
          }
        })
        setShowSpectrogramLineOverlays(onOffSettings);
      }
    }
  }, [data.results?.lineOverlaySetup])


  // Set up toggles for drawing lines on the waveforms
  useEffect(() => {
    const newToggles: ToggleSetup[] = [];
    const helpInfoGroup: HelpInfo[] = [];
    waveformOverlays.forEach((waveformOverlay, i) => {
      const newToggle = {
        displayText: waveformOverlay.displayText,
        moreInformation: waveformOverlay.moreInfo ? true : false,
        onToggle: () =>
          setShowWaveformLineOverlays(prev => {
            const updated = [...prev];
            updated[i] = !prev[i];
            return updated;
          }
        ),
        onMoreInformationClick: () => {
          setWaveformLineOverlayHelp((prev) => {
            const updated = [...prev];
            updated[i] = {
              ...updated[i],
              show: !updated[i].show,
            };
            return updated;
          })
        }
      }
        
      newToggles.push(newToggle);

      const helpInfo = {
        show: false,
        text: waveformOverlay.moreInfo ? waveformOverlay.moreInfo : ''
      }
      helpInfoGroup.push(helpInfo);
    })
    setWaveformLineOverlayToggles(newToggles);
    setWaveformLineOverlayHelp(helpInfoGroup);
  }, [waveformOverlays])

  // Set up toggles for drawing lines on the spectrogram
  useEffect(() => {
    const newToggles: ToggleSetup[] = [];
    const helpInfoGroup: HelpInfo[] = [];
    spectrogramOverlays.forEach((spectrogramOverlay, i) => {
      const newToggle = {
        displayText: spectrogramOverlay.displayText,
        moreInformation: spectrogramOverlay.moreInfo ? true : false,
        onToggle: () =>
          setShowSpectrogramLineOverlays(prev => {
            const updated = [...prev];
            updated[i] = !prev[i];
            return updated;
          }
        ),
        onMoreInformationClick: () => {
          setSpectrogramLineOverlayHelp((prev) => {
            const updated = [...prev];
            updated[i] = {
              ...updated[i],
              show: !updated[i].show,
            };
            return updated;
          })
        }
      }
        
      newToggles.push(newToggle);

      const helpInfo = {
        show: false,
        text: spectrogramOverlay.moreInfo ? spectrogramOverlay.moreInfo : ''
      }
      helpInfoGroup.push(helpInfo);
    })
    setSpectrogramLineOverlayToggles(newToggles);
    setSpectrogramLineOverlayHelp(helpInfoGroup);
  }, [spectrogramOverlays])

  return (
    <div className={`interactive-box visualizer`}>
      <div className='interactive-box-header'>
        <h3>Audio Visualizer</h3>
      </div>
      {fileAvailable && <div className="vizualizer-options">
        <div className="play-button-area"><PlayButton /></div>
        {toggles.map((toggle, i) => (
          <div className="toggle-option" key={`toggle-option-${i}`}>
            <label htmlFor={`toggle-${i}`}>{toggle.displayText}</label>
            <div className="toggle-and-button">
              <Toggle
                id={`toggle-${i}`}
                checked={toggle.isOn}
                onChange={toggle.onToggle}
              />
              {toggle.moreInformation && (
                <MoreInformation onClick={() => {setShowSpectrogramHelp((prev) => (!prev))}} />
              )}
            </div>
          </div>
        ))}
        {
          regionToggles.length > 0 &&
          regionToggles.length === showRegionGroups.length &&
          regionToggles.map((toggle, i) => (
            <div className="toggle-option" key={`toggle-option-${i}`}>
            <label htmlFor={`toggle-${i}`}>{toggle.displayText}</label>
            <div className="toggle-and-button">
              <Toggle
                id={`toggle-${i}`}
                checked={showRegionGroups[i]}
                onChange={toggle.onToggle}
              />
              {toggle.moreInformation && (
                <MoreInformation onClick={toggle.onMoreInformationClick} />
              )}
            </div>
          </div>
          ))
        }

        {waveformLineOverlayToggles.length > 0 &&
          waveformLineOverlayToggles.length === showWaveformLineOverlays.length && 
          waveformLineOverlayToggles.map((toggle, i) => (
          <div className="toggle-option" key={`toggle-option-${i}`}>
            <label htmlFor={`toggle-${i}`}>{toggle.displayText}</label>
            <div className="toggle-and-button">
              <Toggle
                id={`toggle-${i}`}
                checked={showWaveformLineOverlays[i]}
                onChange={toggle.onToggle}
              />
              {toggle.moreInformation && (
                <MoreInformation onClick={toggle.onMoreInformationClick} />
              )}
            </div>
          </div>
        ))}

        {spectrogramLineOverlayToggles.length > 0 &&
         spectrogramLineOverlayToggles.length === showSpectrogramLineOverlays.length && 
          spectrogramLineOverlayToggles.map((toggle, i) => (
          <div className="toggle-option" key={`toggle-option-${i}`}>
            <label htmlFor={`toggle-${i}`}>{toggle.displayText}</label>
            <div className="toggle-and-button">
              <Toggle
                id={`toggle-${i}`}
                checked={showSpectrogramLineOverlays[i]}
                onChange={toggle.onToggle}
              />
              {toggle.moreInformation && (
                <MoreInformation onClick={toggle.onMoreInformationClick} />
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
      {regionHelp.map((helpInfo, i) => helpInfo.show && <p key={i} className='visualizer-help-text'>{helpInfo.text}</p>)}
      {waveformLineOverlayHelp.map((helpInfo, i) => helpInfo.show && <p key={i} className='visualizer-help-text'>{helpInfo.text}</p>)}
      {spectrogramLineOverlayHelp.map((helpInfo, i) => helpInfo.show && <p key={i} className='visualizer-help-text'>{helpInfo.text}</p>)}

      {/* waveform zoom +canvases needs position: relative, but seems to disturb spectrogram from showing up */}
      <div
        className={`visualizer-body ${visualizerType === 'Waveform' ? 'visualizer-body-waveform' : 'visualizer-body-spectrogram'}`}
      >
        {/* To show spectrogram, waveform needs to be rendered, not hidden or opacity: 0 in any way */}
        <div 
          id='waveform'
          ref={waveformRef}
          className={`waveform-area ${visualizerType !== 'Waveform' ? 'offscreen' : ''}`}
        />
        {showSpectrogram && <>
          <div className={`spinner-wrapper-absolute ${visualizerType === 'Spectrogram' ? '' : 'hidden'}`}>
            <div className="spinner" />
          </div>
          <div 
            id='spectrogram'
            ref={spectrogramContainerRef}
            className={`spectrogram-area ${visualizerType !== 'Spectrogram' ? 'offscreen' : ''}`}
          />
        </>}
        {waveformOverlays.map((_, index) => (
          <canvas
            key={index}
            ref={waveformOverlayRefs.current[index]}
            className='waveform-overlay'
          />
        ))}
        {spectrogramOverlays.map((_, index) => (
          <canvas
            key={index}
            ref={spectrogramOverlayRefs.current[index]}
            className='spectrogram-overlay'
          />
        ))}
      </div>
    </div>
  );
}
