/* Holds the settings for showing spectrogram, zoom, and speed */

import { useEffect} from 'react';
import MoreInformation from './MoreInformation';
import { Toggle } from './Toggle';
import { useDemoContext } from "../../context/DemoContext";
import type { AudioVisualizerSettings } from '../../types/portfolioTypes';

type Props = {
  data: AudioVisualizerSettings,
  setShowSpectrogramHelp: React.Dispatch<React.SetStateAction<boolean>>,
  setShowSpectrogramOffHelp: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function BasicVisualizerSettings({data, setShowSpectrogramHelp, setShowSpectrogramOffHelp }: Props) {
  const {
    showSpectrogram,
    setShowSpectrogram,
    showZoom,
    setShowZoom,
    setZoomLevel,
    zoomLevel,
    setPlaybackSpeed,
    playbackSpeed,
    preservePitch,
    setPreservePitch,
    fileAvailable
  } = useDemoContext();

  const spectrogramSetting = data.spectrogram;
  const zoomSetting = data.zoom;
  const speedSetting = data.changeSpeed;

  // Set visualizer default settings for spectrogram and zoom
  useEffect(() => {
    if (spectrogramSetting === 'on' || spectrogramSetting === 'userToggleStartOn') {
      setShowSpectrogram(true);
    }
    if(zoomSetting) {
      setShowZoom(true);
    }
  }, [data.spectrogram, data.zoom])

  const spectrogramToggle = (
    <div className="toggle-option">
      <label htmlFor='toggle-spectrogram'>Show spectrogram</label>
      <div className="toggle-and-button">
        <Toggle
          id='toggle-spectrogram'
          checked={showSpectrogram}
          onChange={() => {
            if(!showSpectrogram) {
              setShowSpectrogram(true)
            } else {
              setShowSpectrogramOffHelp((prev) => !prev)
            }}
          }
          disabled={!fileAvailable}
        />
        <MoreInformation onClick={() => {setShowSpectrogramHelp((prev) => (!prev))}} />
                  
      </div>
    </div>
  )

  const zoomSlider = (
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
          disabled={!fileAvailable}
        />
    </div>
  )

  const speedOptions = (
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
          disabled={!fileAvailable}
        />
      </div>
      <div className="toggle-option">
        <label htmlFor='pitch'>Preserve pitch</label>
        <Toggle
          id='pitch'
          checked={fileAvailable && preservePitch}
          onChange={() => setPreservePitch((prev) => !prev)}
          disabled={!fileAvailable}
        />
      </div>
    </>
  )

  return (
    <>
      {
        (
          spectrogramSetting === 'userToggleStartOn' || 
          spectrogramSetting === 'userToggleStartOff'
        ) &&
        spectrogramToggle
      }
      {showZoom && zoomSlider}
      {speedSetting && speedOptions}
    </>
  )
}