
import type { Project, Topic } from '../types/portfolioTypes';
import { TopicNames } from '../types/portfolioTypes';
import waveIcon  from '@/assets/svg/wave.svg?react';
import wwwIcon  from '@/assets/svg/www.svg?react';
import aiIcon from '@/assets/svg/ai.svg?react';
import anemone from '@/assets/svg/anemone.svg?react';
import mic from '@/assets/svg/mic.svg?react';
import people_talking from '@/assets/svg/people_talking.svg?react';
import chicken from '@/assets/png/chicken.png';
import spermwhalepng from '@/assets/png/spermwhale.png';
import frogpng from '@/assets/png/frog.png';
import dearabby from '@/assets/png/dearabby.png';
import dancing from '@/assets/svg/dancing.svg?react';
import hospitalization from '@/assets/svg/hospitalization.svg?react';
import iready from '@/assets/png/iready.png';
import asrPng from '@/assets/png/asr.png';
import batPng from '@/assets/png/bat.png';
import plantPng from '@/assets/png/plant.png';
import spectrogram from '@/assets/png/spectrogram.png';
import dear_abby_word_cloud from '@/assets/png/dear_abby_word_cloud.png';
import dear_abby_lda_5 from '@/assets/png/dear_abby_lda_5.png';
import nltk from '@/assets/svg/nltk.svg?react';

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
  {
    path: 'audio-feature-extraction',
    short_title: 'Audio Feature Extraction',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: false,
    desc: 'Practiced creating spectrograms and extracting features',
    // iconComponent: wave_diagram,
    icon: spectrogram,
    techStack: [
      'Audio Signal Processing',
      {
        type: 'link',
        text: 'librosa',
        src: 'https://librosa.org/doc/latest/index.html',
      },
    ],
    project_details: [
      {
        type: 'h2',
        text: ''
      },
    ],
  },
  {
    path: 'sperm-whale-codas',
    short_title: 'Sperm Whale Codas',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: true,
    desc: 'Created algorithm that extracts features like number of clicks and inter-click-intervals',
    // iconComponent: spermwhale,
    icon: spermwhalepng,
    techStack: [
      'Audio Signal Processing',
      {
        type: 'link',
        text: 'librosa',
        src: 'https://librosa.org/doc/latest/index.html',
      },
    ],
    project_details: [],
  },
  {
    path: 'bat-social-calls',
    short_title: 'Bat Social Calls',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: false,
    desc: 'Exploring ultrasonic social calls during flight of big brown bats',
    // iconComponent: bat,
    icon: batPng,
    techStack: [
      'Audio Signal Processing',
      {
        type: 'link',
        text: 'librosa',
        src: 'https://librosa.org/doc/latest/index.html',
      },
    ],
    project_details: [],
  },
  {
    path: 'chicken-vocalizations',
    short_title: 'Chicken Vocalizations',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: true,
    featured: false,
    desc: 'Documenting chicken sound patterns',
    // iconComponent: chickenIcon,
    icon: chicken,
    techStack: [
      'Audio Signal Processing',
      {
        type: 'link',
        text: 'librosa',
        src: 'https://librosa.org/doc/latest/index.html',
      },
    ],
    project_details: [],
  },
  {
    path: 'plant-sound',
    short_title: 'Plant Sound',
    title: '',
    date: '',
    topics: [TopicNames.BIOACOUSTICS],
    visible: false,
    featured: false,
    desc: 'Exploring ultrasonic \'popping\' of distressed veggies',
    // iconComponent: plant,
    icon: plantPng,
    techStack: [
      'Audio Signal Processing',
      {
        type: 'link',
        text: 'librosa',
        src: 'https://librosa.org/doc/latest/index.html',
      },
    ],
    project_details: [],
  },
  {
    path: 'frog-identifier',
    short_title: 'Frog Identifier',
    title: '',
    date: '',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: false,
    desc: 'Fine-tuned an image recognition model to identify species',
    // iconComponent: frog,
    icon: frogpng,
    techStack: [
      'Neural networks',
      {
        type: 'link',
        text: 'fast.ai',
        src: 'https://www.fast.ai/',
      },
    ],
    project_details: [],
  },
  {
    path: 'voice-detection',
    short_title: 'Voice Detection',
    title: '',
    date: '',
    topics: [TopicNames.MACHINELEARNING, TopicNames.WEBAPPDEVELOPMENT],
    visible: true,
    featured: false,
    desc: 'Comparing algorithms that detect speech',
    iconComponent: people_talking,
    techStack: [
      'Voice Activity Detection (VAD)',
      'Neural networks',
    ],
    project_details: [],
  },
  {
    path: 'speech-recognition',
    short_title: 'Speech Recognition',
    title: '',
    date: '',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: true,
    desc: 'Fine-tuned a neural network for accent classification',
    // iconComponent: asr,
    icon: asrPng,
    techStack: [
      {
        type: 'link',
        text: 'HuggingFace Transformers',
        src: 'https://huggingface.co/',
      },
      {
        type: 'link',
        text: 'DistilHuBERT',
        src: 'https://huggingface.co/ntu-spml/distilhubert',
      },
    ],
    project_details: [],
  },
  {
    path: 'danceability',
    short_title: 'Danceability',
    title: '',
    date: '',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: false,
    desc: 'Trained models to predict the danceability of songs',
    //iconComponent: music,
    iconComponent: dancing,
    techStack: [
      'Traditional Machine Learning',
      {
        type: 'link',
        text: 'scikit-learn',
        src: 'https://scikit-learn.org/stable/index.html',
      },
    ],
    project_details: [],
  },
  {
    path: 'diabetes-classifier',
    short_title: 'Diabetes Classifier',
    title: '',
    date: '',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: false,
    desc: 'Trained models to predict hospital readmission',
    // iconComponent: medical,
    iconComponent: hospitalization,
    techStack: [
      'Traditional Machine Learning',
      {
        type: 'link',
        text: 'scikit-learn',
        src: 'https://scikit-learn.org/stable/index.html',
      },
    ],
    project_details: [],
  },
  {
    path: 'topic-modeling',
    short_title: 'Topic Modeling',
    title: 'Topic Modeling with Dear Abby Questions',
    date: 'February 2024',
    topics: [TopicNames.MACHINELEARNING],
    visible: true,
    featured: false,
    desc: 'Explored underlying topics in 20,000 Dear Abby questions',
    //iconComponent: news,
    icon: dearabby,
    techStack: [
      'Natural Language Processing',
      {
        type: 'link',
        text: 'Natural Language Toolkit',
        src: 'https://www.nltk.org/',
      },
    ],
    project_details: [
      {type: 'h2', text: 'Goal'},
      {type: 'div', className: 'align-row', elements: [
        {type: 'p', text: 'I used unsupervised machine learning to explore underlying topics in 20,000 Dear Abby questions from 1985-2017. This involved cleaning and preparing the data using natural language processing techniques like tokenization and lemmatization. Then I used topic modeling algorithms including Latent Dirichlet Allocation (LDA) and Non-negative matrix factorization (NMF) to generate underlying topics from the data.'},
        {type: 'img', src: dearabby, alt: ''},
      ]},
      {type: 'img', src: dear_abby_word_cloud, alt: 'A word cloud with the largest words being year, time, husband, friend, mother, love, old, people, children, family, marry, etc.', className: 'medium-large-img'},
      {type: 'h2', text: 'Methods'},
      {
        type: 'TechStack',
        techList: ['nltk', 'scikitlearn', 'jupyterLab'],
      },
      {type: 'h3', text: 'Data Preparation Steps'},
      {
        type: 'ol', 
        elements: [
          {type: 'text', text: 'Expanded contractions, removed symbols, punctuation, numbers, and some content-specific phrases such as copyright or booklet information'},
          {type: 'text', text: 'Tokenized and lemmatized the data'},
          {type: 'text', text: 'Removed stopwords from the data such as generic words as well as content-specific words like "feel", "say", "go", "dear", "abby"'},
          {type: 'text', text: 'Created a dictionary and a term-document frequency corpus'},
          {type: 'text', text: 'Generated coherence scores which indicated that the ideal number of topics could be 1, 2, 4, 5, or 21'},
        ]
      },
      {
        type: 'DisclosurePanel',
        title: 'Example of original and cleaned data (click for details):',
        elements: [
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
      {type: 'h3', text: 'Topic Modeling with Non-Negative Matrix Factorization (NMF)'},
      {type: 'p', text: 'Since Non-Negative Matrix Factorization (NMF) assumes each question belongs to only 1 topic, the results seemed less repetitive and more interesting compared to LDA in this project. I also appreciated having the algorithm to pull out more topics (21) rather than fewer (4), so I\'ll highlight these results.'},
      {
        type: 'DisclosurePanel',
        title: '21 Topics generated by NMF (click to see all topics):',
        elements: [
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
        title: '5 Topics generated by LDA (click to see all topics):',
        elements: [
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
      {type: 'img', src: dear_abby_lda_5, alt: '', className: 'medium-large-img'}, // TODO
      {type: 'h2', text: 'Next Steps'},
      {type: 'p', text: 'Future directions include modeling how topics may have changed over time from 1985-2017 and identifying trends. Also, there\'s always more data cleaning to do. While I excluded some column-related phrasing and words in the first pass, I discovered that some logistical info was still left in and affected some of the topics, so more rigorous data cleaning could improve results. I\'d also like to explore Latent Semantic Analysis (LSA) and other topic modeling algorithms.',},
      {type: 'h2', text: 'Sources'},
      {
        type: 'ul',
        elements: [
          {type: 'a', text: 'pyLDAvis', href: 'https://pyldavis.readthedocs.io/en/latest/readme.html'},
          {type: 'a', text: 'NMF from scikit-learn', href: 'https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html'},
          {type: 'a', href: 'https://www.kaggle.com/datasets/thedevastator/american-anxieties-dear-abby-s-questions', text: 'American Anxieties: Dear Abby\'s Questions 20,000 Questions to Dear Abby: Insights on American Anxieties By Kelly Garrett'},
        ]
      },
      
      // TODO - add link to on LDA and NMF
      
    ],
  },
  {
    path: 'algorithm-ocean',
    short_title: 'Algorithm Ocean',
    title: '',
    date: '',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    visible: true,
    featured: false,
    desc: 'Web app to teach students sorting algorithms with an under-the-sea theme',
    iconComponent: anemone,
    techStack: [
      {
        type: 'link',
        text: 'React',
        src: 'https://react.dev/',
      },
      {
        type: 'link',
        text: 'TypeScript',
        src: 'https://www.typescriptlang.org/',
      },
    ],
    project_details: [],
  },
  {
    path: 'i-ready',
    short_title: 'i-Ready',
    title: '',
    date: '',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    visible: true,
    featured: false,
    desc: 'Math and literacy programs for kids at Curriculum Associates',
    // iconComponent: chickenIcon,
    icon: iready,
    techStack: [
      {
        type: 'link',
        text: 'React',
        src: 'https://react.dev/',
      },
      {
        type: 'link',
        text: 'Nodejs',
        src: 'https://nodejs.org/en',
      },
    ],
    project_details: [],
  },
  {
    path: 'speech-app',
    short_title: 'Speech App',
    title: '',
    date: '',
    topics: [TopicNames.WEBAPPDEVELOPMENT],
    visible: true,
    featured: true,
    desc: 'A tool to input audio and display phonemic transcriptions and data',
    iconComponent: mic,
    techStack: [
      {
        type: 'link',
        text: 'React',
        src: 'https://react.dev/',
      },
      {
        type: 'link',
        text: 'TypeScript',
        src: 'https://www.typescriptlang.org/',
      },
    ],
    project_details: [],
  },
];

export const projectPaths = projects.map(project => project.path);

// Tech stack data for rendering tech stack with images on project details pages
export const techStackData = [
  // data science libraries
  {
    type: 'nltk',
    name: 'Natural Language Toolkit',
    iconComponent: nltk,
  },
  {
    type: 'scikitlearn',
    name: '',
    iconComponent: '',
  },
  {
    type: 'skopt',
    name: '',
    iconComponent: '',
  },
  /*
  librosa: {
    name: '',
    iconComponent: '',
  },

  // neural network libraries
  fastai: {
    name: '',
    iconComponent: '',
  },
  huggingface: {
    name: '',
    iconComponent: '',
  },
  torch: {
    name: '',
    iconComponent: '',
  },

  // front-end technologies
  react: {
    name: '',
    iconComponent: '',
  },
  nodejs: {
    name: '',
    iconComponent: '',
  },
  vite: {
    name: '',
    iconComponent: '',
  },
  webpack: {
    name: '',
    iconComponent: '',
  },

  // environments
  vsCode: {
    name: '',
    iconComponent: '',
  },
  jupyterLab: {
    name: '',
    iconComponent: '',
  },

  // languages
  typescript: {
    name: '',
    iconComponent: '',
  },
  python: {
    name: '',
    iconComponent: '',
  },
  javascript: {
    name: '',
    iconComponent: '',
  },
  */
];