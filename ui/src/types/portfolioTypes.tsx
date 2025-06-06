
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
  mainImage: MainImage;
  techStack?: string[]; // older list version
  projectCardTechStack?: string[]; // better icon version
  project_details: ProjectDetails;
}

export type MainImage = {
  type: 'png' | 'jpg' | 'svg';
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
  childGroup: ProjectDetailComponent[][],
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
  childGroup: ProjectDetailComponent[],
  key?: number | string;
}

export type GoalAndGithub = {
  type: 'GoalAndGithub',
  className?: string,
  childGroup: ProjectDetailComponent[],
  href: string,
  key?: number | string;
}

export type DisclosurePanel = {
  type: 'DisclosurePanel',
  title: ProjectDetailComponent,
  children: ProjectDetailComponent[],
  key?: number | string;
}

// Tech stack type for rendering tech stack with images on project details pages
// export type TechStackType = keyof typeof techStackData;

/*
export type TeckStackType = 
  // data science libraries
  'nltk' |
  'scikitlearn' |
  'skopt' |
  'librosa' |

  // neural network libraries
  'fastai' |
  'huggingface' |
  'torch' |

  // front-end technologies
  'react' |
  'nodejs' |
  'vite' |
  'webpack' |

  // environments
  'vsCode' |
  'jupyterLab' |

  // languages
  'typescript' |
  'python' |
  'javascript'
*/




// type TechStackListType = typeof techStackList[number];
export type TechStackData = TechStackDataItem2[];

export type TechStackDataItem2 = {
  type: string;
  name: string;
  iconComponent: FunctionComponent<SVGProps<SVGSVGElement>>,
  href: string;
}

export type ProjectTechStackComponent = {
  type: 'TechStack',
  techList: string[],
  key?: number | string;
}

export type DemoBoard = {
  type: 'DemoBoard',
  page: string,
  sampleAudio: sampleFile[],
  requests: Request[],
  resultTabs: ResultTab[],
}

export type Request = {
  type: 'get' | 'post' | 'gradio',
  url?: string,
  huggingFaceModelName: string,
  huggingFacePredict: string,
  key?: string,
}

export type sampleFile = {
  display_text: string,
  location: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any,
}

export type ResultTab = {
  type: string,
  display_text: string,
  icon?: string,
  resultsForEachModel: ResultForEachModel[],
}

export type ResultForEachModel = {
  description?: ProjectDetailComponent[],
  results?: ProjectDetailComponent[],
}