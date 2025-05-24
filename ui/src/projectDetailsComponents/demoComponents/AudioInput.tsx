import { useState, useEffect } from 'react';
import AudioFileUpload from './AudioFileUpload';
import PreloadedAudioSelector from './PreloadedAudioSelector';
import RecordAudio from './RecordAudio';
import SubmitButton from './SubmitButton';
// import { ICONS } from '../icons';
import '../projectDetails.css'
import microphone  from '@/assets/svg/microphone.svg';
import music  from '@/assets/svg/music.svg';
import upload  from '@/assets/svg/upload.svg';
import type { DemoBoard } from '../../types/portfolioTypes';
import { useDemoContext } from "../../context/DemoContext";

type DemoBoardProps = {
  data: DemoBoard
}

export default function AudioInput({data}: DemoBoardProps) {
  const [audioInput, setAudioInput] = useState('Preloaded');
    const { 
      setUploadedUrl,
      setAudioFileAvailable,
      setRecordedUrl,
      setPreloadedUrl,
      setUploadedFileError,
      setResultFromBackend,
    } = useDemoContext();

  const children = (
    <>
      <SubmitButton />
    </>
  );

  // When use changes type of audio input, clear url's and reset results from backend to null
  useEffect(() => {
    setUploadedUrl('');
    setPreloadedUrl('');
    setRecordedUrl('');
    setAudioFileAvailable(false);
    setResultFromBackend(null);
    setUploadedFileError('');
  }, [audioInput])


  let InputComponent;
  if (audioInput === 'Record') {
    InputComponent = <RecordAudio>{children}</RecordAudio>;
  } else if (audioInput === 'Upload') {
    InputComponent = <AudioFileUpload>{children}</AudioFileUpload>;
  } else {
    InputComponent = <PreloadedAudioSelector preloadedFileData={data.sampleAudio} >{children}</PreloadedAudioSelector>;
  }

  return (
    <div className={`interactive-box demo-input`}>
      <div className='interactive-box-header'>
        <h3>Input</h3>
      </div>

      <menu className='interactive-box-menu'>
        <li>
          <button
            onClick={() => setAudioInput('Record')}
            className={`
              interactive-box-menu-item
              ${audioInput === 'Record' ? 'active-interactive-box-menu' : ''}
            `}
          >
            <img className='input-icon' alt="" src={microphone} />
            Record
          </button>
        </li>
        <li>
          <button
            onClick={() => setAudioInput('Preloaded')}
            className={`
              interactive-box-menu-item
              ${audioInput === 'Preloaded' ? 'active-interactive-box-menu' : ''}
            `}
          >
            <img className='input-icon' alt="" src={music} />
            Preloaded
          </button>
        </li>
        <li>
          <button
            onClick={() => setAudioInput('Upload')}
            className={`
              interactive-box-menu-item
              ${audioInput === 'Upload' ? 'active-interactive-box-menu' : ''}
            `}
          >
            <img className='input-icon' alt="" src={upload} />
            Upload
          </button>
        </li>
      </menu>
      <div>{InputComponent}</div>
    </div>
  );
}
