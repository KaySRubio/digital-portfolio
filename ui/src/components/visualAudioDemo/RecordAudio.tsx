import React from 'react';
import DownloadButton from './DownloadButton';
import { useDemoContext } from "../../context/DemoContext";

type RecordAudioProps = {
  children: React.ReactNode;
};

const RecordAudio: React.FC<RecordAudioProps> = ({ children }) => {
  const { isRecording, setIsRecording, recordedUrl, audioFileAvailable, recordPluginRef } = useDemoContext();
  
  const handleRecordClick = () => {
    setIsRecording(prev => !prev);

    const recordPlugin = recordPluginRef.current;
    if (recordPlugin) {
      if (recordPlugin.isRecording()) {
        recordPlugin.stopRecording();
        setIsRecording(false);
      } else {
        recordPlugin.startRecording();
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
        <DownloadButton recordedUrl={recordedUrl} enabled={audioFileAvailable} />
        {children}
      </div>
    </div>
  );
};

export default RecordAudio;


