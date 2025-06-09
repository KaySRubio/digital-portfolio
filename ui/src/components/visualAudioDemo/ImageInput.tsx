import { useState, useEffect } from 'react';
import FileUpload from './FileUpload';
import SampleImageSelector from './SampleImageSelector';
import CameraInput from './CameraInput';
import SubmitButton from './SubmitButton';
import photo  from '@/assets/svg/photo.svg';
import camera  from '@/assets/svg/camera.svg';
import upload  from '@/assets/svg/upload.svg';
import type { DemoBoard } from '../../types/portfolioTypes';
import { useDemoContext } from "../../context/DemoContext";

type ImageInputProps = {
  data: DemoBoard
}

export type ImageInput = 'Camera' | 'Samples' | 'Upload';

export default function ImageInput({data}: ImageInputProps) {
  const [imageInput, setImageInput] = useState<ImageInput>('Samples');
    const { 
      setUploadedFileUrl,
      setFileAvailable,
      setUserInputUrl,
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

  // When use changes type of input, clear url's and reset results from backend to null
  useEffect(() => {
    setUploadedFileUrl('');
    setSampleFileUrl('');
    setUserInputUrl('');
    setFileAvailable(false);
    setResultFromBackend(null);
    setUploadedFileError('');
    setSelectedFileDetails([]);
  }, [imageInput])


  let InputComponent;
  if (imageInput === 'Camera') {
    InputComponent = <CameraInput>{children}</CameraInput>;
  } else if (imageInput === 'Upload') {
    InputComponent = <FileUpload type='image'>{children}</FileUpload>;
  } else {
    if(data.sampleImages) {
      InputComponent = <SampleImageSelector sampleFileData={data.sampleImages} >{children}</SampleImageSelector >;
    } else {
      InputComponent = null;
    }
  }

  return (
    <div className={`interactive-box demo-input`}>
      <div className='interactive-box-header'>
        <h3>Image Input</h3>
      </div>

      <menu className='interactive-box-menu'>
        <li>
          <button
            onClick={() => setImageInput('Camera')}
            className={`
              interactive-box-menu-item
              ${imageInput === 'Camera' ? 'active-interactive-box-menu' : ''}
            `}
          >
            <img className='input-icon' alt="" src={camera} />
            Camera
          </button>
        </li>
        <li>
          <button
            onClick={() => setImageInput('Samples')}
            className={`
              interactive-box-menu-item
              ${imageInput === 'Samples' ? 'active-interactive-box-menu' : ''}
            `}
          >
            <img className='input-icon' alt="" src={photo} />
            Samples
          </button>
        </li>
        <li>
          <button
            onClick={() => setImageInput('Upload')}
            className={`
              interactive-box-menu-item
              ${imageInput === 'Upload' ? 'active-interactive-box-menu' : ''}
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
