
import type { Project, Topic } from '../types/portfolioTypes';
import { TopicNames } from '../types/portfolioTypes';
import waveIcon from '@/assets/svg/wave.svg';
import wwwIcon from '@/assets/svg/www.svg';
import aiIcon from '@/assets/svg/ai.svg';
// import chickenIcon from '@/assets/svg/chicken.svg';
// import { ReactComponent as chickenIcon } from '@/assets/svg/chicken.svg';
import chickenIcon from '@/assets/svg/chicken.svg?react';

export const homePageData = {
  headline: 'Listener, Developer, Explorer',
  desc: 'I\'m a software engineer and amateur scientist with a passion for bioacoustics',
  long_desc: 'As a React developer I build interactive educational websites. In my free time I dabble in machine learning and record wildlife. My dream is to analyze animal communication to decode structure and meaning and use the web to engage the public in bioacoustics.',
}

export const base_path = '/digital-portfolio/'

export const topics: Topic[] = [
  {
    path: 'bioacoustics',
    title: 'Bioacoustics Projects',
    icon: waveIcon,
  },
  {
    path: 'machine-learning',
    title: 'AI and Machine Learning Projects',
    icon: aiIcon,
  },
  {
    path: 'web-app-development',
    title: 'Web App Development',
    icon: wwwIcon,
  },
]

export const projects: Project[] = [
  {
    path: 'audio-feature-extraction',
    title: 'Audio Feature Extraction',
    topics: [TopicNames.BIOACOUSTICS],
    featured: false,
    desc: 'Practiced creating spectrograms and extracting features',
    icon: chickenIcon,
    techStack: [''],
    project_details: [
      {
        type: 'H1',
        text: ''
      },
    ],
  },
  {
    path: 'sperm-whale-codas',
    title: 'Sperm Whale Codas',
    topics: [TopicNames.BIOACOUSTICS],
    featured: true,
    desc: 'Created algorithm that extracts features like number of clicks and inter-click-intervals',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'bat-social-calls',
    title: 'Bat Social Calls',
    topics: [TopicNames.BIOACOUSTICS],
    featured: false,
    desc: 'Exploring ultrasonic social calls during flight of big brown bats',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'chicken-vocalizations',
    title: 'Chicken Vocalizations',
    topics: [TopicNames.BIOACOUSTICS],
    featured: true,
    desc: 'Documenting chicken sound patterns',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'plant-sound',
    title: 'Plant Sound',
    topics: [TopicNames.BIOACOUSTICS],
    featured: false,
    desc: 'Exploring ultrasonic \'popping\' of distressed veggies',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'frog-identifier',
    title: 'Frog Identifier',
    topics: [TopicNames.MACHINELEARNING],
    featured: false,
    desc: 'Fine-tuned an image recognition model to identify species',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'voice-detection',
    title: 'Voice Detection',
    topics: [TopicNames.MACHINELEARNING],
    featured: false,
    desc: 'Using Voice Activity Detection algorithms to detect speech',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'speech-recognition',
    title: 'Speech Recognition',
    topics: [TopicNames.MACHINELEARNING],
    featured: true,
    desc: 'Fine-tuned a neural network for accent classification',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'danceability',
    title: 'Danceability',
    topics: [TopicNames.MACHINELEARNING],
    featured: false,
    desc: 'Trained models to predict the danceability of songs',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'diabetes-classifier',
    title: 'Diabetes Classifier',
    topics: [TopicNames.MACHINELEARNING],
    featured: false,
    desc: 'Trained models to predict hospital readmission',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'topic-modeling',
    title: 'Topic Modeling',
    topics: [TopicNames.MACHINELEARNING],
    featured: false,
    desc: 'Explored underlying topics in 20,000 Dear Abby questions',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'algorithm-ocean',
    title: 'Algorithm Ocean',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    featured: false,
    desc: 'Web app to teach students sorting algorithms with an under-the-sea theme',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'i-ready',
    title: 'i-Ready',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    featured: false,
    desc: 'Math and literacy programs for kids at Curriculum Associates',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
  {
    path: 'speech-app',
    title: 'Speech App',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    featured: true,
    desc: 'A tool to input audio and display phonemic transcriptions and data',
    icon: chickenIcon,
    techStack: [''],
    project_details: [],
  },
]
