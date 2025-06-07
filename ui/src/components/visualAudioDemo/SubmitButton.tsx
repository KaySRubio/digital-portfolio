import { useDemoContext } from '../../context/DemoContext';
import { Client } from "@gradio/client";
import type { Request } from '../../types/portfolioTypes';

type SubmitButtonProps = {
  requests: Request[],
}

export default function SubmitButton({requests}: SubmitButtonProps) {
  const {
    audioFileAvailable,
    selectedFileDetails,
    setResultFromBackend,
    recordedUrl,
    preloadedUrl,
    uploadedUrl,
    setWaitingForResults,
    setRequestFromBackendError,
  } = useDemoContext();
  const submitButtonClick = async () => {
    setRequestFromBackendError('');
    // Handle case where preloaded files already have results so not necessary
    // to query back end
    if(selectedFileDetails.sampleResults) {
      setResultFromBackend(selectedFileDetails.sampleResults);
    } else {
      setWaitingForResults(true);
      for (const request of requests) {
        if(request.type === 'gradio') {
          
          const url = recordedUrl || preloadedUrl || uploadedUrl;
          const audio = await fetch(url);
          const audioBlob = await audio.blob();

          console.log('Connecting to ', request.huggingFaceModelName, ' to predict ', request.huggingFacePredict);
          
          try {
            const client = await Client.connect(request.huggingFaceModelName);
            const result = await client.predict(request.huggingFacePredict, { 
              file: audioBlob, 
              key: request.key,
            })
            await setResultFromBackend(result);
            await setWaitingForResults(false);
            await setRequestFromBackendError('');
          } catch (error) {
            console.log('Error: ', error);
            await setWaitingForResults(false);
            await setRequestFromBackendError('Error requesting data');
          }
        }
      }
    }
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
}
