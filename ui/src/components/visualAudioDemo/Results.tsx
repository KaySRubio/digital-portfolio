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
  BandLineOverlaySetup,
} from '../../types/portfolioTypes';
import { renderComponent } from '../../utils/renderComponent';
import json from '@/assets/png/json.png';
import get from 'lodash.get';
import { randomRegionColors } from '../../data/helperData';
import { applyNormalization, convertFromHzToMel, applyMelNormalization } from '../../utils/fileUtils';

type ResultsProps = {
  data: DemoBoard;
};

export default function Results({ data }: ResultsProps) {
  const defaultResults = data.results.tabs ? data.results.tabs[0]?.type : 'Json';
  const averageTimeToGetResultsInSeconds = data.results.averageTimeToGetResultsInSeconds;
  const [resultToShow, setResultToShow] = useState(defaultResults);
  const [timeRemaining, setTimeRemaining] = useState(averageTimeToGetResultsInSeconds);
  const {
    resultFromBackend,
    waitingForResults,
    requestFromBackendError,
    setRegionGroups,
    setWaveformOverlays,
    setSpectrogramOverlays,
    spectrogramSettings,
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

  useEffect(() => {
    if (!waitingForResults || !timeRemaining) return;

      const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev && prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        if(prev) return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [waitingForResults, averageTimeToGetResultsInSeconds])

  const showPlaceholder = () => {
    if(requestFromBackendError) {
      return (<p className='center'>{requestFromBackendError}</p>)
    } else if (waitingForResults && averageTimeToGetResultsInSeconds && timeRemaining && timeRemaining > 0) {
      return (
        <div className="spinner-wrapper">
          <p className="waiting-time-message">Estimated seconds to results: </p>
          <p className="waiting-time-estimate">{timeRemaining}</p>
        </div>
      )
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

  // Handle region results from backend
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
    }
  }, [resultFromBackend]);

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

  // Handle canvas overlay results from backend
  useEffect(() => {
    if (
      data.results && resultFromBackend &&
      data.results.lineOverlaySetup && 
      data.results.lineOverlaySetup.length > 0
    ) {

    const newWaveformOverlays: (LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup | BandLineOverlaySetup)[] = [];
    const newSpectrogramOverlays: (LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup | BandLineOverlaySetup)[] = [];
    data.results.lineOverlaySetup.forEach(lineOverlaySetup => {

      if(lineOverlaySetup.default !== 'off') {
        // Set up new min/maxes for normalization based on canvases which range from 0-1
        let normalized_min = 0.5;
        const normalized_max = lineOverlaySetup.normalized_max ? lineOverlaySetup.normalized_max : 1;
        if(lineOverlaySetup.overlay === 'waveform') {
          normalized_min = lineOverlaySetup.normalized_min ? lineOverlaySetup.normalized_min : 0.5;
        } if (lineOverlaySetup.overlay === 'spectrogram') {
          normalized_min = lineOverlaySetup.normalized_min ? lineOverlaySetup.normalized_min : 0;
        }

        if(lineOverlaySetup.type === 'line-spread-points') {
          const values: number[] = get(resultFromBackend, lineOverlaySetup.path, []);

          // Apply min-max normalization to the values so they now range from 0.5 - 1 on waveform or
          // or 0-1 on spectrogram and will be drawn on the right location, taking into account mel scale

          // KEEP this console log which makes it easy to look up min/max of new values
          // console.log('for ', lineOverlaySetup.displayText, ' the max is: ', Math.max(...values), ' and min is ', Math.min(...values) )
          let normalizedValues: number[] = [];
          if(lineOverlaySetup.overlay === 'spectrogram' && spectrogramSettings.scale === 'mel') {
            const hzMin = spectrogramSettings.frequencyMin;
            const hzMax = spectrogramSettings.frequencyMax;
            normalizedValues = applyMelNormalization(values, hzMin, hzMax)
          } else {
            normalizedValues = applyNormalization(
              values,
              lineOverlaySetup.min,
              lineOverlaySetup.max,
              normalized_min,
              normalized_max
            );
          }
          lineOverlaySetup.values = [...normalizedValues];
          if(lineOverlaySetup.overlay === 'waveform') {
            newWaveformOverlays.push(lineOverlaySetup);
          } else {
            newSpectrogramOverlays.push(lineOverlaySetup);
          }
              
        } else if (lineOverlaySetup.type === 'time-stamped-lines') {
          const sectionsInResults: TimeStampedLineOverlaySectionData[] = get(resultFromBackend, lineOverlaySetup.path, []);
            sectionsInResults.forEach(section => {
              let values = section.values;
              if(lineOverlaySetup.overlay === 'spectrogram' && spectrogramSettings.scale === 'mel') {
                values = convertFromHzToMel(values);
              }
              let normalizedValues: number[] = [];
              if(lineOverlaySetup.overlay === 'spectrogram' && spectrogramSettings.scale === 'mel') {
                const hzMin = spectrogramSettings.frequencyMin;
                const hzMax = spectrogramSettings.frequencyMax;
                normalizedValues = applyMelNormalization(values, hzMin, hzMax)
              } else {
                normalizedValues = applyNormalization(
                  values,
                  lineOverlaySetup.min,
                  lineOverlaySetup.max,
                  normalized_min,
                  normalized_max
                );
              }
              lineOverlaySetup.sections.push({values: [...normalizedValues], start_ms: section.start_ms})
            })
            if(lineOverlaySetup.overlay === 'waveform') {
              newWaveformOverlays.push(lineOverlaySetup);
            } else {
              newSpectrogramOverlays.push(lineOverlaySetup);
            }
          } else if (lineOverlaySetup.type === 'band') {
            const spreadValues: number[] = get(resultFromBackend, lineOverlaySetup.pathToSpreadValues, []);
            const centerValues: number[] = get(resultFromBackend, lineOverlaySetup.pathToCenterValues, []);

            if(spreadValues.length === centerValues.length) {
              const upperValues: number[] = [];
              const lowerValues: number[] = [];
              centerValues.forEach((centerValue, i) => {
                upperValues.push(centerValue + (spreadValues[i] * lineOverlaySetup.proportionToAdd))
                lowerValues.push(centerValue - (spreadValues[i] * lineOverlaySetup.proportionToAdd))
              });

              let normalizedUpperValues: number[] = [];
              let normalizedLowerValues: number[] = [];

              if(lineOverlaySetup.overlay === 'spectrogram' && spectrogramSettings.scale === 'mel') {
                const hzMin = spectrogramSettings.frequencyMin;
                const hzMax = spectrogramSettings.frequencyMax;
                normalizedUpperValues = applyMelNormalization(upperValues, hzMin, hzMax);
                normalizedLowerValues = applyMelNormalization(lowerValues, hzMin, hzMax);

              } else {
                normalizedUpperValues = applyNormalization(
                  upperValues,
                  lineOverlaySetup.min,
                  lineOverlaySetup.max,
                  normalized_min,
                  normalized_max
                );

                normalizedLowerValues = applyNormalization(
                  lowerValues,
                  lineOverlaySetup.min,
                  lineOverlaySetup.max,
                  normalized_min,
                  normalized_max
                );
              }
              lineOverlaySetup.upperValues = [... normalizedUpperValues];
              lineOverlaySetup.lowerValues = [... normalizedLowerValues];
              if(lineOverlaySetup.overlay === 'waveform') {
                newWaveformOverlays.push(lineOverlaySetup);
              } else {
                newSpectrogramOverlays.push(lineOverlaySetup);
              }

            } else {
              console.warn('Attempting to render a band on the waveform, but the number of center values ', centerValues.length, ' does not match the number of band width values ', spreadValues.length, '. These data are provided from the backend');
            }
          }
        } 
      })
      setWaveformOverlays(newWaveformOverlays);
      setSpectrogramOverlays(newSpectrogramOverlays);
    }
  }, [resultFromBackend, spectrogramSettings])

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
      <div className='results-body'>
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
    </div>
  );
}
