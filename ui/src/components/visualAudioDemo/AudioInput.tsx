import { useState, useEffect } from 'react';
import FileUpload from './FileUpload';
import PreloadedAudioSelector from './PreloadedAudioSelector';
import RecordAudio from './RecordAudio';
import SubmitButton from './SubmitButton';
import microphone  from '@/assets/svg/microphone.svg';
import music  from '@/assets/svg/music.svg';
import upload  from '@/assets/svg/upload.svg';
import type { DemoBoard } from '../../types/portfolioTypes';
import { useDemoContext } from "../../context/DemoContext";

type AudioInputProps = {
  data: DemoBoard
}

export type AudioInput = 'Samples' | 'Record' | 'Upload';

export default function AudioInput({data}: AudioInputProps) {
  const [audioInput, setAudioInput] = useState<AudioInput>('Samples');
    const { 
      setUploadedFileUrl,
      setFileAvailable,
      setRecordedUrl,
      setSampleFileUrl,
      setUploadedFileError,
      setResultFromBackend,
      setSelectedFileDetails,
    } = useDemoContext();

  const children = (
    <>
      <SubmitButton requests={data.requests} />
    </>
  );

  // When use changes type of audio input, clear url's and reset results from backend to null
  useEffect(() => {
    setUploadedFileUrl('');
    setSampleFileUrl('');
    setRecordedUrl('');
    setFileAvailable(false);
    setResultFromBackend(null);
    setUploadedFileError('');
    setSelectedFileDetails([]);
  }, [audioInput])


  let InputComponent;
  if (audioInput === 'Record' && data.input) {
    InputComponent = <RecordAudio data={data.input}>{children}</RecordAudio>;
  } else if (audioInput === 'Upload' && data.input) {
    InputComponent = <FileUpload type='audio' data={data.input}>{children}</FileUpload>;
  } else {
    if(data.input?.sampleAudio) {
      InputComponent = <PreloadedAudioSelector sampleFileData={data.input.sampleAudio} >{children}</PreloadedAudioSelector>;
    } else {
      InputComponent = null;
    }
  }

  return (
    <div className={`interactive-box demo-input`}>
      <div className='interactive-box-header'>
        <h3>Audio Input</h3>
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
            onClick={() => setAudioInput('Samples')}
            className={`
              interactive-box-menu-item
              ${audioInput === 'Samples' ? 'active-interactive-box-menu' : ''}
            `}
          >
            <img className='input-icon' alt="" src={music} />
            Samples
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
