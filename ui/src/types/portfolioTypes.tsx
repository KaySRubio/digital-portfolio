
import type { SVGProps, FunctionComponent } from 'react';
export type Topic = {
  path: TopicName;
  title: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
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
  title: string;
  topics: TopicName[];
  featured: boolean;
  desc: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
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
  TextComponent;

export const TextType = {
  H1: 'h1',
  P: 'p',
  H2: 'h2',
} as const;

export type TextType = keyof typeof TextType;

export type TextComponent = {
  type: TextType,
  text: '',
}

/*
export type TableComponent = {
  type: 'table',
  data: {
    columns: [
      {
        header: string,
        key: string,
      },
    ],
    rows: any,
  }
}
*/