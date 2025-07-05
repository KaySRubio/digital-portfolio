import { useEffect, createRef, useState } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import type { DemoBoard } from '../../types/portfolioTypes';
import VisualizerSettings from './VisualizerSettings';
import VisualizerMenu from './VisualizerMenu';


type VisualizerProps = {
  data: DemoBoard,
}

export default function Visualizer({data}: VisualizerProps) {
  const {
    waveformRef,
    spectrogramContainerRef,
    showSpectrogram,
    waveformOverlayRefs,
    spectrogramOverlayRefs,
    timelineRef,
    waveformOverlays,
    setWaveformOverlays,
    spectrogramOverlays,
    setSpectrogramOverlays,
    setShowWaveformLineOverlays,
    setShowSpectrogramLineOverlays,
    visualizerType,
    fileAvailable,
  } = useDemoContext();

  // Note: spectrogram has a tough bug where is created but doesn't appear on
  // spectrogramSettings change, unless visualizerType change too or page is resized.
  // Tried useTimeouts, using separating spectrogramSettings into individual
  // variables rather than an object, etc. but still not working, so added
  // message for user to switch tabs to get it to reappear as workaround.
  const spectrogramRerenderErrorText = 'Please click the waveform tab and then back to the spectrogram tab to help the spectrogram re-render';
  const [showSpectogramRerenderText, setShowSpectogramRerenderText] = useState<boolean>(false)

  // Set up canvases for drawing on top of the waveform & spectrogram
  const lineOverlaySetup = data.results?.lineOverlaySetup;

  const waveformCanvasSetup = lineOverlaySetup?.filter(
    lineOverlay => lineOverlay.overlay === 'waveform' && 
    lineOverlay.default !== 'off'
  );
  const spectrogramCanvasSetup = lineOverlaySetup?.filter(
    lineOverlay => lineOverlay.overlay === 'spectrogram' && 
    lineOverlay.default !== 'off'
  );

  useEffect(() => {
    if(lineOverlaySetup && lineOverlaySetup.length > 0) {
      // Set up waveform overlays
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
      // Set up spectrogram canvas overlays
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

  return (
    <div className={`interactive-box visualizer`}>
      <div className='interactive-box-header'>
        <h3>Audio Visualizer</h3>
      </div>
      {showSpectrogram && <VisualizerMenu onClick={() => setShowSpectogramRerenderText(false)} />}
      <h4 className='sr-only'>Waveform and Spectrogram</h4>
     
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
        {showSpectrogram && 
        <>
          {fileAvailable && !showSpectogramRerenderText &&
            <div className={`spinner-wrapper-absolute ${visualizerType === 'Spectrogram' ? '' : 'hidden'}`}>
              <div className="spinner" />
            </div>
          }
          {
            fileAvailable && showSpectogramRerenderText && 
            <div className={`spectrogram-rerender-text ${visualizerType === 'Spectrogram' ? '' : 'hidden'}`}>
              <p>{spectrogramRerenderErrorText}</p>
            </div>
          }
          <div 
            id='spectrogram'
            ref={spectrogramContainerRef}
            className={`spectrogram-area ${visualizerType !== 'Spectrogram' ? 'offscreen' : ''}`}
          />
        </>}
        <div id="timeline" ref={timelineRef} />
        {waveformOverlays.map((_, index) => (
          <canvas
            key={index}
            ref={waveformOverlayRefs.current[index]}
            className={`waveform-overlay ${visualizerType !== 'Waveform' && 'hidden'}`}
          />
        ))}
        {spectrogramOverlays.map((_, index) => (
          <canvas
            key={index}
            ref={spectrogramOverlayRefs.current[index]}
            className={`spectrogram-overlay ${visualizerType !== 'Spectrogram' && 'hidden'}`}
          />
        ))}
      </div>
      <VisualizerSettings
        data={data}
        waveformCanvasSetup={waveformCanvasSetup}
        spectrogramCanvasSetup={spectrogramCanvasSetup}
        onSpectrogramSettingsClick={() => setShowSpectogramRerenderText(true)}
      />
    </div>
  );
}
