# Rubio Digital Portfolio 2025

## Basic setup instructions
To run locally:
1. `cd ui`
2. `nvm use`
3. `npm run dev`
4. Go to http://localhost:5173/digital-portfolio/

To update:
1. `git status`
2. if needed: `git add file_name`
3. `git commit -am "commit message"`
4. `git push origin main` Or optionally create new branch for a PR

## How to add a new project
All the content in this portfolio is added to a data file and then dynamically rendered and formatted according to predefined components. This makes it easy to extend, as new projects can be easily added and automatically show up, and details about the project can be easily assembled.

1.	Go to `/ui/src/data/portfolioData` and in `const projects` add a new object for your project's data:

```
  {
    path: 'frog-identifier',
    short_title: 'Frog Identifier', // Short title for projectCard
    title: 'Frog Identifier', // Longer title on Project Description page
    date: 'January 2025',
    topics: [TopicNames. BIOACOUSTICS, TopicNames.MACHINELEARNING, TopicNames. WEBAPPDEVELOPMENT], // choose 1-3 categories
    visible: true, // update to true when your done so it shows up in the list of projects by topic
    featured: false, // update to true if you want it to be listed on the home page
    desc: 'Fine-tuned an image recognition model to identify species', // Longer description for the projectCard. Try to keep under 12 words.
    mainImage: {
      type: '',
      src: '',
      alt: '',
    },
    projectCardTechStack: [],
    project_details: [],
  },
```

2.	Save and check in the browser. The projectCard for your project should show up on the project page for the topic you listed. When you click on it, it should take you to a ProjectDetails page with the title displayed 

3.	Find an image that will represent your project on its projectCard. Save it as a png or svg that is 250x150px and put in `ui/src/assets/` in the applicable folder by type.

4.	Import it in your portfolioData like this: `import frog from '@/assets/png/frog.png';`

5.	In your projectsList object, fill out the mainImage properties:

```
    mainImage: {
      type: 'png', // The type of image
      src: frog, // The imported file
      alt: 'A green frog', // alt text for screen reader users
    },
```


6.	In your projectsList object, fill out the projectCardTechStack array which will make the applicable icons appear on the projectCard. For a list of all possible techStack items, see `ui/src/data/portfolioData`: `const techStackData` and use the `type` property
projectCardTechStack: ['fastai']
  - Note: to add new technologies to the techStackData, download logo's with a large name for the tech and save as 100x100px png or svg file in `ui/src/assets/[file_type]/` and add a new object to the techStackData array in this format:
```
import typescript from '@/assets/svg/typescript.svg?react';
  {
    type: 'typescript', // lowercase name without spaces
    name: 'TypeScript', // full name
    iconComponent: typescript, // icon imported
    href: 'https://www.typescriptlang.org/',
  }
```

7.	In your projectsList object, start adding ProjectDetailComponents to the projectDetails array which will be displayed and automatically formatted on the projectDetails page.  Simple ProjectDetailComponents to add include things like:
```
project_details: [
  {type: 'h2', text: 'Goals'},
  {type: 'text', text: 'I did a '},
  {type: 'a', text: 'Hugging Face', href: 'https://huggingface.co/'},
  {type: 'text', text: ' project'},
  {type: 'p', text: 'I learned about: '},
  {
    type: 'ol', elements: [
    [{type: 'text', text: 'Audio'}],
    [
      {type: 'a', text: 'Frogs', href: 'https://en.wikipedia.org/wiki/Frog'},
      {type: 'text', text: ' in Massachusetts'}
    ],
  },
],
```
8.	Composite ProjectDetailComponents that are pre-formatted include things like:
    - `type="GoalAndGithub"` has a nice 2-column format which displays text about the project on the left wider column, and a thinner column with a github icon/button. It has a elements property for the text elements on the right, and an href property for a github link.
    - `type="TechStack"` takes in a techList and displays the relevant icons. Make sure the listed tech is in the techStackData object with the saved icon, name, and href so that it shows up correctly
    - `type="table"` has a property for headers (one-dimensional array of strings), and a property for rows (two-dimensional array of strings, where first dimension is for each row, and second dimension is for each column)
    - `type="DisclosurePanel"` creates a clickable disclosure panel so users can show or minimize content. A property for title takes in a text element such as an h3, and children is an array of elements. 
    - `type="div"` creates a div that holds child components and takes in a className so you can style it. Make sure to add the css in `ui/src/index.css`
    - `type="img"` shows an image and requires a src, alt, and className
    - See more types in `ui/src/types/portfolioTypes`: `ProjectDetailComponent`
9.	To add a demonstration that takes in visual or audio input, queries a backend API, and returns a results object, add a ProjectDetailComponent of `type="DemoBoard"`:
```
{
  type: 'DemoBoard',
  input: {
    types: ['audio', 'image'], // Use one or both types of input
  },
  requests: [],
  results: {}
},
```

10.	 Use the requests array to add requests to back ends. For instance, to query HuggingFace, use this:

```
        requests: [
          {
            type: 'gradio',
            huggingFaceClient: 'kaysrubio/speech_transcribe_phonemes_and_accent',
            huggingFaceApi: '/transcribe_and_classify_speech_1',
            key: '682d2362-894c-800c-af30-a4c56b7f074b'
          }
        ],
```

  - Note: The hugging face client and api_name can be found by going to the hugging face space and scrolling to the bottom, and click on 'Use via API', e.g., https://huggingface.co/spaces/kaysrubio/transcribe_sperm_whale_coda

11.	The results has a tabs property that provides a list of results to show, descriptions of what these results mean (such as what ML models provided them) and the exact path to find the result in the data provided from the back end. A single tab can show results from more than 1 model. 

```
results: {
  tabs: [
    {
      type: 'transcription',
      displayText: 'Transcription', // The name of the type of result that will be displayed as a tab name in the Results box
      icon: transcription, // Optional to add a tiny icon, such as a 100x100px png. Make sure to import it.
      resultsForEachModel: [ // Each object listed in here will be it's own disclosure panel in the same tab
        {
          description: [
            {type: 'text', text: 'Model: '},
            {type: 'a', href: 'https://huggingface.co/openai/whisper-base.en', text: 'openai/whisper-base.end'},
            {type: 'text', text: '. Trained on 680k hours of labelled data'},
          ],
          results: [ // This is the contents inside the DisclosurePanel. You can add more information here in regular text, paragraph, etc. elements, as well as a textFromPath
            {type: 'textFromPath', path: 'data[0][0].transcription'}, // make sure the path matches the exact location in the data returned from your backend, otherwise it won't be able to find it and will display an error message instead.
          ],
        }
      ]
    },
  ]
}
```

12.	Inside the DemoBoard object, you can also add a sampleAudio or sampleImages property for preloaded input, which should have the location to a .wav, .png, or .jpg file, some displayText for the dropdown, and you can include sampleResults which should be an exactly copy of what your back end returns, formatted exactly the same way. If you include sample results, the app won't query the backend, but will instead display the sampleResults (saves on time and repetitive requests). Make sure to test that the results display correctly.  

13. If your result involves highlighting regions on the waveform, follow these steps:

  -  Make sure your backend returns results in this format somewhere

```
{
  "regions": [
    {"start": 0.1, "end": 0.3, "content": "insertion", "type": "insertion"}, // optional content and type properties
    {"start": 6, "end": 9},
  ],
},
```

  - In your portfolio data, add regionSetup information to your results. Example using random colors to create regions on the waveform

```
results: {
  regionSetup: [
    {
      displayText: 'NameOfGroup',
      default: 'userToggleStartOn' | 'userToggleStartOff' | 'on' | 'off'
      path: 'data[0].regions', // path to the object thatholds the regions in your backend result
      defaultColor: 'rgba(0, 123, 255, 0.3)',
      useRandomColors: true,
    },
  ]
}
```

  - Example using color mapping based on content:

```
results: {
  regionSetup: [
    {
      displayText: 'NameOfGroup',
      default: 'userToggleStartOn',
      path: 'data[0].regions',
      colorMappings: [
        {content: '1+1+3', color: 'rgba(0, 123, 255, 0.3)'},
      ],
      defaultColor: 'rgba(255, 162, 0, 0.3)',
      useRandomColors: false,
    },
  ]
}
```

  - Example using a default color for all the whole group of regions
  
```
results: {
  regionSetup: [
    {
      displayText: 'NameOfGroup',
      default: 'userToggleStartOn',
      path: 'data[0].regions',
      defaultColor: 'rgba(0, 123, 255, 0.3)',
      useRandomColors: false,
    },
  ]
}

14. If your result involves drawing line graphs on the waveform or spectrogram, follow these steps:

For a single line where the points are spread out evenly across the entire waveform/spectrogram, add this setup:

```
results: {
  lineOverlaySetup: [
    {
      type: 'line-spread-points',
      overlay: 'waveform' | 'spectrogram',
      path: 'data[0].line_name', // example path name to link to data from backend
      values: [], // leave this empty
      max: 1, // maximum possible value in your data
      min: 0, // min possible value in your data
  normalized_min?: // relates to where you want to draw the line on the waveform for the y-axis. Use 0.5 if you want the line to appear only on the top half (best for waveforms), or 0 if you want the min value of the line to reach the bottom (e.g, best for spectrograms)
  normalized_max?: // relates to where you want to draw the line on the waveform for the y-axis. Use 1 if you want the max value of the line to appear at the top of the waveform/spectrogram
      color: '#ff7975',
      displayText: 'Line Name',
      default: 'userToggleStartOn' | 'userToggleStartOff' | 'on' | 'off',
    },
  ],
}
```

In the results from your backend, make sure you have this:

```
{ line_name: [2, 3, 6, 100, 133, 0...] }
```

For a line that's broken into time-stamped sections, add this setup:

```
results: {
  lineOverlaySetup: [
    {
      type: 'time-stamped-lines',
      overlay: 'waveform' | 'spectrogram',
      path: 'data[0].line_name,
      interval_ms: 1, // The distance between each point in ms
      min: 0,
      max: 1,
      sections: [], // leave as an empty array
      color: '#00bcee',
      displayText: 'Line Name',
      default: 'userToggleStartOn' | 'userToggleStartOff' | 'on' | 'off',
    },
  ],
}
```

Make sure your results include the results in this format:

```
line_name: [
  {
    start_ms: 500,
    values: [0.1, 0.2, ...],
  },
],
```

For a band, such as mean/standard deviation or spectral centroid/bandwidth, add this setup:

```
results: {
  lineOverlaySetup: [
    {
      type: 'band',
      overlay: 'spectrogram',
      pathToSpreadValues: 'data[0].spectral_bandwidth',
      pathToCenterValues: 'data[0].spectral_centroid',
      proportionToAdd: 0.5, // This defines the upper bound. For instance, use 1 for a standard deviation, so upper bound is mean + 1 SD and lower bound is mean - 1 SD. Spectral bandwidth can be 0.5 or 1.
      upperValues: [], // leave empty, populated by program
      lowerValues: [], // leave empty, populated by program
      min: 0,
      max: 4000,
      color: 'rgba(255, 255, 255, 0.6)', // example default color, can leave this off
      displayText: 'Spectral Bandwidth',
      default: 'userToggleStartOn',
      moreInfo: '', // Optional to include more info on this band
    },
  ],
}
```

Note: When you include a band and a center line, both must be included, and it's helpful for visual layering
to place the band setup BEFORE the center line setup