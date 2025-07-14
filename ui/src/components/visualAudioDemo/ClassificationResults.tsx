import React from 'react';
import type { ClassificationArray, ClassificationObj } from '../../types/portfolioTypes';

type ClassificationResultsProps = {
  data: ClassificationArray;
};

const ClassificationResults: React.FC<ClassificationResultsProps> = ({ data }) => {
  const LIKELY_CUTOFF = 0.5;
  const MAYBE_CUTOFF = 0.3;
  const likelyCategories = data.filter((category: ClassificationObj) => category.prob > LIKELY_CUTOFF);
  const maybeCategories = data.filter((category: ClassificationObj) => category.prob > MAYBE_CUTOFF && category.prob < LIKELY_CUTOFF);

  return (
    <div className='classification-results-area'>
      <div>
        {likelyCategories.length > 0 && (
          <div>
            <p className='bold'>This is most likely:</p>
            <ul>
            {likelyCategories.map((category: ClassificationArray, index: number) => (
              <li className='classification-result bold' key={index}>{category.species}: {Math.round(category.prob*100)}% confidence</li>
            ))}
            </ul>
          </div>
        )}
        {maybeCategories.length > 0 && (
          <div>
            <p>This might be:</p>
            <ul>
            {maybeCategories.map((category: ClassificationArray, index: number) => (
              <li className='classification-result' key={index}>{category.species}: {Math.round(category.prob*100)}% confidence</li>
            ))}
            </ul>
          </div>
        )}
        {likelyCategories.length === 0 && maybeCategories.length === 0 && 
          <p>I'm not sure what this is! Please try another photo.</p>
        }
      </div>
    </div>
  )
};

export default ClassificationResults;
