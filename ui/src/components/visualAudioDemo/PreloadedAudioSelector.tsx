import PreloadedFileDropdown from './PreloadedFileDropdown';
import { useDemoContext } from "../../context/DemoContext";
import type { SampleFile } from '../../types/portfolioTypes';

type PreloadedAudioSelectorProps = {
  children: React.ReactNode;
  sampleFileData: SampleFile[];
};

export const PreloadedAudioSelector = ({ children, sampleFileData }: PreloadedAudioSelectorProps) => {
  const {
    setUploadedFileUrl,
    setFileAvailable,
    setRecordedUrl,
    setSampleFileUrl,
    setSelectedFileDetails,
  } = useDemoContext();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fileData: SampleFile = JSON.parse(e.target.value);
    setSampleFileUrl(fileData.location);
    setSelectedFileDetails(fileData);
    setFileAvailable(true);
    // clear url's for other inputs
    setRecordedUrl('');
    setUploadedFileUrl('');
  };



  return (
    <div className='input-area-parent'>
      <h4 className='sr-only'>Preloaded</h4>
      <div className='preloaded-input-area'>
        <div>
          <PreloadedFileDropdown
            options={sampleFileData}
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

