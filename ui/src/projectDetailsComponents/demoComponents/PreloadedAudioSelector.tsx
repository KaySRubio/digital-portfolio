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
    setSelectedFileDetails
  } = useDemoContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fileData: sampleFile = JSON.parse(e.target.value);
    setPreloadedUrl(fileData.location);
    setSelectedFileDetails(fileData);
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
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
};
export default PreloadedAudioSelector;

