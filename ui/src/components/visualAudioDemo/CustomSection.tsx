import type { CustomSection } from '../../types/portfolioTypes';
import { renderComponent } from '../../utils/renderComponent';


type CustomSectionProps = {
  data: CustomSection;
}

export type AudioInput = 'Preloaded' | 'Record' | 'Upload';

export default function CustomSection({data}: CustomSectionProps) {
  if(!data.size) data.size='half-screen';
  
  return (
    <div className={`interactive-box demo-custom-section ${data.size} ${data.className}`}>
      <div className='interactive-box-header'>
        <h3>{data.displayText}</h3>
      </div>
      <div className='demo-custom-section-content'>
        {data.elements.map((el, idx) => renderComponent(el, idx))}
      </div>
    </div>
  );
}
