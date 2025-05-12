
import type { ProjectList } from '../types/portfolioTypes';
import waveIcon from '@/assets/svg/wave.svg';
import wwwIcon from '@/assets/svg/www.svg';
import aiIcon from '@/assets/svg/ai.svg';

export const homePageData = {
  headline: 'Listener, Developer, Explorer',
  desc: 'I\'m a software engineer and amateur scientist with a passion for bioacoustics',
  long_desc: 'As a React developer I build interactive educational websites. In my free time I dabble in machine learning and record wildlife. My dream is to analyze animal communication to decode structure and meaning and use the web to engage the public in bioacoustics.',
}

export const base_path = '/digital-portfolio/'

export const projectList: ProjectList = [
  {
    path: 'bioacoustics',
    title: 'Bioacoustics Projects',
    icon: waveIcon,
    projects: [
      {
        path: 'audio-feature-extraction',
        title: 'Audio Feature Extraction'
      },
      {
        path: 'sperm-whale-codas',
        title: 'Sperm Whale Codas'
      },
      {
        path: 'bat-social-calls',
        title: 'Bat Social Calls'
      },
      {
        path: 'chicken-vocalizations',
        title: 'Chicken Vocalizations'
      },
      {
        path: 'plant-sound',
        title: 'Plant Sound'
      }
    ]
  },
  {
    path: 'machine-learning',
    title: 'AI and Machine Learning Projects',
    icon: aiIcon,
    projects: [
      {
        path: 'frog-identifier',
        title: 'Frog Identifier'
      },
      {
        path: 'voice-detection',
        title: 'Voice Detection'
      },
      {
        path: 'speech-recognition',
        title: 'Speech Recognition'
      },
      {
        path: 'danceability',
        title: 'Danceability'
      },
      {
        path: 'diabetes-classifier',
        title: 'Diabetes Classifier'
      },
      {
        path: 'topic-modeling',
        title: 'Topic Modeling'
      }
    ]
  },
  {
    path: 'web-app-development',
    title: 'Web App Development',
    icon: wwwIcon,
    projects: [
      {
        path: 'algorithm-ocean',
        title: 'Algorithm Ocean'
      },
      {
        path: 'i-ready',
        title: 'i-Ready'
      },
      {
        path: 'speech-app',
        title: 'Speech App'
      },
      {
        path: 'voice-detection',
        title: 'Voice Detection'
      }
    ]
  },
]
