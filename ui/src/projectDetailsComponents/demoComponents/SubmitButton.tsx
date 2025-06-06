import { useDemoContext } from '../../context/DemoContext';
import '../projectDetails.css'
import { Client } from "@gradio/client";
import type { Request } from '../../types/portfolioTypes';

type SubmitButtonProps = {
  requests: Request[],
}

export default function SubmitButton({requests}: SubmitButtonProps) {
  const { audioFileAvailable, selectedFileDetails, setResultFromBackend, recordedUrl, preloadedUrl, uploadedUrl, setWaitingForResults } = useDemoContext();
  const submitButtonClick = async () => {
    // Handle case where preloaded files already have results so not necessary
    // to query back end
    if(selectedFileDetails.data) {
      setResultFromBackend(selectedFileDetails);
    } else {
      setWaitingForResults(true);
      for (const request of requests) {
        if(request.type === 'gradio') {
          
          const url = recordedUrl || preloadedUrl || uploadedUrl;
          const audio = await fetch(url);
          const audioBlob = await audio.blob();

          console.log('Connecting to ', request.huggingFaceModelName, ' to predict ', request.huggingFacePredict);
          
          const client = await Client.connect(request.huggingFaceModelName);
          const result = await client.predict(request.huggingFacePredict, { 
            file: audioBlob, 
            key: request.key,
          })
          await setResultFromBackend(result);
          await setWaitingForResults(false);
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
