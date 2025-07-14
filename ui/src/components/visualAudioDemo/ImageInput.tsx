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
      setUserPhotoUrl,
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
    setUserPhotoUrl('');
    setFileAvailable(false);
    setResultFromBackend(null);
    setUploadedFileError('');
    setSelectedFileDetails([]);
  }, [imageInput])


  let InputComponent;
  if (imageInput === 'Camera') {
    InputComponent = <CameraInput>{children}</CameraInput>;
  } else if (imageInput === 'Upload' && data.input) {
    InputComponent = <FileUpload type='image' data={data.input}>{children}</FileUpload>;
  } else {
    if(data.input?.sampleImages) {
      InputComponent = <SampleImageSelector sampleFileData={data.input?.sampleImages} >{children}</SampleImageSelector >;
    } else {
      InputComponent = null;
    }
  }

  return (
    <div className={`interactive-box demo-input`}>
      <div className='interactive-box-header'>
        <h3>Image Input</h3>
      </div>

      <div role="radiogroup" className='interactive-box-menu' aria-label='Select source for image input'>
        <li role="presentation">
          <button
            onClick={() => setImageInput('Camera')}
            className={`
              interactive-box-menu-item
              ${imageInput === 'Camera' ? 'active-interactive-box-menu' : ''}
            `}
            role="radio"
          >
            <img className='input-icon' alt="" src={camera} />
            Camera
          </button>
        </li>
        <li role="presentation">
          <button
            onClick={() => setImageInput('Samples')}
            className={`
              interactive-box-menu-item
              ${imageInput === 'Samples' ? 'active-interactive-box-menu' : ''}
            `}
            role="radio"
          >
            <img className='input-icon' alt="" src={photo} />
            Samples
          </button>
        </li>
        <li role="presentation">
          <button
            onClick={() => setImageInput('Upload')}
            className={`
              interactive-box-menu-item
              ${imageInput === 'Upload' ? 'active-interactive-box-menu' : ''}
            `}
            role="radio"
          >
            <img className='input-icon' alt="" src={upload} />
            Upload
          </button>
        </li>
      </div>
      <div>{InputComponent}</div>
    </div>
  );
}
