
import type { SVGProps, FunctionComponent } from 'react';
import { techStack } from '../data/portfolioData';
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
  iconComponent?: FunctionComponent<SVGProps<SVGSVGElement>> | null;
  icon?: string;
  techStack: TechStackItem[];
  project_details: ProjectDetails;
}

type TechStackItem = string | Link;

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
  TechStackComponent;

export type TextType = 
  'h2' |
  'h3' |
  'h4' |
  'text' |
  'p'


export type TextComponent = {
  type: TextType,
  text: string,
  key?: number | string;
}

export type LinkType = {
  type: 'a',
  href: string,
  text: string,
  key?: number | string;
}

export type ListType = 
  'ul' | 
  'ol'

export type ListComponent = {
  type: ListType,
  elements: ProjectDetailComponent[],
  key?: number | string;
};


export type TableComponent = {
  type: 'table',
  headers: string[],
  rows: string[][],
  key?: number | string;
}

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
  elements: ProjectDetailComponent[]
  key?: number | string;
}

export type DisclosurePanel = {
  type: 'DisclosurePanel',
  title: string,
  elements: ProjectDetailComponent[],
  key?: number | string;
}

// Tech stack type for rendering tech stack with images on project details pages
export type TechStackType = keyof typeof techStack;

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

export type TechStackComponent = {
  type: 'TechStack',
  techList: TechStackType[]
  key?: number | string;
}

