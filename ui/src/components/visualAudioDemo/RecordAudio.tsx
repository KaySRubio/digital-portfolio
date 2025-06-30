import React, { useState } from 'react';
import DownloadButton from './DownloadButton';
import { useDemoContext } from "../../context/DemoContext";
import type { Input } from '../../types/portfolioTypes';

type RecordAudioProps = {
  children: React.ReactNode,
  data: Input,
};

const RecordAudio: React.FC<RecordAudioProps> = ({ children, data }) => {
  const { isRecording, setIsRecording, recordedUrl, fileAvailable, recordPluginRef } = useDemoContext();
  const [recordError, setRecordError] = useState<string>('');
  const recordLimit = data.audioLengthLimitInSeconds ? data.audioLengthLimitInSeconds : 30;
  const recordLimitMs = recordLimit * 1000;
  

  const handleRecordClick = () => {
    setIsRecording(prev => !prev);

    const recordPlugin = recordPluginRef.current;
    if (recordPlugin) {
      if (recordPlugin.isRecording()) {
        recordPlugin.stopRecording();
        setIsRecording(false);
      } else {
        recordPlugin.startRecording();
        setRecordError('')
        setTimeout(() => {
          if(recordPlugin.isRecording()) {
            recordPlugin.stopRecording();
            setRecordError(`Recording limit for this demo is ${recordLimit} seconds`)
            setIsRecording(false);
          }
        }, recordLimitMs)
        setIsRecording(true);
      }
    }
  }; 

  return (
    <div className='input-area-parent'>
      <h4 className='sr-only'>Record</h4>
      <div className={`input-area record-input-area`}>
        <button className='record-button' onClick={handleRecordClick}>
          <div className='record-dot'>
            <div className={`${isRecording ? 'record-dot-on' : 'record-dot-off'}`} />
          </div>
          Record
        </button>
        <DownloadButton userInputUrl={recordedUrl} enabled={fileAvailable} label='Download Audio' />
        {children}
      </div>
      <p className='error-msg'>{recordError}</p>
    </div>
  );
};

export default RecordAudio;


