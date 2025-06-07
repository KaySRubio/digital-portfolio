
import type { DemoBoard } from '../../types/portfolioTypes';
import { DemoProvider } from '../../context/DemoContext';
import AudioInput from './AudioInput';
import Visualizer from './Visualizer';
import Results from './Results';

type DemoBoardProps = {
  data: DemoBoard
}

export default function SoundBoard({data}: DemoBoardProps) {
  return (
    <DemoProvider>
      <div className='demo-board'>
        <AudioInput data={data} />
        <Visualizer />
        <Results data={data}/>
      </div>
    </DemoProvider>
  );
}

