
import type { DemoBoard } from '../../types/portfolioTypes';
import { DemoProvider } from '../../context/DemoContext';
import AudioInput from './AudioInput';
import Visualizer from './Visualizer';
import '../projectDetails.css'

type DemoBoardProps = {
  data: DemoBoard
}

export default function SoundBoard({data}: DemoBoardProps) {
  return (
    <DemoProvider>
      <div className='demo-board'>
        <div className='align-row-demo-board'>
          <AudioInput data={data} />
          <Visualizer />
        </div>
      </div>
    </DemoProvider>
  );
}

