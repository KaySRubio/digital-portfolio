
import type { DemoBoard } from '../../types/portfolioTypes';
import { DemoProvider } from '../../context/DemoContext';
import AudioInput from './AudioInput';
import ImageInput from './ImageInput';
import Visualizer from './Visualizer';
import Results from './Results';
import Directions from './Directions';

type DemoBoardProps = {
  data: DemoBoard
}

export default function SoundBoard({data}: DemoBoardProps) {
  return (
    <DemoProvider>
      <div className='demo-board'>
        {data.directions && <Directions directions={data.directions} />}
        {/* to do add ImageInput */}
        {data.input?.includes('image') && <ImageInput data={data} />}
        {data.input?.includes('audio') && <AudioInput data={data} />}
        {data.input?.includes('audio') &&  <Visualizer /> }
        <Results data={data}/>
      </div>
    </DemoProvider>
  );
}

