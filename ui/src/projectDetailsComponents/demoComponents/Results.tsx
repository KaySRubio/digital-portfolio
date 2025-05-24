import { useState } from 'react';
// import { useDemoContext } from "../../context/DemoContext";
import JSONViewer from './JSONViewer';
import type { ResultTab } from '../../types/portfolioTypes';
import '../projectDetails.css'
import json from '@/assets/png/json.png';

type ResultsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};
export default function Results({ data }: ResultsProps) {
  const [resultToShow, setResultToShow] = useState('Json');
    // const { resultFromBackend } = useDemoContext();

  return (
    <div className={`interactive-box interactive-box-results`}>
      <div className='interactive-box-header'>
        <h3>Results</h3>
      </div>

      <menu className='interactive-box-menu'>
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
        {data.resultTabs.map((tab: ResultTab) => (
          <li>
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
      </menu>
      <JSONViewer />
    </div>
  );
}
