
import { Client } from "@gradio/client";
import type { Request } from '../types/portfolioTypes';

export const generic_gradio_request = async (request: Request, url: string) => {
  const audio = await fetch(url);
  const audioBlob = await audio.blob();
  console.log('Connecting to ', request.huggingFaceModelName, ' to predict ', request.huggingFacePredict);
  const client = await Client.connect(request.huggingFaceModelName);
  const result = await client.predict(request.huggingFacePredict, { 
    file: audioBlob, 
    key: request.key,
  })
  return result;
}
