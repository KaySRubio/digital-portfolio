import React, { createContext, useEffect, useRef, useState, useContext } from "react";
import type { ReactNode, RefObject } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record';
// import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions';
import SpectrogramPlugin from 'wavesurfer.js/dist/plugins/spectrogram';


type DemoContextType = {
  isRecording: boolean;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
  recordedUrl: string;
  // setIsRecording: (value: boolean) => void;
  setRecordedUrl: React.Dispatch<React.SetStateAction<string>>;
  audioFileAvailable: boolean;
  setAudioFileAvailable: React.Dispatch<React.SetStateAction<boolean>>;
  uploadedUrl: string;
  setUploadedUrl: React.Dispatch<React.SetStateAction<string>>;
  preloadedUrl: string;
  setPreloadedUrl: React.Dispatch<React.SetStateAction<string>>;
  uploadedFileError: string;
  setUploadedFileError: React.Dispatch<React.SetStateAction<string>>;
  waveformRef: RefObject<HTMLDivElement | null>;
  wavesurferRef: React.RefObject<WaveSurfer | null>;
  recordPluginRef: React.RefObject<InstanceType<typeof RecordPlugin> | null>;
  spectrogramContainerRef: RefObject<HTMLDivElement | null>;
  spectrogramRef: React.RefObject<InstanceType<typeof SpectrogramPlugin> | null>;
  showSpectrogram: boolean;
  setShowSpectrogram: React.Dispatch<React.SetStateAction<boolean>>;
  audioPlaying: boolean;
  setAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  onPlay: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resultFromBackend: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setResultFromBackend: (value: any) => void;
  // regionsOnWaveform: regionOnWaveform[];
  // setRegionsOnWaveform: (value: regionOnWaveform[]) => void;
};

const DemoContext = createContext<DemoContextType | undefined>(undefined);

type DemoProviderProps = {
  children: ReactNode;
};

export const DemoProvider = ({ children }: DemoProviderProps) => {
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const recordPluginRef = useRef<InstanceType<typeof RecordPlugin> | null>(null);
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const spectrogramContainerRef = useRef<HTMLDivElement | null>(null);
  // const regionsPluginRef = useRef(null);
  const spectrogramRef = useRef<InstanceType<typeof SpectrogramPlugin> | null>(null);


  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string>('');
  const [audioFileAvailable, setAudioFileAvailable] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string>('');
  const [preloadedUrl, setPreloadedUrl] = useState<string>('');
  const [uploadedFileError, setUploadedFileError] = useState<string>('Error! Please fix this wack file');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [resultFromBackend, setResultFromBackend] = useState(null);
  const [showSpectrogram, setShowSpectrogram] = useState(false);
  // const [regionsOnWaveform, setRegionsOnWaveform] = useState<regionOnWaveform[]>([]);

  useEffect(() => {
    // if (!waveformRef.current) return;
    if (!waveformRef.current) return;

    // const regionsPlugin = RegionsPlugin.create();
    // regionsPluginRef.current = regionsPlugin;

    /*
    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'blue',
      progressColor: 'darkblue',
      // plugins: [regionsPlugin],
      plugins: [
        // Timeline.create();
        SpectrogramPlugin.create({
          container: spectrogramContainerRef.current,
          labels: true,
          fftSamples: 2048,
        })
      ]
    }); */

    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'blue',
      progressColor: 'darkblue',
      // plugins: [regionsPlugin],
    });

    

    // ws.registerPlugin(spectrogram);

    wavesurferRef.current = ws;
    

    ws.on('finish', () => {
      setAudioPlaying(false);
    });

    ws.on('load', () => {
      setUploadedFileError('');
    });

    ws.on('ready', () => {
      // regionsPlugin.clearRegions();
      // updateRegions();
    });

    ws.on('error', e => {
      // Suppress harmless error that appears when recording url doesn't yet have src
      if (e?.message?.includes('Empty src')) {
        return;
      }
      // eslint-disable-next-line no-console
      console.error('WaveSurfer error:', e);
      setUploadedFileError('Failed to load audio in wavesurfer. The file may be corrupt or unsupported.');
    });



    /*
    const handleRegionClick = (region, e) => {
      e.stopPropagation();
      ws.play(region.start, region.end);
    }; */

    // regionsPlugin.on('region-clicked', handleRegionClick);

    const recordPlugin = RecordPlugin.create();
    recordPluginRef.current = recordPlugin;
    ws.registerPlugin(recordPlugin);

    recordPlugin.on('record-end', blob => {
      const url = URL.createObjectURL(blob);
      // clear previous urls from other inputs
      setUploadedUrl('');
      setPreloadedUrl('');
      setRecordedUrl(url);
      setAudioFileAvailable(true);
    });

    return () => {
      ws.destroy();
      // regionsPlugin.un('region-clicked', handleRegionClick);
    };
  }, []);

  useEffect(() => {
    if(showSpectrogram && wavesurferRef.current && spectrogramContainerRef.current) {
      const spectrogram = SpectrogramPlugin.create({
        container: spectrogramContainerRef.current,
        labels: true,
        fftSamples: 2048,
      });
      wavesurferRef.current.registerPlugin(spectrogram);
      spectrogramRef.current = spectrogram;
    } else {
      spectrogramRef.current?.destroy();
      spectrogramRef.current = null;
    }
  }, [showSpectrogram])

  /*
  const updateRegions = () => {
    const regionsPlugin = regionsPluginRef.current;
    regionsPlugin.clearRegions();

    regionsOnWaveform.forEach(region => {
      // label on region can be string or a plain htmlElement, not a react jsc element
      const contentElement = document.createElement('div');
      contentElement.textContent = region.content;
      contentElement.style.fontSize = '12px';
      // wavesurfer keeps overwriting margin-top to something else, so use this
      // to pin the context to the top of the region
      contentElement.style.color = 'darkblue';
      contentElement.style.position = 'absolute';
      contentElement.style.top = '0';
      contentElement.style.left = '4px';
      contentElement.style.padding = '0';
      contentElement.style.setProperty('margin-top', '0px', 'important');

      regionsPlugin.addRegion({
        start: region.start,
        end: region.end,
        color: region.color,
        content: contentElement,
        drag: region.drag ? region.drag : false,
        resize: region.resize ? region.resize : false,
      });
    });
  };

  useEffect(() => {
      updateRegions();
  }, [regionsOnWaveform]);
  */

  useEffect(() => {
    const ws = wavesurferRef.current;
    if (!ws) return;
    const urlToLoad = uploadedUrl || preloadedUrl || recordedUrl;
    if (urlToLoad) {
      ws.load(urlToLoad);
    } else {
      ws.empty();
    }
  }, [uploadedUrl, recordedUrl, preloadedUrl]);

  const onPlay = () => {
    if (wavesurferRef.current) {
      const isPlaying = wavesurferRef.current.isPlaying();
      if (isPlaying) {
        wavesurferRef.current.pause();
        setAudioPlaying(false);
      } else {
        wavesurferRef.current.play();
        setAudioPlaying(true);
      }
    }
  };

  return (
    <DemoContext.Provider
      value={{
        isRecording,
        recordedUrl,
        setIsRecording,
        setRecordedUrl,
        audioFileAvailable,
        setAudioFileAvailable,
        uploadedUrl,
        setUploadedUrl,
        preloadedUrl,
        setPreloadedUrl,
        uploadedFileError,
        setUploadedFileError,
        waveformRef,
        wavesurferRef,
        recordPluginRef,
        spectrogramContainerRef,
        spectrogramRef,
        showSpectrogram,
        setShowSpectrogram,
        audioPlaying,
        setAudioPlaying,
        onPlay,
        resultFromBackend,
        setResultFromBackend,
        // regionsOnWaveform,
        // setRegionsOnWaveform,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

// export const useDemoContext = () => useContext(DemoContext);
export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemoContext must be used within a DemoProvider");
  }
  return context;
};

