import { useDemoContext } from '../../context/DemoContext';
import type { Request } from '../../types/portfolioTypes';
import { generic_gradio_request } from '../../utils/apiRequests';

type SubmitButtonProps = {
  requests: Request[],
}

export default function SubmitButton({requests}: SubmitButtonProps) {
  const {
    fileAvailable,
    selectedFileDetails,
    setResultFromBackend,
    userInputUrl,
    sampleFileUrl,
    uploadedFileUrl,
    setWaitingForResults,
    setRequestFromBackendError,
  } = useDemoContext();

  const submitButtonClick = async () => {
    setRequestFromBackendError('');
    // Handle case where sample files already have results so not necessary to query back end
    if(selectedFileDetails.sampleResults) {
      setResultFromBackend(selectedFileDetails.sampleResults);
    } else {
      setWaitingForResults(true);
      for (const request of requests) {
        if(request.type === 'gradio') {
          try {
            const url = userInputUrl || sampleFileUrl || uploadedFileUrl;
            const result = await generic_gradio_request(request, url);
            await setResultFromBackend(result);
            await setWaitingForResults(false);
            await setRequestFromBackendError('')
          } catch (error) {
            console.log('Error: ', error);
            await setWaitingForResults(false);
            await setRequestFromBackendError('Error requesting data');
          }
        }
        // TODO - if you have other types of requests on the future, add them here
      }
    }
  }
  return (
    <button
      className={`submit-button ${fileAvailable ? 'enabled' : 'disabled'}`}
      disabled={!fileAvailable}
      aria-disabled={!fileAvailable}

      onClick={submitButtonClick}
    >
      Submit
    </button>
  );
}
