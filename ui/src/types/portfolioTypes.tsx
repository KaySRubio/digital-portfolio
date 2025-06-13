
import type { SVGProps, FunctionComponent } from 'react';
// import { techStackData, techStackList } from '../data/portfolioData';

export type Topic = {
  path: TopicName;
  title: string;
  iconComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
}

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
  TextFromPath;

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
  rows: TableEl[][],
  key?: number | string;
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
}

export type AudioVisualizerSettings = {
  spectrogram?: SettingsOptions,
  regions?: SettingsOptions,
  zoom?: boolean,
  changeSpeed?: boolean,
  waveColor?: string,
  progressColor?: string,
  barWidth?: number,
  lineGraphs?: LineGraph[],
}

export type SettingsOptions = 'on' | 'off' | 'userToggleStartOn' | 'userToggleStartOff';

export type LineGraph = {
  display_text: string,
  setting: 'on' | 'off' | 'userToggle',
  path: string,
}
     
export type InputTypes = 'audio' | 'image'

export type SampleFile = {
  display_text: string,
  location: string,
  alt?: string,
  sampleResults?: Kaysrubio_speech_transcribe_result | ClassificationArray,
}

export type CustomSection = {
  display_text: string,
  elements: ProjectDetailComponent[]
}

export type Request = {
  type: 'get' | 'post' | 'gradio',
  url?: string,
  huggingFaceModelName: string,
  huggingFacePredict: string,
  key?: string,
}

export type Result = {
  tabs: ResultTab[],
  regionSetup?: {
    path: string,
    useRandomColors?: boolean,
    colorMappings?: RegionColorMap[],
    defaultColor?: string,
  },
}

export type RegionColorMap = {
  type: string,
  color: string,
}

export type ResultTab = {
  type: string,
  display_text: string,
  icon?: string,
  resultsForEachModel?: ResultForEachModel[],
  path?: string,
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
        regions: Region[]
      }?
	  ]
  ],
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type Region = {
  start: number, 
  end: number,
  content: string,
  type: string,
}

export type RegionOnWaveform = {
  start: number;
  end: number;
  color: string;
  content?: string;
  drag?: boolean;
  resize?: boolean;
};
