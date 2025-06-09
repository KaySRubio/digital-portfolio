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


export const checkAudioFile = async (file: File) => {
  let error = '';
  try {
      if (file.type !== 'audio/wav' && file.type !== 'audio/opus') {
        error = `File Format Error: ${file.type} not supported. Please upload .wav or .opus`;
      } else if (file.size > MAX_FILE_SIZE) {
        error = `File Size Error: ${file.size} bytes is too large. File should be less than 10 MB`;
      } else {
        const metadata = await getAudioMetadata(file);
        if (metadata.duration > 31) {
          error = `Duration Error: Audio is ${Math.round(metadata.duration)} seconds long. Audio should be less than 30 seconds`;
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