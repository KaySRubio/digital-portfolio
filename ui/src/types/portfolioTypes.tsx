
import type { SVGProps, FunctionComponent } from 'react';
// import { techStackData, techStackList } from '../data/portfolioData';
// import type { Region } from 'wavesurfer.js/dist/plugins/regions';

export type Topic = {
  path: TopicName;
  title: string;
  iconComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export type VisualizerType = 'Waveform' | 'Spectrogram';

export const TopicNames = {
  BIOACOUSTICS: 'bioacoustics',
  MACHINELEARNING: 'machine-learning',
  WEBAPPDEVELOPMENT: 'web-app-development',
} as const;

export type Theme = 'dark' | 'light';

// This renames the type so it doesn't conflict with the object name
export type TopicName = typeof TopicNames[keyof typeof TopicNames];

export type Project = {
  path: string;
  short_title: string;
  title: string;
  date: string;
  topics: TopicName[];
  visible: boolean;
  featured: boolean;
  desc: string;
  mainImage?: MainImage;
  techStack?: string[]; // older list version
  projectCardTechStack?: string[]; // better icon version
  project_details: ProjectDetails;
}

export type MainImage = {
  type: 'png' | 'jpg' | 'svg' | '';
  src: string | FunctionComponent<SVGProps<SVGSVGElement>>;
  alt: string;
  className?: string;
}

export type Link = {
  type: 'link',
  text: string,
  src: string,
}

export type ProjectDetails = ProjectDetailComponent[];

export type ProjectDetailComponent = 
  TextComponent |
  ListComponent | 
  ImageComponent |
  LinkType |
  TableComponent |
  DivComponent | 
  DisclosurePanel |
  ProjectTechStackComponent |
  MainImage | 
  GoalAndGithub | 
  DemoBoard | 
  TextFromPath |
  HeatMap;

export type TextType = 
  'h2' |
  'h3' |
  'h4' |
  'text' |
  'p'


export type TextComponent = {
  type: TextType,
  text: string,
  className?: string,
  key?: number | string;
}

export type HeatMap = {
  type: 'heatmap'
  path: string,
  title?: string,
  xAxisTitle?: string,
  yAxisTitle?: string,
  xAxisLabelMapping?: NumberToLabelMapping | FramesToTimeMapping,
  yAxisLabelMapping?: NumberToLabelMapping | FramesToTimeMapping,
}

export type NumberToLabelMapping = {
  type: 'numberToLabel',
  mappings: {
    [key: number]: string
  }
}

export type FramesToTimeMapping = {
  type: 'framesToTime'
  sampleRate: number,
  hopLength: number,
}

export type TextFromPath = {
  type: 'textFromPath',
  path: string,
  className?: string,
  key?: number | string;
}

export type LinkType = {
  type: 'a',
  href: string,
  text?: string,
  children?: ProjectDetailComponent[];
  key?: number | string;
}

export type ListType = 
  'ul' | 
  'ol'

export type ListComponent = {
  type: ListType,
  className?: string,
  elements: ProjectDetailComponent[][],
  key?: number | string;
};


export type TableComponent = {
  type: 'table',
  headers: TableEl[],
  rows?: TableEl[][],
  key?: number | string;
  rowDataPath?: string;
  dynamicRows?: DynamicRow[];
  className?: string,
}

export type DynamicRow = {
  propertyName: string,
  type: 'number' | 'string' | 'numberArray',
  rounding?: number,
}

export type TableEl = string | LinkType;

export type ImageComponent = {
  type: 'img',
  src: string,
  alt: string,
  className?: string,
  key?: number | string;
}

export type DivComponent = {
  type: 'div',
  className?: string,
  elements: ProjectDetailComponent[],
  key?: number | string;
}

export type GoalAndGithub = {
  type: 'GoalAndGithub',
  className?: string,
  elements: ProjectDetailComponent[],
  href: string,
  key?: number | string;
}

export type DisclosurePanel = {
  type: 'DisclosurePanel',
  title: ProjectDetailComponent,
  children: ProjectDetailComponent[],
  key?: number | string;
}

export type TechStackData = TechStackDataItem2[];

export type TechStackDataItem2 = {
  type: string;
  name: string;
  iconComponent?: FunctionComponent<SVGProps<SVGSVGElement>>,
  icon?: string;
  href: string;
}

export type ProjectTechStackComponent = {
  type: 'TechStack',
  techList: string[],
  key?: number | string;
}

export type DemoBoard = {
  type: 'DemoBoard',
  input?: Input,
  customSection?: CustomSection,
  requests: Request[],
  results: Result,
}

export type Input = {
  types: InputTypes[],
  sampleAudio?: SampleFile[],
  sampleImages?: SampleFile[],
  audioVisualizerSettings?: AudioVisualizerSettings,
  audioLengthLimitInSeconds?: number,
  fileSizeLimitInMb?: number,
}

export type AudioVisualizerSettings = {
  spectrogram?: SettingsOptions,
  userAdjustSpectrogram?: boolean,
  zoom?: boolean,
  changeSpeed?: boolean,
  waveColor?: string,
  progressColor?: string,
  barWidth?: number,
  lineGraphs?: LineGraph[],
}

export type SettingsOptions = 'on' | 'off' | 'userToggleStartOn' | 'userToggleStartOff';

export type LineGraph = {
  displayText: string,
  setting: 'on' | 'off' | 'userToggle',
  path: string,
}
     
export type InputTypes = 'audio' | 'image'

export type SampleFile = {
  displayText: string,
  location: string,
  alt?: string,
  sampleResults?: 
    Kaysrubio_speech_transcribe_result | 
    ClassificationArray | 
    Kaysrubio_sperm_whalish_results | 
    AudioFeatureExtractionResult,
}

export type CustomSection = {
  displayText: string,
  elements: ProjectDetailComponent[],
  size?: 'half-screen' | 'full-screen',
}

export type Request = {
  type: 'get' | 'post' | 'gradio',
  url?: string,
  huggingFaceClient: string,
  huggingFaceApi: string,
  key?: string,
}

export type Result = {
  tabs?: ResultTab[],
  averageTimeToGetResultsInSeconds?: number,
  regionSetup?: RegionSetup[],
  lineOverlaySetup?: (LineSpreadPointsOverlaySetup | TimeStampedLineOverlaySetup | BandLineOverlaySetup)[];
}

export type RegionSetup = {
  displayText: string,
  default: SettingsOptions,
  path: string,
  useRandomColors: boolean,
  colorMappings?: RegionColorMap[],
  defaultColor?: string,
  moreInfo?: string,
}

export type RegionColorMap = {
  type?: string,
  content?: string,
  color: string,
}

export type ResultTab = {
  type: string,
  displayText: string,
  icon?: string,
  resultsForEachModel?: ResultForEachModel[],
  path?: string,
  elements?: ProjectDetailComponent[],
}

export type ResultForEachModel = {
  description?: ProjectDetailComponent[],
  results?: ProjectDetailComponent[],
}

export type ClassificationArray = {
  data: [ClassificationObj[]],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type ClassificationObj = { species: string, prob: number}

export type MyRegion = {
  start: number, 
  end: number,
  content?: HTMLElement | undefined,
  type?: string,
}

export type RegionOnWaveform = {
  start: number;
  end: number;
  color: string;
  content?: string;
  drag?: boolean;
  resize?: boolean;
};

export type BaseLineOverlaySetup = {
  overlay: 'waveform' | 'spectrogram',
  default: SettingsOptions,
  max: number,
	min: number,
	normalized_min?: number,
	normalized_max?: number,
	color: string,
	displayText: string,
  moreInfo?: string,
}

export type LineSpreadPointsOverlaySetup = BaseLineOverlaySetup & {
	type: 'line-spread-points',
	values: number[],
    path: string,
}

export type TimeStampedLineOverlaySetup = BaseLineOverlaySetup & {
	type: 'time-stamped-lines',
	sections: TimeStampedLineOverlaySectionData[],
  interval_ms: number,
  path: string,
}

export type TimeStampedLineOverlaySectionData = {
  start_ms: number,
  end_ms?: number,
  values: number[],
}

export type BandLineOverlaySetup = BaseLineOverlaySetup & {
  type: 'band',
  pathToCenterValues: string,
  pathToSpreadValues: string,
  proportionToAdd: number,
  upperValues: number[],
  lowerValues: number[],
}

export type Kaysrubio_speech_transcribe_result = {
	data: [
    [
      {transcription: string },
      {phonemes_native_eng: string },
      {phonemes_eng_second_lang: string },
      {
        native_eng_country: [
          {
            accent: string,
            score: number 
          }
        ]
      },
      {
        first_lang_if_not_eng: [
          {
            accent: string,
            score: number
          }
        ]
      },
      {
        regions: MyRegion[]
      }?
	  ]
  ],
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type Kaysrubio_sperm_whalish_results = {
	data: [
    {
      vad: number[],
      codas: SpermWhaleCodaResult[],
      clicks: Timestamp[],
      inter_coda_intervals: Timestamp[],
      inter_click_intervals: Timestamp[],
    }
  ],
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type Timestamp = {
  start: number,
  end: number;
}

export type AudioMetadata = {
  duration: number,
  numberOfChannels: number,
  sampleRate: number
}

// Note: 8192 and higher should be possible, but does not render, or is extremely slow
// and not helpful since wavesurfer spectrogram won't show above 4,000Hz anyway
export type FftSamples = 1024 | 2048 | 4096;

export type SpectrogramSettings = {
  frequencyMinLimit: number,
  frequencyMaxLimit: number,
  frequencyMin: number,
  frequencyMax: number,
  scale: SpectrogramScale,
  fftSamples: FftSamples,
}

export type SpectrogramScale = 'mel' | 'linear';
// Not using all possible types as the lines drawn on the canvas also need to adjust
// to these scales
// export type SpectrogramScale = 'mel' | 'logarithmic' | 'linear' | 'bark' | 'erb';


export type SpermWhaleCodaResult = {
  start: number,
  end: number,
  vad: number[],
  click_timestamps: Timestamp[],
  number_of_clicks: number,
  duration: number,
  inter_click_intervals: Timestamp[],
  inter_click_interval_durations: number[],
  content: string,
}

export type AudioFeatureExtractionResult = {
	data: [{ 
		amplitude_envelope: number[],
		root_mean_square_energy: number[],
		zero_crossing_rate: number[],
		mfccs: number[][],
		delta_mfccs: number[][],
		spectral_centroid: number[],
		spectral_bandwidth: number[]
  }]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}
