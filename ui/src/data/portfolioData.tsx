
import type { Project, Topic, TechStackData, Kaysrubio_speech_transcribe_result } from '../types/portfolioTypes';
import { TopicNames } from '../types/portfolioTypes';

// jpg
import american_bullfrog from '@/assets/jpg/american_bullfrog1.jpg';
import gray_tree_frog from '@/assets/jpg/gray_tree_frog1.jpg';
import northern_leopardfrog from '@/assets/jpg/northern_leopard_frog1.jpg';

// png
import accent from '@/assets/png/accent.png';
import anemone from '@/assets/png/anemone.png';
import asrPng from '@/assets/png/asr.png';
import batPng from '@/assets/png/bat.png';
import chicken from '@/assets/png/chicken.png';
import dancing from '@/assets/png/dancing.png';
import dearabby from '@/assets/png/dearabby.png';
import dear_abby_word_cloud from '@/assets/png/dear_abby_word_cloud.png';
import dear_abby_lda_5 from '@/assets/png/dear_abby_lda_5.png';
import frog from '@/assets/png/frog.png';
import frog_outline from '@/assets/png/frog_outline.png';
import hospitalization from '@/assets/png/hospitalization.png';
import iready from '@/assets/png/iready.png';
import irish from '@/assets/wav/irish.wav';
import people_talking from '@/assets/png/people_talking.png';
import phonemes from '@/assets/png/phonemes.png';
import plantPng from '@/assets/png/plant.png';
import spectrogram from '@/assets/png/spectrogram.png';
import spermwhalepng from '@/assets/png/spermwhale.png';
import transcription from '@/assets/png/transcription.png';
import wandb from '@/assets/png/wandb.png';

// svg
import aiIcon from '@/assets/svg/ai.svg?react';
import fastai from '@/assets/svg/fastai.svg?react';
import huggingface from '@/assets/svg/huggingface.svg?react';
import joblib from '@/assets/svg/joblib.svg?react';
import librosa from '@/assets/svg/librosa.svg?react';
import mic from '@/assets/svg/mic.svg?react';
import pandas from '@/assets/svg/pandas.svg?react';
import pytorch from '@/assets/svg/pytorch.svg?react';
import matplotlib from '@/assets/svg/matplotlib.svg?react';
import nltk from '@/assets/svg/nltk3.svg?react';
import nodejs from '@/assets/svg/nodejs.svg?react';
import numpy from '@/assets/svg/numpy.svg?react';
import reactIcon from '@/assets/svg/react.svg?react';
import scikitlearn from '@/assets/svg/scikitlearn.svg?react';
import seaborn from '@/assets/svg/seaborn.svg?react';
import skopt from '@/assets/svg/skopt.svg?react';
import typescript from '@/assets/svg/typescript.svg?react';
import vite from '@/assets/svg/vite.svg?react';
import waveIcon  from '@/assets/svg/wave.svg?react';
import webpack from '@/assets/svg/webpack.svg?react';
import wwwIcon  from '@/assets/svg/www.svg?react';

// wav
import chineseAmerican from '@/assets/wav/chinese-american.wav';
import indian from '@/assets/wav/indian.wav';
import mexican from '@/assets/wav/mexican.wav';
import nigerian from '@/assets/wav/nigerian.wav';
import vietnamese from '@/assets/wav/vietnamese.wav';

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
    iconComponent: waveIcon,
  },
  {
    path: 'machine-learning',
    title: 'AI and Machine Learning Projects',
    iconComponent: aiIcon,
  },
  {
    path: 'web-app-development',
    title: 'Web App Development',
    iconComponent: wwwIcon,
  },
]

export const projects: Project[] = [
  // audio-feature-extraction
  {
    path: 'audio-feature-extraction',
    short_title: 'Audio Feature Extraction',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: false,
    desc: 'Practiced creating spectrograms and extracting features',
    mainImage: {
      type: 'png',
      src: spectrogram,
      alt: 'A waveform and spectrogram visually representing sound',
    },
    techStack: ['Audio Signal Processing', 'librosa'],
    project_details: [
      {
        type: 'h2',
        text: ''
      },
    ],
  },
  // sperm-whale-codas
  {
    path: 'sperm-whale-codas',
    short_title: 'Sperm Whale Codas',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: true,
    desc: 'Created algorithm that extracts features like number of clicks and inter-click-intervals',
    mainImage: {
      type: 'png',
      src: spermwhalepng,
      alt: 'A sperm whale with its mouth open showing teeth',
    },
    techStack: [
      'Audio Signal Processing', 'librosa'],
    project_details: [],
  },
  // bat-social-calls
  {
    path: 'bat-social-calls',
    short_title: 'Bat Social Calls',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: false,
    desc: 'Exploring ultrasonic social calls during flight of big brown bats',
    mainImage: {
      type: 'png',
      src: batPng,
      alt: 'A bat flying through the air',
    },
    techStack: ['Audio Signal Processing', 'librosa'],
    project_details: [],
  },
  // chicken-vocalizations
  {
    path: 'chicken-vocalizations',
    short_title: 'Chicken Vocalizations',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: false,
    desc: 'Documenting chicken sound patterns',
    mainImage: {
      type: 'png',
      src: chicken,
      alt: 'A white and brown chicken standing',
    },
    techStack: [
      'Audio Signal Processing', 'librosa'],
    project_details: [],
  },
  // plant-sound
  {
    path: 'plant-sound',
    short_title: 'Plant Sound',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: false,
    desc: 'Exploring ultrasonic \'popping\' of distressed veggies',
    mainImage: {
      type: 'png',
      src: plantPng,
      alt: 'A tomato plant and a corn stalk',
    },
    techStack: [
      'Audio Signal Processing', 'librosa'],
    project_details: [],
  },
  // frog-identifier
  {
    path: 'frog-identifier',
    short_title: 'Frog Identifier',
    title: 'Frog Identifier',
    date: '',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: false,
    desc: 'Fine-tuned an image recognition model to identify species',
    mainImage: {
      type: 'png',
      src: frog,
      alt: 'A green frog',
    },
    projectCardTechStack: ['fastai'],
    project_details: [
      {type: 'h2', text: 'Goals'},
      {
        type: 'GoalAndGithub',
        elements: [
          {type: 'text', text: 'I created an image classifier for frog species in Massachusetts by fine-tuning a pre-trained neural network model, '},
          {type: 'a', text: 'resnet18', href: 'https://huggingface.co/microsoft/resnet-18'},
          {type: 'text', text: ', on ~200 frog pictures per species collected from a search engine.'},
        ],
        href: 'https://github.com/KaySRubio/deep-learning-projects/blob/main/frog_image_classifier.ipynb',
      },
      {type: 'h2', text: 'Demo'},
      {
        type: 'DemoBoard',
        input: {
          types: ['image'],
          sampleImages: [
            {
              display_text: 'American Bullfrog', 
              location: american_bullfrog,
              alt: 'A green and brown frog sitting in some grass',
              sampleResults: {
                data: [[
                  {species: 'American Bullfrog (Lithobates catesbeianus)', prob: 0.9746686816215515},
                  {species: 'Green Frog (Lithobates clamitans)', prob: 0.023729383945465088},
                  {species: 'Wood Frog (Lithobates sylvaticus)', prob: 0.0012509091757237911},
                  {species: 'Northern Leopard Frog (Lithobates pipiens)', prob: 0.00014007935533300042},
                  {species: 'American Toad (Anaxyrus americanus)', prob: 0.00010111537994816899},
                  {species: 'Spring Peeper (Pseudacris crucifer)', prob: 0.00005221633909968659},
                  {species: 'Eastern Spadefoot (Scaphiopus holbrookii)', prob: 0.00004317923230701126},
                  {species: 'Gray Treefrog (Hyla versicolor)', prob: 0.000009411439350515138},
                  {species: 'Fowlers Toad (Anaxyrus fowleri)', prob: 0.000004050126790389186},
                  {species: 'Pickerel Frog (Lithobates palustris)', prob: 8.979863537206256e-7},
                ]]
              }
            },
            {
              display_text: 'Gray Tree Frog', 
              location: gray_tree_frog,
              alt: 'A gray spotted frog on a branch in the woods',
              sampleResults: {
                data: [[
                  {species: "Gray Treefrog (Hyla versicolor)", prob: 0.9943358302116394},
                  {species: "Fowlers Toad (Anaxyrus fowleri)", prob: 0.002308360766619444},
                  {species: "Eastern Spadefoot (Scaphiopus holbrookii)", prob: 0.001017067115753889},
                  {species: "Green Frog (Lithobates clamitans)", prob: 0.000824976246803999},
                  {species: "Wood Frog (Lithobates sylvaticus)", prob: 0.00045502890134230256},
                  {species: "Northern Leopard Frog (Lithobates pipiens)", prob: 0.0003748933377210051},
                  {species: "Pickerel Frog (Lithobates palustris)", prob: 0.00034524459624662995},
                  {species: 'Spring Peeper (Pseudacris crucifer)', prob: 0.0001683539740042761},
                  {species: 'American Toad (Anaxyrus americanus)', prob: 0.00013327246415428817},
                  {species: 'American Bullfrog (Lithobates catesbeianus)', prob: 0.00003691832171170972}
                ]]
              }
            },
            {
              display_text: 'Northern Leopard Frog', 
              location: northern_leopardfrog,
              alt: 'A green frog with brown spots partially hidden in some leaves',
              sampleResults: {
                data: 
                [[
                  {species: "Northern Leopard Frog (Lithobates pipiens)", prob: 0.9989408850669861},
                  {species: "Pickerel Frog (Lithobates palustris)", prob: 0.0005622448516078293},
                  {species: "Wood Frog (Lithobates sylvaticus)", prob: 0.00036222580820322037},
                  {species: "Eastern Spadefoot (Scaphiopus holbrookii)", prob: 0.00007037333125481382},
                  {species: "Green Frog (Lithobates clamitans)", prob: 0.00002487793426553253},
                  {species: "Fowlers Toad (Anaxyrus fowleri)", prob: 0.000018251390429213643},
                  {species: "Gray Treefrog (Hyla versicolor)", prob: 0.000010626030416460708},
                  {species: 'American Bullfrog (Lithobates catesbeianus)', prob: 0.000006336148999253055},
                  {species: 'Spring Peeper (Pseudacris crucifer)', prob: 0.0000024683827177796047},
                  {species: 'American Toad (Anaxyrus americanus)', prob: 0.0000017227010857823188},
                ]
              ]
            }
          }
        ],
        },
        
        requests: [
          {
            type: 'gradio',
            huggingFaceModelName: 'kaysrubio/Identifying_Frogs_in_Massachusetts',
            huggingFacePredict: '/predict',
            key: '682d2362-894c-800c-af30-a4c56b7f074b'
          }
        ],
        results: {
          tabs: [
            {
              type: 'classification',
              icon: frog_outline,
              display_text: 'Classification',
              path: 'data[0]',
            }
          ]
        }
      },
      {type: 'h2', text: 'Model Training Details'},
      {
        type: 'ol', elements: [
          [{type: 'text', text: 'Model error rate improved from 40% to 34% when I shifted from 100 to 200 photos per frog species.'}],
          [{type: 'text', text: 'Model error rate further improved from 34% to 27% when I used RandomResizedCrop rather than squish on the data each epoch.'}],
          [{type: 'text', text: 'Final model only needed 2 epoch\'s to train. '}],
          [{type: 'text', text: 'Epochs 3-4 showed overfitting as training loss decreased but validation loss didn\'t and error rate slightly increased.'}],
          [{type: 'text', text: 'Final model trained on 200 pictures had 27% error rate.'}],
          [{type: 'text', text: 'To improve this model, it would be helpful to clean the training data. Delete images of tadpoles and the occasional icon, as well as ask a frog expert to see if any are mis-labelled.'}],
        ]
      }
    ],
  },
  // voice-detection
  {
    path: 'voice-detection',
    short_title: 'Voice Detection',
    title: '',
    date: '',
    topics: [TopicNames.MACHINELEARNING, TopicNames.WEBAPPDEVELOPMENT],
    visible: true,
    featured: false,
    mainImage: {
      type: 'png',
      src: people_talking,
      alt: 'A cartoon of multiple people talking',
    },
    desc: 'Comparing algorithms that detect speech',
    techStack: [
      'Voice Activity Detection (VAD)',
      'Neural networks',
    ],
    project_details: [],
  },
  // speech-recognition
  {
    path: 'speech-recognition',
    short_title: 'Speech Recognition',
    title: 'Speech Recognition and Accent Classification using Neural Networks',
    date: 'February 2025',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: true,
    desc: 'Fine-tuned a neural network for accent classification and explored existing ASR models',
    mainImage: {
      type: 'png',
      src: asrPng,
      alt: 'A cartoon of a woman talking in front of a microphone and a computer screen with a robot on the screen',
    },
    projectCardTechStack: ['huggingface', 'wandb'],
    project_details: [
      {
        type: 'GoalAndGithub',
        elements: [
          {type: 'h2', text: 'Goals'},
          {type: 'text', text: 'This was a personal project I completed to practice skills learned from the '},
          {type: 'a', text: 'Hugging Face Transformers for Audio', href: 'https://huggingface.co/learn/audio-course/en/chapter0/introduction'},
          {type: 'text', text: ' course.'},
          {type: 'ol', elements: [
            [{type: 'text', text: 'Explore and implement preexisting open-source transformers models for speech including ASR, phonemic transcription, and accent classification'}],
            [{type: 'text', text: 'Fine-tune my own ASR model for accent classification'}],
            [
              {type: 'text', text: 'Demo work on '},
              {type: 'a', text: 'Hugging Face Spaces', href: 'https://huggingface.co/spaces/'},
              {type: 'text', text: ' with '},
              {type: 'a', text: 'Gradio', href: 'https://www.gradio.app/'},
              {type: 'text', text: ' and create an API endpoint that can take in audio and pass ASR output in json format to a front-end application'}
            ],
          ]},
        ],
        href: 'https://github.com/KaySRubio/transformers_speech_recognition_and_classification/tree/main',
      },
      {type: 'h2', text: 'Demo'},
      {
        type: 'DemoBoard',
        customSection: {
          display_text: 'Directions',
          elements: [
            {type: 'p', text: 'Record, upload, or select a preloaded file. Then click "Submit" to see the transcription, phonemic transcriptions, and accent classification from different AI models.'}
          ],
        },
        input: {
          types: ['audio'],
          sampleAudio: [
            {
              display_text: 'Chinese American comedian Ronny Chieng',
              location: chineseAmerican,
              sampleResults: {
                data: [
                  [
                    {
                      "transcription": " We try not to talk about politics. My mega friends and I, out of mutual respect, inevitably it comes up. Some stuff I'm wrong about, some stuff I write about, but sometimes the messaging is so convoluted. I can't get to what their core issue actually is. Sometimes they're like, Ronnie, China caused COVID, but COVID isn't real. So is it fine then?"
                    },
                    {
                      "phonemes_native_eng": "wi t ɹaɪnɑ tə tɑ kbɑ pɑlə tɪ s maɪmæ əf ɹɛn zɪnaɪaɪɾəmju ʧɹɪs pɛ t aɪ ɪnɛvɪɾɪ b li kəm zɑ  səm s təfəm ɹɑŋə baʊssəm zəvzɹaɪɾə baʊ bəsəm taɪm z laɪ ðɛmɛsɪ ʤiŋ ɪsoʊ   kɑm vəludɪ laɪaɪ kæŋ gɛ tuwə ðɪ ðɛ kɑɪʃu  æ ʃliɪz aɪ səm aɪm zoʊlaɪ ɹɑni ʧaɪnə kɑz d koʊvɪ dbə koʊvɪ d ɪzɪn ɹisoʊɪzɪfaɪnðɛn"
                    },
                    {
                      "phonemes_eng_second_lang": "wi tɹaɪ nɑt tʌ tɔk ʌb ʌpɑlʌtɪks maɪ mæɡʌfɹˌɛnz ʌn aɪ ɑdʌ mjɪt͡ʃuʌl ɹispɛkt maɪ ɪnɛvʌtʌbli kʌmz ʌp sʌmstʌf ʌn ɹɔŋ ʌbaʊz sʌmsʌv ðʌ ɹaɪt ʌbaʊ ʌ sʌmtˌaɪmz laɪ  ʌ mɛsɪd͡ʒɪŋ ɪz soʊ kɑnvʌludʌ laɪ aɪ kæn ɡɛt tu wʌt ðʌ dɛɹ ko ɪʃu æktʃʌli ɪz laɪ sʌmɪz ʌ vaɪɹɑnɪk t͡ʃaɪnʌ kɑzd koʊvɪt bʌt koʊvɪd ɪz ʌn ɹiwso ɪz ðʌ faɪn dæn"
                    },
                    {
                      "native_eng_country": [
                        {
                          "accent": "us",
                          "score": 0.62
                        }
                      ]
                    },
                    {
                      "first_lang_if_not_eng": [
                        {
                          "accent": "Hindi",
                          "score": 0.47
                        }
                      ]
                    },
                    {
                      "regions": [
                        {"start": 0.1, "end": 0.3, "content": "insertion", "type": "insertion"}, // optional content and type properties
                        {"start": 6, "end": 9},
                      ],
                    }
                  ]
                ],
              } as Kaysrubio_speech_transcribe_result,
            },
            {
              display_text: 'Indian professor Abdul Bari',
              location: indian,
              sampleResults: {
                data: [
                  [
                    {
                      "transcription": " Hello friends, I am going to start a course on Algorithms. Algorithms are a common subject for computer science engineering students. Most of the new cities offer this course as a part of syllabus. And this is a very core subject and very important subject. And students face some difficulties in some of the topics in this one they could not understand them very clearly. So here I am"
                    },
                    {
                      "phonemes_native_eng": "hɛləfɹɪn s ɑn goʊɪŋ tʊs tɑɾə kl z ɑn ɛlə gɑə dəm s ɛ oʊvənəzəsə ʤɪ tl oʊəəzɪkɑmən sə ʤɪ fɑɹ kəm ɹɪsaɪɪn sɪnʤɪnɪɾɪŋs t uɾɛnsmoʊs təvɪɝsɪtiz ɑfdɪz kul zæzə baɪəl sɪɾɪvəs  ɑn dɪsɪzəvɛɾi kl sə ʤɪ tænvɛɾi ɪm pɑɹɾ nsə ʤɛ tæn s tuɾɪn sfsəm dɪfɪ kəl dizɪn səməv dɪ tɑ pɪ sɪnðɪs fən deɪ kwʊ nɑtən dəs tæn ðɛmvɪɾi k lɪɝlisoʊhɪɹɑn"
                    },
                    {
                      "phonemes_eng_second_lang": "ɛlʌfʌn ʌn ɪ tʌ stɑɹv ʌ koʊs ɔn ɛlɡoɔtʌns aɪl ɔn ɑ ðʌ sʌbd͡ʒɛt ʌɪ θɔtʌwʌz ðɛ ɡɔ ɑn sʌbd͡ʒɛkt fɔɚ kˌɑnvʌsaɪʌn sɪn stɹudʌnts moʊst ʌv ðʌ usɪtiz ɔ ɔv ðʌ skoʊls ʌdʌ pɑɹɑsɛlʌʌs ʌn ðɪs wʌz ɔlɛɹi ɡoʊl  ʌbd͡ʒɛkt ʌn vɛɹi ɪmpɔɹtʌn sʌbd͡ʒɛktʌn sun ɪn feɪ sʌm dɪfʌkʌltiz ɪn sʌm ʌv ðʌ kɹɑpɪks ʌn ðʌ sʌn ðɛ kʊd nɑt ˌʌndʌsfæn ʌm vɹi klɪɹlisoʊ hi æn"
                    },
                    {
                      "native_eng_country": [
                        {
                          "accent": "indian",
                          "score": 0.68
                        }
                      ]
                    },
                    {
                      "first_lang_if_not_eng": [
                        {
                          "accent": "Hindi",
                          "score": 0.54
                        }
                      ]
                    },
                  ]
                ]
              } as Kaysrubio_speech_transcribe_result,
            },
            {
              display_text: 'Mexican actor Jaime Camil in Jane the Virgin',
              location: mexican,
              sampleResults: {
                data: [
                  [
                    {
                      "transcription": " And I also screw up years ago, but I have changed. I want my daughter to have the pleasure of knowing me. I became an international star just a few years ago. Imagine what at this service it would have been to the world if I had given up. Oh, sure. Who should I make it out to? Oh, it's the... Oh, yeah. Excuse me, miss?"
                    },
                    {
                      "phonemes_native_eng": "naɪwəzəs k ɹuə jɪzɪ goʊ bəɾaɪhæv ʧeɪnʤ d mwən maɪ dɑɾɝ tuhævðə p lɛʃɝəv noʊɪnmi aɪ bi keɪmɪnɪn tɝnæʃn ls ʧɑɹ ʤɪs tɪfujɪzɪ goʊmæ ʤɪnwəɾæ ðisɝvɪsɪwʊ dhæv bin təðəwɝl ifaɪhæ d gɪvɪnə p ɹoʊhɛɾʊðɪləvɪ əbɛləvɪ ɹɾðələvɛ oʊʃɝ huʃʊɾaɪmeɪ kɪɾaʊ tuoʊwɪ s d əms ɪz oʊjɛs kuz mimɪs uɪɪɪɪɪ"
                    },
                    {
                      "phonemes_eng_second_lang": "æn aɪ wʌs ʌ skuʌp jˌɹiʌs ʌɡoʊ bʌt a hæv t͡ʃeɪnd͡ʒd aɪm wʌn maɪ dɔɪɚ tu hæv ðʌ plɛʃɚ ʌv noʊɪn miaɪ bikɛɪm ʌn ˌɪntɚnɑʃʌŋʌstɹɑd͡ʒʌt͡ʃʌfi jɪɹs ʌɡoʊ ɪmæd͡ʒʌn wʌt æt distɹivʌsi wʊd hæv bin tu dʌ wɚld ɪf aɪ hæd ɡivʌn ʌp ɹɔɛdlʌl dʌ lɛlʌɡʌt ɹɔɛlʌlʌlɡʌ oʊ ʃʊɹhu ʃʊd aɪ meɪk ɪt aʊt u oʊ wɪt ð ɔmʊst ɛz ɔ jɛsjuz meɪ mɪs ʌ"
                    },
                    {
                      "native_eng_country": [
                        {
                          "accent": "australia",
                          "score": 0.58
                        }
                      ]
                    },
                    {
                      "first_lang_if_not_eng": [
                        {
                          "accent": "Hindi",
                          "score": 0.33
                        }
                      ]
                    },
                  ]
                ],
              } as Kaysrubio_speech_transcribe_result,
            },
            {
              display_text: 'Irish accent from Derry Girls',
              location: irish,
              sampleResults: {
                data: [
                  [
                    {
                      "transcription": " What's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, what's up, I'm with clients, molar. Have you seen my green scarf? I'm busy. What is it? I'm going to be late for bingo. I'm trying to commute."
                    },
                    {
                      "phonemes_native_eng": "ʤɑn səmwənɛl shɪɝəwʊmənəfɑm lɪmɛm bɝ hæmiwʊudumaɪɹɪðɝ ʃihɛzəmoʊs tb juɾəfəlhɛɾəvhɛkʃihɛzɪmsɪ ʤfɑjɪhəhɑvənʃiwən s mi tɪ tɛl ju ɑvəwɪə b ləɾiɑm sɝmɪ ʤ aɪm wɪθ k laɪɪn s mɑlɝhəv usin maɪ g ɹim s kɑɹɑm bɪz hæzəɾm goʊnɪvɪlɪfɝ bɪŋ g ɑn t ɹaɪɪŋtɪ k m ju"
                    },
                    {
                      "phonemes_eng_second_lang": "ʒɔnʌ sʌmʌn hʌsɪ ʌ wʊmʌn a sʌn aɪ nɛmbɚ hæni oʊnli  uz maɪ ɹɛʒɚ ʃi ævʌz ʌ moʊst bjutʌfʌl hɛd ʌnv hɛɹ ʃ hæz ʌ nɛsɪt͡ʃ fɔ hɪkʌma ææn ʃi wɑnt mi tʌ tɛl j æ waɪ hæv æi ænsʌn eɪt͡ʃ aɪm mʌt klaɪ ʌnt smɔlɚ hæv ju seɪn aɪɡɹɪnz jɑɹ ɑnd bɪzi aɪæv æn ɡɑt ʌt ʌ lɛt vɚbæŋɡˌoʊ ɑn tɹaɪɪŋ tʌ kʌnju"
                    },
                    {
                      "native_eng_country": [
                        {
                          "accent": "england",
                          "score": 0.07
                        }
                      ]
                    },
                    {
                      "first_lang_if_not_eng": [
                        {
                          "accent": "Hindi",
                          "score": 0.52
                        }
                      ]
                    },
                  ]
                ],
              } as Kaysrubio_speech_transcribe_result,
            },
            {
              display_text: 'Nigerian actors Daniel Effiong & Tana Adelana',
              location: nigerian,
              sampleResults: {
                data: [
                  [
                    {
                      "transcription": " You see, let me go. I have to run. I wake up early in the morning. I can't wait to see you this weekend. I have good news. You do? What's the good news, tell me. It's a surprise. Okay, now I can't wait. How was your hand? It's fine. It's healing. It's not as painful anymore. I can't believe you slammed your hand on your car door. Pop away your hand!"
                    },
                    {
                      "phonemes_native_eng": "ɪɪɪɪðɪsɪlɪv mi gh hæf tə b ɹəəwɪ kə pɛliɪnðəmɑnɪŋ ə kaʊweɪ tɪsiɪðɪs wi kɛnaɪhæv gʊ nuzju duwəzɪ gu nuz tɛl mi ɪ t sɪsə p ɹaɪz oʊ keɪnaʊaɪ kaʊɪ shaʊwɪʃɪhæn d s faɪnɪ tsɪshiliŋs nətəs pɪn fəlɛnim kɑm bəliv jus lɑm ɑhaɪn dɑn jʊ kɑ dɑhə weɪju"
                    },
                    {
                      "phonemes_eng_second_lang": "ɪɪz lɛmɪ ɡoʊ æv tʌ ɹʌm aɪ wʌlkʌp ɚli ɪn ðʌ mɔnɪŋʌkaʊ ʌweɪ tʌ si ts wi kæn aɪ hæv kʊɡ meɪs ju du u wʌz ʌ ɡʊdnus tɛ mi ɪts ʌ sʌpɹaɪs ʊk naʊ ʌkaʊɪtsʌhaʊ ɪʃ jʊ hænt ɪts faɪɪlʌts hilɪ lʌt ʌspɛn flɛnimɔ ʌkʌmpʌnli ɪf ju slɑmd jɔ hændɑl jʌ kɑto pʌkli hi"
                    },
                    {
                      "native_eng_country": [
                        {
                          "accent": "england",
                          "score": 0.67
                        }
                      ]
                    },
                    {
                      "first_lang_if_not_eng": [
                        {
                          "accent": "Hindi",
                          "score": 0.47
                        }
                      ]
                    },
                  ]
                ]
              } as Kaysrubio_speech_transcribe_result,
            },
            {
              display_text: 'Vietnamese accent from L2-Arctic-Corpus',
              location: vietnamese,
              sampleResults: {
                data: [
                  [
                    {
                      "transcription": "Here we allow our silicator to look after our legal work."
                    },
                    {
                      "phonemes_native_eng": "hiwiəlaʊ əsəli ki tə tulʊ k æf tə aʊəli g lwə  k"
                    },
                    {
                      "phonemes_eng_second_lang": "hi wɪ ʌlaʊ aʊ sʌlʌkeɪtʌ tu lʊk æftʌ aʊʌ liɡoʊ wʊk"
                    },
                    {
                      "native_eng_country": [
                        {
                          "accent": "us",
                          "score": 0.42
                        }
                      ]
                    },
                    {
                      "first_lang_if_not_eng": [
                        {
                          "accent": "Vietnamese",
                          "score": 0.67
                        },
                      ],
                    },
                  ]
                ],
              } as Kaysrubio_speech_transcribe_result,
            },
          ],
          audioVisualizerSettings: {
            spectrogram: 'userToggleStartOff',
            regions: 'userToggleStartOn',
            lineGraphs: [
              {
                display_text: 'RMS energy',
                setting: 'userToggle',
                path: ''
              }
            ],
            zoom: false,
            changeSpeed: true,
            waveColor: '',
            progressColor: '',
            barWidth: 2,
          }
        },
        requests: [
          {
            type: 'gradio',
            huggingFaceModelName: 'kaysrubio/speech_transcribe_phonemes_and_accent',
            huggingFacePredict: '/transcribe_and_classify_speech_1',
            key: '682d2362-894c-800c-af30-a4c56b7f074b'
          }
        ],
        results: {
          tabs: [
            {
              type: 'transcription',
              display_text: 'Transcription',
              icon: transcription,
              resultsForEachModel: [
                {
                  description: [
                    {type: 'text', text: 'Model: '},
                    {type: 'a', href: 'https://huggingface.co/openai/whisper-base.en', text: 'openai/whisper-base.end'},
                    {type: 'text', text: '. Trained on 680k hours of labelled data'},
                  ],
                  results: [
                    {type: 'textFromPath', path: 'data[0][0].transcription'},
                  ],
                }
              ]
            },
            {
              type: 'phonememic_transcription',
              display_text: 'Phonemes',
              icon: phonemes,
              resultsForEachModel: [
                {
                  description: [
                    {type: 'text', text: 'Model: '},
                    {type: 'a', href: 'https://huggingface.co/vitouphy/wav2vec2-xls-r-300m-timit-phoneme', text: 'vitouphy/wav2vec2-xls-r-300m-timit-phoneme'},
                    {type: 'text', text: '. Trained on DARPA TIMIT American English'},
                  ],
                  results: [
                    {type: 'textFromPath', path: 'data[0][1].phonemes_native_eng'},
                  ],
                },
                {
                  description: [
                    {type: 'text', text: 'Model: '},
                    {type: 'a', href: 'https://huggingface.co/mrrubino/wav2vec2-large-xlsr-53-l2-arctic-phoneme', text: 'mrrubino/wav2vec2-large-xlsr-53-l2-arctic-phoneme'},
                    {type: 'text', text: '. Trained on L2 arctic, speakers of English as a second langauge'},
                  ],
                  results: [
                    {type: 'textFromPath', path: 'data[0][2].phonemes_eng_second_lang'},
                  ],
                },
              ]
            },
            {
              type: 'accent',
              display_text: 'Accent',
              icon: accent,
              resultsForEachModel: [
                {
                  description: [
                    {type: 'text', text: 'Model: '},
                    {type: 'a', href: 'https://huggingface.co/Jzuluaga/accent-id-commonaccent_ecapa', text: 'Jzuluaga/accent-id-commonaccent_ecapa'},
                    {type: 'text', text: '. Trained on Native English speakers from around the world'},
                  ],
                  results: [
                    {type: 'text', text: 'Predicted Accent: '},
                    {type: 'textFromPath', path: 'data[0][3].native_eng_country[0].accent'},
                    {type: 'p', text: ''},
                    {type: 'text', text: 'Confidence score: '},
                    {type: 'textFromPath', path: 'data[0][3].native_eng_country[0].score'},
                  ],
                },
                {
                  description: [
                    {type: 'text', text: 'Model: '},
                    {type: 'a', href: 'https://huggingface.co/kaysrubio/accent-id-distilhubert-finetuned-l2-arctic2', text: 'kaysrubio/accent-id-distilhubert-finetuned-l2-arctic2'},
                    {type: 'text', text: '. Trained on L2 arctic, speakers of English as a second langauge'},
                  ],
                  results: [
                    {type: 'text', text: 'Predicted Accent: '},
                    {type: 'textFromPath', path: 'data[0][4].first_lang_if_not_eng[0].accent'},
                    {type: 'p', text: ''},
                    {type: 'text', text: 'Confidence score: '},
                    {type: 'textFromPath', path: 'data[0][4].first_lang_if_not_eng[0].score'},
                  ],
                }
              ],
            },
          ],
          regionSetup: {
            path: 'data[0][5].regions',
            useRandomColors: true,
          },
        }
      },
      {type: 'h2', text: 'Tech Stack'},
      {
        type: 'TechStack',
        techList: ['wandb', 'huggingface'],
      },
      {type: 'h2', text: 'Models used'},
      {
        type: 'table',
        headers: ['Type', 'Model', 'Data used'],
        rows: [
          ['Automatic Speech Recognition', {type: 'a', text: 'openai/whisper-base.end', href: 'https://huggingface.co/openai/whisper-base.en'}, '680k hours of labelled data'],
          ['Phonemic Transcription', {type: 'a', text: 'vitouphy/wav2vec2-xls-r-300m-timit-phoneme', href: 'https://huggingface.co/vitouphy/wav2vec2-xls-r-300m-timit-phoneme'}, 'DARPA TIMIT American English'],
          ['Phonemic Transcription', {type: 'a', text: 'mrrubino/wav2vec2-large-xlsr-53-l2-arctic-phoneme', href: 'https://huggingface.co/mrrubino/wav2vec2-large-xlsr-53-l2-arctic-phoneme'}, 'L2 arctic, speakers of English as a second langauge'],
          ['Accent Classification', {type: 'a', text: 'Jzuluaga/accent-id-commonaccent_ecapa', href: 'https://huggingface.co/Jzuluaga/accent-id-commonaccent_ecapa'}, ' Native English speakers from around the world'],
          ['Accent Classification', {type: 'a', text: 'kaysrubio/accent-id-distilhubert-finetuned-l2-arctic2', href: 'https://huggingface.co/kaysrubio/accent-id-distilhubert-finetuned-l2-arctic2'}, 'L2 arctic, speakers of English as a second langauge'],
        ],
      },
      {type: 'h2', text: 'Fine-tuning DistilHuBERT for Accent Classification'},
      {type: 'h3', text: 'Purpose'},
      {type: 'p', text: 'Existing accent classifiers focus on native English speakers from around the world but exclude people who learned English as a second language rendering them inaccurate for many common accents among people in the US, such as people whose first language is Spanish or Chinese.'},
      {type: 'p', text: 'My goal was to create an accent classifier for people who learned English as a second language by fine-tuning a speech recognition model.'},      
      {
        type: 'DisclosurePanel', 
        title: {type: 'h3', text: 'Data and Data Preparation'},
        children: [
          {type: 'h4', text: 'Data source'},
          {type: 'text', text: 'The '},
          {type: 'a', text: 'L2-Actic', href: 'https://psi.engr.tamu.edu/l2-arctic-corpus/'},
          {type: 'text', text: ' data is ~8GB and comes via email. It includes approximately 24-30 hours of recordings where 24 speakers read passages in English. The first languages of the speakers are Arabic, Hindi, Korean, Mandarin, Spanish, and Vietnamese. There\'s 2 women and 2 men in each language group.'},
          {type: 'h4', text: 'Data preparation'},
          {
            type: 'ol',
            elements: [
              [{type: 'text', text: 'Split the dataset in 6 smaller pieces, one for each language group to reduce memory problems during reformatting. The number of files per speaker is limited to 560 to use approximately half of the original data. Thus each piece is about 0.66GB with 2,240 rows.'}],
              [{type: 'text', text: 'Resampled audio to 16,000 Hz using PyTorch.'}],
              [{type: 'text', text: 'Combined sequential audio files from the same speaker to improve training efficiency. For instance, instead of a lot of audio files that are only 1-3 seconds, I combined them so there were fewer files and they were just under 30 seconds in length.'}],
              [{type: 'text', text: 'Reformatted data so that it is wrapped in the Hugging Face dataset class.'}],
              [{type: 'text', text: 'Add the language category and stack the final 6 datasets on top of one another to create a unified dataset.'}],
            ]
          },
          {type: 'p', text: 'Final dataset inluded 6 language groups with about 300 rows per group. Each row contains the label for the language group and an audio file of 30 seconds or less at 16k Hz.'},
          {type: 'p', className: 'note', text: 'Note: Reformatting such a large volume of audio took quite a bit of computing resources, and so I explored/compared different free resources like Kaggle, GoogleCollab, as well as CPU vs. GPU.'}, 
        ],
      },
      {
        type: 'DisclosurePanel', 
        title: {type: 'h3', text: 'Fine-tuning the model'},
        children: [
          {type: 'h4', text: 'Foundation Model'},
          {type: 'a', text: 'DistilHuBERT', href: 'https://huggingface.co/ntu-spml/distilhubert'},
          {type: 'text', text: ' is a smaller version of HuBERT that was modified from BERT. BERT is a speech recognition model with encoder-only CTC architecture. For this project, a classification layer was added.'},
          {type: 'h4', text: 'Fine-tuning Process'},
          {type: 'text', text: 'I fine-tuned '},
          {type: 'a', text: 'DistilHuBERT', href: 'https://huggingface.co/ntu-spml/distilhubert'},
          {type: 'text', text: ' on 50% of the '},
          {type: 'a', text: 'L2-Actic', href: 'https://psi.engr.tamu.edu/l2-arctic-corpus/'},
          {type: 'text', text: ' data to classify the accents in the 6 language groups and create this model on Hugging Face: '},
          {type: 'a', text: 'kaysrubio/accent-id-distilhubert-finetuned-l2-arctic2', href: 'https://huggingface.co/kaysrubio/accent-id-distilhubert-finetuned-l2-arctic2'},
          {type: 'h4', text: 'Hyperparameters used'},
          {
            type: 'table', headers: ['Hyperparameter', 'Value'],
            rows: [
              ['learning_rate', '5e-05'],
              ['train_batch_size', '8'],
              ['eval_batch_size', '8'],
              ['seed', '42'],
              ['optimizer', 'Use OptimizerNames.ADAMW_TORCH with betas=(0.9,0.999) and epsilon=1e-08 and optimizer_args=No additional optimizer arguments'],
              ['lr_scheduler_type', 'linear'],
              ['lr_scheduler_warmup_ratio', '0.1'],
              ['num_epochs', '10'],
              ['mixed_precision_training', 'Native AMP'],
            ],
          },
          {type: 'h4', text: 'Environment used: '},
          {type: 'a', text: 'Google Collab', href: 'https://colab.research.google.com/'},
          {type: 'text', text: ' T4 GPU'},
        ],
      },
      {type: 'h3', text: 'Limitations'},
      {type: 'p', text: 'The model is very accurate for novel recordings from the original dataset that were not used for train/test. However, the model is not accurate for voices from outside the dataset. Unfortunately with only 24 speakers represented, it seems like the model memorized other characteristics of these voices besides accent, thus not creating a model very generalizable to the real world.'},
      {type: 'h3', text: 'Next Steps'},
      {type: 'p', text: 'The code is good! If a new dataset becomes available that includes many more voices and clear accent categories, this code may be reused to train a model that generalizes to the real world.'},
      {type: 'h2', text: 'Audio Sources Used'},
      {type: 'ul', className: 'shortLineHeight', elements: [
        [{type: 'text', text: 'irish.wav, a clip from '}, {type: 'a', text: 'Derry Girls', href: 'https://www.youtube.com/watch?v=5J211yVWIzg'}],
        [{type: 'text', text: 'indian.wav, a from '}, {type: 'a', text: 'Abdul Bari teaching on Algorithms', href: 'https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLEouKpnYLW8Gk4w7pe8F5J5UNNIkljZWn'}],
        [{type: 'text', text: 'mexican.wav, a clip from Jaime Camil playing Rogelio de la Vega on '}, {type: 'a', text: 'Jane the Virgin', href: 'https://www.youtube.com/watch?v=7HwnS6R7_wQ'}],
        [{type: 'text', text: 'south_african.wav, a clip from '}, {type: 'a', text: 'Trevor Noah', href: 'https://www.youtube.com/watch?v=xma3ZdwtEJ4'}],
        [{type: 'text', text: 'chinese-american.wav, a clip from '}, {type: 'a', text: 'Ronny Chieng', href: 'https://www.tiktok.com/@netflixisajoke/video/7450493571158920478?lang=en'}],
        [{type: 'text', text: 'nigerian.wav, a clip from Daniel Etim Effiong and Tana Adelana in '}, {type: 'a', text: 'Dinner for Four', href: 'https://www.youtube.com/watch?v=QFhI71C4iRI'}],
        [{type: 'text', text: 'vietnamese.wav, a clip from the '}, {type: 'a', text: 'L2-Arctic', href: 'https://psi.engr.tamu.edu/l2-arctic-corpus/'}, {type: 'text', text: ' data, participant THV file b0303.wav'}],
      ]}
    ],
  },
  // danceability
  {
    path: 'danceability',
    short_title: 'Danceability',
    title: 'Predicting Danceability using Machine Learning Models for Regression',
    date: 'January 2024',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: false,
    desc: 'Trained models to predict the danceability of songs',
    mainImage: {
      type: 'png',
      src: dancing,
      alt: 'Three people dancing in colorful clothing',
    },
    techStack: ['Traditional Machine Learning','scikit-learn'],
    project_details: [
      {
        type: 'GoalAndGithub',
        elements: [
          {type: 'h2', text: 'Goal'},
          {type: 'p', text: 'Train a model that predicts danceability scores from the temporal features of songs. This was a practice project I completed after completing trainings in scikit-learn.'},
        ],
        href: 'https://github.com/KaySRubio/music-data-sci-regression',
      },
      {type: 'h2', text: 'Methods'},
      {type: 'h3', text: 'Tech Stack'},
      {
        type: 'TechStack',
        techList: ['scikitlearn',  'joblib', 'pandas', 'matplotlib', 'numpy', 'seaborn'],
      },
      {type: 'h3', text: 'Data'},
      {type: 'p', text: 'I chose an open-source dataset from EchoNest (now Spotify) that contained metadata on 13,000 songs, a subset of the Free Music Archive. Features include 223 temporal features, along with instrumentalness and tempo. I split data into 75% training and 25% test.'},
      {type: 'h2', text: 'Results'},
      {
        type: 'table',
        headers: ['Model', 'Best Hyperparameters', 'Best mean accuracy score*'],
        rows: [
          ['Gradient Boosting', 'max_depth: 3, n_estimators: 500', '0.0666'],
          ['Random Forest Regressor', 'max_depth: 20, n_estimators: 100', '0.0773'],
          ['Multivariate Linear Regression**', 'N/A', '	0.0995'],
          ['Multilayer Perceptron', 'activation: logistic, hidden_layer_sizes: 50', '1.3223'],
        ],
      },
      {type: 'p', className: 'note', text: '*Mean accuracy score is how far off the model\'s predictions of danceability was from the actual danceability score in the test data. Danceability ranged from 0-1, so the best model was able to predict danceability of songs very close to the actual scores, only an average of 0.06 points off!'},
      {type: 'p', className: 'note', text: '**I used a restricted set of predictors were used based on what I found to be linearly related to the outcome during data cleaning'},
      {type: 'h2', text: 'Putting the strongest model to the test'},
      {type: 'p', text: 'The gradient boosting model with max-depth of 3 and number of estimators of 100 was used on 3 new songs'},
      {
        type: 'table',
        headers: ['Song name', 'Artist', 'Predicted Danceability', 'Actual Danceability'],
        rows: [
          ['Wooden Ships', 'Unknown', '0.04867972', '0.05166771'],
          ['Shakkei (Remixed)', '	Origamibiro', '0.51086412', '0.44688061'],
          ['Niris', 'Nicky Cook', '0.83163573', '0.94879937'],
        ]
      },
      {type: 'h3', text: 'Takeaways'},
      {type: 'ul', elements: [
        [{type: 'p', text: 'Danceabilty ranges from 0-1 so these danceability predictions are pretty close!'}],
        [{type: 'p', text: 'Model agreed that Wooden Ships is not very danceable with a score of 0.0487 (actual: 0.0517)'}],
        [{type: 'p', text: 'Model agreed that Shakkei (Remixed) by Origamibiro is medium danceable with a score of 0.511 (actual 0.447)'}],
        [{type: 'p', text: 'Model agreed that Niris by Nicky Cook is super danceable with a score of 0.832 (actual 0.949)'}],
      ]},
      {type: 'h2', text: 'Dataset Citation'},
      {type: 'p', text: 'Defferrard, Michael and Benzi, Kirell and Vandergheynst, Pierre and Bresson, Xavier (2017). FMA: A Dataset for Music Analysis. In 18th International Society for Music Information Retrieval Conference (ISMIR). arXiv. 1612.01840. https://arxiv.org/abs/1612.01840'},
    ],
  },
  // diabetes-classifier
  {
    path: 'diabetes-classifier',
    short_title: 'Diabetes Classifier',
    title: 'Using ML Classification Algorithms to Predict Hospital Readmission in Patients with Diabetes',
    date: 'January 2024',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: false,
    desc: 'Trained traditional machine learning models to predict hospital readmission',
    mainImage: {
      type: 'png',
      src: hospitalization,
      alt: 'A patient laying in a hospital bed with a medical professional standing over with a notepad while smiling',
    },
    projectCardTechStack: ['scikitlearn', 'skopt'],
    // techStack: ['Traditional Machine Learning', 'scikit-learn'],
    project_details: [
      {
        type: 'GoalAndGithub',
        elements: [
          {type: 'h2', text: 'Goal'},
          {type: 'p', text: 'Train traditional machine learning models to predict hospital readmission within 30 days for patients with diabetes and compare results to pick the best model. This was a practice project I completed after completing trainings in scikit-learn.'},
        ],
        href: 'https://github.com/KaySRubio/data-sci-diabetes-readmission-classifier',
      },
      {type: 'h2', text: 'Methods'},
      {type: 'h3', text: 'Tech Stack'},
      {
        type: 'TechStack',
        techList: ['scikitlearn', 'skopt', 'joblib', 'pandas', 'matplotlib', 'numpy', 'seaborn'],
      },
      {type: 'h3', text: 'Data'},
      {type: 'p', text: 'I picked an open-source dataset from the UC Irvine Machine Learning Repository containing hospital records on 101,766 hospitalizations among patients with diabetes from 1999-2008 at 130 US hospitals. Predictors include some demographics (race, gender, age), admission type, discharge type, time in hospital, number of lab procedures and medications given during hospitalization, number of prior visits (outpatient, emergency, inpatient) in the last year, a number of lab values, etc. I split data into 75% training and 25% test.'},
      {type: 'p', text: 'I cleaned the data, checking values and imputing missing data (where variables had a relatively small percent of missing data). I dropped variables with very high amounts of missing data, as well as variables unlikely to be related to the outcome like insurance payer code. I also collapsed some categories where variables had a lot of categories, and checked linear relationships with outcome. Variables without a linear relationship with the outcome were left out of the logitsic regression model.'},
      {type: 'h2', text: 'Results'},
      {
        type: 'table',
        headers: ['Model', 'Hyperparameters*', 'Accuracy*', 'Precision', 'Recall'],
        rows: [
          ['Random Forest Classifier', 'max_depth: 20, n_estimators: 100', '88.783%', '66.667%', '0.64%'],
          ['Gradient Boosting Classifier', 'learning_rate: 0.1, max_depth: 3, n_estimators: 50', '88.747%', '50.0%', '0.605%'],
          ['Logistic Regression', 'default', '88.731%', '47.619%', '1.422%'],
          ['Multilayer Perceptron', 'activation: relu, learning_rate: constant', '88.695%', '41.096%', '1.067%'],
          ['K-Neighbors Classifier', 'leaf_size: 50, n_neighbors: 7, weights: uniform', '88.447%', '30.366%', '2.063%'],
        ]
      },
      {type: 'p', className: 'note', text: '*Hyperparameter combinations were examined using Bayes Search CV from scikit-optimize with 3-fold cross-validation on the training data'},
      {type: 'p', className: 'note', text: '*Accuracy, Precision, and Recall were calculated on the test data'},
      {type: 'h3', text: 'Random Forest Classifier Results after Tuning for Precision'},
      {type: 'p', text: 'Since users of this type of medical model would likely want to prioritize identifying as many people who are going to be rehospitalized and keep a low false-negative rate, I tuned the best model, Random Forest Classifier, to reduce precision'},
      {type: 'ul', elements: [
        [{type: 'p', text: 'At threshold: 0.07, predicted readmitted: 19882, predicted not readmitted: 19558, accuracy: 29.737%, precision: 12.916%, recall: 91.323%'}],
        [{type: 'p', text: 'At threshold: 0.05, predicted readmitted: 24129, predicted not readmitted: 19558, accuracy: 14.414%, precision: 11.509%, recall: 98.755%'}],
      ]},
      {type: 'h3', text: 'Best predictors'},
      {type: 'p', text: 'According to logistic regression, the 3 strongest predictors in a linear model are:'},
      {type: 'ul', elements: [
        [{type: 'p', text: 'discharge disposition'}],
        [{type: 'p', text: 'number of inpatient visits in past year'}],
        [{type: 'p', text: 'change in diabetes medication during hospitalization'}],
      ]},
      {type: 'p', text: 'Note: During data cleaning/exploration, I noted that many predictors in the dataset did not have a significant linear relationship with the outcome. I left out these out of some models such as logistic regression. I checked other models on both datasets (all predictors vs. only predictors with a linear relationships) but including more or fewer predictors did not make a significant difference on results.'},
      {type: 'h2', text: 'Discussion'},
      {type: 'ul', elements: [
        [{type: 'p', text: 'All models struggled to differentiate between patients destined to be readmitted in 30 days from those who weren\'t based on predictors available, but Random Forest Classifier came out the strongest.'}],
        [{type: 'p', text: 'When tuned by default to prioritize accuracy, the highest accuracy rate of 88.8% is little better than a prediction that 0 patients would be re-hospitalized in 30 days, which would be correct 88.7% of the time.'}],
        [{type: 'p', text: 'When the best model was tuned to prioritize precision, I\'d have to assume that just over half of all patients are at risk of being re-hospitalized in order to capture almost all of the 11% who will be re-hospitalized.'}],
        [{type: 'p', text: 'more data exploration/preparation could be conducted to reduce skew, bring back categorical diversity among some variables, and work with a medical expert to deturmine what comorbid diagnoses are relevant and create categories around that. This could improve the relationships in the data for future models.'}],
      ]},
      {type: 'h2', text: 'Dataset Citation'},
      {type: 'p', text: 'Beata Strack, Jonathan P. DeShazo, Chris Gennings, Juan L. Olmo, Sebastian Ventura, Krzysztof J. Cios, and John N. Clore, “Impact of HbA1c Measurement on Hospital Readmission Rates: Analysis of 70,000 Clinical Database Patient Records,” BioMed Research International, vol. 2014, Article ID 781670, 11 pages, 2014.'}
    ],
  },
  // dear abby topic-modeling
  {
    path: 'topic-modeling',
    short_title: 'Topic Modeling',
    title: 'Topic Modeling with Dear Abby Questions',
    date: 'February 2024',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: false,
    desc: 'Explored underlying topics in 20,000 Dear Abby questions to practice Natural Language Processing (NLP)',
    mainImage: {
      type: 'png',
      src: dearabby,
      alt: 'A photo of Abigail Van Buren\'s column Dear Abby that includes a picture of her face as well as some small text',
    },
    projectCardTechStack: ['nltk', 'scikitlearn'],
    project_details: [
      {
        type: 'GoalAndGithub',
        elements: [
          {type: 'h2', text: 'Goal'},
          {type: 'p', text: 'I used unsupervised machine learning to explore underlying topics in 20,000 Dear Abby questions from 1985-2017. This involved cleaning and preparing the data using natural language processing (NLP) techniques like tokenization and lemmatization. Then I used topic modeling algorithms including Latent Dirichlet Allocation (LDA) and Non-negative matrix factorization (NMF) to generate underlying topics from the data. This was a practice project I completed after completing trainings in NLP.'},
        ],
        href: 'https://github.com/KaySRubio/dear-abby-topic-modeling'
      },
      {type: 'h2', text: 'Methods'},
      {type: 'h3', text: 'Tech Stack'},
      {
        type: 'TechStack',
        techList: ['nltk', 'scikitlearn', 'joblib', 'matplotlib', 'numpy', 'pandas'],
      },
      {type: 'h3', text: 'Data Preparation Steps'},
      {type: 'div', className: 'align-row', elements: [
        {
          type: 'ol', 
          elements: [
            [{type: 'text', text: 'Expanded contractions, removed symbols, punctuation, numbers, and some content-specific phrases such as copyright or booklet information'}],
            [{type: 'text', text: 'Tokenized and lemmatized the data'}],
            [{type: 'text', text: 'Removed stopwords from the data such as generic words as well as content-specific words like "feel", "say", "go", "dear", "abby"'}],
            [{type: 'text', text: 'Created a dictionary and a term-document frequency corpus'}],
            [{type: 'text', text: 'Generated coherence scores which indicated that the ideal number of topics could be 1, 2, 4, 5, or 21'}],
          ]
        },
        {type: 'img', src: dearabby, alt: 'A photo of Abigail Van Buren\'s column Dear Abby that includes a picture of her face as well as some small text'},
      ]},
      
      {
        type: 'DisclosurePanel',
        title: {type: 'text', text: 'Example of original and cleaned data (click for details):'},
        children: [
          {
            type: 'table',
            headers: ['Original', 'Cleaned'],
            rows: [
              [
                'i am newly married to a woman i\'ll call edith. it\'s the second time around for both of us. now for the problem: when we make love, edith makes me wear an undershirt. why? because i have "gretchen" tattooed on my chest above my heart. (gretchen was my first wife.) edith knew i had gretchen on my chest when she married me, but it didn\'t bother her. now, it\'s either cover up gretchen or no lovemaking. i am not used to wearing anything to bed, but unless i want to go right to sleep i have to wear an undershirt. is there some way to remove a tattoo? i\'ve had it since i was 20, and now i\'m 41. henry in elizabeth, n.j.',
                'newly marry woman edith second time around problem love edith wear undershirt gretchen tattoo chest heart gretchen wife edith gretchen chest marry bother either cover gretchen lovemaking wear anything bed unless right sleep wear undershirt remove tattoo since henry elizabeth nj',
              ],
            ],
          },
        ],
      },
      {type: 'h3', text: 'Algorithms'},
      {type: 'p', text: 'Non-Negative Matrix Factorization (NMF) is a topic modeling algorithm that assumes each question belongs to only 1 topic. I used Inverse document frequency (TF-IDF) Vectorization to create a document-term matrix for each unique single word (unigram) and pair of words (bigram). I used both unigrams and bigrams as input for NMF.'},
      {type: 'p', text: 'In contrast with NMF, Latent Dirichlet Allocation (LDA) assumes all questions share topics but have different weightings of those topics.'},
      {type: 'h2', text: 'Results'},
      {type: 'img', src: dear_abby_word_cloud, alt: 'A word cloud with the largest words being year, time, husband, friend, mother, love, old, people, children, family, marry, etc.', className: 'medium-large-img'},
      {type: 'h3', text: 'Topic Modeling with Non-Negative Matrix Factorization (NMF)'},
      {type: 'p', text: 'Since Non-Negative Matrix Factorization (NMF) assumes each question belongs to only 1 topic, the results seemed less repetitive and more interesting compared to LDA in this project. I also appreciated having the algorithm to pull out more topics (21) rather than fewer (4), so I\'ll highlight these results.'},
      {
        type: 'DisclosurePanel',
        title: {type: 'text', text: '21 Topics generated by NMF (click to see all topics):'},
        children: [
          {
            type: 'table',
            headers: ['Topic', 'Topic Words', 'Example question', 'Percent of questions in this topic'],
            rows: [
              [
                '1',
                'work job pay money help time bill co office workers day cannot boss buy college spend full good save',
                'i\'m a mechanic with a problem i\'ve never seen in your column. please help me before i go nuts. have you ever worked with a whistler? at 10 minutes to 8 in the morning, i can hear whistling as he is coming into the shop. and he whistles for eight hours continuously! no tune--just whistling. i don\'t know whether to cry, throw something at him, choke him or what. one day he was out sick, and i thought i had died and gone to heaven! i finally told the boss. he said if i didn\'t like it, i could quit. (the whistler is his brother-in-law.) i need this job. what do you suggest? going nuts in dunkirk, n.y.',
                '5.9%',
              ],
              [
                '2',
                'home house live leave visit time dinner stay neighbor move eat room night door invite day sit sleep bring food',
                'how do you politely tell friends and relatives who are guests in your home that your computer and tv are off-limits? once they take control of the remote or the computer, they seem to go crazy and change all the settings to their preferences and never put the settings back when they leave! what can i do, abby? -- frustrated in lewis run, pa.',
                '5.3%',
              ],
              [
                '3',
                'man women men woman sex meet marry young single age guy find interest male attractive hair female attract never',
                'how can i give my boyfriend makeup sex if we never have an argument? -- miss bliss in Indiana',
                '5.3%',
              ],
              [
                '4',
                'friend friends best friendship party close good invite hurt recently mine really guy always time lose',
                'i am having an argument with a friend who considers himself an authority on everything. the question: who said, "the only thing we have to fear is fear itself"? i say, franklin roosevelt said it. my friend says the duke of wellington said it. who is right? big fight in little rock',
                '5.1%',
              ],
              [
                '5',
                'husband law marry marriage children years laws love problem affair mother ex hurt refuse picture upset ago woman',
                'my daughter has been divorced less than a year and is dating again. (she\'s the one who left the marriage.) however, she keeps many pictures of her ex-husband on her facebook page. she says he was a big part of her life, and she refuses to take them down. she thinks if a guy can\'t accept it, then he isn\'t the right guy. do you agree that she\'s sending the wrong message? -- take the photos down',
                '4.9%',
              ],
              [
                '6',
                'family sister brother members law sisters member holiday close gather brothers include invite hurt attend friends',
                'i would like you to settle a major family dispute once and for all. i am a 20-year-old college student who comes from a working-class family and grew up in a blue-collar community. the dispute is this: is there a distinct difference between a "profession" and a "trade" (job)? my family says a person with a trade is a professional in that area, so there can be no distinction between the two. i disagree. i say lawyers, doctors, teachers, etc. are "professionals" and roofers, auto mechanics, construction workers, etc. are "trade people." is there a difference? profession or trade, river rouge, mich.',
                '4.9%',
              ],
              [
                '7',
                'children parent kid child age grandchildren dad raise young grow adult teach adopt live adults childrens abuse mom older',
                'in a recent letter someone objected to keeping children out of school for appointments. you supported this view and requested that all physicians and dentists make their appointments with schoolchildren after school. how? i am a pedodontist and my practice is exclusively children and adolescents. if i were to follow your recommendation, i would have to schedule all my patients between 3 and 5 p.m. daily. this is impossible. please print this. perhaps some people will try to be more understanding. my poor secretary takes an awful beating from irate parents. frustrated dentist',
                '4.9%',
              ],
              [
                '8',
                'years ago marry divorce marriage live five months move together father four never old since life die',
                'six years ago, i did something stupid. my husband and i had two children and our marriage was rather shaky, so i let myself get talked into having my tubes tied. four years later, we divorced. seven months ago, i remarried. guess what? we want children. i was told that my surgery can be reversed - for $12,000! paid in full - up-front! this type of surgery is not covered by our insurance company. abby, i barely earn that in a year. do you know how long it will take us to save $12,000? i am 35 years old and my biological clock is running out. i know you can\'t help me, but maybe this letter will help someone else. women, please do not have your tubes tied if there is even the slightest chance that you will regret it later. all tied up',
                '4.6%',
              ],
              [
                '9',
                'wed marry bride plan invite attend fiance reception groom invitation ceremony party guests church pay couple gift brides shower',
                'our son, 33, is getting married for the third time. his fiance has never been married and is planning a large church wedding. our son\'s first wedding was a traditional church ceremony with all the trimmings, showers, gifts, etc. the second time, he married a young woman who had been married before, so it was much smaller, but most of our friends and relatives sent gifts anyway. now i feel awkward sending wedding invitations to our friends and relatives a third time. i\'m also afraid the bride-to-be will wonder why there will not be a wedding shower from my son\'s friends and relatives. how do people feel about this? we honestly don\'t know what to do, but we\'ve been through all this twice already. enough is enough',
                '3.3%',
              ],
              [
                '10',
                'wife ex divorce marry marriage wifes years affair children brother man daughters recently daughter woman second picture',
                'after 27 years of marriage, my wife told me she is attracted to other women. to my knowledge, she has acted on this only once. every day i wonder where our relationship stands. one day she can\'t see herself without me; the next, she says we should divorce. i don\'t know if i should end this or wait to see where it goes. i will need counseling if we divorce, but currently i can\'t afford it. yes, i love her, but what matters most to me is that she is happy. i don\'t have anyone else to talk to about this. any suggestions? -- mr. d. in California',
                '3.3%',
              ],
              [
                '11',
                'son father old sons boy law child daughter girlfriend boys dad grandson refuse young help part answer support play trouble',
                'i need help. my son joined the army, then after he finished basic training, he took off without leave. so far, he\'s still running, calling me whenever he can. he called last night saying he was tired of running wants to give himself up. i need to know what the army will do to him for running away. will he have to go to prison? will they beat him? he\'s only 20. please answer soon because he is waiting for your answer. can\'t sign this',
                '3.3%',
              ],
              [
                '12',
                'gift send card thank receive note birthday christmas buy wed money shower present check return mail invitation holiday party',
                'like a lot of other people, the only time i write to some of my friends is during the holidays. my problem is that my husband and i are in the process of getting a divorce. we have been married for a number of years and have no children (which makes it easier), but it\'s still hard. how do i tell our friends? would it be proper to give them the news on a christmas card while wishing them a happy holiday? or should i just send a normal holiday card like all is well and write a separate note later? our divorce will not be final until february. how to tell',
                '3.2%',
              ],
              [
                '13',
                'mother father mom law daughter dad day die help daughters away brother pass live sister child hurt never',
                'my mother-in-law passed away two years ago from lung cancer. my father-in-law hasn\'t taken it well. this year at christmas he fabricated a letter and gifts "from her" for the grandkids, as if she had written the letter and bought the gifts before she passed away. he did it without my knowledge. i am angry and upset that i was made part of this lie without my consent. i refuse to lie to my daughter about this and plan to throw the letter away. my daughter is 6 and doesn\'t seem to understand. my husband doesn\'t think it\'s that big a deal and doesn\'t know what he can do about it. i loved my mother-in-law, but i\'m tired of dealing with this. this is not the first strange thing my father-in-law has done. i feel like i get no support from my husband, who won\'t ever say anything to his dad. am i right in how i feel? -- don\'t want to lie in ohio',
                '3.2%',
              ],
              [
                '14',
                'school high college class graduate grade teacher students senior girl student attend guy graduation girls parent junior friends teachers',
                'in my opinion, we need a national slogan that reminds us to care about everybody and everything. of course, the golden rule represents this. it should be taught to children in the schools. at the beginning of the first class, its meaning could be explained. at the end of the day, teachers could remind the students, "don\'t forget the golden rule." what do you think, abby? -- nandor lazar, norfolk, va.',
                '3.2%',
              ],
              [
                '15',
                'wear ring dress engagement buy hair clothe phone white abbys color finger jewelry black short new beautiful shirt hat',
                'my boyfriend surprised me with a diamond engagement ring for christmas. it wasn\'t cheap by any means, but i hated it. now the problem. i went to the jewelry store it came from and exchanged it for the kind i wanted-a solitaire. i\'ve been married before and i hated my first engagement ring, so this time i wanted one i really liked, so i got a solitaire. i love my boyfriend with all my heart, and i wouldn\'t hurt his feelings for the world, but i\'m afraid i did. i could see the disappointment in his eyes when i told him i had exchanged my ring for a solitaire. he admitted he felt hurt, but he never brought the subject up again. was i wrong to have exchanged the ring? i\'ve been put down by family members. what do you think? put down in Canada',
                '3.2%',
              ],
              [
                '16',
                'love relationship together life time boyfriend never cannot guy problem hurt really months heart break meet man ever always marry',
                'i love my boyfriend, "joe," with all my heart; however, we have a communication problem. sometimes i feel he is dodging me or doesn\'t want to talk to me. joe thinks our conversations always lead to an argument, so he tries to avoid talking. joe recently moved six hours away, making it even harder to talk. i understand he may be excited about living in a new town, but i feel i deserve a little more respect than i\'m getting. i\'d like to talk to joe about this, but every time i call him he ignores my questions and practically hangs up on me. abby, how can i improve our communication? -- alone by the telephone',
                '3.1%',
              ],
              [
                '17',
                'baby child pregnant shower sit girl birth bear months expect boy pregnancy new sitter daughter adoption adopt little grandchild',
                'a friend of mine is expecting triplets. must everyone who attends her baby shower give her three presents, or is one gift acceptable? over budget',
                '2.7%',
              ],
              [
                '18',
                'old year daughter girl woman age son boy mom man years worry problem girls little live',
                'my 6-year-old cousin wanted to make a lemonade stand, so my sister and i helped her, but she got discouraged because nobody would buy any. she was so angry she started yelling, then she crossed the line and dropped the f-word. my sister and i were shocked that a 6-year-old would know that word. she said her classmate told it to her. (they\'re in kindergarten.) we told our parents, but we\'re not sure if we should tell her mother because she might think my sister and i taught it to her. should we tell her mother or let it slide hoping she will forget the word and move on? -- not sure in san diego',
                '2.5%',
              ],
              [
                '19',
                'dog pet cat neighbor animal sleep owner put allow bite walk train clean service bring care lover house yard front',
                'i am 8 years old. my mom told me our neighbor\'s dog was old and sick, so he had to put his dog to sleep. i hate this. i know it is what is best for the dog, but i can\'t stop thinking about it. how can i get over this? -- henry in austin, texas',
                '1.2%',
              ],
              [
                '20',
                'people letter question read answer hear person column may thank readers word print doctor others smoke find sign remember time',
                'you\'ve heard from the jacks and the chucks, and then you said, "now let\'s hear from the johns." haven\'t you heard? johnny can\'t read. johnny can\'t write. johnny can\'t seem to do anything. maybe that\'s why they say, "let george do it." john can in oregon every teen-ager should know the truth about drugs, sex and how to be happy. for abby\'s booklet, also available in spanish, send your name and address clearly printed with a check or money order for $2.50 (this includes postage) to: abby, teen booklet, p.o. box 38923, hollywood, calif. 90038.',
                '4.9%',
              ],
              [
                '21',
                'envelope stamp angeles self address los po box calif personal enclose reply',
                'i\'m surprised you didn\'t recommend silicone implants to "flat-chested." i spent 39 years hating my body, then i decided to have breast- augmentation surgery. i\'m only sorry i waited so long. looking great problems? what\'s bugging you? unload on abby, p.o. box 38923, hollywood, calif. 90038. for a personal reply, please enclose a stamped, addressed envelope.',
                '22.4%',
              ],
            ],
          },
        ],
      },
      {type: 'h3', text: 'Topic Modeling with Latent Dirichlet Allocation (LDA)'},
      {type: 'p', text: 'I found that LDA tended to identify topics focused heavily on time, husbands, and mothers, with some additional more minor themes that were present in most or all of the questions. Coherence scores suggested trying 2, 5, and 21 topics. 2 topics didn\'t seem to provide enough information and 21 topics had a lot of overlap so I will highlight the results using 5 topics here.'},
      {
        type: 'DisclosurePanel',
        title: {type: 'text', text: '5 Topics generated by LDA (click to see all topics):'},
        children: [
          {
            type: 'table',
            headers: ['Topic', 'Topic Words'],
            rows: [
              [
                '1',
                'years time husband year love wife family people old home',
              ],
              [
                '2',
                'years daughter old love never year time marry people husband',
              ],
              [
                '3',
                'years time people love old family husband live work day',
              ],
              [
                '4',
                'husband years mother time year marry live children family son',
              ],
              [
                '5',
                'time husband never year love cannot years people family mother',
              ]
            ],
          },
        ],
      },
      {type: 'img', src: dear_abby_lda_5, alt: 'A diagram of LDA results showing 5 topics, 3 of which overlap, and listing 30 most relevant terms for topic #1 which include husband, years, mother, time, etc.', className: 'medium-large-img'},
      {type: 'h2', text: 'Next Steps'},
      {type: 'p', text: 'Future directions include modeling how topics may have changed over time from 1985-2017 and identifying trends. Also, there\'s always more data cleaning to do. While I excluded some column-related phrasing and words in the first pass, I discovered that some logistical info was still left in and affected some of the topics, so more rigorous data cleaning could improve results. I\'d also like to explore Latent Semantic Analysis (LSA) and other topic modeling algorithms.',},
      {type: 'h2', text: 'Sources'},
      {
        type: 'ul',
        elements: [
          [{type: 'a', text: 'pyLDAvis', href: 'https://pyldavis.readthedocs.io/en/latest/readme.html'}],
          [{type: 'a', text: 'NMF from scikit-learn', href: 'https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html'}],
          [{type: 'a', href: 'https://www.kaggle.com/datasets/thedevastator/american-anxieties-dear-abby-s-questions', text: 'American Anxieties: Dear Abby\'s Questions 20,000 Questions to Dear Abby: Insights on American Anxieties By Kelly Garrett'}],
        ]
      },
    ],
  },
  // algorithm-ocean
  {
    path: 'algorithm-ocean',
    short_title: 'Algorithm Ocean',
    title: '',
    date: '',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    visible: true,
    featured: false,
    desc: 'Web app to teach students sorting algorithms with an under-the-sea theme',
    mainImage: {
      type: 'png',
      src: anemone,
      alt: 'A cartoon anemone with a green body and pink tentacles and eyes looking up',
    },
    techStack: ['React', 'TypeScript'],
    project_details: [],
  },
  // i-ready
  {
    path: 'i-ready',
    short_title: 'i-Ready',
    title: '',
    date: '',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    visible: true,
    featured: false,
    desc: 'Math and literacy programs for kids at Curriculum Associates',
    mainImage: {
      type: 'png',
      src: iready,
      alt: 'A cartoon with 3 alien characters from the i-Ready program smiling and dancing around the i-Ready logo',
    },
    techStack: ['React', 'Nodejs'],
    project_details: [],
  },
  // speech-app
  {
    path: 'speech-app',
    short_title: 'Speech App',
    title: '',
    date: '',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    visible: true,
    featured: true,
    desc: 'A tool to input audio and display phonemic transcriptions and data',
    mainImage: {
      type: 'svg',
      src: mic,
      alt: 'A cartoon microphone',
    },
    techStack: ['React', 'Nodejs'],
    project_details: [],
  },
];

export const projectPaths = projects.map(project => project.path);

// Tech stack data for rendering tech stack with images on project details pages
export const techStackData: TechStackData = [
  // data science libraries
  {
    type: 'nltk',
    name: 'Natural Language Toolkit',
    iconComponent: nltk,
    href: 'https://www.nltk.org/',
  },
  {
    type: 'scikitlearn',
    name: '',
    iconComponent: scikitlearn,
    href: 'https://scikit-learn.org/stable/',
  },
  {
    type: 'skopt',
    name: 'scikit-optimize',
    iconComponent: skopt,
    href: 'https://scikit-optimize.github.io/stable/',
  },
  {
    type: 'librosa',
    name: 'librosa',
    iconComponent: librosa,
    href: 'https://librosa.org/doc/latest/index.html',
  },
  {
    type: 'joblib',
    name: 'JobLib',
    iconComponent: joblib,
    href: 'https://joblib.readthedocs.io/en/stable/',
  },
  {
    type: 'pandas',
    name: 'pandas',
    iconComponent: pandas,
    href: 'https://pandas.pydata.org/',
  },
  {
    type: 'matplotlib',
    name: 'matplotlib',
    iconComponent: matplotlib,
    href: 'https://matplotlib.org/',
  },
  {
    type: 'numpy',
    name: 'NumPy',
    iconComponent: numpy,
    href: 'https://numpy.org/',
  },
  {
    type: 'seaborn',
    name: 'seaborn',
    iconComponent: seaborn,
    href: 'https://seaborn.pydata.org/',
  },

  // neural network libraries
  {
    type: 'fastai',
    name: 'fastai',
    iconComponent: fastai,
    href: 'https://docs.fast.ai/',
  },
  {
    type: 'huggingface',
    name: 'HuggingFace',
    iconComponent: huggingface,
    href: 'https://huggingface.co/',
  },
  {
    type: 'pytorch',
    name: 'PyTorch',
    iconComponent: pytorch,
    href: 'https://pytorch.org/',
  },
  {
    type: 'wandb',
    name: 'Weights & Biases',
    icon: wandb,
    href: 'https://wandb.ai/site/',
  },

  // Front-end libraries
  {
    type: 'react',
    name: 'React',
    iconComponent: reactIcon,
    href: 'https://react.dev/'
  },
  {
    type: 'nodejs',
    name: 'Node.js',
    iconComponent: nodejs,
    href: 'https://nodejs.org/en',
  },
  {
    type: 'vite',
    name: 'Vite',
    iconComponent: vite,
    href: 'https://vite.dev/guide/static-deploy',
  },
  {
    type: 'webpack',
    name: 'webpack',
    iconComponent: webpack,
    href: 'https://webpack.js.org/',
  },
  {
    type: 'typescript',
    name: 'TypeScript',
    iconComponent: typescript,
    href: 'https://www.typescriptlang.org/',
  }


  /*
  // languages
  python: {
    name: '',
    iconComponent: '',
  },
  javascript: {
    name: '',
    iconComponent: '',
  },

  // environments
  {
    type: 'vscode',
    name: 'Visual Studio Code',
    iconComponent: null,
    href: 'https://code.visualstudio.com/',
  },
  {
    type: 'jupyterLab',
    name: '',
    iconComponent: '',
    href: '',
  },
  */
];

export const techStackList = techStackData.map(tech => tech.type);