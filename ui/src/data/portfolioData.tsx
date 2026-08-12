
import type {
  Project,
  Topic,
  TechStackData,
  Kaysrubio_speech_transcribe_result,
  SpectrogramSettings,
} from '../types/portfolioTypes';
import { TopicNames } from '../types/portfolioTypes';
import { spermWhale113Results, spermWhale5rResults, spermWhaleSocialResults } from './sampleSpermWhaleCodaResults';
import {
  womanSingingResults,
  chickenResults,
  elkResults,
  alligatorResults,
  humpbackResults,
  duckResults,
} from './sampleAudioFeatureExtractionResults';

// jpg
import american_bullfrog from '@/assets/jpg/american_bullfrog1.jpg';
import gray_tree_frog from '@/assets/jpg/gray_tree_frog1.jpg';
import northern_leopardfrog from '@/assets/jpg/northern_leopard_frog1.jpg';
import bats_in_mass from '@/assets/jpg/Bats-in-Massachusetts-MA.jpg';

// png
import accent from '@/assets/png/accent.png';
import anemone from '@/assets/png/anemone.png';
import asrPng from '@/assets/png/asr.png';
import batPng from '@/assets/png/bat.png';
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
import tinyWhale from '@/assets/png/tiny_whale.png';
import transcription from '@/assets/png/transcription.png';
import wandb from '@/assets/png/wandb.png';
import bat_calls1 from '@/assets/png/melrose_bat_20250901_1937_bp5.png';
import melrose_bat_histogram from '@/assets/png/melrose_bat_histogram.png';
import bat_social from '@/assets/png/bat_20241020_1826_bp4_social.png';
import bat_strobe from '@/assets/png/bat_20250630_2054_strobe.png';
import bat_feed from '@/assets/png/bat_20250911_1932_bp1_feed.png';
import big_brown_bat_flying_long from '@/assets/png/big_brown_bat_flying_long.png';
import bat_19 from '@/assets/png/bat_20250914_2055_bp4_19.png';
import bat_25 from '@/assets/png/bat_20250630_2110_bp2_25.png';
import bat_32 from '@/assets/png/bat_20250901_1946_bp3_32.png';
import bat_32_squiggle from '@/assets/png/bat_20250913_2043_32_squiggle.png';
import bat_41 from '@/assets/png/bat_20250913_2100_bp2_41.png';
import bat_53 from '@/assets/png/bat_20250913_1930_53.png';
import bat_pass_clusters from '@/assets/png/bat_pass_clusters.png';
import chicken3 from '@/assets/png/chicken.png';
import chicken4 from '@/assets/png/chicken4.png';
import egg_song from '@/assets/png/chickens_2024_egg_song_flo_clip.png';
import nesting from '@/assets/png/chickens_20250925_egglaying4_clip.png';
import wavering from '@/assets/png/chickens_20241006_0600_coop_wavering_sounds_clip.png';
import disturbed_nesting from '@/assets/png/chickens_20250925_disturbed_at_nest_box_clip.png';
import nesting2 from '@/assets/png/chickens_20250925_egglaying3_clip.png';
import broody from '@/assets/png/chickens_2024_flo_broody_cluck_clip.png';
import begging from '@/assets/png/chickens_20241009_begging_clip.png';
import frustration from '@/assets/png/chickens_20250925_frustration_denied_nest_entry3_clip.png';
import growl from '@/assets/png/chickens_20241006_0600_coop_growl3_clip.png';
import long_call from '@/assets/png/chickens_20241006_1000_coopFL_long_call_Louise.png';
import ravenAnnotate from '@/assets/png/ravenAnnotate.png';
import ageClassifier from '@/assets/png/age_classifier_pic.png';
import speakerDiarizationOutput from '@/assets/png/speaker_diarization.png';
import speakerDiarizationProgram from '@/assets/png/speaker_diarization_program.png';
import amazonSagemaker from '@/assets/png/amazon_sagemaker.png';
import mlflow from '@/assets/png/mlflow.png';

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
import spectrogramSvg  from '@/assets/svg/spectrogram.svg';

// wav
import alligator from '@/assets/wav/alligator.wav';
import chicken_audio from '@/assets/wav/chicken.wav';
import chineseAmerican from '@/assets/wav/chinese-american.wav';
import duck from '@/assets/wav/duck.wav';
import elk from '@/assets/wav/elk.wav';
import humpbackwhale from '@/assets/wav/humpbackwhale.wav';
import indian from '@/assets/wav/indian.wav';
import mexican from '@/assets/wav/mexican.wav';
import nigerian from '@/assets/wav/nigerian.wav';
import singingwoman from '@/assets/wav/singingwoman_16k.wav';
import spermWhale113 from '@/assets/wav/1_1_3_exchange_2_whales.wav';
import spermWhale5r from '@/assets/wav/5r_exchange_2_whales_diving.wav';
import spermWhaleSocial from '@/assets/wav/social_exchange_unit_r.wav';
import vietnamese from '@/assets/wav/vietnamese.wav';
import egg_song_wav from '@/assets/wav/chickens_2024_egg_song_flo_clip.wav';
import nesting_wav from '@/assets/wav/chickens_20250925_egglaying4_clip.wav';
import wavering_wav from '@/assets/wav/chickens_20241006_0600_coop_wavering_sounds_clip.wav';
import disturbed_nesting_wav from '@/assets/wav/chickens_20250925_disturbed_at_nest_box_clip.wav';
import nesting2_wav from '@/assets/wav/chickens_20250925_egglaying3_clip.wav';
import broody_wav from '@/assets/wav/chickens_2024_flo_broody_cluck_clip.wav';
import begging_wav from '@/assets/wav/chickens_20241009_begging_clip.wav';
import frustration_wav from '@/assets/wav/chickens_20250925_frustration_denied_nest_entry3_clip.wav';
import growl_wav from '@/assets/wav/chickens_20241006_0600_coop_growl3_clip.wav';
import long_call_wav from '@/assets/wav/chickens_20241006_1000_coopFL_long_call_Louise.wav';

const timeItTakesAHuggingFaceSpaceToWakeUp = 180;

export const homePageData = {
  // headline: 'Listener, Developer, Explorer',
  headline: '',
  // desc: 'I\'m a software engineer and amateur scientist with a passion for bioacoustics',
  desc: 'I\'m a software engineer and amateur scientist with a passion for bioacoustics. By day, I\'m part of an AI innovation team at an EdTech company. I build educational websites that use speech recognition to evaluate children\'s reading skills.',
  long_desc: 'By night, I record wildlife and analyze sound. My dream is to use neural networks to decode structure and meaning in animal communication. I also hope to build apps that engage the public in bioacoustics and conservation research.',
  //long_desc: 'As a React developer I build interactive educational websites. In my free time I dabble in machine learning and record wildlife. My dream is to analyze animal communication to decode structure and meaning and use the web to engage the public in bioacoustics.',

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
  // chicken-vocalizations --> DONE!!
  {
    path: 'chicken-vocalizations',
    short_title: 'Chicken Vocalizations', // Short title for projectCard
    title: 'Chicken Vocalizations', // Longer title on Project Description page
    date: 'August 2026',
    topics: [TopicNames. BIOACOUSTICS], // choose 1-3 categories
    visible: true, // update to true when your done so it shows up in the list of projects by topic
    featured: true, // update to true if you want it to be listed on the home page
    desc: 'Hen vocalizations are fit into 8 major clusters based on their acoustic features', // Longer description for the projectCard. Try to keep under 12 words.
    long_desc: 'Extract audio features from chicken calls and use K-means clustering to identify major call types',
    mainImage: {
      type: 'png',
      src: chicken3,
      alt: 'hen making sounds',
    },
    projectCardTechStack: ['scikitlearn', 'librosa', 'pandas', 'ravenannotate'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {type: 'h2', text: 'Introduction'},
          {type: 'div', className: 'row-with-text-and-pic', elements: [
            {type: 'p', text: 'Better understanding the communication systems of other species can improve human empathy, animal welfare, and support conservation. Birds often vocalize to coordinate flock behavior, and their vocalizations reveal information about their activity, emotions, and environmental conditions. Previous research has indicated that chicken vocalizations are extremely similar to their wild ancestors who relied on flock communication to survive (Collias, 1987).'},
            {type: 'img', src: chicken4, className: '', alt: 'hen making sounds'},
          ]},
          
          {type: 'p', text: 'In this project, I explore how unsupervised machine learning can uncover insights in the structure of bird communication. According to Darwin\'s principal of antithesis, opposite situations should result in communication with opposite properties.  For instance, alarm calls due to a predator should have opposite acoustic properties from sounds made during comfortable scenarios like foraging or resting. Following this idea, clustering sounds by their acoustic properties can be a way to group vocalizations into clusters with opposing properties that are theoretically related to opposing situations (e.g., danger vs. comfort). With this hypothesis in mind, I recorded a small flock of hens and explored the data with 5 main steps:'},
              

          {
            type: 'GoalAndGithub',
            elements: [
              {type: 'h3', text: 'Goals'},
              {type: 'ol', elements: [
                [{type: 'text', text: 'Isolate individual chicken calls'}],
                [{type: 'text', text: 'Extract auditory features from each call'}],
                [{type: 'text', text: 'Reduce dimensionality in the data'}],
                [{type: 'text', text: 'Cluster calls by their acoustic properties'}],
                [{type: 'text', text: 'Explore the clusters by examining the means and standard deviations of their features, and examining a sample of audio and spectrograms from each'}],
              ]},
            ],
            href: 'https://github.com/KaySRubio/audio-signal-analysis/tree/main/notebooks/chickens',
          },
          {type: 'h2', text: 'Methods'},
          {type: 'TechStack', techList: ['scikitlearn', 'librosa', 'pandas', 'ravenannotate', 'matplotlib']},
          {
            type: 'DisclosurePanel',
            title: 'The chickens and recording equipment',
            titleEl: 'h3',
            expandedByDefault: false,
            children: [
              {type: 'p', text: '6 heritage breed hens in a backyard coop/run setting were recorded over the course of a year doing a variety of natural behaviors including foraging, dust bathing, nesting, and roosting. A Zoom H1n directional microphone was used and the chickens were often spread out over a large space making it possible to obtain many recordings of only 1 chicken vocalizing at a time.'},
            ],
          },
          {
            type: 'DisclosurePanel',
            title: 'Speaker diarization exploration',
            titleEl: 'h3',
            expandedByDefault: false,
            children: [
              {type: 'p', text: 'For this analysis it is important that the recordings contain individual calls of only one chicken at a time, without overlap of multiple individuals.'},
              {type: 'p', text: 'Speaker diarization models trained on human speech accomplish this task in human recordings, clustering different voices by their vocal qualities, and identifying when more than one individual is speaking at once by timestamp overlap.'},
              {type: 'text', text: 'Can a speaker diarization model trained on human voices work on chickens? To explore this question, I created a composite recording in Audacity with 3 known individual chickens vocalizing one after another with some overlap. Then I used '},
              {type: 'a', href: 'https://docs.nvidia.com/nemo-framework/user-guide/latest/nemotoolkit/asr/speaker_diarization/models.html', text: 'NeMo Sortformer Diairizer'},
              {type: 'text', text: ' and '},
              {type: 'a', href: 'https://huggingface.co/pyannote/speaker-diarization-3.1', text: 'Pyannote Speaker Diarization model'},
              {type: 'text', text: ' to generate timestamps that ideally would highlight individual voices and show overlap.'},
              {type: 'p', text: 'Unfortunately, the timestamp output from both diarizers did not identify individual chicken voices correctly. Most chicken sounds were excluded from the timestamps and instead of 3 speakers, both diarizers identified only 1 speaker in seemingly random locations through the recording.  These results suggest that speaker diarization models trained to cluster individual human voices are not generalizable to chickens and would require species-specific fine-tuning before they can be used.'},
              {type: 'p', text: 'In place of automatic speaker diarization, the recordings were manually examined to cut out portions where more than 1 chicken is vocalizing based on presence of multiple fundamental frequencies and overlapping sounds. Background noises were also cut out including the occasional dog bark, human voice, loud wind gust, or loud scratching sounds from the chickens digging.'}],
          },
          {
            type: 'DisclosurePanel',
            title: 'Data preparation',
            titleEl: 'h3',
            expandedByDefault: false,
            children: [
              {type: 'ol', elements: [
                [{type: 'text', text: 'A low pass filter was applied to the recordings to reduce wind noise below 150 Hz'}],
                [{type: 'text', text: 'Amplitude was normalized across files'}],
                [{type: 'text', text: 'Energy-based voice activity detection was used to separate recordings into individual calls of at least 50 ms in duration'}],
              ]},
            ],
          },
          {
            type: 'DisclosurePanel',
            title: 'Acoustic feature extraction',
            titleEl: 'h3',
            expandedByDefault: false,
            children: [
              {type: 'p', text: 'Acoustic features were extracted from each individual call using a python program that utilizes VAD and feature extraction. RavenAnnotate was used to manually to test the features extracted automatically by the Python program and validate the program.  A sample rate of 22050 Hz was used.'},
              {type: 'p', text: 'Acoustic features included:'},
              {type: 'ul', elements: [
                [{type: 'text', text: 'duration (ms)'}],
                [{type: 'text', text: 'time to next call (ms)'}],
                [{type: 'text', text: 'zero-crossing rate (ZCR)'}],
                [{type: 'text', text: 'min and max frequency (Hz)'}],
                [{type: 'text', text: 'frequency of peak energy (Hz)'}],
                [{type: 'text', text: 'frequency with most energy (Hz) in first segment, second segment, and third segment of call'}],
                [{type: 'text', text: 'max change in frequency of most energy across the segments of the call'}],
                [{type: 'text', text: 'slope in the change in frequency of most energy from first third to last third segment of call'}],
                [{type: 'text', text: 'spectral centroid'}],
                [{type: 'text', text: 'spectral bandwidth'}],
                [{type: 'text', text: 'MFCCs 0-9 with mean, standard deviation, min and max'}],
              ]},
              {type: 'p', text: 'Acoustic features for each call were exported along with metadata related the call including the original filename and timestamps of the call within the file.  The resulting dataset contained 818 calls.'},
            ],
          },
          {
            type: 'DisclosurePanel',
            title: 'Principal components analysis & K-means cluster analysis',
            titleEl: 'h3',
            expandedByDefault: false,
            children: [
              {type: 'p', text: 'Prior to clustering, I normalized all variables and performed principal component analysis to reduce dimensionality in the data while still explaining 90% of the variance.  I used the Elbow method to determine that 8 was a good number of clusters. I then used K-means clustering to fit calls into clusters based on their acoustic features.'}
            ],
          },
          {type: 'h2', text: 'Results'},
          {type: 'p', text: 'Means and standard deviations for the 8 clusters on selected acoustic features are shown in the table below.'},
          {
            type: 'table', headers: ['Feature', 'Cluster 0', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Cluster 5', 'Cluster 6', 'Cluster 7'],
            rows: [
              ['count', '141', '29', '69', '72', '34', '111', '135', '227'],
              ['duration (ms)', '89 ±140', '90 ±107', '629 ±480', '193 ±258', '117 ±198', '241 ±209', '251 ±225', '150 ±220'],
              ['time to next call (ms)', '259 ±434', '291 ±468', '1180 ±1674', '206 ±335', '308 ±146', '209 ±382', '198 ±220', '135 ±169'],
              ['zero-crossing rate', '.08 ±.01', '.15 ±.06', '.10 ±.02', '.08 ±.02', '.05 ±.01', '.07 ±.01', '.11 ±.02', '.06±.01'],
              ['min frequency (Hz)', '476 ±240', '273 ±269', '735 ±266.', '342 ±165', '210 ±56', '595 ±148', '482 ±141', '238 ±100'],
              ['max frequency (Hz)', '1442 ±399', '3093 ±2872', '1434 ±604', '1405 ±413', '889 ±120', '965 ±171', '1897 ±651', '1204 ±342'],
              ['peak frequency (Hz)', '1018 ±159', '616 ±359', '1000 ±135', '770 ±208', '593 ±157', '771 ±124', '1059 ±207', '551 ±196'],
              ['frequency slope', '219 ±4780', '-5879 ±12766', '394 ±1535', '-228 ±5781', '-2232 ±6264', '492 ±2400', '595 ±2032', '-154 ±4540'],
              ['spectral bandwidth', '1750 ±298', '2738 ±295.', '1569 ±275', '1809 ±318', '1209 ±291', '1604 ±284', '1816 ±291', '1767 ±331'],
              
              
            ],
          },
          {type: 'p', text: 'More information and audio/spectrogram examples from each cluster are in the panels below.'},
          {type: 'p', text: 'Click the purple play button to listen the the example chicken calls.'},
          
          {
            type: 'DisclosurePanel',
            title: 'Cluster 0',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [

              {type: 'p', text: 'Cluster 0 (141 calls) includes very short calls (mean 89 ms) of a higher frequency (mean 1018 Hz) with medium spectral bandwidth and ZCR. In the example below, the "egg song" consists of many notes in cluster 0 followed by a long loud note in cluster 6. '},
              {type: 'img', className: 'width100', src: egg_song, alt: 'Spectrogram of a chicken egg song showing multiple short notes labeled cluster 0 followed by one long note labeled cluster 6'},
              {
                type: 'playAudio',
                src: egg_song_wav,
              },
            ],
          },

          {
            type: 'DisclosurePanel',
            title: 'Cluster 1',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [

              {type: 'p', text: 'Cluster 1 (29 calls) includes also very short calls (mean 90 ms) with a lower frequency (mean 661 Hz), much higher ZCR and largest spectral bandwidth and frequency change over the course of the call, as well as a lot of slope variability. Recordings of hens in nest boxes, such as the recording below, often contain many short notes in clusters 1 and 3, as well as longer wavering notes from cluster 2. '},
              {type: 'img', className: 'width100', src: nesting, alt: 'Spectrogram showing chicken sounds related to nesting'},
              {
                type: 'playAudio',
                src: nesting_wav,
              },
            ],
          },
          
          {
            type: 'DisclosurePanel',
            title: 'Cluster 2',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [

              {type: 'p', text: 'Cluster 2 (69 calls) includes very long calls (mean 629 ms) which vary a lot in length and tend to be followed by long silences. They are relatively high frequency (mean 1000 Hz), have a narrower spectral bandwidth, relatively high ZCR. They vary in length and frequency patterns as the examples below show.'},
              {type: 'img', className: 'width100', src: wavering, alt: 'Spectrogram showing chicken vocalizations in cluster 2'},
              {
                type: 'playAudio',
                src: wavering_wav,
              },
              {type: 'p', text: ''},
              {type: 'img', className: 'width100', src: disturbed_nesting, alt: 'Spectrogram showing chicken vocalizations in cluster 2'},
              {
                type: 'playAudio',
                src: disturbed_nesting_wav,
              },
            ],
          },
          {
            type: 'DisclosurePanel',
            title: 'Cluster 3',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [

              {type: 'p', text: 'Cluster 3 (72 calls) includes medium-length calls (mean 193 ms) of medium frequency (mean 770 Hz) and medium ZCR and medium spectral bandwidth. The frequency may change a lot over the course of the call. These clucks are often made by hens in the nest box and combined with notes in clusters 2 and 0 as shown in the example below. '},
              {type: 'img', className: 'width100', src: nesting2, alt: 'Spectrogram showing chicken vocalizations'},
              {
                type: 'playAudio',
                src: nesting2_wav,
              },
            ],
          },
          {
            type: 'DisclosurePanel',
            title: 'Cluster 4',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [

              {type: 'p', text: 'Cluster 4 (34 calls) includes shorter calls (mean 117 ms) that are relatively low frequency (mean 593 Hz) with the lowest spectral bandwidth and low ZCR. The example below is of a broody hen making a low repeated cluck while she searches for a nesting site.'},
              {type: 'img', className: 'width100', src: broody, alt: 'Spectrogram showing chicken vocalizations'},
              {
                type: 'playAudio',
                src: broody_wav,
              },
            ],
          },
          {
            type: 'DisclosurePanel',
            title: 'Cluster 5',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [

              {type: 'p', text: 'Cluster 5 (111 calls) includes medium-length calls (mean 241 ms) that are medium frequency (mean 771 Hz) with medium ZCR and spectral bandwidth and vary the least in frequency over the course of the call. These sounds are often heard in the run when a human approaches with food, such as the calls below.'},
              {type: 'img', className: 'width100', src: begging, alt: 'Spectrogram showing chicken vocalizations'},
              {
                type: 'playAudio',
                src: begging_wav,
              },
            ],
          },
          {
            type: 'DisclosurePanel',
            title: 'Cluster 6',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [

              {type: 'p', text: 'Cluster 6 (135 calls) includes relatively long calls (mean 251 ms) that are the highest frequency (mean 1059 Hz) with high spectral bandwidth with high ZCR and may be made in quick succession. These harsh sounds are made in a variety of contexts including the loud long harsh sounds of a hen temporarily denied access to her nesting site (first example below), as well as shorter calls that are part of a long-call sequence preceeded by more harmonic calls (second example below).'},
              {type: 'img', className: 'width100', src: frustration, alt: 'Spectrogram showing chicken vocalizations'},
              {
                type: 'playAudio',
                src: frustration_wav,
              },
              {type: 'p', text: ''},
              {type: 'img', className: 'width100', src: long_call, alt: 'Spectrogram showing chicken vocalizations'},
              {
                type: 'playAudio',
                src: long_call_wav,
              },
            ],
          },
          {
            type: 'DisclosurePanel',
            title: 'Cluster 7',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [

              {type: 'p', text: 'Cluster 7 (227 calls) includes medium-length calls (mean 150 ms) that are low frequency (mean 551 Hz) with medium spectral bandwidth, that may be made in quick succession and have low ZCR. These sounds can often be described as growls like the one below recorded in the coop.'},
              {type: 'img', className: 'width100', src: growl, alt: 'Spectrogram showing chicken vocalizations'},
              {
                type: 'playAudio',
                src: growl_wav,
              },
            ],
          },
          {type: 'h2', text: 'Discussion'},
          {type: 'p', text: 'The goal of this study was to cluster chicken sounds by their acoustic properties.  In backyard hens, 8 clusters of vocalizations with differing acoustic features were identified. They had different means and standard deviations with regards to duration, frequency of most energy, spectral bandwidth, zero-crossing rate, and other features. When examples from each cluster were gathered, it was noted that different clusters sound quite different from each other, and that there is also diversity within the cluster.'},
          {type: 'p', text: 'The clusters can be used to transcribe multi-syllabic chicken calls. For instance, the common hen "egg song" consisted of many cluster-0 sounds followed by one cluster-6 sound.  These findings are a starting point that can branch off into many interesting directions, such as examining the nuance within clusters, training models that can transcribe multisyllabic calls, and pairing with behavioral observations.'},
          {
            type: 'DisclosurePanel',
            title: 'Limitations',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [
              {type: 'p', text: 'This study did not include roosters or chicks, so many chicken sounds related to mating, male-male competition, maternal care were not included. Additionally, all the hens were healthy and protected from predators, so sounds related to pain, injury, hunger, disease, and predator defense were also not represented in the dataset. Future research should aim to include a more diverse group of chickens who can engage in a broader array of natural behaviors.'},
              {type: 'p', text: 'The acoustic features extracted may not have captured all meaningful qualities of the calls. For instance, amplitude was not measured because the chickens varied in distance from the microphone and all audio was normalized prior to analysis.  However, call volume likely carries meaning for the chickens as louder calls may be intended to be heard by outsiders while quieter calls are meant for nearby conspecifics. Additionally, many longer calls contained patterns of frequency changes over time which were not captured by the relatively simple slope measures. It is unknown if these frequency variations have meaning for the chickens. Future research should include more advanced measures of intra-call frequency variation. Finally, the feature extraction program wasn\'t set up to handle sounds shorter than 50ms, but chickens do make some sounds this short and future research should include these briefer sounds.'},
            ],
          },
          {
            type: 'DisclosurePanel',
            title: 'Next steps',
            titleEl: 'h3',
            expandedByDefault: true,
            children: [
              {type: 'p', text: 'A key next step is to pair audio recordings with video data and behavioral observations. Do the clusters of calls with opposing acoustic features map onto opposing scenarios, as Darwin predicted?  Furthermore, what are the various purposes of chicken vocalizations in opposing situations?'},
              {type: 'p', text: 'For instance, one hypothesis could be that flock animals vocalize primarily to coordinate their activity, which would be supported if evidence showed that chickens make one set of sounds while dustbathing, and a different set of sounds when going to roost at night. Another hypothesis is that flock animals vocalize to reinforce their social hierarchy and reduce conflict over limited resources. For example, a dominant hen might make a certain type of sound when communicating to subordinates that they are allowed to access a certain resource (food, a nesting site, etc.) and a different type of sound when they are not allowed to access the resource.'},
              {type: 'p', text: 'Better understanding the nuances of animal communication systems can help us understand how social animals survive as a group and can support interventions for animal welfare and conservation.'},
            ],
          },
          {type: 'h2', text: 'References and Resources'},
          {type: 'ul', elements: [
            [{type: 'text', text: 'Collias, N. E. (1987). The vocal repertoire of the red junglefowl: A spectrographic classification and the code of communication. The Condor, 89:510-524. doi: 10.2307/1368641'}],
            [{type: 'text', text: 'Marino, L. (2017). Thinking chickens: a review of cognition, emotion, and behavior in the domestic chicken. Animal Cognition, 20:127-147. doi: 10.1007/s10071-016-1064-4'}],
            [{type: 'text', text: 'Manikandan, V. & Neethirajan, S. (2025). Decoding poultry welfare from sound—A machine learning framework for non-invasive acoustic monitoring. Sensors, 25(9), 2912. doi: 10.3390/s25092912'}],
            [{type: 'text', text: 'Tefera, M. (2012). Acoustic signals in domestic chickens (Gallus gallus): A tool for teaching veterinary ethology and implication for language learning. Ethiopian Veterinary Journal 16(2): 77-84. doi: 10.4314/EVJ.V16I2.7'}],
          ]},
        ]
      }
    ],
  },
  // age-classifier --> DONE!!
  {
    path: 'age-classifier',
    short_title: 'Age Classifier',
    title: 'An Age Classifier Fine-Tuned using Hugging Face Transformers',
    date: 'March 2026',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: true,
    desc: 'An age classification model that can differentiate child vs. adult voices',
    long_desc: 'A neural network based age classification model fine-tuned using Hugging Face transformers.',
    mainImage: {
      type: 'png',
      src: ageClassifier,
      alt: 'A cartoon of a boy in front of a computer with a woman standing behind him looking at the screen',
    },
    projectCardTechStack: ['huggingface', 'pandas', 'amazonsagemaker', 'mlflow'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {type: 'img', src: speakerDiarizationOutput, className: 'width100', alt: 'An audio waveform with multiple timestamps highlighted and labels indicating adult_1, child_2, etc.'},
          
          {type: 'h2', text: 'Introduction'},
          {type: 'p', text: 'Through advances in educational technology, oral reading and conversational tests can be recorded and analyzed using automatic speech recognition technology (ASR) giving teachers new tools to detect reading and speaking difficulties and identify children in need of support.  One important step in this process is to be able to identify which voices are the child and which are the adult.  As a member of the AI Innovation team at Curriculum Associates, Inc., I used transfer learning to fine-tune an ASR network to classify child vs. adult voices.'},
          {type: 'h2', text: 'Methods'},
          {type: 'TechStack', techList: ['huggingface', 'pandas', 'amazonsagemaker', 'mlflow']},
          
          {type: 'text', text: 'I first explored audio data available at my company.  We have large speech datasets stored in S3 buckets that are allowed to be used to train neural networks. Using '},
          {type: 'a', text: 'AmazonSagemaker', href: 'https://aws.amazon.com/sagemaker/ai/?trk=047fc009-5bd4-4337-800d-8b880665cece&sc_channel=ps&ef_id=CjwKCAjwyuDTBhB-EiwANCQhLB5hwjkxJz0PcLpknPkA-bv0hToaTbSGjyP-i8a2nxERyc_3C00X0RoC2sYQAvD_BwE&gads_camp=23532472972&gads_ag=194311071804&gads_ad=795877020716&gads_kw=amazon%20sagemaker&gads_matchtype=e&gads_network=g&gads_device=c&gads_geo=9002012&gad_campaignid=23532472972&gbraid=0AAAAADjHtp_ihiM0jhrzhDPNDyx_ue486&gclid=CjwKCAjwyuDTBhB-EiwANCQhLB5hwjkxJz0PcLpknPkA-bv0hToaTbSGjyP-i8a2nxERyc_3C00X0RoC2sYQAvD_BwE'},
          {type: 'text', text: ' for computing resources, I created a data preparation python program that iterates over different data sources to gather audio files of at least 10 seconds in length, normalizes the audio, and adds metadata about source and a label for age of speaker.'},
          {type: 'p', text: 'Training data included 10 hours of adults and 10 hours of elementary and middle-school aged children. Both groups had a mix of reading vs. spontaneous speech. I split the training data into 75% train and 25% test.'},
          {type: 'text', text: 'Utilizing skills I learned from the '},
          {type: 'a', text: 'Hugging Face Transformers for Audio', href: 'https://huggingface.co/learn/audio-course/en/chapter0/introduction'},
          {type: 'text', text: ', I finetuned '},
          {type: 'a', text: 'DistilHuBERT', href: 'https://huggingface.co/ntu-spml/distilhubert'},
          {type: 'text', text: ', which is a smaller version of HuBERT that was modified from BERT. BERT is a speech recognition model with encoder-only CTC architecture. For this project, a classification layer was added that outputs 0 (child) or 1 (adult). I used the '},
          {type: 'a', text: 'Transformers AutoModelForAudioClassification', href: 'https://huggingface.co/docs/transformers/v5.14.0/en/model_doc/auto#transformers.AutoModelForAudioClassification'},
          {type: 'text', text: ' from HuggingFace for transfer learning. Fine-tuning was done in Amazon Sagemaker instance ml.g5.xlarge (24 GB VRAM) with 50 GB storage. I also used '},
          {type: 'a', text: 'MLFlow', href: 'https://mlflow.org/genai/observability?gad_source=1&gad_campaignid=23556358454&gbraid=0AAAABCrGXuIIuu78ScUD44wxdVwTMeVN4&gclid=CjwKCAjwyuDTBhB-EiwANCQhLO4yKjaHagephRzYXYSsKwj5veZDI05GUtRZtw1JWU2Skv22TU5MrBoCk0YQAvD_BwE'},
          {type: 'text', text: ' to track of various metrics related to the training process. '},
          {type: 'p', text: ''},
          {type: 'text', text: 'Hyperparameters used'},
          {
            type: 'table', headers: ['Hyperparameter', 'Value'],
            rows: [
              ['epochs', '5'],
              ['learning_rate', '5e-5'],
              ['batch_size', '4'],
              ['gradient_accumulation_steps', '1'],
              ['warmup_steps', '100'],
              ['logging_steps', '5'],
            ],
          },
          {type: 'p', text: 'The final model was saved on S3 and an additional program was created for inference with a single audio file as input. Inference was run in SageMaker using instance ml.g4dn.xlarge with storage 5 GB.'},
          {type: 'h2', text: 'Results'},
          {type: 'p', text: 'By the fifth epoch, the model was 99% accurate at classifying child vs. adult voices. '},
          {
            type: 'table', headers: ['Epoch', 'Training Loss', 'Validation Loss', 'Accuracy'],
            rows: [
              ['1', '0.366713', '0.105891', '0.977778'],
              ['2', '0.006447', '0.086432', '0.987500'],
              ['3', '0.000380', '0.079321', '0.986111'],
              ['4', '0.000094', '0.075839', '0.987500'],
              ['5', '0.000051', '0.085785', '0.988889'],
            ],
          },
          {type: 'text', text: 'To test the utility of the model on new data, I gathered open-source recordings of children and adults having conversations from the '},
          {type: 'a', text: 'CHILDES English Van Houten Corpus', href: 'https://talkbank.org/childes/access/Eng-NA/VanHouten.html'},
          {type: 'text', text: ' which was not part of the finetuning data. I utilized a pretrained model, '},
          {type: 'a', text: 'NeMo Sortformer Diarizer', href: 'https://docs.nvidia.com/nemo-framework/user-guide/latest/nemotoolkit/asr/speaker_diarization/models.html'},
          {type: 'text', text: ', to generate timestamps of the individual voices in the recording, e.g., '},
          {type: 'text', className: 'code', text: '[{start: 0.00, end: 0:05, label: "speaker_01"}, {start: 0.06, end: 0:10, label: "speaker_02"}]'},
          {type: 'p', text: ''},
          {type: 'text', text: 'Then, I created a python program that takes in the full audio splices it by the timestamps generated from speaker diarization to create individual audio files for each speaker. These files are then used as input for the age classifier which outputs if the speaker is a child or adult. Then the program utilizes that output to update the labels to indicate of the speaker is a child or adult, e.g.,  '},
          {type: 'text', className: 'code', text: '[{start: 0.00, end: 0:05, label: "child_01"}, {start: 0.06, end: 0:10, label: "adult_02"}]'},
          {type: 'p', text: 'Finally, I created a front-end web program that takes in the audio and the timestamps data and displays these timestamps on the waveform visualization.  Users can play back the audio live and watch the timestamps highlighting the speech.  I presented this work to my team.'},
          {type: 'img', src: speakerDiarizationProgram , className: 'width100', alt: 'A program showing an input box where the user can upload audio, a text box where the user can input timestamp data, and a waveform with regions highlighted and labeled as adult or child speech'},
          {type: 'h2', text: 'Discussion'},
          {type: 'p', text: 'Through this project, I created a functional age classifier that can identifying child vs. adult voices in classroom settings and can be integrated into an ASR pipeline. Possible applications include labeled transcriptions of child vs. adult speech, as well as using the child-output only to identify speaking and reading difficulties for diagnostic purposes in classrooms.  It shows the power of transfer learning and neural networks in supporting education.'},
        ]
      },
    ],
  },
  // audio-feature-extraction --> DONE!!
  {
    path: 'audio-feature-extraction',
    short_title: 'Audio Feature Extraction',
    title: 'Audio Feature Extraction',
    date: 'January 2025',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: true,
    desc: 'Program that extracts and visualizes features from audio files',
    long_desc: 'Uses audio feature extraction to show amplitude envelope, MFCCs, and other features. Shows waveform and spectrogram. Live demo available.',
    liveDemo: true,
    mainImage: {
      type: 'png',
      src: spectrogram,
      alt: 'A waveform and spectrogram visually representing sound',
    },
    projectCardTechStack: ['librosa', 'matplotlib'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {
            type: 'GoalAndGithub',
            elements: [
              {type: 'h2', text: 'Goal'},
              {type: 'text', text: 'The goal of this project is to apply skills learned in '},
              {type: 'a', text: 'Audio Signal Processing for Machine Learning by Valerio Velardi', href: 'https://www.youtube.com/watch?v=iCwMQJnKk2c&list=PL-wATfeyAMNqIee7cH3q1bh4QJFAaeNv0'},
              {type: 'text', text: ' to extract features from human and animal vocalizations. The demo below sends audio files to a python back-end hosted on '},
              {type: 'a', text: 'Hugging Face Spaces', href: 'https://huggingface.co/spaces/kaysrubio/audio_feature_extraction/blob/main/app.py'},
              {type: 'text', text: ' for analysis and the front-end demo visualizes the results on waveforms and spectrograms. Features include:'},
              {type: 'ul', elements: [
                [{type: 'text', text: 'Amplitude envelope (AE)'}],
                [{type: 'text', text: 'Root-mean-square energy (RMS)'}],
                [{type: 'text', text: 'Zero-crossing rate (ZCR)'}],
                [{type: 'text', text: 'Mel-Frequency Cepstral Coefficients (MFCCs)'}],
                [{type: 'text', text: 'Spectral centroid and bandwidth'}],
                ],
              },
            ],
            href: 'https://github.com/KaySRubio/audio-signal-analysis/blob/main/notebooks/general_purpose/audio_feature_extraction.ipynb',
          },
        ]
      },
      {
        type: 'DemoBoard',
        customSection: {
          displayText: 'Directions',
          // size: 'full-screen',
          className: 'max-width-650',
          elements: [
            {type: 'p', text: 'Select a sample file, record, or upload your own .wav file to view the audio features, then press Submit.'},
            {type: 'p', text: 'Results will appear in these locations:'},
            {type: 'ul', elements: [
              [
                {type: 'text', className: 'bold', text: 'Amplitude envelope (AE)'},
                {type: 'text', text: ', '},
                {type: 'text', className: 'bold', text: 'Root-mean-square energy (RMS)'},
                {type: 'text', text: ', and '},
                {type: 'text', className: 'bold', text: 'Zero-crossing rate (ZCR)'},
                {type: 'text', text: ', '},
                {type: 'text', text: 'are mapped on the waveform in the Visualizer section.'}],
              [
                {type: 'text', text: 'A heat map for the first '},
                {type: 'text', className: 'bold', text: '13 Mel-Frequency Cepstral Coefficients (MFCCs)'},
                {type: 'text', text: ' is in the Results section.'}
              ],
              [
                {type: 'text',  className: 'bold', text: 'Spectral centroid and bandwidth'},
                {type: 'text', text: ' are mapped on the spectrogram in the Visualizer section. This website may slow down while spectrogram is visible; to turn off, click on Waveform tab.'}
              ],
              [{type: 'text', text: 'All raw values are provided in the JSON tab in the Results section.'}],
            ]}
          ]
        },
        input: {
          types: ['audio'],
          audioLengthLimitInSeconds: 15,
          audioVisualizerSettings: {
            zoom: true,
            changeSpeed: true,
            spectrogram: 'on',
            userAdjustSpectrogram: true,
          },
          sampleAudio: [
            {
              displayText: 'American Alligator',
              location: alligator,
              sampleResults: alligatorResults,
            },
            {
              displayText: 'Chicken Egg Song',
              location: chicken_audio,
              sampleResults: chickenResults,
            },
            {
              displayText: 'Elk Bugling',
              location: elk,
              sampleResults: elkResults,
            },
            {
              displayText: 'Humpback Whale Song',
              location: humpbackwhale,
              sampleResults: humpbackResults,
            },
            {
              displayText: 'Mallard Duck Quack',
              location: duck,
              sampleResults: duckResults,
            },          
            {
              displayText: 'Woman Singing',
              location: singingwoman,
              sampleResults: womanSingingResults,
            },
          ],
        },
        requests: [
          {
            type: 'gradio',
            huggingFaceClient: 'kaysrubio/audio_feature_extraction',
            huggingFaceApi: '/extract_audio_features',
            key: '682d2362-894c-800c-af30-a4c56b7f074b'
          }
        ],
        results: {
          tabs: [
            {
              type: 'heatMap',
              displayText: 'MFCCs', // The name of the type of result that will be displayed as a tab name in the Results box
              icon: spectrogramSvg, // Optional to add a tiny icon, such as a 100x100px png. Make sure to import it.
              elements: [
                {type: 'p', text: 'Mel-Frequency Cepstral Coefficients (MFCCs) are frequency-domain audio features. They are a mathematical way to represent the speech signal and extract the most important sound characteristics for human speech perception, mirroring human hearing. There\'s 39 different coefficients given for each frame.'},
                {
                  type: 'heatmap', 
                  path: 'data[0].mfccs',
                  title: 'MFCC Heatmap',
                  xAxisTitle: 'Time (Seconds)',
                  yAxisTitle: 'MFCC Coefficients',
                  xAxisLabelMapping: {
                    type: 'framesToTime',
                    sampleRate: 22050,
                    hopLength: 256,
                  }
                },
                {type: 'p', text: 'Key:'},
                {type: 'ol', elements: [
                  [{type: 'text', text: 'C0 is called the energy coefficient and gives the overall energy of the signal'}],
                  [{type: 'text', text: 'C1-C3 are considered lower-order coefficients and provide information about the general shape of the spectral envelope like overall energy distribution, tilt of the spectrum, loudness, and timbre'}],
                  [{type: 'text', text: 'C4-C13 are considered middle-order coefficients and give finer details about the spectral shape such as locations and relationships of formants in the spectrum. These are helpful to distinguish between phonemes.'}],
                  [{type: 'text', text: 'C14+ are higher order coefficients that provide information about fine-grained variations of the spectrum. They may hold information about speaker identity but are also influenced by background noise and may give more irrelevant information. These are not displayed in these results.'}],
                ]},
              ],
            },
          ],
          lineOverlaySetup: [
            {
              type: 'line-spread-points',
              overlay: 'waveform',
              path: 'data[0].amplitude_envelope',
              values: [],
              max: 1,
              min: 0,
              color: '#ff7975',
              displayText: 'Amplitude Envelope',
              default: 'userToggleStartOn',
              moreInfo: 'Amplitude envelope (AE) is a time-domain audio feature where the maximum amplitude of all samples within a frame is extracted. It gives an estimate of loudness, but is sensitive to outliers. Used for detecting sound onset, music genre classification, and speech processing.',
            },
            {
              type: 'line-spread-points',
              overlay: 'waveform',
              path: 'data[0].root_mean_square_energy',
              values: [],
              min: 0,
              max: 1,
              color: '#00bcee',
              displayText: 'Root-mean-square Energy',
              default: 'userToggleStartOn',
              moreInfo: 'Root-mean-square energy (RMS) is a time-domain audio feature where a root-mean-square of energy of all samples in each frame is taken. It gives an estimate of loudness, and is less sensitive to outliers than amplitude envelope. Used for detecting sound onset, music genre classification, segmenting speech into meaningful units, and analyzing prosody and emotion.'
            },
            {
              type: 'line-spread-points',
              overlay: 'waveform',
              path: 'data[0].zero_crossing_rate',
              values: [],
              min: 0,
              max: 1,
              color: '#24ee00',
              displayText: 'Zero-crossing Rate',
              default: 'userToggleStartOn',
              moreInfo: 'Zero-crossing rate (ZCR) is a time-domain audio feature that measures the number of times an audio signal crosses the horizontal axis.  The horizontal axis represents an amplitude of 0. Speech tends to have a higher ZCR than music, singing, or periods of silence, so ZCR can be a rough way to detect different types of sound. Different speech sounds also have different ZCR\'s, so ZCR can help identify different phonemes.'
            },
            {
              type: 'band',
              overlay: 'spectrogram',
              pathToSpreadValues: 'data[0].spectral_bandwidth',
              pathToCenterValues: 'data[0].spectral_centroid',
              proportionToAdd: 0.5,
              upperValues: [],
              lowerValues: [],
              min: 0,
              max: 4000,
              color: 'rgba(255, 255, 255, 0.6)',
              displayText: 'Spectral Bandwidth',
              default: 'userToggleStartOn',
              moreInfo: 'Spectral bandwidth, also called spectral spread, tells how energy is spread across the frequency bands above and below the spectral centroid. A small bandwidth indicates tightly grouped frequencies closer to a pure tone, while a larger bandwidth indicates frequencies that are widely distributed like a noisy or complex sound.',
            },
            {
              type: 'line-spread-points',
              overlay: 'spectrogram',
              path: 'data[0].spectral_centroid',
              values: [],
              min: 0,
              max: 4000,
              color: '#fbff00',
              displayText: 'Spectral Centroid',
              default: 'userToggleStartOn',
              moreInfo: 'Spectral centroid is a frequency domain audio feature that measures the frequency band where most energy is concentrated, analogous to taking the average of all frequencies.',
            },
          ],
          slowResultsHandler: {
	          timeBeforeShowMessage: 10,
	          message: 'It seems the Hugging Face Space is just waking up. This may take a minute, but your next requests today will be much faster. Estimated time remaining:',
	          expectedTimeToResults: timeItTakesAHuggingFaceSpaceToWakeUp,
          },
        }
      },
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {type: 'h2', text: 'Tech Stack'},
          {type: 'TechStack', techList: ['librosa', 'matplotlib'] },
          {type: 'h2', text: 'Audio sources '},
          {type: 'ol', elements: [
            [
              {type: 'text', text: 'American Alligator in the Everglades National Park in Florida, from the '},
              {type: 'a', text: 'National Park Service', href: 'https://www.nps.gov/subjects/sound/sounds-alligator.htm '},
              {type: 'text', text: '.'},
            ],
            [
              {type: 'text', text: 'Chicken egg song (2024) recorded by K Rubio in Massachusetts.'},
            ],
            [
              {type: 'text', text: 'Elk bugle (ID: nri-ElkBuglingGRSA) from Great Sand Dunes National Park and Preserve in Colorado. Recording from '},
              {type: 'a', text: 'the National Park Service', href: 'https://www.nps.gov/subjects/sound/sounds-elk.htm'},
              {type: 'text', text: '.'},
            ],
            [
              {type: 'text', text: 'Humpback whale song (1953-04-30) from Bermuda from the New Bedford Whaling Museum and Woods Hole Oceanographic Institution, '},
              {type: 'a', text: 'Watkins Marine Mammal Sound Database', href: 'https://whoicf2.whoi.edu/science/B/whalesounds/bestOf.cfm?code=AC2A '},
              {type: 'text', text: '.'},
            ],
            [
              {type: 'text', text: 'Kaira Rae singing acapella cover of Fly Me to the Moon by Frank Sinatra available on '},
              {type: 'a', text: 'YouTube', href: 'https://www.youtube.com/watch?v=dBEUX9fP584'},
              {type: 'text', text: '.'},
            ],
            [
              {type: 'text', text: 'Mallard duck in France (2024-03-06, ID: XC881155) from '},
              {type: 'a', text: 'xeno-canto.org', href: 'https://xeno-canto.org/species/Anas-platyrhynchos '},
              {type: 'text', text: '.'},
            ],
          ]}
        ]
      },
      
    ],
  },
  // sperm-whale-codas --> DONE!!
  {
    path: 'sperm-whale-codas',
    short_title: 'Sperm Whale Codas',
    title: 'Transcribing Sperm Whale Codas',
    date: 'January 2025',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: true,
    desc: 'Algorithm extracts the timing between clicks to analyze sperm whale codas',
    long_desc: 'Uses voice activity detection to analyze sperm whale vocalization codas. Shows waveform and spectrogram. Links to GitHub and Hugging Face.',
    mainImage: {
      type: 'png',
      src: spermwhalepng,
      alt: 'A sperm whale with its mouth open showing teeth',
    },
    liveDemo: true,
    projectCardTechStack: ['librosa', 'matplotlib'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {type: 'h2', text: 'About'},
          {type: 'p', text: 'Sperm whales communicate with each other through making clicks that they combine into patterns called codas. A sperm whale coda is 3-40 clicks grouped together usually lasting for less than 2 seconds. Each coda is separated from the next by a silence of at least one second. Different codas differ in their number of clicks and the spacing between the clicks. Codas are further modified in various ways such as varying the tempo.'},
          {
            type: 'GoalAndGithub',
            elements: [
              
              {type: 'text', text: 'To learn more about sperm whale communication and programming techniques to analyze sound, I created this project that uses Voice Activity Detection (VAD) to separate a recording of sperm whale vocalizations into individual codas. Then I used VAD to gather metadata on each coda including the number of clicks per coda, the total coda duration, and the durations of inter-click intervals. For demonstration purposes a simple formula has been used to highlight the 1+1+3 coda, which is the most common coda used by the Eastern Caribbean clan and is believed to represent the clan membership name.'},
              
            ],
            href: 'https://github.com/KaySRubio/audio-signal-analysis/blob/main/notebooks/sperm_whales/sperm_whale_codas_exploration.ipynb',
          },
          {type: 'text', text: 'Files are analyzed on a python back-end hosted on '},
          {type: 'a', text: 'Hugging Face Spaces', href: 'https://huggingface.co/spaces/kaysrubio/transcribe_sperm_whale_coda/blob/main/app.py'},
          {type: 'text', text: '. Audio waveform and spectrogram are displayed on the front-end demo below where users can toggle switches to show the timestamps of the codas, their individual clicks, etc. The output of the program is also below in a table. In the future, I\'d like to learn more about transcribing codas, and if it is possible to separate the voices of individual sperm whales.'},
          {type: 'h2', text: 'Demo'},
        ]
      },
      {
        type: 'DemoBoard',
        customSection: {
          displayText: 'Directions',
          elements: [
            {type: 'p', text: 'Select a sample file to see coda\'s highlighted on the wavefrom and metadata below in the results section. You can also upload a sperm whale recording, or record live. Don\'t have a sperm whale friend close by? Try making coda\'s such as 1+1+3 by clapping your hands.'}
          ]
        },
        input: {
          types: ['audio'],
          audioLengthLimitInSeconds: 30,
          fileSizeLimitInMb: 10,
          audioVisualizerSettings: {
            spectrogram: 'on',
            zoom: true,
            userAdjustSpectrogram: true,
          },
          sampleAudio: [
            {
              displayText: '1 - 1-3 Exchange 2 Whales Shallow Diving',
              location: spermWhale113,
              sampleResults: spermWhale113Results,
            },
            {
              displayText: '5R Exchange 2 Whales Diving',
              location: spermWhale5r,
              sampleResults: spermWhale5rResults,
            },
            {
              displayText: 'Social Exchange Unit R',
              location: spermWhaleSocial,
              sampleResults: spermWhaleSocialResults,
            },
          ],
        },
        requests: [
          {
            type: 'gradio',
            huggingFaceClient: 'kaysrubio/transcribe_sperm_whale_coda',
            huggingFaceApi: '/transcribe_whalish',
            key: '682d2362-894c-800c-af30-a4c56b7f074b'
          }
        ],
        results: {
          regionSetup: [
            {
              displayText: 'Codas',
              default: 'userToggleStartOn',
              path: 'data[0].codas',
              defaultColor: 'rgba(0, 123, 255, 0.3)',
              useRandomColors: false,
            },
            {
              displayText: 'Inter-coda-intervals',
              default: 'userToggleStartOff',
              path: 'data[0].inter_coda_intervals',
              defaultColor: 'rgba(255, 162, 0, 0.3)',
              useRandomColors: false,
            },
            {
              displayText: 'Clicks',
              default: 'userToggleStartOff',
              path: 'data[0].clicks',
              defaultColor: 'rgba(101, 40, 255, 0.3)',
              useRandomColors: false,
            },
            {
              displayText: 'Inter-click-intervals',
              default: 'userToggleStartOff',
              path: 'data[0].inter_click_intervals',
              defaultColor: 'rgba(255, 247, 0, 0.3)',
              useRandomColors: false,
            },
          ],
          tabs: [
            {
              type: 'coda_features',
              displayText: 'Coda Features',
              icon: tinyWhale,
              elements: [
                {
                  type: 'table', 
                  headers: [
                    'Coda', 'Start', 'Duration', 'Num of Clicks', 'Inter-Click Intervals'
                  ],
                  className: 'demo-table',
                  rowDataPath: 'data[0].codas',
                  dynamicRows: 
                    [
                      {propertyName: 'index', type: 'number'},
                      {propertyName: 'start', type: 'number', rounding: 2},
                      {propertyName: 'duration', type: 'number', rounding: 2},
                      {propertyName: 'number_of_clicks', type: 'number', rounding: 0},
                      {propertyName: 'inter_click_interval_durations', type: 'numberArray', rounding: 2},
                    ]
                  
                }
              ]
            }
          ],
          slowResultsHandler: {
            timeBeforeShowMessage: 10,
            message: 'It seems the Hugging Face Space is just waking up. This may take a minute, but your next requests today will be much faster. Estimated time remaining:',
            expectedTimeToResults: timeItTakesAHuggingFaceSpaceToWakeUp,
          },

        },
      },
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {type: 'h2', text: 'Resources'},
          {type: 'div', elements: [
            {type: 'a', text: 'Project CETI', href: 'https://www.projectceti.org/'}
          ]},
          {type: 'div', elements: [
            {type: 'a', text: 'Dominica Sperm Whale Project', href: 'https://www.thespermwhaleproject.org/'},
          ]},
          {type: 'text', text: 'Audio sources '},
          {type: 'ul', elements: [
            [{type: 'a', text: '1-1-3 exchange 2 whales', href: 'https://soundcloud.com/user-152468598/1-1-3-exchange-2-whales'}],
            [{type: 'a', text: '5R Exchange 2 Whales Diving', href: 'https://soundcloud.com/user-152468598/5r-exchange-2-whales-diving'}],
            [{type: 'a', text: 'Communication', href: 'https://soundcloud.com/user-152468598/communication'}],
            [{type: 'a', text: 'CommunicationSHORT', href: 'https://soundcloud.com/user-152468598/communicationshort?in=user-152468598/sets/sperm-whale-vocalizations'}],
            [{type: 'a', text: 'Longer social sequence', href: 'https://soundcloud.com/user-152468598/longer-social-sequence?in=user-152468598/sets/sperm-whale-vocalizations'}],
            [{type: 'a', text: 'Social Exchange Unit R', href: 'https://soundcloud.com/user-152468598/social-exchange-unit-r?in=user-152468598/sets/sperm-whale-vocalizations'}],
            [{type: 'a', text: 'Talk Codas', href: 'https://soundcloud.com/user-152468598/talk-codas?in=user-152468598/sets/sperm-whale-vocalizations'}],
          ]}
        ]
      },
    ],
  },
  // bat-calls --> DONE!!
  {
    path: 'bat-echolocation',
    short_title: 'Bat Echolocation Calls',
    title: 'Analyzing Bat Echolocation Calls',
    date: 'September 2025',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: true,
    desc: 'Species identification based on clustering calls into phonic groups by their audio features',
    long_desc: 'Recorded 100+ bats in Massachusetts. Extracted audio features and explored phonic groups using K-Means clustering. Identified possible species.',
    mainImage: {
      type: 'png',
      src: batPng,
      alt: 'A bat flying through the air',
    },
    projectCardTechStack: ['librosa', 'matplotlib', 'pandas', 'numpy'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {type: 'img', src: big_brown_bat_flying_long, className: 'width100', alt: 'A big brown bat flying through the blue sky'},
          {type: 'img', src: bat_calls1, className: 'width100', alt: 'A spectrogram showing a series of bat calls'},
          {type: 'a', href: 'ttps://commons.wikimedia.org/w/index.php?curid=163925545', text: 'Bat photo by Rhododendrites - Own work, CC BY-SA 4.0', className: 'small-text'},
          {type: 'text', text: ', Spectrogram photo from bat recorded by K. Rubio', className: 'small-text'},
          {type: 'h2', text: 'Introduction'},
          {type: 'p', text: 'Bats are critical to ecosystem health as insect-eaters, pollinators, and seed dispersers. However, nearly half of all bat species worldwide are threatened with extinction and 90% of bats in North America are facing drastic population declines.  Monitoring bat populations is an important way to support conservation efforts.'},
          {type: 'p', text: 'Since most bats echolocate, passively recording their echolocation calls can help detect their presence. Then, through audio signal analysis, calls can be grouped into phonic groups based on auditory features and matched to potential species whose calls are typically consistent to that phonic group.'},

          {type: 'text', text: 'Although some closed-source software exists to analyze bat calls (e.g., '},
          {type: 'a', href: 'https://sonobat.com/purchase/', text: 'Sonobat'},
          {type: 'text', text: ' and '},
          {type: 'a', href: 'https://www.wildlifeacoustics.com/products/kaleidoscope-pro', text: 'Kaleidoscope Pro'},
          {type: 'text', text: ') these can be expensive and there is a need for open-source resources to identify species. In this project, I completed 5 main goals:'},
          {type: 'p', text: ''},
          {
            type: 'GoalAndGithub',
            elements: [
              {type: 'ol', elements: [
                [{type: 'text', text: 'Record bats in Massachusetts using an ultrasonic mic'}],
                [{type: 'text', text: 'Create a python program using audio signal processing to extract features from bat passes'}],
                [{type: 'text', text: 'Use features to explore different phonic groups using K-Means Clustering'}],
                [{type: 'text', text: 'Compare findings with information about known local bat species'}],
                [{type: 'text', text: 'Utilize KaleidoscopePro to auto-identify calls and compare results'}],
              ]},
            ],
            href: 'https://github.com/KaySRubio/audio-signal-analysis/blob/main/notebooks/bats/bat_echolocation_call_exploration.ipynb',
          },
          {
            type: 'DisclosurePanel',
            title: 'More About Bats and Their Calls',
            titleEl: 'h3',
            children: [
              {type: 'text', className: 'bold', text: 'Bat Pass: '},
              {type: 'text', text: 'A sequence of echolocation calls that typically increase in energy as a bat gets closer, then fade out completely as the bat flies away.'},
              {type: 'p', text: ''},
              {type: 'text', className: 'bold', text: 'FM: '},
              {type: 'text', text: 'Frequency modulated call shape, which looks like a steep continuous slope on a spectrogram.'},
              {type: 'p', text: ''},
              {type: 'text', className: 'bold', text: 'FM-QCF: '},
              {type: 'text', text: 'Frequency-modulated with quasi-constant frequency call shape that typically has a steep downward slope, that bends into a flatter, nearly horizontal shape on a spectrogram. These calls can also be described as a hockey stick or backwards J shape.'},
              {type: 'p', text: ''},
              {type: 'text', className: 'bold', text: 'K-Means Clustering: '},
              {type: 'text', text: 'K-means clustering is an unsupervised machine learning algorithm that groups cases (e.g., rows in a dataset) into clusters based on their similarity, by minimizing the distance between data points and their cluster\'s center. Every case must fit in one and only one cluster. '},
              {type: 'p', text: ''},
              {type: 'text', className: 'bold', text: 'Peak Frequency: '},
              {type: 'text', text: 'The frequency in hz or kHz with the highest energy (amplitude) of a sound.'},
              {type: 'img', src: bats_in_mass, className: 'width-limit-500', alt: 'Labelled images of multiple types of bats that live in Massachusetts'},
              {type: 'div', className: 'small-text-center', elements: [
                {type: 'text', text: 'Source: ', className: 'small-text'},
                {type: 'a', text: 'AnimalSpot.net Bats in Massachusetts', className: 'small-text-center', href: 'https://www.animalspot.net/bats-in-us/bats-in-massachusetts'},
              ]}
              ]
          },
          {type: 'h2', text: 'Methods'},
          {
            type: 'DisclosurePanel',
            title: 'Recording and Data Preparation',
            titleEl: 'h3',
            children: [
              {type: 'text', text: '115 bat passes were recorded in 7 towns in northeastern Massachusetts. Recordings were taken at dusk for about 1 hour. To capture echolocation calls, I used a '},
              {type: 'a', href: 'https://www.dodotronic.com/product/ultramic-384k-evo/', text: 'Dodotronic 384k EVO'},
              {type: 'text', text: ' microphone with '},
              {type: 'a', href: 'https://www.audacityteam.org/download/', text: 'Audacity'},
              {type: 'text', text: ' running on a MacBook Pro and set the sampling rate to 384 kHz.'},
              {type: 'table',
                headers: ['Date', 'City/State', 'Environment', 'Num of bat passes'],
                rows: [
                  [
                    '10/20/24',
                    'Melrose, MA',
                    'Suburbs',
                    '9'
                  ],
                  [
                    '6/30/2025',
                    'Melrose, MA',
                    'Suburbs',
                    '12'
                  ],
                  [
                    '8/6/2025',
                    'Melrose, MA',
                    'Suburbs',
                    '4'
                  ],
                  [
                    '9/1/25',
                    'Melrose, MA',
                    'Pine Banks Pond',
                    '15'
                  ],
                  [
                    '9/9/2025',
                    'Stoneham, MA',
                    'Quarter Mile Pond',
                    '19'
                  ],
                  [
                    '9/11/2025',
                    'Andover, MA',
                    'Phillips Academy',
                    '11'
                  ],
                  [
                    '9/12/2025',
                    'Saugus, MA',
                    'Rumney Marsh Reservation',
                    '1'
                  ],
                  [
                    '9/13/2025',
                    'Malden, MA',
                    'Forestdale Cemetary Pond',
                    '3',
                  ],
                  [
                    '9/13/2025',
                    'Melrose, MA',
                    'Wyoming Cemetary',
                    '1'
                  ],
                  [
                    '9/13/2025',
                    'Melrose, MA',
                    'Swain\'s Pond',
                    '8'
                  ],
                  [
                    '9/13/2025',
                    'Melrose, MA',
                    'Towner\'s Pond',
                    '5'
                  ],
                  [
                    '9/14/2025',
                    'Medford, MA',
                    'Bellevue Pond',
                    '2',
                  ],
                  [
                    '9/14/2025',
                    'Medford, MA',
                    'Upper Mystic Lake',
                    '10',
                  ],
                  [],
                  [
                    '9/14/2025',
                    'Stoneham, MA',
                    'Sheepfold dog park',
                    '1'
                  ],
                  [
                    '9/14/2025',
                    'Stoneham, MA',
                    'Spot Pond',
                    '3'
                  ],
                  [

                  ]
                ]
              },
              {type: 'p', text: 'Recordings were checked and trimmed/split to include only 1 bat pass per file. Bat calls that were very quiet or had overlapping bats of different timing/frequency were discarded. High-pitched insect calls were also removed (high-pitched insect calls are distinguishable from bat calls because they are extremely flat and consistent unlike bat calls which change in frequency over the course of the call and fade in and out as the bat flies closer and farther from the microphone).'},
            ]
          },
          {
            type: 'DisclosurePanel',
            title: 'Python Program Details',
            titleEl: 'h3',
            children: [
              {type: 'h4', text: 'Tech Stack'},
              {type: 'TechStack', techList: ['librosa', 'matplotlib', 'pandas', 'numpy', 'scikitlearn']},
              {type: 'h4', text: 'Audio Feature Extraction Program Steps'},
              {type: 'ol', elements: [
                [{type: 'text', text: 'Loaded audio data with correct sampling rate and visualized using waveforms.'}],
                [{type: 'text', text: 'Applied the Short-Time Fourier Transform to convert to the frequency domain and generated spectrogram.'}],
                [{type: 'text', text: 'Applied a high-pass filter to remove lower frequency background noise.'}],
                [{type: 'text', text: 'Normalized audio signal so amplitude/volume was consistent across files.'}],
                [{type: 'text', text: 'Applied energy-based voice activity detection (VAD) to detect individual calls.'}],
                [{type: 'text', text: 'Used VAD output to obtain timestamps for each echolocation call and inter-call interval (ICI). Checked spectrogram and adjusted frame length, frame shift, and energy threshold as needed.'}],
                [{type: 'text', text: 'Saved duration and ICI for each call in a data frame.'}],
                [{type: 'text', text: 'Extracted minimum frequency, maximum frequency, and peak frequency for each call and added to data frame.'}],
                [{type: 'text', text: 'For each call, estimated slope (Hz/ms) and saved in data frame.'}],
                [{type: 'text', text: 'Cleaned numeric data, removing outliers as needed.'}],
                [{type: 'text', text: 'Calculated averages and exported the features: average call duration, average ICI, average min/max/peak frequency, and average slope.'}],
              ]},
              {type: 'h4', text: 'K-Means Clustering Program Steps'},
              {type: 'ol', elements: [
                [{type: 'text', text: 'Imported and visualized the data'}],
                [{type: 'text', text: 'Used StandardScaler to normalize variables.'}],
                [{type: 'text', text: 'Used Elbow method to determine best number of clusters'}],
                [{type: 'text', text: 'Use K-means clustering to fit cases into clusters.'}],
                [{type: 'text', text: 'Explored characterstics of the clusters and plot using scatterplots.'}],
              ]},
              {type: 'h4', text: 'Program links'},
              {type: 'a', text: 'Program 1: In-depth exploration of a bat pass', href: 'https://github.com/KaySRubio/audio-signal-analysis/blob/main/notebooks/bats/bat_echolocation_call_exploration.ipynb'},
              {type: 'p', text: ''},
              {type: 'a', text: 'Program 2: Semi-automated bat pass feature extraction', href: 'https://github.com/KaySRubio/audio-signal-analysis/blob/main/notebooks/bats/bat_echolocation_feature_extraction_semiautomated.ipynb'},
              {type: 'p', text: ''},
              {type: 'a', text: 'Program 3: K-means clustering bat calls into phonic groups', href: 'https://github.com/KaySRubio/audio-signal-analysis/blob/main/notebooks/bats/k_means_clustering_bat_calls_into_phonic_groups.ipynb'},
            ]
          },
          {type: 'h2', text: 'Results'},
          {type: 'h3', text: 'Peak frequencies of bat passes recorded in Massachusetts'},
          {type: 'img', src: melrose_bat_histogram, className: 'width100', alt: 'A histogram titled Peak Frequencies of 40 Bat Passes Recorded in MA showing 3 groups of bats, the most calls clustered around 26-32 kHz, some calls between 34-38 kHz, and a few calls 43-45 kHz'},
          {type: 'h3', text: 'Phonic groups found through K-means clustering'},
          {type: 'p', text: 'The Elbow method commonly used in K-means clustering determined that 3 was a good number of clusters for the 103 bat passes used. In the K-means clustering algorithm, I used call duration, minimum frequency, maximum frequency, peak frequency and call slope.'},
          {type: 'img', src: bat_pass_clusters, className: 'width-limit-500', alt: 'A scatterplot showing 103 data points representing bat passes with duration on the x-axis, peak frequency on the y-axis, dot size representing slope and dot color representing cluster'},

          {type: 'h3', text: 'Phonic Group Summary'},
          {type: 'p', text: 'For simplicity, clusters were renamed Group 1, 2, and 3 in order from lowest to highest peak frequency. Groups were further split into \'A\' and \'B\' sections when there is a large gap in peak frequency within the group.'},
          {type: 'table',
            headers: [
              'Phonic group',
              'Peak frequency (kHz)',
              'Avg min frequency (kHz)',
              'Avg max frequency (kHz)',
              'Avg call duration (ms)',
              'Call shape(s)',
              'Number of recordings',
              'Number of locations'
            ],
            rows: [
              ['1A', '19 (19-20)', '18', '22', '51', 'FM-QCF', '3', '1'],
              ['1B', '27 (24-33)', '25', '32', '32', 'FM-QCF', '38', '4'],
              ['2', '32 (27-38)', '30', '37', '20', 'varied', '45', '5'],
              ['3A', '43 (37-45)', '39', '54', '16', 'FM-QCF', '16', '6'],
              ['3B', '53', '46', '84', '9', 'FM', '1', '1'],
            ]
          },
          {
            type: 'DisclosurePanel',
            title: 'Example recordings from the phonic groups',
            titleEl: 'h3',
            children: [
          
            {type: 'text', className: 'small-text', text: 'Note: Each spectrogram screenshot uses similar time/frequency scale for ease of visual comparison'},
            {type: 'h4', text: 'Group 1A (Peak 19-20 kHz flatter FM-QCF)'},
            {type: 'img', src: bat_19, className: 'width100', alt: 'A spectrogram showing a series of bat calls with peak frequency around 26 kHz'},
            {type: 'text', className: 'small-text', text: 'Bat recorded 9/14/2025 in Medford, MA over Upper Mystic Lake'},
            {type: 'p', text: 'Loud hockey stick shaped calls that are flatter and lower frequency from group 2a.'},
            {type: 'h4', text: 'Group 1B (Peak 25-32 kHz loud FM-QCF) '},
            {type: 'img', src: bat_25, className: 'width100', alt: 'A spectrogram showing a series of bat calls with peak frequency around 36 kHz'},
            {type: 'text', className: 'small-text', text: 'Bat recorded 6/30/3035 in Melrose, MA on Naples Rd'},
            {type: 'p', text: 'Many passes in this group are loud hockey stick shaped calls with harmonics at approx. 55, 90, and 150 kHz.'},
            
            {type: 'h4', text: 'Group 2 (Peak 27-38 kHz varied shapes)'},
            {type: 'img', src: bat_32, className: 'width100', alt: 'A spectrogram showing a series of bat calls with peak frequency around 45 kHz'},
            {type: 'text', className: 'small-text', text: 'Bat recorded 9/1/2025 in Melrose, MA over Pine Banks Pond'},
            {type: 'p', text: 'Many are hockey stick shaped calls with max energy 33-38 kHz, some flatter calls with max energy 32-35 kHz, some have upturn at end. Quiet to moderate energy, no visible harmonics.'},

            {type: 'img', src: bat_32_squiggle, className: 'width100', alt: 'A spectrogram showing a series of bat calls with peak frequency around 45 kHz'},
            {type: 'text', className: 'small-text', text: 'Bat recorded 9/13/2025 in Melrose, MA over Swain\'s Pond'},
            {type: 'p', text: 'Some are flatter calls with upturn at beginning, slope down, then upturn at end. These \'squiggle\' calls were not mixed in same bat passes as the hockey-stick shaped calls.'},

            {type: 'h4', text: 'Group 3A (Peak 37-45 kHz FM & FM-QCF)'},
            {type: 'img', src: bat_41, className: 'width100', alt: 'A spectrogram showing a series of bat calls with peak frequency around 45 kHz'},
            {type: 'text', className: 'small-text', text: 'Bat recorded 9/13/2025 in Melrose, MA over Towner\'s Pond'},
            {type: 'p', text: 'Loud hockey stick shaped calls, some show upturn or downturn at end of call, others look more FM. Closer/louder calls show harmonic at 78 kHz.'},

            {type: 'h4', text: 'Group 3B (Peak 53 kHz FM)'},
            {type: 'img', src: bat_53, className: 'width100', alt: 'A spectrogram showing a series of bat calls with peak frequency around 45 kHz'},
            {type: 'text', className: 'small-text', text: 'Bat recorded 9/13/2025 in Malden, MA over Forestdale Cemetery Pond'},
            {type: 'p', text: 'Higher pitched call, no visible harmonics, moderate energy, steep hockey-stick shape closer to FM.'},
            
            {type: 'h3', text: 'Other Findings'},
            {type: 'p', text: '1. Bats making social calls in between their echolocation calls'},
            {type: 'img', src: bat_social, className: 'width100', alt: 'A spectrogram showing bat echolocation with squiggly lines showing social calls made in between the echolocation calls'},
            {type: 'text', className: 'small-text', text: 'Bat recorded 10/20/2024 in Melrose, MA on Naples Rd.'},
            {type: 'p', text: '2. Bats using strobe groups (an echolocation call consisting of more than 2+ rapid pulses)'},
            {type: 'img', src: bat_strobe, className: 'width100', alt: 'A spectrogram showing bat echolocation calls where some calls involve 2+ rapid pulses'},
            {type: 'text', className: 'small-text', text: 'Bat recorded 6/30/2025 in Melrose, MA on Naples Rd. '},
            {type: 'p', text: '3. A feeding buzz with 3 main phases (search, approach, and terminal) showing that calls change in shape and frequency as bat approaches a tasty insect'},
            {type: 'img', src: bat_feed, className: 'width100', alt: 'A spectrogram showing bat echolocation calls which grow closer together and drop in frequency for a feeding buzz'},
            {type: 'text', className: 'small-text', text: 'Bat recorded 9/11/2025 in Andover, MA over a field'},
          ]},
          {type: 'h2', text: 'Discussion'},
          {
            type: 'DisclosurePanel',
            title: 'Echolocation characteristics of species in Massachusetts',
            titleEl: 'h3',
            children: [
          
            {type: 'table', className: 'med-text',
              headers: [
                'Name',
                'Status',
                'Typical peak freq',
                'Typical volume'
              ],
              rows: [
                ['Hoary bat (Lasiurus cinereus)', 'concern', '18-23 kHz', 'variable'],
                ['Silver-haired bat (Lasionycteris noctivagans)', 'concern', '27-31 kHz', 'moderate'],
                ['Big brown bat (Eptesicus fuscus)', 'common', '28-32 kHz', 'shouting'],
                ['Eastern red bat (Lasiurus borealis)', 'concern', '39-49 kHz', 'shouting'],
                ['Little brown bat (Myotis lucifugus)', 'endangered', '40-47 kHz', 'shouting'],
                ['Indiana bat (Myotis sodalist)', 'endangered', '41-47 kHz', 'moderate'],
                ['Tricolored bat (Perimyotis subflavus)', 'endangered', '42-46 kHz', 'whispering'],
                ['Eastern small-footed bat (Myotis leibii)', 'endangered', '46-52 kHz', 'whispering'],
                ['Northern long-eared bat (Myotis septentrionalis)', 'endangered', '41-62 kHz', 'whispering'],
              ]
            },
            {type: 'text', text: 'Sources: ', className: 'small-text'},
            {type: 'a', text: 'MassAudubon', className: 'small-text', href: 'https://www.massaudubon.org/nature-wildlife/mammals-in-massachusetts/bats'},
            {type: 'text', text: ', ', className: 'small-text'},
            {type: 'a', className: 'small-text', text: 'Joe Szewczak, Cal Poly Humboldt Bat Lab, 2006, 2011, 2018, 2022, 2024', href: 'https://sonobat.com/download/Eastern_NA_Acoustic_Table.pdf'},              
          ]},
          {type: 'h3', text: 'What species might I have recorded?'},
          {type: 'text', className: 'bold', text: 'Phonic Group 1A (Peak 19-20 kHz flatter FM-QCF) '},
          {type: 'text', text: 'recordings could be hoary bats ('},
          {type: 'text', text: 'Lasiurus cinereus', className: 'italic'},
          {type: 'text', text: '). While uncommon, they are the only bat species in MA known to echolocate at these lower frequencies. Kaleidoscope Pro also identified these recordings as containing hoary bats.'},
          {type: 'p', text: ''},
          {type: 'text', className: 'bold', text: 'Phonic Group 1B (Peak 25-32 kHz loud FM-QCF) '},
          {type: 'text', text: 'recordings are most likely of big brown bats ('},
          {type: 'text', text: 'Eptesicus fuscus', className: 'italic'},
          {type: 'text', text: ') who are very common throughout the state. 37% of my recordings were in this phonic group. Kaleidoscope Pro identified most of these recordings as being big brown bats, but also said 5 were silver-haired bats ('},
          {type: 'text', text: 'Lasionycteris noctivagans', className: 'italic'},
          {type: 'text', text: ') and 1 was an eastern red bat ('},
          {type: 'text', text: 'Lasiurus borealis', className: 'italic'},
          {type: 'text', text: ').'},
          {type: 'p', text: ''},
          {type: 'text', className: 'bold', text: 'Phonic group 2 (Peak 27-38 kHz varied shapes) '},
          {type: 'text', text: 'is a little mysterious. I have 45+ recordings from this group, but the peak frequencies of many of them are atypical for bats in Massachusetts. Some are flatter FM-QCF and some are almost flat and squiggly. Some calls could be big brown bats ('},
          {type: 'text', text: 'Eptesicus fuscus', className: 'italic'},
          {type: 'text', text: ') but many calls are somewhat high pitched for this species. Some could be from the uncommon eastern red bat ('},
          {type: 'text', text: 'Lasiurus borealis', className: 'italic'},
          {type: 'text', text: ') or the endangered tricolored bat ('},
          {type: 'text', text: 'Perimyotis subflavus', className: 'italic'},
          {type: 'text', text: '). The latter are known to make "squiggles" but the peak frequencies of these species are typically higher. Kaleidoscope Pro identified most of these recordings as eastern red bat but some were also labeled as NoID or noise.'},
          
          {type: 'p', text: ''},
          {type: 'text', className: 'bold', text: 'Phonic Group 3A (Peak 37-45 kHz FM & FM-QCF) '},
          {type: 'text', text: 'comprised of about 16 recordings that are possibly from the uncommon eastern red bat ('},
          {type: 'text', text: 'Lasiurus borealis', className: 'italic'},
          {type: 'text', text: ') or the endangered little brown bat ('},
          {type: 'text', text: 'Myotis lucifugus', className: 'italic'},
          {type: 'text', text: ') whose calls are consistent with these frequencies and shapes. More expertise and investigation would be helpful to differentiate the two. Kaleidoscope Pro identified these recordings as a mix of eastern red bats, tricolored bats ('},
          {type: 'text', text: 'Perimyotis subflavus', className: 'italic'},
          {type: 'text', text: ') and Indiana bats ('},
          {type: 'text', text: 'Myotis sodalist', className: 'italic'},
          {type: 'text', text: '), while a few recordings were labeled as NoID or noise.'},
          {type: 'p', text: ''},
          {type: 'text', className: 'bold', text: 'Phonic Group 3B (Peak 53 kHz FM) '},
          {type: 'text', text: 'consisted of a single recording with higher-pitched FM calls that could possibly come from the eastern small-footed bat ('},
          {type: 'text', text: 'Myotis leibii', className: 'italic'},
          {type: 'text', text: ') or northern long-eared bat ('},
          {type: 'text', text: 'Myotis septentrionalis', className: 'italic'},
          {type: 'text', text: '). Both are endangered in MA, but their whispering calls are consistent with this frequency. Kaleidoscope Pro identified this recording as an Indiana bat ('},
          {type: 'text', text: 'Myotis sodalist', className: 'italic'},
          {type: 'text', text: ') although the peak frequency seems high for that species. '},
          {type: 'p', text: ''},
          
          
          {type: 'h3', text: 'Challenges / Things I Learned'},
          {type: 'p', text: 'I had originally hoped to fully automate my audio feature extraction program but found that it was challenging to automatically select the right energy threshold and filter cutoffs that best highlight the bat calls given variable factors in the recordings including bat call energy vs. wind energy.  So I created a semi-automated program that shows the waveform and spectrogram and prompts the user to adjust the energy threshold, ensuring the calls are correctly highlighted before the program automatically extracts features.'},
          {type: 'p', text: 'I also found that energy threshold can bias the call duration, slope, and max frequency. For instance, if it\'s very windy or the bat is farther away or quieter, the energy threshold needs to be higher to separate the bat calls from wind, but this artificially shortens call duration and reduces max frequency as the higher frequencies and sustain/release portion of the sound envelope get cutoff or \'lost in the wind.\' This means that max frequency and duration were not as reliable as min frequency and frequency of peak energy.'},
          {type: 'text', text: 'High- and low-pass filter cutoffs also needed to be manually adjusted to account for bats of very different frequencies who were sometimes present in the same recording, as well as cut out loud high-pitched insects like katydids who were sometimes present.'},
          {type: 'h3', text: 'Next Steps'},
          {type: 'text', text: 'It would be great to compare my results with results from professional software, and learn about the methods other researchers use to adjust energy thresholds and high- and low-pass filter cutoffs. This project was completed prior to the release of Cornell University\'s '},
          {type: 'a', href: 'https://www.ravensoundsoftware.com/software/raven-workbench/raven-annotate/', text: 'RavenAnnotate'},
          {type: 'text', text: ', but in the future I would like to explore use these tools to analyze bat calls. Finally, I would like to learn more advanced methods of capturing call shape and explore machine learning methods like image recognition of spectrograms to classify calls.'},
          {type: 'p', text: ''},
          {type: 'text', text: 'As described in '},
          {type: 'a', text: 'Bat Conservation International (BATCON) 2020 Handbook', href: 'https://www.batcon.org/wp-content/uploads/2020/09/Bat_Echolocation_Research_2nd_Ed_20200918.pdf'},
          {type: 'text', text: ', identifying species from recordings alone is challenging, as individual bats can vary their calls dramatically, and many species can sound similar. But I was pleased to find significant differences between groups in my recordings, suggesting species identification is possible through audio feature extraction.'},
  
          {type: 'h2', text: 'Resources'},
          {type: 'ul', elements: [
            [{type: 'a', text: 'Bat Conservation International (BATCON) 2020 Handbook', href: 'https://www.batcon.org/wp-content/uploads/2020/09/Bat_Echolocation_Research_2nd_Ed_20200918.pdf'}],
            [{type: 'a', text: 'Bats of Massachusetts', href: 'https://www.mass.gov/info-details/bats-of-massachusetts'}],
            [{type: 'a', text: 'MassAudubon', href: 'https://www.massaudubon.org/nature-wildlife/mammals-in-massachusetts/bats'}],
            [{type: 'a', text: 'Echolocation Call Characteristics of Eastern North American Bats, Joe Szewczak, Cal Poly Humboldt Bat Lab, 2006, 2011, 2018, 2022, 2024', href: 'https://sonobat.com/download/Eastern_NA_Acoustic_Table.pdf'}],
            [{type: 'a', text: 'Xeno-canto', href: 'https://xeno-canto.org/explore/taxonomy?ord=CHIROPTERA'}],
          ]}
        ]
      },
      
      
    ],
  },
  // plant-sound --> not done
  {
    path: 'plant-sound',
    short_title: 'Plant Sound',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: false,
    featured: false,
    desc: 'Exploring ultrasonic \'popping\' of distressed veggies',
    long_desc: '',
    mainImage: {
      type: 'png',
      src: plantPng,
      alt: 'A tomato plant and a corn stalk',
    },
    techStack: [
      'Audio Signal Processing', 'librosa'],
    project_details: [],
  },
  // frog-identifier --> DONE!!
  {
    path: 'frog-classifier',
    short_title: 'Frog Classifier',
    title: 'Frog Classifier',
    date: 'February 2025',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: true,
    desc: 'An image recognition model fine-tuned to identify frog species',
    long_desc: 'Trained an image classifier to identify frog species in Massachusetts. Live demo with camera. Model hosted in Hugging Face.',
    mainImage: {
      type: 'png',
      src: frog,
      alt: 'A green frog',
    },
    liveDemo: true,
    projectCardTechStack: ['fastai'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {type: 'h2', text: 'Goal'},
          {
            type: 'GoalAndGithub',
            elements: [
              {type: 'text', text: 'In this practice project on transfer learning, I created an image classifier for the 10 frog species found in Massachusetts by fine-tuning a pre-trained neural network model, '},
              {type: 'a', text: 'resnet18', href: 'https://huggingface.co/microsoft/resnet-18'},
              {type: 'text', text: ', on 2000 frog pictures. The model is hosted on '},
              {type: 'a', text: 'Hugging Face Spaces', href: 'https://huggingface.co/spaces/kaysrubio/Identifying_Frogs_in_Massachusetts/tree/main'},
              {type: 'text', text: '.'},
            ],
            href: 'https://github.com/KaySRubio/deep-learning-projects/blob/main/frog_image_classifier.ipynb',
          },
          {type: 'h2', text: 'Demo'},
        ]
      },
      {
        type: 'DemoBoard',
        input: {
          types: ['image'],
          sampleImages: [
            {
              displayText: 'American Bullfrog', 
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
              displayText: 'Gray Tree Frog', 
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
              displayText: 'Northern Leopard Frog', 
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
            huggingFaceClient: 'kaysrubio/Identifying_Frogs_in_Massachusetts',
            huggingFaceApi: '/predict',
            key: '682d2362-894c-800c-af30-a4c56b7f074b'
          }
        ],
        results: {
          tabs: [
            {
              type: 'classification',
              icon: frog_outline,
              displayText: 'Classification',
              path: 'data[0]',
            }
          ],
          slowResultsHandler: {
            timeBeforeShowMessage: 10,
            message: 'It seems the Hugging Face Space is just waking up. This may take a minute, but your next requests today will be much faster. Estimated time remaining:',
            expectedTimeToResults: timeItTakesAHuggingFaceSpaceToWakeUp,
          },

        }
      },
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {type: 'h2', text: 'Model Training Details'},
          {
            type: 'ol', elements: [
              [{type: 'text', text: 'The model error rate improved from 40% to 34% when I shifted from 100 to 200 photos per frog species.'}],
              [{type: 'text', text: 'The model error rate further improved from 34% to 27% when I used RandomResizedCrop rather than squish on the data each epoch.'}],
              [{type: 'text', text: 'The final model only needed 2 epoch\'s to train. '}],
              [{type: 'text', text: 'Epochs 3-4 showed overfitting as training loss decreased but validation loss didn\'t improve and error rate slightly increased.'}],
              [{type: 'text', text: 'The final model trained on 200 pictures had 27% error rate.'}],
            ]
          },
          {type: 'h2', text: 'Next Steps'},
          {type: 'p', text: 'To improve this model, it would be helpful to clean the training data. For instance, delete images of tadpoles and icons, as well as ask a frog expert to see if any are mislabeled.'}
        ]
      },
    ],
  },
  // voice-detection --> not done
  {
    path: 'voice-detection',
    short_title: 'Voice Detection',
    title: '',
    date: '',
    topics: [TopicNames.MACHINELEARNING, TopicNames.WEBAPPDEVELOPMENT],
    visible: false,
    featured: false,
    mainImage: {
      type: 'png',
      src: people_talking,
      alt: 'A cartoon of multiple people talking',
    },
    desc: 'Comparing algorithms that detect speech',
    long_desc: '',
    techStack: [
      'Voice Activity Detection (VAD)',
      'Neural networks',
    ],
    project_details: [],
  },
  // accent-classifier --> DONE!!
  {
    path: 'accent-classifier',
    short_title: 'Accent Classifier',
    title: 'Training an Accent Classifier using Transfer Learning',
    date: 'February 2025',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: true,
    desc: 'An accent classification model and exploration of speech recognition technologies',
    long_desc: 'Fine-tuned an accent classification model using hugging face transformers. Live demo features audio recording.',
    mainImage: {
      type: 'png',
      src: asrPng,
      alt: 'A cartoon of a woman talking in front of a microphone and a computer screen with a robot on the screen',
    },
    liveDemo: true,
    projectCardTechStack: ['huggingface', 'wandb'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {
            type: 'GoalAndGithub',
            elements: [
              {type: 'h2', text: 'Introduction'},
              {type: 'p', text: 'Existing accent classifiers focus on native English speakers from around the world but exclude people who learned English as a second language. This renders them inaccurate for many common accents among people in the US, such as people whose first language is Spanish or Chinese.'},
              {type: 'p', text: 'My goal was to create an accent classifier for people who learned English as a second language by fine-tuning a speech recognition model. I also explored other publicly available models for transcription and phonemic transcription.'},
              {type: 'text', text: 'Although the generalizability of the model is limited based on the data available as discussed below, the project helped me practice skills learned from the '},
              {type: 'a', text: 'Hugging Face Transformers for Audio', href: 'https://huggingface.co/learn/audio-course/en/chapter0/introduction'},
              {type: 'text', text: ' course.'},
              
            ],
            href: 'https://github.com/KaySRubio/transformers_speech_recognition_and_classification/tree/main',
          },
          {type: 'h2', text: 'Demo'},
          {type: 'p', text: 'The live demo below shows output from the accent classification model I trained as well as other publicly available models that transcribe and classify speech.'},
        ]
      },
      {
        type: 'DemoBoard',
        customSection: {
          displayText: 'Directions',
          elements: [
            {type: 'p', text: 'Record, upload, or select a preloaded file. Then click "Submit" to see the transcription, phonemic transcriptions, and accent classification from different AI models.'}
          ],
        },
        input: {
          types: ['audio'],
          sampleAudio: [
            {
              displayText: 'Chinese American comedian Ronny Chieng',
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
                    }
                  ]
                ],
              } as Kaysrubio_speech_transcribe_result,
            },
            {
              displayText: 'Indian professor Abdul Bari',
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
              displayText: 'Mexican actor Jaime Camil in Jane the Virgin',
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
              displayText: 'Irish accent from Derry Girls',
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
              displayText: 'Nigerian actors Daniel Effiong & Tana Adelana',
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
              displayText: 'Vietnamese accent from L2-Arctic-Corpus',
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
            spectrogram: 'on',
            lineGraphs: [
              {
                displayText: 'RMS energy',
                setting: 'userToggle',
                path: ''
              }
            ],
            zoom: false,
            changeSpeed: true,
            waveColor: '',
            progressColor: '',
            barWidth: 2,
          },
          audioLengthLimitInSeconds: 30,
        },
        requests: [
          {
            type: 'gradio',
            huggingFaceClient: 'kaysrubio/speech_transcribe_phonemes_and_accent',
            huggingFaceApi: '/transcribe_and_classify_speech_1',
            key: '682d2362-894c-800c-af30-a4c56b7f074b'
          }
        ],
        results: {
          tabs: [
            {
              type: 'transcription',
              displayText: 'Transcription',
              icon: transcription,
              resultsForEachModel: [
                {
                  title: 'Transcription trained on Whisper',
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
              displayText: 'Phonemes',
              icon: phonemes,
              resultsForEachModel: [
                {
                  title: 'Model trained on speakers of American English',
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
                  title: 'Model trained on speakers who learned English as a second language',
                  description: [
                    {type: 'text', text: 'Model: '},
                    {type: 'a', href: 'https://huggingface.co/mrrubino/wav2vec2-large-xlsr-53-l2-arctic-phoneme', text: 'mrrubino/wav2vec2-large-xlsr-53-l2-arctic-phoneme'},
                    {type: 'text', text: '. Trained on L2 arctic, speakers of English as a second language'},
                  ],
                  results: [
                    {type: 'textFromPath', path: 'data[0][2].phonemes_eng_second_lang'},
                  ],
                },
              ]
            },
            {
              type: 'accent',
              displayText: 'Accent',
              icon: accent,
              resultsForEachModel: [
                {
                  title: 'Predicted accent trained on native English speakers',
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
                  title: 'Predicted accent trained on speakers of English as a second language',
                  description: [
                    {type: 'text', text: 'Model: '},
                    {type: 'a', href: 'https://huggingface.co/kaysrubio/accent-id-distilhubert-finetuned-l2-arctic2', text: 'kaysrubio/accent-id-distilhubert-finetuned-l2-arctic2'},
                    {type: 'text', text: '. Trained on L2 arctic, speakers of English as a second language'},
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
          slowResultsHandler: {
            timeBeforeShowMessage: 10,
            message: 'It seems the Hugging Face Space is just waking up. This may take a minute, but your next requests today will be much faster. Estimated time remaining:',
            expectedTimeToResults: timeItTakesAHuggingFaceSpaceToWakeUp,
          },
        }
      },
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {type: 'h2', text: 'Methods'},
          {
            type: 'TechStack',
            techList: ['wandb', 'huggingface'],
          },
          {type: 'ol', elements: [
            [{type: 'text', text: 'Explore open-source models for speech including ASR, phonemic transcription, and accent classification'}],
            [{type: 'text', text: 'Fine-tune my own ASR model for accent classification'}],
            [
              {type: 'text', text: 'Demo work on '},
              {type: 'a', text: 'Hugging Face Spaces', href: 'https://huggingface.co/spaces/kaysrubio/speech_transcribe_phonemes_and_accent/tree/main'},
              {type: 'text', text: ' with '},
              {type: 'a', text: 'Gradio', href: 'https://www.gradio.app/'},
              {type: 'text', text: ' and create an API endpoint that can take in audio and pass ASR output in json format to a front-end application'}
            ],
          ]},
          {
            type: 'DisclosurePanel', 
            title: 'Data and Data Preparation',
            titleEl: 'h3',
            children: [
              {type: 'h4', text: 'Data source'},
              {type: 'text', text: 'The '},
              {type: 'a', text: 'L2-Actic', href: 'https://psi.engr.tamu.edu/l2-arctic-corpus/'},
              {type: 'text', text: ' data is ~8GB and comes via email. It includes approximately 24-30 hours of recordings where 24 speakers read passages in English. The first languages of the speakers are Arabic, Hindi, Korean, Mandarin, Spanish, and Vietnamese. There\'s 2 women and 2 men in each language group.'},
              {type: 'h4', text: 'Data preparation'},
              {
                type: 'ol',
                elements: [
                  [{type: 'text', text: 'The dataset was split in 6 smaller pieces, one for each language group to reduce memory problems during reformatting. The number of files per speaker was limited to 560 to use approximately half of the original data. Thus, each piece was about 0.66GB with 2,240 rows.'}],
                  [{type: 'text', text: 'Audio was resampled to 16,000 Hz.'}],
                  [{type: 'text', text: 'Sequential audio files from the same speaker were combined to improve training efficiency. For instance, instead of a lot of audio files that are only 1-3 seconds, I combined them so there were fewer files and they were just under 30 seconds in length.'}],
                  [{type: 'text', text: 'The data was reformatted and wrapped in the Hugging Face dataset class.'}],
                  [{type: 'text', text: 'A variable for language category was added and the datasets were stacked to create a unified dataset.'}],
                ]
              },
              {type: 'p', text: 'The final dataset included 6 language groups with about 300 rows per group. Each row contained the label for the language group and an audio file of 30 seconds or less at 16k Hz.'},
              {type: 'p', className: 'note', text: 'Note: Reformatting such a large volume of audio took quite a bit of computing resources, and so I explored/compared different free resources like Kaggle, GoogleCollab, as well as CPU vs. GPU.'}, 
            ],
          },
          {
            type: 'DisclosurePanel', 
            title: 'Fine-tuning the model',
            titleEl: 'h3',
            children: [
              {type: 'h4', text: 'Foundation Model'},
              {type: 'a', text: 'DistilHuBERT', href: 'https://huggingface.co/ntu-spml/distilhubert'},
              {type: 'text', text: ' is a smaller version of HuBERT that was modified from BERT. BERT is a speech recognition model with encoder-only CTC architecture. For this project, a classification layer was added.'},
              {type: 'h4', text: 'Fine-tuning Process'},
              {type: 'text', text: 'I fine-tuned '},
              {type: 'a', text: 'DistilHuBERT', href: 'https://huggingface.co/ntu-spml/distilhubert'},
              {type: 'text', text: ' on 50% of the '},
              {type: 'a', text: 'L2-Actic', href: 'https://psi.engr.tamu.edu/l2-arctic-corpus/'},
              {type: 'text', text: ' data to classify the accents in the 6 language groups and created this model on Hugging Face: '},
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
          {type: 'h2', text: 'Results'},
          {type: 'p', text: 'After 10 epochs, model accuracy was 100%, training loss was 0.0007, and validation loss was 0.0004.'},

          {type: 'h2', text: 'Discussion'},
          {type: 'p', text: 'The model is very accurate for novel recordings from the original dataset that were not used for train/test. However, the model is not accurate for voices from outside the dataset. Unfortunately, with only 24 speakers represented, it seems like the model memorized other characteristics of these voices besides accent, thus not creating a model very generalizable to the real world.'},
          {type: 'p', text: 'However, if a new dataset becomes available that includes many more voices and clear accent categories, this code may be reused to train a model that generalizes to the real world.'},
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
        ]
      },
    ],
  },
    // algorithm-ocean --> DONE!!
  {
    path: 'algorithm-ocean',
    short_title: 'Algorithm Ocean',
    title: 'Algorithm Ocean: Practice sorting algorithms live!',
    date: 'Summer 2022',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    visible: true,
    featured: true,
    desc: 'Web app to teach students sorting algorithms with an under-the-sea theme',
    long_desc: 'Created a React and TypeScript website to teach users sorting algorithms that they can perform live on screen and get instant feedback about their steps.',
    mainImage: {
      type: 'png',
      src: anemone,
      alt: 'A cartoon anemone with a green body and pink tentacles and eyes looking up',
    },
    liveDemo: true,
    projectCardTechStack: ['react', 'typescript', 'vite', 'nodejs'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {
            type: 'GoalAndGithub',
            elements: [
              {type: 'h2', text: 'Purpose'},
              {type: 'p', text: 'AlgorithmOcean is the first online resource that allows students to perform sorting algorithms live on screen and get instant feedback about the steps they used. The program randomly generates an array of numbers. Users sort the numbers using bubble, selection, or insertion sort. Once sorted, the user presses "Submit" and the program tells them if they used the correct steps according to the algorithm. For fun, the program also provides interesting facts about how algorithms relate to ocean science. I created AlgorithmOcean as part of an independent study course at Framingham State University in 2022. In 2025 I updated it to work with modern React, TypeScript, and Vite.'},
              {type: 'text', text: 'Try it out live at '},
              {type: 'a', text: 'kaysrubio.github.io/algorithm-ocean-2/', href: 'https://kaysrubio.github.io/algorithm-ocean-2/#/'},
              {type: 'text', text: ' or or use the demo screen embedded below.'}
            ],
            href: 'https://github.com/KaySRubio/algorithm-ocean-2',
          },
          {
            type: 'TechStack',
            techList: ['react', 'typescript', 'nodejs', 'vite'],
          },
          {type: 'h2', text: 'Demo'},
        ]
      },
      {type: 'iframe', title: 'Algorithm Ocean lesson page showing bubble sort', src: 'https://kaysrubio.github.io/algorithm-ocean-2/#/lesson/bubble'},
    ],
  },
  // danceability --> DONE!!
  {
    path: 'danceability',
    short_title: 'Danceability',
    title: 'Predicting Danceability using Machine Learning Models for Regression',
    date: 'January 2024',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: true,
    desc: 'A traditional machine learning model that predicts the danceability of songs',
    long_desc: 'Trained machine learning model for regression to predict danceability scores from the temporal features of songs using scikit-learn.',
    mainImage: {
      type: 'png',
      src: dancing,
      alt: 'Three people dancing in colorful clothing',
    },
    projectCardTechStack: ['scikitlearn', 'pandas', 'matplotlib'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {
            type: 'GoalAndGithub',
            elements: [
              {type: 'h2', text: 'Introduction'},
              {type: 'p', text: 'In this project, I trained a model that predicts danceability scores from the temporal features of songs. This was a practice project that I completed after training in scikit-learn.'},
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
          {type: 'h3', text: 'Inference with the strongest model'},
          {type: 'p', text: 'The gradient boosting model with max-depth of 3 and number of estimators of 100 was used on 3 new songs.'},
          {
            type: 'table',
            headers: ['Song name', 'Artist', 'Predicted Danceability', 'Actual Danceability'],
            rows: [
              ['Wooden Ships', 'Unknown', '0.04867972', '0.05166771'],
              ['Shakkei (Remixed)', '	Origamibiro', '0.51086412', '0.44688061'],
              ['Niris', 'Nicky Cook', '0.83163573', '0.94879937'],
            ]
          },
          {type: 'ul', elements: [
            [{type: 'text', text: 'Danceabilty ranges from 0-1 so these danceability predictions are pretty close!'}],
            [{type: 'text', text: 'The model agreed that Wooden Ships is not very danceable with a score of 0.0487 (actual: 0.0517)'}],
            [{type: 'text', text: 'The model agreed that Shakkei (Remixed) by Origamibiro is medium danceable with a score of 0.511 (actual 0.447)'}],
            [{type: 'text', text: 'The model agreed that Niris by Nicky Cook is super danceable with a score of 0.832 (actual 0.949)'}],
          ]},
          {type: 'h2', text: 'Discussion'},
          {type: 'p', text: 'A gradient boosting model with 500 trees and a max depth of 3 was successfully able to predict the danceability rating of songs from their temporal features with accuracy within .06 out of a scale from 0 to 1.'},
          {type: 'h2', text: 'Dataset'},
          {type: 'p', text: 'Defferrard, Michael and Benzi, Kirell and Vandergheynst, Pierre and Bresson, Xavier (2017). FMA: A Dataset for Music Analysis. In 18th International Society for Music Information Retrieval Conference (ISMIR). arXiv. 1612.01840. https://arxiv.org/abs/1612.01840'},
        ]
      },
    ],
  },
  // medical-classifier --> DONE!!
  {
    path: 'medical-classifier',
    short_title: 'Medical Classifier',
    title: 'Using ML Classification Algorithms to Predict Hospital Readmission in Patients with Diabetes',
    date: 'January 2024',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: true,
    desc: 'A traditional machine learning model that predicts hospital readmission',
    long_desc: 'Trained machine learning classification models to predict hospital readmission in patients with diabetes using scikit-learn.',
    mainImage: {
      type: 'png',
      src: hospitalization,
      alt: 'A patient laying in a hospital bed with a medical professional standing over with a notepad while smiling',
    },
    projectCardTechStack: ['scikitlearn', 'skopt'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {
            type: 'GoalAndGithub',
            elements: [
              {type: 'h2', text: 'Introduction'},
              {type: 'p', text: 'In this project, I utilized open-source patient data to train traditional machine learning models to predict hospital readmission within 30 days for patients with diabetes. This was a practice project that I completed after training in scikit-learn.'},
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
          {type: 'p', text: 'I chose an open-source dataset from the UC Irvine Machine Learning Repository containing hospital records on 101,766 hospitalizations among patients with diabetes from 1999-2008 at 130 US hospitals. Predictors include demographics (race, gender, age), admission type, discharge type, time in hospital, number of lab procedures and medications given during hospitalization, number of prior visits (outpatient, emergency, inpatient) in the last year and various lab values. I split the data into 75% training and 25% test.'},
          {type: 'p', text: 'I cleaned the data, dropped variables with high amounts of missing data, and imputed missing values where the variable was missing only a small percent of data. I also collapsed some categories and checked the linearity of relationships between the predictors and the outcome. Variables without a linear relationship with the outcome were left out of the logistic regression model.'},
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
          {type: 'p', className: 'note', text: 'Note: During data cleaning/exploration, I noted that many predictors in the dataset did not have a significant linear relationship with the outcome. I left out these out of some models such as logistic regression. I checked other models on both datasets (all predictors vs. only predictors with a linear relationships) but including more or fewer predictors did not make a significant difference on results.'},
          {type: 'h3', text: 'Strongest predictors'},
          {type: 'p', text: 'According to logistic regression, the 3 strongest predictors in a linear model are:'},
          {type: 'ul', elements: [
            [{type: 'text', text: 'discharge disposition'}],
            [{type: 'text', text: 'number of inpatient visits in past year'}],
            [{type: 'text', text: 'change in diabetes medication during hospitalization'}],
          ]},
          {type: 'h3', text: 'Hyperparameter tuning for precision'},
          {type: 'p', text: 'Users of this medical model would want to reduce false-negatives and prioritize identifying as many people as possible who are could be re-hospitalized.  So, I tuned the best model, Random Forest Classifier, to reduce precision using the threshold hyperparameter.'},
          {type: 'ul', elements: [
            [{type: 'text', text: 'At threshold: 0.07, accuracy was 29.737%, precision was 12.916%, and recall was 91.323%'}],
            [{type: 'text', text: 'At threshold: 0.05, accuracy was 14.414%, precision was 11.509%, and recall was 98.755%'}],
          ]},
          {type: 'h2', text: 'Discussion'},
          {type: 'p', text: 'The strongest model, Random Forest Classifier, can predict which patients are going to be hospitalized within 30 days with 89% accuracy.  When tuned to reduce false negatives, recall was 99%.  This indicates that of the patients who will be re-hospitalized within 30 days, the model successfully flags 99% of them as likely to be re-hospitalized.  This practice project on real open-source patient data shows the utility that traditional machine learning models can have in medical applications.'},
          {type: 'h2', text: 'Dataset Citation'},
          {type: 'p', text: 'Beata Strack, Jonathan P. DeShazo, Chris Gennings, Juan L. Olmo, Sebastian Ventura, Krzysztof J. Cios, and John N. Clore, “Impact of HbA1c Measurement on Hospital Readmission Rates: Analysis of 70,000 Clinical Database Patient Records,” BioMed Research International, vol. 2014, Article ID 781670, 11 pages, 2014.'}
        ]
      },
    ],
  },
  // dear abby topic-modeling --> DONE!!
  {
    path: 'topic-modeling',
    short_title: 'Topic Modeling',
    title: 'Topic Modeling with Dear Abby Questions',
    date: 'February 2024',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: true,
    desc: 'Discovery of topics in Dear Abby questions using Natural Language Processing',
    long_desc: 'Used unsupervised machine learning and natural language processing to explore underlying topics in 20,000 Dear Abby questions.',
    mainImage: {
      type: 'png',
      src: dearabby,
      alt: 'A photo of Abigail Van Buren\'s column Dear Abby that includes a picture of her face as well as some small text',
    },
    projectCardTechStack: ['nltk', 'scikitlearn'],
    project_details: [
      {
        type: 'div',
        className: 'project-details-restricted-width',
        elements: [
          {
            type: 'GoalAndGithub',
            elements: [
              {type: 'h2', text: 'Introduction'},
              {type: 'text', text: 'I used unsupervised machine learning to explore underlying topics in 20,000 Dear Abby questions from 1985-2017. This involved cleaning and preparing the data using natural language processing (NLP) techniques like tokenization and lemmatization. Then I used topic modeling algorithms including '},
              {type: 'a', text: 'Latent Dirichlet Allocation (LDA)', href: 'https://pyldavis.readthedocs.io/en/latest/readme.html'},
              {type: 'text', text: ' and '},
              {type: 'a', text: 'Non-negative matrix factorization (NMF)', href: 'https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html'},
              {type: 'text', text: ' to generate underlying topics from the data. This was a practice project that I completed after completing trainings in NLP.'},
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
            title: 'Example of original and cleaned data (click for details):',
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
          {type: 'h3', text: 'Algorithms Used'},
          {type: 'p', text: 'I used Inverse document frequency (TF-IDF) Vectorization to create a document-term matrix for each unique single word (unigram) and pair of words (bigram).'},
          {type: 'p', text: 'Non-Negative Matrix Factorization (NMF) is a topic modeling algorithm that assumes each question belongs to only 1 topic. I used both unigrams and bigrams as input for NMF.'},
          {type: 'p', text: 'I also used Latent Dirichlet Allocation (LDA) which assumes all questions share topics but have different weightings of those topics.'},
          {type: 'h2', text: 'Results'},
          {type: 'img', src: dear_abby_word_cloud, alt: 'A word cloud with the largest words being year, time, husband, friend, mother, love, old, people, children, family, marry, etc.', className: 'medium-large-img'},
          {type: 'h3', text: 'Topic Modeling with Non-Negative Matrix Factorization (NMF)'},
          {
            type: 'DisclosurePanel',
            title: '21 Topics generated by NMF (click to see all topics):',
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
          {
            type: 'DisclosurePanel',
            title: '5 Topics generated by LDA (click to see all topics):',
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
          {type: 'h2', text: 'Discussion'},
          {type: 'p', text: 'Since Non-Negative Matrix Factorization (NMF) assumes each question belongs to only 1 topic, the results seemed more interesting compared to LDA in this project. I also appreciated having the algorithm to pull out more topics (21) rather than fewer (4). To loosely summarize, NMF\'s topics included work issues, house guests, dating/sex, breakups, friend/parties, marriage/divorce, siblings & holidays, children and adoption, wedding dilemmas, holiday/event planning, graduations, pregnancy, problems with the neighbors pets, and other family issues.'},
          {type: 'p', text: 'I found that LDA results were more generic and repetitive. Main topics included time, husbands, and mothers, with some more minor themes that were present in most or all of the questions. Coherence scores suggested trying 2, 5, and 21 topics. 2 topics didn\'t seem to provide enough information and 21 topics had a lot of overlap so 5 seemed like the most useful number.'},
          {type: 'p', text: 'Future directions include modeling how topics may have changed over time from 1985-2017 and identifying trends. Also, there\'s always more data cleaning to do. While I excluded some column-related phrasing and words in the first pass, I discovered that some logistical info was still left in and affected some of the topics, so more rigorous data cleaning could improve results. I\'d also like to explore Latent Semantic Analysis (LSA) and other topic modeling algorithms.',},
          {type: 'h2', text: 'Data Source'},
          {type: 'a', href: 'https://www.kaggle.com/datasets/thedevastator/american-anxieties-dear-abby-s-questions', text: 'Garret, K. (2023). American Anxieties: Dear Abby\'s Questions. Kaggle.com. Accessed February 1, 2024.'},
        ]
      },
    ],
  },
  // i-ready --> not done
  {
    path: 'i-ready',
    short_title: 'i-Ready',
    title: '',
    date: '',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    visible: false,
    featured: false,
    desc: 'Math and literacy programs for kids at Curriculum Associates',
    long_desc: '',
    mainImage: {
      type: 'png',
      src: iready,
      alt: 'A cartoon with 3 alien characters from the i-Ready program smiling and dancing around the i-Ready logo',
    },
    techStack: ['React', 'Nodejs'],
    project_details: [],
  },
  // speech-app --> not done
  {
    path: 'speech-app',
    short_title: 'Speech App',
    title: '',
    date: '',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    visible: false,
    featured: false,
    desc: 'A tool to input audio and display phonemic transcriptions and data',
    long_desc: '',
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
    name: 'Scikit Learn',
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

  // Bioacoustics tools
  {
    type: 'ravenannotate',
    name: 'ravenannotate',
    icon: ravenAnnotate,
    href: 'https://www.ravensoundsoftware.com/software/raven-workbench/raven-annotate/',
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
  {
    type: 'amazonsagemaker',
    name: 'Amazon SageMaker',
    icon: amazonSagemaker,
    href: 'https://aws.amazon.com/campaigns/sagemaker/',
  },
  {
    type: 'mlflow',
    name: 'MLFlow',
    icon: mlflow,
    href: 'https://mlflow.org/',
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

export const defaultSpectrogramSettings: SpectrogramSettings = {
  frequencyMinLimit: 0,
  frequencyMaxLimit: 4000,
  frequencyMin: 0,
  frequencyMax: 4000,
  scale: 'mel',
  fftSamples: 2048,
}