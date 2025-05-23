import React from 'react';
import PlayButton from './PlayButton';
import { useDemoContext } from "../../context/DemoContext";
import '../projectDetails.css'

export default function Visualizer() {
  const { waveformRef } = useDemoContext();

  return (
    <div className={`interactive-box interactive-box-half-screen`}>
      <div className='interactive-box-header'>
        <h3>Audio Visualizer</h3>
      </div>
      <div className='visualizer-body'>
        <PlayButton />
        <div id="waveform" ref={waveformRef} className='waveform-area' />
      </div>
    </div>
  );
}
