export const checkImageFile = async (file: File, fileSizeLimitInMb: number = 10) => {
  if(!fileSizeLimitInMb) fileSizeLimitInMb = 10;
  let error = '';
  try {
    if (!file.type.startsWith('image/')) {
      error = `Error: ${file.type} not supported. Please upload .jpg, .jpeg, or .png`;
    } else if (
      file.name.toLowerCase().endsWith('.heic') || 
      file.name.toLowerCase().endsWith('.heif') || 
      file.name.toLowerCase().endsWith('.svg')
    ) {
      error = `Error: ${file.type} not supported. Please upload .jpg, .jpeg, or .png`;
    } else if (file.size / 1000000 > fileSizeLimitInMb) {
      const fileSizeInMb = file.size / 1000000;
      error = `File Size Error: ${fileSizeInMb.toFixed(1)} MB is too large. File should be less than ${fileSizeLimitInMb} MB`;
    }
  } catch (e) {
    console.error('File load error:', e);
    error = 'Failed to load file. The file may be corrupt or unsupported.';
  }
  return error;
};

export const getFileFromUrl = async (url: string): Promise<File> => {

  // Get filename
  let filename = url.split('/').pop();
  if (!filename) {
    filename = 'file';
  }

  const res = await fetch(url);
  const blob = await res.blob();
  return new File([blob], filename, { type: blob.type });
};

export const checkAudioFile = async (
  file: File,
  audioLengthLimitInSeconds: number = 31,
  fileSizeLimitInMb: number = 10,
  duration: number
) => {
  if(!fileSizeLimitInMb) fileSizeLimitInMb = 10;

  let error = '';
  try {
      if (file.type !== 'audio/wav' && file.type !== 'audio/opus') {
        error = `File Format Error: ${file.type} not supported. Please upload .wav or .opus`;
      } else if (file.size / 1000000 > fileSizeLimitInMb) {
        const fileSizeInMb = file.size / 1000000;
        error = `File Size Error: ${fileSizeInMb.toFixed(1)} MB is too large. File should be less than ${fileSizeLimitInMb} MB`;
      } else {
        if (duration > audioLengthLimitInSeconds) {
          error = `Duration Error: Audio is ${Math.round(duration)} seconds long. Audio should be less than ${audioLengthLimitInSeconds} seconds`;
        }
      }
    } catch (e) {
      error = 'Failed to load file. The file may be corrupt or unsupported.'
      console.error('File load error:', e);
    }
    return error;
}

export const getAudioMetadata = async (file: File) => {
  console.log('file: ', file);
  // AudioContext automatically resamples at 48,000 unless given a different sample rate like this: { sampleRate: 16000 }
  // Does NOT detect the original sample rate of the file
  const audioContext = new AudioContext();
  const arrayBuffer = await file.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const duration = audioBuffer.duration; // in seconds
  const sampleRate = audioBuffer.sampleRate; // e.g. 44100 Hz
  console.log('audioBuffer.sampleRate', audioBuffer.sampleRate);
  const numberOfChannels = audioBuffer.numberOfChannels;

  return {
    duration,
    sampleRate,
    numberOfChannels,
  };
};

export const resizeImage = (
  base64: string,
  maxWidth: number,
  maxHeight: number,
  callback: (resizedBase64: string) => void
) => {
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
    canvas.width = img.width * ratio;
    canvas.height = img.height * ratio;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
    const resized = canvas.toDataURL('image/jpeg', 0.8); // 0.8 = compression quality
    callback(resized);
  };
  img.src = base64;
};

export const normalizeValue = (x: number, MIN: number, MAX: number, NEW_MIN: number, NEW_MAX: number) => {
  return ((x - MIN) / (MAX - MIN)) * (NEW_MAX - NEW_MIN) + NEW_MIN
}

export const hzToMel = (frequencyHz: number) => {
  return 2595 * Math.log10(1 + frequencyHz / 700);
}

// Apply min-max normalization to the values so they have a new range
export const applyNormalization = (values: number[], MIN: number = 0, MAX: number, NEW_MIN: number, NEW_MAX: number) => {
  const normalizedValues: number[] = [];
  values.forEach(x => {
    normalizedValues.push(normalizeValue(x, MIN, MAX, NEW_MIN, NEW_MAX))
  })
  return(normalizedValues)
}

export const convertFromHzToMel = (values: number[]) => {
  const melValues: number[] = [];
    values.forEach(x => {
     melValues.push(hzToMel(x))
  })
  return(melValues)
}


export const applyMelNormalization = (values: number[], hzMin: number, hzMax: number) => {
  const melMin = hzToMel(hzMin);
  const melMax = hzToMel(hzMax);
  const newValues: number[] = [];
  values.forEach(x => {
    const mel = hzToMel(x);
    newValues.push((mel - melMin) / (melMax - melMin))
  })
  return newValues;
}
