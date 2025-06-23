import { useState, useEffect } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import JSONViewer from './JSONViewer';
import DisclosurePanel from '../projectDescriptions/DisclosurePanel';
import ClassificationResults from './ClassificationResults';
import type {
  ResultTab,
  ResultForEachModel,
  DemoBoard,
  MyRegion,
  RegionSetup,
  LineSpreadPointsOverlaySetup,
  TimeStampedLineOverlaySetup,
  TimeStampedLineOverlaySectionData,
} from '../../types/portfolioTypes';
import { renderComponent } from '../../utils/renderComponent';
import json from '@/assets/png/json.png';
import get from 'lodash.get';
import { randomRegionColors } from '../../data/helperData';
import { applyNormalization } from '../../utils/fileUtils';

type ResultsProps = {
  data: DemoBoard;
};

export default function Results({ data }: ResultsProps) {
  const defaultResults = data.results.tabs ? data.results.tabs[0]?.type : 'Json';
  const [resultToShow, setResultToShow] = useState(defaultResults);
  const {
    resultFromBackend,
    waitingForResults,
    requestFromBackendError,
    setRegionGroups,
    setWaveformOverlays,
    // setSpectrogramOverlays,
  } = useDemoContext();

  const renderDisclosurePanel = (model: ResultForEachModel, index: number) => {
    const title = (
      <div>
        {model.description?.map((el, index) => (renderComponent(el, index)))}
      </div>
    );
    // portfolioData uses a textFromPath to find the text in the resultFromBackend data using a path
    const resultData = resultFromBackend;
    const children = (
      <div>
        {model.results?.map((el, index) => (renderComponent(el, index, resultData)))}
      </div>
    );

    return (
      <DisclosurePanel 
        key={index}
        title={title}
        children={children}
        index={index}
        className='demo-results-disclosure-panel'
        expandedByDefault={true}
      />
    )
  }

  const showPlaceholder = () => {
    if(requestFromBackendError) {
      return (<p className='center'>{requestFromBackendError}</p>)
    } else if (waitingForResults) {
      return (
        <div className="spinner-wrapper">
          <div className="spinner" />
        </div>
      );
    } else {
      return (<p className='center'>Choose file and click Submit</p>)
    }
  }

  useEffect(() => {
    if (data.results && resultFromBackend) {
      if(data.results.regionSetup && data.results.regionSetup.length > 0) {
        const regionGroups: MyRegion[][] = [];
        data.results.regionSetup.forEach(regionSetup => {
          const regions = get(resultFromBackend, regionSetup.path, [])
          const regionsWithColor = giveRegionsColor(regions, regionSetup)
          regionGroups.push(regionsWithColor);
        })
        setRegionGroups(regionGroups);
      }

      if(data.results.lineOverlaySetup && data.results.lineOverlaySetup.length > 0) {
        const newWaveformOverlays: (LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup)[] = [];
        data.results.lineOverlaySetup.forEach(lineOverlaySetup => {
          if(lineOverlaySetup.default !== 'off') {
            const normalized_min = lineOverlaySetup.normalized_min ? lineOverlaySetup.normalized_min : 0.5;
            const normalized_max = lineOverlaySetup.normalized_max ? lineOverlaySetup.normalized_max : 1;
            if(lineOverlaySetup.type === 'line-spread-points') {
              const values: number[] = get(resultFromBackend, lineOverlaySetup.path, []);
              // Apply min-max normalization to the values so they now range from 0.5 - 1 and 
              // will be drawn in good locations on waveform
              const normalizedValues: number[] = applyNormalization(
                values,
                lineOverlaySetup.min,
                lineOverlaySetup.max,
                normalized_min,
                normalized_max
              );
              lineOverlaySetup.values = [...normalizedValues];
              newWaveformOverlays.push(lineOverlaySetup);
            } else if (lineOverlaySetup.type === 'time-stamped-lines') {

              const sectionsInResults: TimeStampedLineOverlaySectionData[] = get(resultFromBackend, lineOverlaySetup.path, []);
              sectionsInResults.forEach(section => {
                const normalizedValues: number[] = applyNormalization(
                  section.values,
                  lineOverlaySetup.min,
                  lineOverlaySetup.max,
                  normalized_min,
                  normalized_max
                );
                lineOverlaySetup.sections.push({values: [...normalizedValues], start_ms: section.start_ms})
              })
              newWaveformOverlays.push(lineOverlaySetup);
            }
          }
        })
        
        setWaveformOverlays(newWaveformOverlays)
      }
    }

  }, [resultFromBackend])

  const giveRegionsColor = (regions: MyRegion[], regionSetup: RegionSetup) => {
    if(!regionSetup) return regions;
    const useRandomColors = regionSetup.useRandomColors;
    if(useRandomColors) {
      return regions.map((region: MyRegion, i: number) => ({
        ...region,
        color: randomRegionColors[i % randomRegionColors.length],
      }));

    } else if (regionSetup.colorMappings) {
      
      const colorMappings = regionSetup.colorMappings;
      const defaultColor = regionSetup.defaultColor;
      return regions.map((region: MyRegion) => {
        let mapping;
        if(colorMappings[0].type) {
          mapping = colorMappings.find(m => m.type === region.type);
        } else if (colorMappings[0].content) {
          mapping = colorMappings.find(m => m.content === region.content);
        }
          
        return {
          ...region,
          color: mapping?.color || defaultColor
        };
      });
    } else if (regionSetup.defaultColor ) {
      return regions.map((region: MyRegion) => ({
        ...region,
        color: regionSetup.defaultColor,
      }));
    }
    return regions;
  }

  return (
    <div className={`interactive-box interactive-box-results`}>
      <div className='interactive-box-header'>
        <h3>Results</h3>
      </div>

      <menu className='interactive-box-menu'>
        {data.results.tabs && data.results.tabs.map((tab: ResultTab, index: number) => (
          <li key={index}>
            <button
              onClick={() => setResultToShow(tab.type)}
              className={`
              interactive-box-menu-item
              ${resultToShow === tab.type ? 'active-interactive-box-menu' : ''}
            `}
            >
              <img className='input-icon-large' alt="" src={tab.icon} />
              {tab.displayText}
            </button>
          </li>
        ))
        }
        <li>
          <button
            onClick={() => setResultToShow('Json')}
            className={`
              interactive-box-menu-item
              ${resultToShow === 'Json' ? 'active-interactive-box-menu' : ''}
            `}
          >
            <img className='input-icon-large' alt="" src={json} />
            Json
          </button>
        </li>
      </menu>
      {resultFromBackend && data.results.tabs && data.results.tabs.map((tab: ResultTab, index: number) => {
        // Classification results get a specially formatted tab
        if(resultToShow === tab.type && tab.type === 'classification' && tab.path) {
          return (<ClassificationResults key={index} data={get(resultFromBackend, tab.path)} />)
        // Other types of results just get a disclosure panel for each model
        } else if(resultToShow === tab.type && tab.resultsForEachModel) {
          return (
          tab.resultsForEachModel.map((model, index) => (
            renderDisclosurePanel(model, index)
          ))
        )} else if (resultToShow === tab.type && tab.elements) {
          return (
          tab.elements.map((el, index) => (
            renderComponent(el, index, resultFromBackend)
          ))
        )}
      })}
      {resultFromBackend && resultToShow === 'Json' && <JSONViewer />}
      {!resultFromBackend && showPlaceholder()}
    </div>
  );
}
