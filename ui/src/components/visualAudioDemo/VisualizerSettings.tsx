import { useState } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import PlayButton from './PlayButton';
import type { DemoBoard, LineSpreadPointsOverlaySetup, TimeStampedLineOverlaySetup } from '../../types/portfolioTypes';
import BasicVisualizerSettings from './BasicVisualizerSettings';
import RegionSettings from './RegionSettings';
import VisualizerCanvasToggles from './VisualizerCanvasToggles';

type Props = {
  data: DemoBoard,
  waveformCanvasSetup: (LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup)[] | undefined,
  spectrogramCanvasSetup: (LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup)[] | undefined,
}

type HelpInfo = {
  show: boolean,
  text: string
}

export default function VisualizerSettings({data, waveformCanvasSetup, spectrogramCanvasSetup}: Props) {
  const { visualizerType } = useDemoContext();
  const [showSpectrogramHelp, setShowSpectrogramHelp] = useState(false);
  const [showSpectrogramOffHelp, setShowSpectrogramOffHelp] = useState(false);

  const [regionHelp, setRegionHelp] = useState<HelpInfo[]>([]);
  const [waveformLineOverlayHelp, setWaveformLineOverlayHelp] = useState<HelpInfo[]>([]);
  const [spectrogramLineOverlayHelp, setSpectrogramLineOverlayHelp] = useState<HelpInfo[]>([]);

  const spectrogramHelpText = 'Spectrograms are awesome! ...but they are also large and may slow down the page so turn on with caution.'
  const spectrogramOffHelpText = 'Refresh the browser tab to turn off the spectrogram';

  return (
    <>
      <h4 className='sr-only'>Settings</h4>
      <div className="vizualizer-options">
        <div className="play-button-area"><PlayButton /></div>

        {
          data.input && 
          data.input.audioVisualizerSettings && 
          visualizerType === 'Waveform' &&
          <BasicVisualizerSettings 
          data={data.input.audioVisualizerSettings}
          setShowSpectrogramHelp={setShowSpectrogramHelp}
          setShowSpectrogramOffHelp={setShowSpectrogramOffHelp}
        />}
        {
          data.results && 
          data.results.regionSetup && 
          data.results.regionSetup.length > 0 &&
          visualizerType === 'Waveform' &&
          <RegionSettings data={data.results.regionSetup} setRegionHelp={setRegionHelp}/>
        }
        { 
          waveformCanvasSetup && 
          waveformCanvasSetup.length > 0 &&
          visualizerType === 'Waveform' &&
          <VisualizerCanvasToggles setHelp={setWaveformLineOverlayHelp} type={'waveform'} />
        }
        { 
          spectrogramCanvasSetup &&
          spectrogramCanvasSetup.length > 0 &&
          visualizerType === 'Spectrogram' &&
          <VisualizerCanvasToggles setHelp={setSpectrogramLineOverlayHelp} type={'spectrogram'} />
        }
      </div>

      {showSpectrogramHelp && <p className='visualizer-help-text'>{spectrogramHelpText}</p>}
      {showSpectrogramOffHelp && <p className='visualizer-help-text'>{spectrogramOffHelpText}</p>}
      {regionHelp.map((helpInfo, i) => helpInfo.show && <p key={i} className='visualizer-help-text'>{helpInfo.text}</p>)}
      {waveformLineOverlayHelp.map((helpInfo, i) => helpInfo.show && <p key={i} className='visualizer-help-text'>{helpInfo.text}</p>)}
      {spectrogramLineOverlayHelp.map((helpInfo, i) => helpInfo.show && <p key={i} className='visualizer-help-text'>{helpInfo.text}</p>)}
    </>
  )
}