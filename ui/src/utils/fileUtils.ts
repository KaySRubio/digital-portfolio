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

export const checkAudioFile = async (file: File, audioLengthLimitInSeconds: number = 31, fileSizeLimitInMb: number = 10) => {
  if(!fileSizeLimitInMb) fileSizeLimitInMb = 10;

  let error = '';
  try {
      if (file.type !== 'audio/wav' && file.type !== 'audio/opus') {
        error = `File Format Error: ${file.type} not supported. Please upload .wav or .opus`;
      } else if (file.size / 1000000 > fileSizeLimitInMb) {
        const fileSizeInMb = file.size / 1000000;
        error = `File Size Error: ${fileSizeInMb.toFixed(1)} MB is too large. File should be less than ${fileSizeLimitInMb} MB`;
      } else {
        const metadata = await getAudioMetadata(file);
        if (metadata.duration > audioLengthLimitInSeconds) {
          error = `Duration Error: Audio is ${Math.round(metadata.duration)} seconds long. Audio should be less than ${audioLengthLimitInSeconds} seconds`;
        }
      }
    } catch (e) {
      error = 'Failed to load file. The file may be corrupt or unsupported.'
      console.error('File load error:', e);
    }
    return error;
}

const getAudioMetadata = async (file: File) => {
  const audioContext = new AudioContext();
  const arrayBuffer = await file.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const duration = audioBuffer.duration; // in seconds
  const sampleRate = audioBuffer.sampleRate; // e.g. 44100 Hz
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

export const applyNormalization = (values: number[], MIN: number = 0, MAX: number, NEW_MIN: number, NEW_MAX: number) => {
  // Apply min-max normalization to the values so they have a new range
  const normalizedValues: number[] = [];
  values.forEach(x => {
    normalizedValues.push(((x - MIN) / (MAX - MIN)) * (NEW_MAX - NEW_MIN) + NEW_MIN)
  })
  return(normalizedValues)
}

