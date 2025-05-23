import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
// import MoreInformationButton from '../buttons/MoreInformationButton';
/* import {
  fluencyPreloadedAudioFileData,
  recognitionPreloadedAudioFileData,
  verificationPreloadedAudioFileData,
} from '../data/preloadedAudioFileData'; */
// import { preloadedAudioFile, preloadedAudioFileData } from '../types/type';
// import { SpeechApiEnum } from '../types/type';
import { useDemoContext } from "../../context/DemoContext";
import '../projectDetails.css'
import type { sampleFile } from '../../types/portfolioTypes';

type PreloadedAudioSelectorProps = {
  children: React.ReactNode;
  preloadedFileData: sampleFile[];
};

export const PreloadedAudioSelector = ({ children, preloadedFileData }: PreloadedAudioSelectorProps) => {
  const {
    setUploadedUrl,
    setAudioFileAvailable,
    setRecordedUrl,
    setPreloadedUrl,
    // selectedPreloadedFileData,
    // setSelectedPreloadedFileData,
  } = useDemoContext();

  const [fileUrl, setFileUrl] = useState<string | null>(null);
  // const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  useEffect(() => {
    if (fileUrl) {
      // clear url's for other inputs
      setRecordedUrl('');
      setPreloadedUrl(fileUrl);
      setUploadedUrl('');
      setAudioFileAvailable(true);
    }
  }, [fileUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value;
    setFileUrl(url);
    // setSelectedPreloadedFileData(selectedFile);
  };

  // const handleMoreInfoButtonClick = () => {
    // setShowMoreInfo(prev => !prev);
  // };

  return (
    <div className='input-area-parent'>
      <h4 className='sr-only'>Preloaded</h4>
      <div className='preloaded-input-area'>
        <div>
          <Dropdown
            options={preloadedFileData}
            name="preloaded"
            handleChange={handleChange}
            defaultOption="-- Select an audio file --"
            className='preloaded-audio-selector-dropdown'
          />
          {/*<MoreInformationButton onClick={handleMoreInfoButtonClick} />*/}
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
};
export default PreloadedAudioSelector;

/*
    <div className='inputAreaParent'}'>
      <h4 className='sr-only'>Preloaded</h4>
      <div className={`${styles.preloadedInputArea}`}>
        <div>
          <Dropdown
            options={preloadedFileData}
            name="preloaded"
            handleChange={handleChange}
            defaultOption="-- Select a file --"
            className={styles.preloadedAudioSelectorDropdown}
          />
          {<MoreInformationButton onClick={handleMoreInfoButtonClick} />}
        </div>
        {showMoreInfo && (
          {<span className={styles.moreInfoBox}>
            {selectedPreloadedFileData.age && <p>Age: {selectedPreloadedFileData.age}</p>}
            {selectedPreloadedFileData.gender && <p>Gender: {selectedPreloadedFileData.gender}</p>}
            {selectedPreloadedFileData.accent && <p>Accent: {selectedPreloadedFileData.accent}</p>}
            {selectedPreloadedFileData.region_code && <p>Region code: {selectedPreloadedFileData.region_code}</p>}
            {selectedPreloadedFileData.notes && <p>Notes: {selectedPreloadedFileData.notes}</p>}
          </span> }
        )}
        <div>{children}</div>
      </div>
    </div>
  );
*/
