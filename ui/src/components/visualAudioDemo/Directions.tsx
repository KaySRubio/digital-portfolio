import type { ProjectDetailComponent } from '../../types/portfolioTypes';
import { renderComponent } from '../../utils/renderComponent';


type DirectionsProps = {
  directions: ProjectDetailComponent[];
}

export type AudioInput = 'Preloaded' | 'Record' | 'Upload';

export default function Directions({directions}: DirectionsProps) {
  
  return (
    <div className={`interactive-box demo-directions`}>
      <div className='interactive-box-header'>
        <h3>Directions</h3>
      </div>
      { directions.map((el, idx) => renderComponent(el, idx))}
    </div>
  );
}
