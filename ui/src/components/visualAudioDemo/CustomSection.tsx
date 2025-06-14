import type { CustomSection } from '../../types/portfolioTypes';
import { renderComponent } from '../../utils/renderComponent';


type CustomSectionProps = {
  data: CustomSection;
}

export type AudioInput = 'Preloaded' | 'Record' | 'Upload';

export default function CustomSection({data}: CustomSectionProps) {
  
  return (
    <div className={`interactive-box demo-directions`}>
      <div className='interactive-box-header'>
        <h3>{data.displayText}</h3>
      </div>
      { data.elements.map((el, idx) => renderComponent(el, idx))}
    </div>
  );
}
