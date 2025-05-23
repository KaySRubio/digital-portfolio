import React, { useEffect, useRef, useState } from 'react';
import '../projectDetails.css'
import upload from '@/assets/svg/upload.svg';
import { useDemoContext } from "../../context/DemoContext";

type AudioFileUploadProps = {
  children: React.ReactNode;
};

export const AudioFileUpload = ({ children }: AudioFileUploadProps) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const dropRef = useRef<HTMLDivElement | null>(null);
  const { 
    setUploadedUrl,
    setAudioFileAvailable,
    setRecordedUrl,
    setPreloadedUrl,
    uploadedFileError,
    setUploadedFileError 
  } = useDemoContext();
  
  const [filename, setFilename] = useState('');

  useEffect(() => {
    if (fileUrl) {
      // clear url's for other inputs
      setRecordedUrl('');
      setPreloadedUrl('');
      setUploadedUrl(fileUrl);
      setAudioFileAvailable(true);
    }
  }, [fileUrl]);

  const preventDefaults = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleFile = async (file: File) => {
    if (await checkFile(file)) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setFilename(file.name);
    }
  };

  const checkFile = async (file: File) => {
    try {
      if (file.type !== 'audio/wav' && file.type !== 'audio/opus') {
        setUploadedFileError(`File Format Error: ${file.type} not supported. Please upload .wav or .opus`);
      } else if (file.size > 1000000) {
        setUploadedFileError(`File Size Error: ${file.size} bytes is too large. File should be less than 10 MB`);
      } else {
        const metadata = await getAudioMetadata(file);
        if (metadata.duration > 30) {
          setUploadedFileError(
            `Duration Error: Audio is ${Math.round(metadata.duration)} seconds long. Audio should be less than 30 seconds`
          );
        } else {
          setUploadedFileError('');
          return true;
        }
      }
    } catch (e) {
      console.error('File load error:', e);
      setUploadedFileError('Failed to load audio. The file may be corrupt or unsupported.');
    }
    return false;
  };

  const getAudioMetadata = async (file: File) => {
    const audioContext = new AudioContext();
    const arrayBuffer = await file.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const duration = audioBuffer.duration; // in seconds
    const sampleRate = audioBuffer.sampleRate; // e.g. 44100 Hz
    const numberOfChannels = audioBuffer.numberOfChannels;

    return {
      duration,
      sampleRate,
      numberOfChannels,
    };
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

export default AudioFileUpload;
