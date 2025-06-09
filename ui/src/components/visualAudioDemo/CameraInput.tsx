import React from 'react';
import DownloadButton from './DownloadButton';
import { useDemoContext } from "../../context/DemoContext";

type CameraInputProps = {
  children: React.ReactNode;
};

const CameraInput: React.FC<CameraInputProps> = ({ children }) => {
  /*
  const { isRecording, setIsRecording, userInputUrl, audioAvailable, recordPluginRef } = useDemoContext();
  
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
        <DownloadButton userInputUrl={userInputUrl} enabled={audioAvailable} />
        {children}
      </div>
    </div>
  );
  */
 return (
  <div className='input-area-parent'>
    <h4 className='sr-only'>Camera</h4>
    <div className={`input-area record-input-area`}>
      <p>Use Camera</p>
      {children}
    </div>
  </div>
 )
};

export default CameraInput;


