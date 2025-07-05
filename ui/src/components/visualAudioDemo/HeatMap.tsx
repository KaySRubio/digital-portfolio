import { useDemoContext } from "../../context/DemoContext";
import type { HeatMap } from '../../types/portfolioTypes';
import Plot from 'react-plotly.js';
import get from 'lodash.get';

type Props = {
  data: HeatMap;
}

export default function HeatMap({data}: Props) {
  const { resultFromBackend } = useDemoContext();
  const array2D = get(resultFromBackend, data.path, [])

  // Calculate time per frame in seconds so you can show time on the x axis rather than frames
  let timeAxis = null;
  if(data.xAxisLabelMapping?.type === 'framesToTime') {
    const sr = data.xAxisLabelMapping.sampleRate;
    const hopLength = data.xAxisLabelMapping.hopLength;
    const numFrames = array2D.length;
    const timePerFrame = hopLength / sr;
    timeAxis = Array.from({ length: numFrames }, (_, i) => +(i * timePerFrame).toFixed(4));
  }

  return (
      <Plot
        className='heat-map'
        useResizeHandler
        data={[
          {
            z: array2D, // shape: [y][x] = [13][frames]
            x: timeAxis ? timeAxis : undefined,
            type: 'heatmap',
          },
        ]}
        layout={{
          title: {text: data.title ? data.title : ''},
          xaxis: {
            title: {text: data.xAxisTitle ? data.xAxisTitle : ''},
            tickmode: 'array',
            tickvals: data.xAxisLabelMapping?.type === 'numberToLabel' ? Object.keys(data.xAxisLabelMapping.mappings) : undefined,
            ticktext: data.xAxisLabelMapping?.type === 'numberToLabel' ? Object.values(data.xAxisLabelMapping.mappings) : undefined
          },
          yaxis: {
            title: {text:  data.yAxisTitle ? data.yAxisTitle : ''},
            tickmode: 'array',
            tickvals: data.yAxisLabelMapping?.type === 'numberToLabel' ? Object.keys(data.yAxisLabelMapping.mappings) : undefined,
            ticktext: data.yAxisLabelMapping?.type === 'numberToLabel' ? Object.values(data.yAxisLabelMapping.mappings) : undefined
          },
          
        }}
      />
  );
}
