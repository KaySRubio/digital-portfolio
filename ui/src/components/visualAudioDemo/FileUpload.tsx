import React, { useEffect, useRef, useState } from 'react';
import upload from '@/assets/svg/upload.svg';
import { useDemoContext } from "../../context/DemoContext";
import { checkImageFile, checkAudioFile } from '../../utils/checkFile';

type FileUploadProps = {
  children: React.ReactNode;
  type: 'audio' | 'image';
};

export const FileUpload = ({ children, type }: FileUploadProps) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [filename, setFilename] = useState('');
  const dropRef = useRef<HTMLDivElement | null>(null);
  const { 
    setUploadedFileUrl,
    setFileAvailable,
    setUserInputUrl,
    setSampleFileUrl,
    uploadedFileError,
    setUploadedFileError 
  } = useDemoContext();

  let accept;
  if(type === 'image') {
    accept = ".jpg,.JPG,.jpeg,.JPEG,.png,.PNG"
  } else {
    accept = ".wav, .opus"
  }

  useEffect(() => {
    if (fileUrl) {
      // clear url's for other inputs
      setUserInputUrl('');
      setSampleFileUrl('');
      setUploadedFileUrl(fileUrl);
      setFileAvailable(true);
    }
  }, [fileUrl]);

  const preventDefaults = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // const file = e.dataTransfer.files[0]; // check on audio
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if(file) handleFile(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleFile = async (file: File) => {
    let error;
    if(type === 'image') {
      error = await checkImageFile(file);
    } else {
      error = await checkAudioFile(file);
    }
    
    if(error) {
      setUploadedFileError(error);
    } else {
      setUploadedFileError('');
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setFilename(file.name);
    }
  };

  return (
    <div className='input-area-parent'>
      <h4 className='sr-only'>Upload</h4>
      <div className='upload-input-area'>
        
          <div
            className='drop-zone'
            ref={dropRef}
            onDrop={handleDrop}
            onDragOver={preventDefaults}
            onDragEnter={preventDefaults}
            onDragLeave={preventDefaults}
          >
            {fileUrl && type === 'image' ? 
              <img className='demo-uploaded-image' alt="User uploaded file" src={fileUrl} /> 
              : 
              <div>
                <img className='upload-icon' alt="" src={upload} />
                <p>Drag and drop a file here or</p>
                <button
                  onClick={() => dropRef.current?.querySelector('input')?.click()}
                  className='select-file-button'
                >
                  Select a file
                </button>
                <input type="file" accept={accept} onChange={handleChange} className='none' />
                <div>
                  <p>{filename}</p>
                </div>
              </div>
            }
          </div>
        
        <div>
          <div>
            <p className='error-msg'>{uploadedFileError}</p>
          </div>
          <div className='upload-button-row'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
/*
            <img className='input-icon' alt="" src={upload} />
            <p>Drag and drop a file here or</p>
            <button
              onClick={() => dropRef.current?.querySelector('input')?.click()}
              className='select-file-button'
            >
              Select a file
            </button>
            <input type="file" accept=".wav, .opus" onChange={handleChange} className='none' />
            <div>
              <p>{filename}</p>
            </div>
*/