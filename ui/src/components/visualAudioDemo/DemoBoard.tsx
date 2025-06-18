
import type { DemoBoard } from '../../types/portfolioTypes';
import { DemoProvider } from '../../context/DemoContext';
import AudioInput from './AudioInput';
import ImageInput from './ImageInput';
import Visualizer from './Visualizer';
import Results from './Results';
import CustomSection from './CustomSection';

type DemoBoardProps = {
  data: DemoBoard
}

export default function SoundBoard({data}: DemoBoardProps) {
  return (
    <DemoProvider>
      <div className='demo-board'>
        {data.customSection && <CustomSection data={data.customSection} />}
        {data.input?.types.includes('image') && <ImageInput data={data} />}
        {data.input?.types.includes('audio') && <AudioInput data={data} />}
        {data.input?.types.includes('audio') &&  <Visualizer data={data} /> }
        <Results data={data}/>
      </div>
    </DemoProvider>
  );
}

