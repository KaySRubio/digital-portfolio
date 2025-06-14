const MAX_FILE_SIZE = 1e+7;

export const checkImageFile = async (file: File) => {
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
    } else if (file.size > MAX_FILE_SIZE) {
      error = `File Size Error: ${file.size} bytes is too large. File should be less than 10 MB`;
    }
  } catch (e) {
    console.error('File load error:', e);
    error = 'Failed to load file. The file may be corrupt or unsupported.';
  }
  return error;
  };


export const checkAudioFile = async (file: File, audioLengthLimitInSeconds: number = 31) => {
  let error = '';
  try {
      if (file.type !== 'audio/wav' && file.type !== 'audio/opus') {
        error = `File Format Error: ${file.type} not supported. Please upload .wav or .opus`;
      } else if (file.size > MAX_FILE_SIZE) {
        error = `File Size Error: ${file.size} bytes is too large. File should be less than 10 MB`;
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