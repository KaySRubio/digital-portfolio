import PreloadedFileDropdown from './PreloadedFileDropdown';
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
    setResultFromBackend
  } = useDemoContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fileData: sampleFile = JSON.parse(e.target.value);
    setPreloadedUrl(fileData.location);
    setResultFromBackend(fileData.results);
    setAudioFileAvailable(true);
    // clear url's for other inputs
    setRecordedUrl('');
    setUploadedUrl('');
  };

  return (
    <div className='input-area-parent'>
      <h4 className='sr-only'>Preloaded</h4>
      <div className='preloaded-input-area'>
        <div>
          <PreloadedFileDropdown
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
