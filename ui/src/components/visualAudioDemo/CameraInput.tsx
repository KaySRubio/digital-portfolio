import React, {useRef, useCallback } from 'react';
import DownloadButton from './DownloadButton';
import { useDemoContext } from "../../context/DemoContext";
import Webcam from 'react-webcam';
import shutter_button from '@/assets/png/shutter_button2.png';
import camera_button from '@/assets/png/camera_button2.png';
import { resizeImage } from '../../utils/fileUtils';

type CameraInputProps = {
  children: React.ReactNode;
};

const CameraInput: React.FC<CameraInputProps> = ({ children }) => {
  const { setUserInputUrl, userInputUrl, fileAvailable, setFileAvailable } = useDemoContext();
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(
    () => {
      const screenshot = webcamRef.current?.getScreenshot();
        if(screenshot) {
          resizeImage(screenshot, 224, 224, (resizedImage) => {
          setUserInputUrl(resizedImage);
          setFileAvailable(true);
        });
      }
    },
    [webcamRef]
  );

  const videoConstraints = {
    width: 200,
    height: 140,
  };

  return (
    <div className='input-area-parent-image'>
      <h4 className='sr-only'>Camera</h4>
      <div className={`input-area centered-row`}>
        {userInputUrl ?
        <img className='demo-user-photo' src={userInputUrl} alt='Photo taken by user' />
        : <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={200}
          height={140}
          videoConstraints={videoConstraints}
        />}
        <div className='column'>
          <div className='button-row'>
            <button 
              className={`photo-button ${userInputUrl ? 'enabled' : 'disabled'}`}
              onClick={() => setUserInputUrl('')}
            >
              <img className='icon-30px' src={camera_button} alt='' />
            </button>
            <button className={`photo-button ${userInputUrl ? 'disabled' : 'enabled'}`} onClick={capture}>
              <img className='icon-30px' src={shutter_button} alt='' />
            </button>
          </div>
          {children}
          <DownloadButton userInputUrl={userInputUrl} enabled={fileAvailable} label='Download Image' />
        </div>
      </div>
    </div>
  )
};
export default CameraInput;
