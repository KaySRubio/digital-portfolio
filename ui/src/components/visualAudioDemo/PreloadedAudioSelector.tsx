import { useEffect } from 'react';
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
    selectedFileDetails,
    setResultFromBackend,
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

  // when sample data loads, set the file and the result to the sample data
  useEffect(() => {
    if(sampleFileData.length > 0) {
      setSampleFileUrl(sampleFileData[0].location);
      setSelectedFileDetails(sampleFileData[0]);
      setFileAvailable(true);
      setResultFromBackend(sampleFileData[0].sampleResults);
    }
  }, [sampleFileData])

  // set results when the user changes the preloaded sample using the dropdown
  useEffect(() => {
    setResultFromBackend(selectedFileDetails.sampleResults);
  },[selectedFileDetails])
  
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
            value={selectedFileDetails ? JSON.stringify(selectedFileDetails) : 'default'}
            // value={'default'}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
};
export default PreloadedAudioSelector;

