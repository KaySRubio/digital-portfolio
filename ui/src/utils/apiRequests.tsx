
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

type libretranslateReturnObj = {
  result: boolean,
  alternatives: string[];
  translatedText: string;
}

export const libretranslate = async (
  text: string,
  sourceLang: string,
  targetLang: string
): Promise<libretranslateReturnObj> => {
  try {
    // requires costly API key but free version on hugging face
    // const res = await fetch("https://libretranslate.com/translate", { 
    const res = await fetch("https://jeff86-libretranslate.hf.space/translate", {
    method: "POST",
    body: JSON.stringify({
      q: text,
      source: sourceLang,
      target: targetLang,
      format: "text",
      alternatives: 3,
      api_key: ""
    }),
    headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    console.log(data);
    if(data && data.alternatives && data.translatedText) {
      return {result: true, alternatives: data.alternatives, translatedText: data.translatedText};
    } else {
      console.warn('Unexpected result')
      console.warn(data)
      return {result: false, alternatives: [], translatedText: ''};
    }
    } catch (error) {
      console.warn(error);
      return {result: false, alternatives: [], translatedText: ''};
    }
  }