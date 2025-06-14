import { useState, useEffect } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import JSONViewer from './JSONViewer';
import DisclosurePanel from '../projectDescriptions/DisclosurePanel';
import ClassificationResults from './ClassificationResults';
import type { ResultTab, ResultForEachModel, DemoBoard, Region } from '../../types/portfolioTypes';
import { renderComponent } from '../../utils/renderComponent';
import json from '@/assets/png/json.png';
import get from 'lodash.get';
import { randomRegionColors } from '../../data/helperData';

type ResultsProps = {
  data: DemoBoard;
};

export default function Results({ data }: ResultsProps) {
  const defaultResults = data.results.tabs ? data.results.tabs[0]?.type : 'Json';
  const [resultToShow, setResultToShow] = useState(defaultResults);
  const { resultFromBackend, waitingForResults, requestFromBackendError, setRegionsOnWaveform } = useDemoContext();

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

  // If regions are included in the results, highlight them in the waveform
  useEffect(() => {
    const path = data.results?.regionSetup?.path;
    const useRandomColors = data.results?.regionSetup?.useRandomColors;
    let regions = [];
    if(path) {
      regions = get(resultFromBackend, path, [])
      console.log('got these regions: ', regions);
      let regionsWithColor = [];

      if(useRandomColors) {
        regionsWithColor = regions.map((region: Region, i: number) => ({
          ...region,
          color: randomRegionColors[i % randomRegionColors.length],
        }));

      } else if (data.results?.regionSetup?.colorMappings) {
        const colorMappings = data.results.regionSetup.colorMappings;
        const defaultColor = data.results.regionSetup.defaultColor;
        regionsWithColor = regions.map((region: Region) => {
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
      }
      setRegionsOnWaveform(regionsWithColor);
    }
  }, [resultFromBackend])

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
