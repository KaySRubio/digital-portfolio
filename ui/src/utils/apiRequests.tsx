
import { Client } from "@gradio/client";
import type { Request } from '../types/portfolioTypes';

export const generic_gradio_request = async (request: Request, url: string) => {
  const audio = await fetch(url);
  const audioBlob = await audio.blob();
  console.log('Connecting to ', request.huggingFaceClient, ' api ', request.huggingFaceApi);
  const client = await Client.connect(request.huggingFaceClient);
  const result = await client.predict(request.huggingFaceApi, { 
    file: audioBlob, 
    key: request.key,
  })
  console.log(result);
  return result;
}
