// import React, { useEffect } from 'react';
// import { useApiName } from '../context/ApiNameContext';
// import fetchContext from '../context/useFetchContext';
// import { fluencyLegend, randomRegionColors } from '../data/componentData';
// import { mockFluencyData, mockRecognitionData, mockVerificationData } from '../data/mockSpeechEngineResultData';
// import { SpeechApiEnum } from '../types/type';
import { useDemoContext } from '../../context/DemoContext';
import '../projectDetails.css'
// import { Client } from "@gradio/client";

export default function SubmitButton() {
  const { audioFileAvailable } = useDemoContext();
  /*
  const api = useApiName();
  const { recordingAvailable, speechApiResult, setSpeechApiResult, setRegionsOnWaveform } = fetchContext(api);
  const onClick = async () => {
    const result = await fetchSpeechApiResult();
    setSpeechApiResult(result);
  };

  const fetchSpeechApiResult = () => {
    // TODO - submit audio and fetch result
    if (api === SpeechApiEnum.RECOGNITION) return mockRecognitionData;
    else if (api === SpeechApiEnum.VERIFICATION) return mockVerificationData;
    else if (api === SpeechApiEnum.FLUENCY) return mockFluencyData;
  };

  const updateRegionsOnWaveform = () => {
    if (api === SpeechApiEnum.RECOGNITION) {
      const tokens = speechApiResult.results[0].tokens;

      const regions = tokens.map(token => ({
        start: token.start_time_s,
        end: token.end_time_s,
        content: token.token,
      }));

      const regionsWithColor = regions.map((region, i) => ({
        ...region,
        color: randomRegionColors[i % randomRegionColors.length],
      }));
      setRegionsOnWaveform(regionsWithColor);
    } else if (api === SpeechApiEnum.FLUENCY) {
      const tokens = speechApiResult.results[0].tokens;
      const regions = tokens
        ?.map(token => {
          const color = fluencyLegend[token.alignment]?.color;

          if (token.transcription_details) {
            return {
              start: token.transcription_details.start_time_s,
              end: token.transcription_details.end_time_s,
              content: token.transcription_details.transcription,
              color: color || 'rgba(0, 123, 255, 0.3)',
            };
          }
          return null;
        })
        .filter(Boolean);
      setRegionsOnWaveform(regions);
    }
  };

  useEffect(() => {
    speechApiResult && updateRegionsOnWaveform();
  }, [speechApiResult]);
 */

    // TODO - move elsewhere
  const submitButtonClick = async () => {


    // Turn off for now since don't need to make extra requests 
    /*
    console.log('sending request');
    const audioResponse = await fetch(data.sampleAudio[2]);
    const audioBlob = await audioResponse.blob();

    const client = await Client.connect("kaysrubio/speech_transcribe_phonemes_and_accent");
    const result = await client.predict("/transcribe_and_classify_speech", { 
      file: audioBlob, 
      key: '682d2362-894c-800c-af30-a4c56b7f074b'
    })
    console.log(result); */
    // returns result.data[0][0].transcription = " What's up..."
  }
  return (
    <button
      className={`submit-button ${audioFileAvailable ? 'enabled' : 'disabled'}`}
      disabled={!audioFileAvailable}
      aria-disabled={!audioFileAvailable}
      onClick={submitButtonClick}
    >
      Submit
    </button>
  );
  

  /*
    return (
    <button
    >
      Submit
    </button> 
  ); */
}
