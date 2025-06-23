import React, { createContext, useEffect, useRef, useState, useContext } from "react";
import type { ReactNode, RefObject } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline';
import type { Region } from 'wavesurfer.js/dist/plugins/regions';
import SpectrogramPlugin from 'wavesurfer.js/dist/plugins/spectrogram';
import type {
  RegionOnWaveform,
  MyRegion,
  LineSpreadPointsOverlaySetup,
  TimeStampedLineOverlaySetup,
  TimeStampedLineOverlaySectionData,
} from "../types/portfolioTypes";

type DemoContextType = {
  isRecording: boolean;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
  userInputUrl: string;
  setUserInputUrl: React.Dispatch<React.SetStateAction<string>>;
  fileAvailable: boolean;
  setFileAvailable: React.Dispatch<React.SetStateAction<boolean>>;
  uploadedFileUrl: string;
  setUploadedFileUrl: React.Dispatch<React.SetStateAction<string>>;
  sampleFileUrl: string;
  setSampleFileUrl: React.Dispatch<React.SetStateAction<string>>;
  uploadedFileError: string;
  setUploadedFileError: React.Dispatch<React.SetStateAction<string>>;
  waveformRef: RefObject<HTMLDivElement | null>;
  wavesurferRef: React.RefObject<WaveSurfer | null>;
  recordPluginRef: React.RefObject<InstanceType<typeof RecordPlugin> | null>;
  spectrogramContainerRef: RefObject<HTMLDivElement | null>;
  spectrogramRef: React.RefObject<InstanceType<typeof SpectrogramPlugin> | null>;
  waveformOverlayRefs: RefObject<RefObject<HTMLCanvasElement>[]>;
  showSpectrogram: boolean;
  setShowSpectrogram: React.Dispatch<React.SetStateAction<boolean>>;
  audioPlaying: boolean;
  setAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  onPlay: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resultFromBackend: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setResultFromBackend: (value: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedFileDetails: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedFileDetails: (value: any) => void;
  showZoom: boolean;
  setShowZoom:  React.Dispatch<React.SetStateAction<boolean>>;
  regionsOnWaveform: RegionOnWaveform[];
  setRegionsOnWaveform: (value: RegionOnWaveform[]) => void;
  waitingForResults: boolean;
  setWaitingForResults: (value: boolean) => void;
  requestFromBackendError: string,
  setRequestFromBackendError: (value: string) => void;
  zoomLevel: number;
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
  playbackSpeed: number;
  setPlaybackSpeed: React.Dispatch<React.SetStateAction<number>>;
  preservePitch: boolean;
  setPreservePitch: React.Dispatch<React.SetStateAction<boolean>>;
  showRegionGroups: boolean[];
  setShowRegionGroups: React.Dispatch<React.SetStateAction<boolean[]>>;
  regionGroups: MyRegion[][];
  setRegionGroups: React.Dispatch<React.SetStateAction<MyRegion[][]>>;
  waveformOverlays: (LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup)[];
  setWaveformOverlays: React.Dispatch<React.SetStateAction<(LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup)[]>>;
  spectrogramOverlays: (LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup)[];
  setSpectrogramOverlays: React.Dispatch<React.SetStateAction<(LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup)[]>>;
  showWaveformLineOverlays: boolean[];
  setShowWaveformLineOverlays: React.Dispatch<React.SetStateAction<boolean[]>>;
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
  const regionsPluginRef = useRef<InstanceType<typeof RegionsPlugin> | null>(null);
  const spectrogramRef = useRef<InstanceType<typeof SpectrogramPlugin> | null>(null);
  const waveformOverlayRefs = useRef<React.RefObject<HTMLCanvasElement>[]>([]);
  const spectrogramOverlayRefs = useRef<HTMLCanvasElement[]>([]);

  const [isRecording, setIsRecording] = useState(false);
  const [userInputUrl, setUserInputUrl] = useState<string>('');
  const [fileAvailable, setFileAvailable] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string>('');
  const [sampleFileUrl, setSampleFileUrl] = useState<string>('');
  const [uploadedFileError, setUploadedFileError] = useState<string>('Error! Please fix this wack file');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [resultFromBackend, setResultFromBackend] = useState(null);
  const [showSpectrogram, setShowSpectrogram] = useState(false);
  const [regionsOnWaveform, setRegionsOnWaveform] = useState<RegionOnWaveform[]>([]);
  const [selectedFileDetails, setSelectedFileDetails] = useState([]);
  const [waitingForResults, setWaitingForResults] = useState(false);
  const [requestFromBackendError, setRequestFromBackendError] = useState('');
  const [showZoom, setShowZoom] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [preservePitch, setPreservePitch] = useState(true);
  const [showRegionGroups, setShowRegionGroups] = useState<boolean[]>([]);
  const [regionGroups, setRegionGroups] = useState<Region[][]>([[]]);
  const [waveformOverlays, setWaveformOverlays] = useState<(LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup)[]>([]);
  const [spectrogramOverlays, setSpectrogramOverlays] = useState<(LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup)[]>([]);
  const [showWaveformLineOverlays, setShowWaveformLineOverlays] = useState<boolean[]>([]);

  useEffect(() => {
    if (!waveformRef.current) return;

    const regionsPlugin = RegionsPlugin.create();
    regionsPluginRef.current = regionsPlugin;

    // Create a canvas gradient for waveform colors
    const ctx = document.createElement('canvas').getContext('2d')
    const gradient1 = ctx!.createLinearGradient(0, 0, 0, 150)
    const gradient2 = ctx!.createLinearGradient(0, 0, 0, 150)
    gradient1.addColorStop(0, 'rgb(218, 220, 251)')
    gradient1.addColorStop(0.3, 'rgb(182, 184, 252)')
    gradient1.addColorStop(0.7, 'rgb(182, 184, 252)')
    gradient1.addColorStop(1, 'rgb(218, 220, 251)')

    gradient2.addColorStop(0, 'rgb(201, 194, 250)')
    gradient2.addColorStop(0.5, 'rgb(148, 134, 253)')
    gradient2.addColorStop(1, 'rgb(201, 194, 250)')

    // Create waveform
    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: gradient1,
      progressColor: gradient2,
      plugins: [regionsPlugin],
      height: 200,
      // barWidth: 2 // optional to look cooler
    });

    wavesurferRef.current = ws;

    ws.on('finish', () => {
      setAudioPlaying(false);
    });

    ws.on('load', () => {
      setUploadedFileError('');
    });

    ws.on('error', e => {
      // Suppress harmless error that appears when recording url doesn't yet have src
      if (e?.message?.includes('Empty src')) {
        return;
      }
      console.error('WaveSurfer error:', e);
      setUploadedFileError('Failed to load audio in wavesurfer. The file may be corrupt or unsupported.');
    });

    // Regions
    ws.on('ready', () => {
      regionsPlugin.clearRegions();
      updateRegions();
    });
    const handleRegionClick = (region: Region, e: MouseEvent) => {
      e.stopPropagation();
      ws.play(region.start, region.end);
    };

    regionsPlugin.on('region-clicked', handleRegionClick);

    // Recording
    const recordPlugin = RecordPlugin.create();
    recordPluginRef.current = recordPlugin;
    ws.registerPlugin(recordPlugin);

    recordPlugin.on('record-end', blob => {
      const url = URL.createObjectURL(blob);
      // clear previous urls from other inputs
      setUploadedFileUrl('');
      setSampleFileUrl('');
      setUserInputUrl(url);
      setFileAvailable(true);
    });

    return () => {
      ws.destroy();
      regionsPlugin.un('region-clicked', handleRegionClick);
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

  
  const updateRegions = () => {
    if(wavesurferRef.current && regionsPluginRef.current) {
      const regionsPlugin = regionsPluginRef.current;
      regionsPlugin.clearRegions();

      regionsOnWaveform.forEach(region => {
        // label on region can be string or a plain htmlElement, not a react jsc element
        const contentElement = document.createElement('div');
        if(region.content) {
          contentElement.textContent = region.content as string;
        } else {
          contentElement.textContent = '';
        }
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
    }
  };

  useEffect(() => {
    if(!wavesurferRef.current || !fileAvailable) return;
    const ws = wavesurferRef.current;
    ws.setPlaybackRate(playbackSpeed, preservePitch)
  }, [playbackSpeed, preservePitch])

  useEffect(() => {
    if(!wavesurferRef.current || !fileAvailable) return;
    if(showZoom) {
      const ws = wavesurferRef.current;
      ws.registerPlugin(
        TimelinePlugin.create(),
      )
    }
  }, [showZoom])

  useEffect(() => {
    if(!wavesurferRef.current || !fileAvailable) return;
    const ws = wavesurferRef.current;
    ws.zoom(zoomLevel);
  }, [zoomLevel])
  
  useEffect(() => {
    if(!wavesurferRef.current ||
      !regionsPluginRef.current ||
      !fileAvailable ||
      showRegionGroups.length !== regionGroups.length
    ) return;
    

    let newRegions: RegionOnWaveform[] = [];
    showRegionGroups.forEach((regionGroup, i) => {
      if(regionGroup) {
        newRegions = [...newRegions, ...regionGroups[i]] as RegionOnWaveform[];
      }
    })
    setRegionsOnWaveform(newRegions);
  }, [showRegionGroups, regionGroups]);

  useEffect(() => {
    updateRegions();
  }, [regionsOnWaveform])

  useEffect(() => {
    if(!wavesurferRef.current ||
      !fileAvailable ||
      waveformOverlays.length < 1
    ) return;
    const wavesurfer = wavesurferRef.current;

    // Access the scrolling element inside WaveSurfer's shadow DOM and set up event listener
    // to move the lines when the user zooms in and scrolls along. 
    // Note: hard to fix minor visual defect where canvas becomes wider than the waveform
    // itself appears
    let scrollEl = null;
    const waveformEl = document.querySelector('#waveform'); 
    if(waveformEl) {
      // Get the child element that hosts the shadow root
      const shadowHost = waveformEl.querySelector('div');
      if (shadowHost?.shadowRoot) {
        scrollEl = shadowHost.shadowRoot.querySelector('.scroll');
        if (!scrollEl) {
          console.warn('Scrolling the waveform may not scroll the lines superimposed on top');
        }
      }
    }

    waveformOverlays.forEach((waveformOverlay, i) => {
      const canvas = waveformOverlayRefs.current[i]?.current;
      const handleScroll = () => {
        if(scrollEl) canvas.style.transform = `translateX(-${scrollEl.scrollLeft}px)`;
      };
      if(scrollEl) scrollEl.addEventListener('scroll', handleScroll);
      
      let draw = () => {};
      if(waveformOverlay.type === 'line-spread-points') {
        draw = () => drawLineOverlay(canvas, waveformOverlay.values, waveformOverlay.color);
      } else if (waveformOverlay.type === 'time-stamped-lines') {
        draw = () => drawTimeStampedOverlay(canvas, waveformOverlay.sections, waveformOverlay.color, waveformOverlay.interval_ms);
      }

      if (
        showWaveformLineOverlays &&
        showWaveformLineOverlays.length === waveformOverlays.length &&
        showWaveformLineOverlays[i]
      ){
        draw();
        wavesurfer.on('redraw', () => draw);
        window.addEventListener('resize', draw);

        return () => {
          wavesurfer.un('redraw', draw);
          window.removeEventListener('resize', draw);
          if(scrollEl) scrollEl.removeEventListener('scroll', handleScroll);
        };
      } else {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    })
  }, [waveformOverlays, showWaveformLineOverlays, zoomLevel])

  // Will stop drawing when encounters -1 (for missing data), and restart when encounters a valid value
  const drawLineOverlay = (
    canvas: HTMLCanvasElement,
    values: number[],
    color = 'rgba(0, 200, 255, 0.8)'
  ) => {
    const wavesurfer = wavesurferRef.current;
    const container = waveformRef.current;
    if (!wavesurfer || !canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const wrapper = wavesurfer.getWrapper();
    const width = wrapper.scrollWidth;
    
    const height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    const numValues = values.length;
    let hasStartedPath = false;

    for (let i = 0; i < numValues; i++) {
      const val = values[i];

      if (val === -1) {
        if (hasStartedPath) {
          ctx.stroke(); // End current path before the gap
          hasStartedPath = false;
        }
        continue;
      }
      const x = (i / (numValues - 1)) * width;
      const y = height - val * height;
      if (!hasStartedPath) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        hasStartedPath = true;
      } else {
        ctx.lineTo(x, y);
      }
    }
    if (hasStartedPath) {
      ctx.stroke();
    }
  }

  const drawTimeStampedOverlay = (
    canvas: HTMLCanvasElement,
    sections: TimeStampedLineOverlaySectionData[],
    color = 'rgba(0, 200, 255, 0.8)',
    interval_ms: number,
  ) => {
      const wavesurfer = wavesurferRef.current;
      const container = waveformRef.current;
      if (!wavesurfer || !canvas || !container) return;

      const duration = wavesurfer.getDuration();
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = container.clientWidth;
      const height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      const interval = interval_ms / 1000;

      sections.forEach((section: TimeStampedLineOverlaySectionData) => {
        let isDrawing = false;
        const start_sec = section.start_ms / 1000;

        for (let i = 0; i < section.values.length; i++) {
          let x;
          if (i === 0) {
            x = ((start_sec + i * interval) / duration) * width;
          } else {
            x = ((start_sec + i * interval) / duration) * width;
          }
          const y = height - (section.values[i] * height);

          if (!isDrawing) {
            ctx.moveTo(x, y);
            isDrawing = true;
          } else {
            ctx.lineTo(x, y);
          }
        }
      ctx.stroke();
      })
    }


  useEffect(() => {
    const ws = wavesurferRef.current;
    if (!ws) return;
    const urlToLoad = uploadedFileUrl || sampleFileUrl || userInputUrl;
    if (urlToLoad) {
      ws.load(urlToLoad);
    } else {
      ws.empty();
    }
  }, [uploadedFileUrl, userInputUrl, sampleFileUrl]);

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
        userInputUrl,
        setIsRecording,
        setUserInputUrl,
        fileAvailable,
        setFileAvailable,
        uploadedFileUrl,
        setUploadedFileUrl,
        sampleFileUrl,
        setSampleFileUrl,
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
        regionsOnWaveform,
        setRegionsOnWaveform,
        selectedFileDetails,
        setSelectedFileDetails,
        waitingForResults,
        setWaitingForResults,
        requestFromBackendError,
        setRequestFromBackendError,
        showZoom,
        setShowZoom,
        zoomLevel,
        setZoomLevel,
        playbackSpeed,
        setPlaybackSpeed,
        preservePitch,
        setPreservePitch,
        showRegionGroups,
        setShowRegionGroups,
        regionGroups,
        // @ts-expect-error Unconsequential type conflict with Wavesurfer Region
        setRegionGroups,
        waveformOverlayRefs,
        spectrogramOverlayRefs,
        waveformOverlays,
        setWaveformOverlays,
        spectrogramOverlays,
        setSpectrogramOverlays,
        showWaveformLineOverlays,
        setShowWaveformLineOverlays,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemoContext must be used within a DemoProvider");
  }
  return context;
};

