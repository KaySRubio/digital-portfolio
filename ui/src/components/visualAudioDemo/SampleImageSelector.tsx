import { useState } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import type { SampleFile } from '../../types/portfolioTypes';

type SampleImageSelectorProps = {
  children: React.ReactNode;
  sampleFileData: SampleFile[];
};

export const SampleImageSelector = ({ children, sampleFileData }: SampleImageSelectorProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const {
    setUploadedFileUrl,
    setFileAvailable,
    setUserInputUrl,
    setSampleFileUrl,
    setSelectedFileDetails
  } = useDemoContext();

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setActiveIndex(index);
    const button = e.currentTarget;
    const fileData: SampleFile = button.dataset.file ? JSON.parse(button.dataset.file) : null;
    setSampleFileUrl(fileData.location);
    setSelectedFileDetails(fileData);
    setFileAvailable(true);
    // clear url's for other inputs
    setUserInputUrl('');
    setUploadedFileUrl('');
  };

  return (
    <div className='input-area-parent-image'>
      <h4 className='sr-only'>Samples</h4>
      <div className='preloaded-input-area'>
        <div>
          {sampleFileData.map((file, index) => (
            <button 
              key={`image-${index}`}
              className='demo-image-button'
              onClick={(e) => handleChange(e, index)}
              data-file={JSON.stringify(file)}
            >
              <img className={`demo-sample-image ${activeIndex === index ? 'active' : ''}`} src={file.location} alt={file.alt} />
            </button>
          ))}
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
};
export default SampleImageSelector;

