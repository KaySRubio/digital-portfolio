import { useState } from 'react';
import { useDemoContext } from "../../context/DemoContext";
import JSONViewer from './JSONViewer';
import DisclosurePanel from '../projectDescriptions/DisclosurePanel';
import ClassificationResults from './ClassificationResults';
import type { ResultTab, ResultForEachModel, DemoBoard } from '../../types/portfolioTypes';
import { renderComponent } from '../../utils/renderComponent';
import json from '@/assets/png/json.png';
import get from 'lodash.get';

type ResultsProps = {
  data: DemoBoard;
};

export default function Results({ data }: ResultsProps) {
  const [resultToShow, setResultToShow] = useState(data.results.tabs[0]?.type);
  const { resultFromBackend, waitingForResults, requestFromBackendError } = useDemoContext();

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

  return (
    <div className={`interactive-box interactive-box-results`}>
      <div className='interactive-box-header'>
        <h3>Results</h3>
      </div>

      <menu className='interactive-box-menu'>
        {data.results.tabs.map((tab: ResultTab, index: number) => (
          <li key={index}>
            <button
              onClick={() => setResultToShow(tab.type)}
              className={`
              interactive-box-menu-item
              ${resultToShow === tab.type ? 'active-interactive-box-menu' : ''}
            `}
            >
              <img className='input-icon-large' alt="" src={tab.icon} />
              {tab.display_text}
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
      {resultFromBackend && data.results.tabs.map((tab: ResultTab, index: number) => {
        // Classification results get a specially formatted tab
        if(resultToShow === tab.type && tab.type === 'classification' && tab.path) {
          return (<ClassificationResults key={index} data={get(resultFromBackend, tab.path)} />)
        // Other types of results just get a disclosure panel for each model
        } else if(resultToShow === tab.type && tab.resultsForEachModel) return (
          tab.resultsForEachModel.map((model, index) => (
            renderDisclosurePanel(model, index)
          ))
        )}
      )}
      {resultFromBackend && resultToShow === 'Json' && <JSONViewer />}
      {!resultFromBackend && showPlaceholder()}
    </div>
  );
}
