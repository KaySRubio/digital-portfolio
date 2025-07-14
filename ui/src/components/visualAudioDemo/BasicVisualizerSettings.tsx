/* Holds the settings for showing spectrogram, zoom, and speed */

import { useEffect } from 'react';
import MoreInformation from './MoreInformation';
import { Toggle } from './Toggle';
import { useDemoContext } from "../../context/DemoContext";
import type { AudioVisualizerSettings, SpectrogramScale, FftSamples } from '../../types/portfolioTypes';
import MultiRangeSlider from 'multi-range-slider-react';

type Props = {
  data: AudioVisualizerSettings,
  setShowSpectrogramHelp: React.Dispatch<React.SetStateAction<boolean>>,
  setShowSpectrogramOffHelp: React.Dispatch<React.SetStateAction<boolean>>,
  onSpectrogramSettingsClick: () => void;
  setShowHzSettingHelp: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function BasicVisualizerSettings({
  data,
  setShowSpectrogramHelp,
  setShowSpectrogramOffHelp,
  onSpectrogramSettingsClick,
  setShowHzSettingHelp,
}: Props) {
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
    fileAvailable,
    visualizerType,
    spectrogramSettings,
    setSpectrogramSettings,
  } = useDemoContext();

  const spectrogramSetting = data.spectrogram;
  const zoomSetting = data.zoom;
  const speedSetting = data.changeSpeed;
  const userAdjustSpectrogram = data.userAdjustSpectrogram;

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
        <MoreInformation
          onClick={() => {setShowSpectrogramHelp((prev) => (!prev))}}
          label='Show more information about the spectrogram'
        />
                  
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
          min="0"
          max="1000"
          step="100"
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


  const fftSamplesSlider = () => {
    const options: FftSamples[] = [1024, 2048, 4096];
    const currentIndex = options.indexOf(spectrogramSettings.fftSamples);

    return (
      <div className="toggle-option">
        <label htmlFor="fft-samples-slider">FFT Samples</label>
          <input
            className='slider'
            id="fft-samples-slider"
            type="range"
            min="0"
            max={options.length - 1}
            step="1"
            value={currentIndex}
            onChange={(e) =>
              {
                onSpectrogramSettingsClick();
                setSpectrogramSettings((prev) => ({
                  ...prev,
                  fftSamples: options[parseInt(e.target.value)],
                }))
              }
            }
        disabled={!fileAvailable}
          />
          <p>{spectrogramSettings.fftSamples}</p>
      </div>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMinMaxInput = (e: any) => {
    if (e && (
      e.minValue !== spectrogramSettings.frequencyMin ||
      e.maxValue !== spectrogramSettings.frequencyMax
    )) {
      setSpectrogramSettings((prev) => ({
        ...prev,
        frequencyMin: e.minValue,
        frequencyMax: e.maxValue,
      }));
    }
  };

  const spectrogramMinMaxSlider = () => {
    return (
      <div className='multi-slider-and-button'>
      <div className="toggle-option-multi-slider">
        <label htmlFor="frequency-slider">Frequency Range</label>
        <MultiRangeSlider
          id={'frequency-slider'}
          min={spectrogramSettings.frequencyMinLimit}
          max={spectrogramSettings.frequencyMaxLimit}
          step={1000}
          stepOnly={true}
          minValue={spectrogramSettings.frequencyMin}
          maxValue={spectrogramSettings.frequencyMax}
          onInput={e => { handleMinMaxInput(e)}}
          ruler={false}
          disabled={!fileAvailable}
          style={{
            border: 'none',
            boxShadow: 'none',
            width: '130px',
            padding: '0 10px',
          }}
        />
        
      </div>
      <MoreInformation
        onClick={() => {setShowHzSettingHelp((prev: boolean) => (!prev))}}
        label='Show more information about the spectrogram frequency options'
      />
      </div>
    )
  }

  const spectrogramScales: SpectrogramScale[] = ['mel', 'linear'];

  const handleScaleInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSpectrogramSettingsClick()
    if (e && e.target && e.target.value !== spectrogramSettings.scale) {
      // @ts-expect-error It's FINE
      setSpectrogramSettings((prev) => ({
        ...prev,
        scale: e.target.value,
      }));
    }
  }

  const spectrogramScaleDropdown = () => {
    return (
      <div className="toggle-option">
        <label htmlFor="spectrogram-scale-dropdown">Scale</label>
        <select
          name='spectrogram-scale-dropdown'
          id='spectrogram-scale-dropdown'
          onChange={e => handleScaleInput(e)}
          defaultValue={spectrogramSettings.scale}
          disabled={!fileAvailable}
        >
          {spectrogramScales.map((scale, i) => (
            <option key={i} value={scale}>
              {scale}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <>
    {
      visualizerType === 'Waveform' &&
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
    }
    { visualizerType === 'Spectrogram' && userAdjustSpectrogram &&
      <>
        {fftSamplesSlider()}
        {spectrogramMinMaxSlider()}
        {spectrogramScaleDropdown()}
      </>
      
    }

    </>
  )
}