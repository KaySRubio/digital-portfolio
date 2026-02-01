import type { AllTags } from '../types/vocabTypes';

export const knowledgelevels = [
    { value: -1, color: "white"},
    { value: 0, color: "red"},
    { value: 1, color: "yellow"},
    { value: 2, color: "green"},
];


export const defaultScienceCategories = [
    'sound',
    'audio_signal_processing',
    'python',
    'statistics',
    'machine_learning'
]

export const defaultTags: AllTags = {
    machine_learning: {
        subtopics: [
            'neural_networks',
            'traditional_machine_learning',
            'transformers',
            'natural_langauge_processing',
            'image_recognition',
            'reinforcement_learning',
            'generative_adversarial_networks',
            'automatic_speech_recognition',
            'data_science',
        ],
        lifecycle: [
            'problem_definition',
            'gathering_data',
            'data_preparation',
            'data_exploration',
            'data_feature_engineering',
            'model_selection',
            'model_training',
            'model_fine_tuning',
            'model_tuning_and_evaluation',
            'model_deployment',
            'model_maintenance',
        ],
        other: [
            'computing_resources',
            'tools_and_libraries',
            'security',
            'ethics',
            'history',
        ]
    },
}

export const defaultSpanishCategories = [
    'uncategorized',
    'animals',
    'household',
    'manmade stuff outside the home',
    'feelings',
    'people\'s personality',
    'nature',
    'talking about location',
    'connecty words',
    'adjectives to describe things',
    'physical descriptions of people',
    'talking about location',
    'talking about time',
    'religion',
    'travel',
    'food',
    'activities',
    'careers',
    'family',
    'science',
    'school and education',
    'nationalities and countries',
    'numbers',
    'colors',
    'medical and health',
    'verb phrases',
    'music',
    'work, office, business',
    'politics and government',
    'body parts',
    'shapes',
    'alphabet',
    'art',
    'clothes and accessories',
    'expressions',
]

export const sampleVocabData = 
  [
    {
        id: "perro",
        category: "animals",
        term: "el perro",
        definition: "dog",
        knowledgelevel: 0
    },
    {
        id: "vaca",
        category: "animals",
        term: "una vaca",
        definition: "cow",
        knowledgelevel: 1
    },
    {
        id: "león",
        category: "animals",
        term: "un león",
        definition: "lion",
        knowledgelevel: 2
    },
    {
        id: "actualidad",
        category: "uncategorized",
        term: "la actualidad",
        definition: " the present",
        knowledgelevel: 0
    },
    {
        id: "carnívoros",
        category: "uncategorized",
        term: "carnívoros",
        definition: "carnivores",
        knowledgelevel: 0
    },
    {
        id: "estructura",
        category: "uncategorized",
        term: "la estructura",
        definition: " the structure",
        knowledgelevel: 0
    },
    {
        id: "caballo",
        category: "animals",
        term: "un caballo",
        definition: "horse",
        knowledgelevel: 3
    },
    {
        id: "cachorrito",
        category: "animals",
        term: "un cachorrito",
        definition: "puppy",
        knowledgelevel: 1
    },
    {
        id: "cama",
        category: "household",
        term: "la cama",
        definition: "the bed",
        knowledgelevel: 2
    },
    {
        id: "géiser",
        category: "uncategorized",
        term: "géiser- (hay-ser)",
        definition: "  géiser",
        knowledgelevel: 0
    },
    {
        id: "herradura",
        category: "uncategorized",
        term: "herradura",
        definition: "a horsehoe",
        knowledgelevel: 0
    },
    {
        id: "hámster",
        category: "animals",
        term: "el hámster",
        definition: "hamster",
        knowledgelevel: 1
    },
    {
        id: "honrado",
        category: "uncategorized",
        term: "honrado",
        definition: "honored",
        knowledgelevel: 0
    },
    {
        id: "jaque_mate",
        category: "uncategorized",
        term: "el jaque mate",
        definition: "check mate",
        knowledgelevel: 0
    },
    {
        id: "metódica",
        category: "uncategorized",
        term: "metódica",
        definition: "methodical",
        knowledgelevel: 0
    },
    {
        id: "profesiones",
        category: "uncategorized",
        term: "los profesiones",
        definition: " the professions",
        knowledgelevel: 0
    },
    {
        id: "puerco",
        category: "uncategorized",
        term: "un puerco",
        definition: "a pig",
        knowledgelevel: 0
    },
    {
        id: "pulso",
        category: "uncategorized",
        term: "el pulso",
        definition: "the pulse",
        knowledgelevel: 0
    },
    {
        id: "reflexiones",
        category: "uncategorized",
        term: "los reflexiones",
        definition: "the reflextions",
        knowledgelevel: 0
    },
    {
        id: "resumen",
        category: "uncategorized",
        term: "un resumen",
        definition: "  a summary",
        knowledgelevel: 0
    },
    {
        id: "trago",
        category: "uncategorized",
        term: "un trago",
        definition: "a drink, a swallow",
        knowledgelevel: 0
    },
    {
        id: "a_base",
        category: "uncategorized",
        term: "a base (hecho a base de…)",
        definition: "based on or made from",
        knowledgelevel: 0
    },
    {
        id: "a_cambio_de_esto",
        category: "uncategorized",
        term: "a cambio de esto",
        definition: "  in exchange for this",
        knowledgelevel: 0
    },
    {
        id: "a_cargo",
        category: "uncategorized",
        term: "a cargo",
        definition: "  in charge",
        knowledgelevel: 0
    },
    {
        id: "a_fin_de",
        category: "uncategorized",
        term: "a fin de",
        definition: "in order to, for the purpose of",
        knowledgelevel: 0
    },
    {
        id: "a_gusto",
        category: "uncategorized",
        term: "a gusto vs. con gusto",
        definition: "  at ease vs. with pleasure",
        knowledgelevel: 0
    },
    {
        id: "a_la_moda",
        category: "uncategorized",
        term: "a la moda",
        definition: "fashionable",
        knowledgelevel: 0
    },
    {
        id: "a_largo_plazo",
        category: "uncategorized",
        term: "a largo plazo",
        definition: "long-term",
        knowledgelevel: 0
    },
    {
        id: "a_mediados_del_siglo_diecinueve",
        category: "uncategorized",
        term: "a mediados del siglo diecinueve",
        definition: "  mid 19th century",
        knowledgelevel: 0
    },
    {
        id: "a_si_mismo",
        category: "uncategorized",
        term: "a si mismo",
        definition: "in addition",
        knowledgelevel: 0
    },
    {
        id: "a_tener_en_cuenta",
        category: "uncategorized",
        term: "a tener en cuenta",
        definition: "to take into account",
        knowledgelevel: 0
    },
    {
        id: "a_tiempo_completo",
        category: "uncategorized",
        term: "a tiempo completo",
        definition: "full time",
        knowledgelevel: 0
    },
    {
        id: "abecedario",
        category: "uncategorized",
        term: "el abecedario",
        definition: "the alphabet",
        knowledgelevel: 0
    },
    {
        id: "abertura",
        category: "uncategorized",
        term: "una abertura",
        definition: "an opening",
        knowledgelevel: 0
    },
    {
        id: "abreviatura",
        category: "uncategorized",
        term: "la abreviatura",
        definition: "the abreviation ",
        knowledgelevel: 0
    },
    {
        id: "acalorado",
        category: "uncategorized",
        term: "acalorado",
        definition: "heated",
        knowledgelevel: 0
    },
    {
        id: "ácaro",
        category: "uncategorized",
        term: "un ácaro",
        definition: "a mite (insect)",
        knowledgelevel: 0
    },
    {
        id: "acceso",
        category: "uncategorized",
        term: "un acceso",
        definition: "an access, an entry",
        knowledgelevel: 0
    },
    {
        id: "acogedora",
        category: "uncategorized",
        term: "acogedora (adj)",
        definition: "cozy",
        knowledgelevel: 0
    },
    {
        id: "acompañante",
        category: "uncategorized",
        term: "un acompañante",
        definition: "a companion",
        knowledgelevel: 0
    },
    {
        id: "acorde",
        category: "uncategorized",
        term: "un acorde",
        definition: "  a cord like on a guitar",
        knowledgelevel: 0
    },
    {
        id: "acostada",
        category: "uncategorized",
        term: "acostada",
        definition: "  lying down",
        knowledgelevel: 0
    },
    {
        id: "activo",
        category: "uncategorized",
        term: "activo (adj)",
        definition: "active",
        knowledgelevel: 0
    },
    {
        id: "actual",
        category: "uncategorized",
        term: "actual (adj)",
        definition: "real and from the present time",
        knowledgelevel: 0
    },
    {
        id: "acústico",
        category: "uncategorized",
        term: "acústico",
        definition: "acoustic",
        knowledgelevel: 0
    },
    {
        id: "ademán",
        category: "uncategorized",
        term: "un ademán",
        definition: "a gesture",
        knowledgelevel: 0
    },
    {
        id: "adiestrador",
        category: "uncategorized",
        term: "un adiestrador",
        definition: "a trainer",
        knowledgelevel: 0
    },
    {
        id: "adolorido",
        category: "uncategorized",
        term: "adolorido (adj)",
        definition: "sore",
        knowledgelevel: 0
    },
    {
        id: "adormilamiento",
        category: "uncategorized",
        term: "adormilamiento",
        definition: "drowsiness",
        knowledgelevel: 0
    },
    {
        id: "adversidad",
        category: "uncategorized",
        term: "una adversidad",
        definition: "an adversity",
        knowledgelevel: 0
    },
    {
        id: "afán",
        category: "uncategorized",
        term: "el afán",
        definition: "the eagerness",
        knowledgelevel: 0
    },
    {
        id: "afanosa",
        category: "uncategorized",
        term: "afanosa (adj)",
        definition: "eager",
        knowledgelevel: 0
    },
    {
        id: "afectuosamente",
        category: "uncategorized",
        term: "afectuosamente (adj)",
        definition: "affectionately",
        knowledgelevel: 0
    },
    {
        id: "afición",
        category: "uncategorized",
        term: "una afición",
        definition: "a hobby",
        knowledgelevel: 0
    },
    {
        id: "afluentes",
        category: "uncategorized",
        term: "los afluentes",
        definition: "the tributaries off a main river",
        knowledgelevel: 0
    },
    {
        id: "agentes_de_bienes_raíces",
        category: "uncategorized",
        term: "agentes de bienes raíces",
        definition: "real estate agents",
        knowledgelevel: 0
    },
    {
        id: "agotador",
        category: "uncategorized",
        term: "agotador (adj)",
        definition: "exhausting",
        knowledgelevel: 0
    },
    {
        id: "agua_potable",
        category: "uncategorized",
        term: "agua potable",
        definition: "drinking water",
        knowledgelevel: 0
    },
    {
        id: "agujero",
        category: "uncategorized",
        term: "agujero vs oyó",
        definition: "  pinhole vs bigger holes",
        knowledgelevel: 0
    },
    {
        id: "aislante",
        category: "uncategorized",
        term: "aislante (adj)",
        definition: "insulating",
        knowledgelevel: 0
    },
    {
        id: "al_azar",
        category: "uncategorized",
        term: "al azar",
        definition: "at random",
        knowledgelevel: 0
    },
    {
        id: "al_día_de_hoy",
        category: "uncategorized",
        term: "al día de hoy",
        definition: "to this day",
        knowledgelevel: 0
    },
    {
        id: "al_fin_y_al_cabo",
        category: "uncategorized",
        term: "al fin y al cabo",
        definition: "  in the end",
        knowledgelevel: 0
    },
    {
        id: "al_unísono",
        category: "uncategorized",
        term: "al unísono",
        definition: "  in unison",
        knowledgelevel: 0
    },
    {
        id: "alacena",
        category: "uncategorized",
        term: "una alacena",
        definition: "a cupboard",
        knowledgelevel: 0
    },
    {
        id: "albañil",
        category: "uncategorized",
        term: "albañil",
        definition: "  bricklayer or mason",
        knowledgelevel: 0
    },
    {
        id: "alcantarilla",
        category: "uncategorized",
        term: "la alcantarilla",
        definition: "the sewer",
        knowledgelevel: 0
    },
    {
        id: "alfil",
        category: "uncategorized",
        term: "un alfil",
        definition: "a bishop",
        knowledgelevel: 0
    },
    {
        id: "alineación",
        category: "uncategorized",
        term: "alineación",
        definition: "alignment",
        knowledgelevel: 0
    },
    {
        id: "almacén",
        category: "uncategorized",
        term: "un almacén",
        definition: "a store, warehouse",
        knowledgelevel: 0
    },
    {
        id: "almacenes",
        category: "uncategorized",
        term: "almacenes",
        definition: "warehouses",
        knowledgelevel: 0
    },
    {
        id: "alta_frecuencia",
        category: "uncategorized",
        term: "alta frecuencia",
        definition: "high frequency",
        knowledgelevel: 0
    },
    {
        id: "alta_tecnológia",
        category: "uncategorized",
        term: "alta tecnológia",
        definition: "high tech",
        knowledgelevel: 0
    },
    {
        id: "altamar",
        category: "uncategorized",
        term: "altamar",
        definition: "high seas",
        knowledgelevel: 0
    },
    {
        id: "alterada",
        category: "uncategorized",
        term: "alterada (adj)",
        definition: " altered,  disturbed",
        knowledgelevel: 0
    },
    {
        id: "altoparlante",
        category: "uncategorized",
        term: "un altoparlante",
        definition: "a loudspeaker",
        knowledgelevel: 0
    },
    {
        id: "alumno",
        category: "uncategorized",
        term: "un alumno",
        definition: "a student, pupil",
        knowledgelevel: 0
    },
    {
        id: "ambientalista",
        category: "uncategorized",
        term: "una ambientalista",
        definition: "  an environmentalist",
        knowledgelevel: 0
    },
    {
        id: "amenazador",
        category: "uncategorized",
        term: "amenazador (adj)",
        definition: "threatening",
        knowledgelevel: 0
    },
    {
        id: "amplia",
        category: "uncategorized",
        term: "amplia",
        definition: "wide",
        knowledgelevel: 0
    },
    {
        id: "ampolla",
        category: "uncategorized",
        term: "una ampolla",
        definition: "a blister",
        knowledgelevel: 0
    },
    {
        id: "andanzas",
        category: "uncategorized",
        term: "las andanzas",
        definition: "the wanderings",
        knowledgelevel: 0
    },
    {
        id: "andar_suelto",
        category: "uncategorized",
        term: "andar suelto",
        definition: "to be loose like a dog of leash running around",
        knowledgelevel: 0
    },
    {
        id: "anfibios",
        category: "uncategorized",
        term: "anfibios",
        definition: "amphibians",
        knowledgelevel: 0
    },
    {
        id: "anotar_un_gol",
        category: "uncategorized",
        term: "anotar un gol",
        definition: "to score a goal",
        knowledgelevel: 0
    },
    {
        id: "ante",
        category: "uncategorized",
        term: "ante (2)",
        definition: "in view of, OR before",
        knowledgelevel: 0
    },
    {
        id: "ante_todo",
        category: "uncategorized",
        term: "ante todo",
        definition: "first of all",
        knowledgelevel: 0
    },
    {
        id: "antes_de_la",
        category: "uncategorized",
        term: "antes de la",
        definition: " era común (a.e.c.)",
        knowledgelevel: 0
    },
    {
        id: "antifaz",
        category: "uncategorized",
        term: "antifaz",
        definition: "mask that’s just over the eyes",
        knowledgelevel: 0
    },
    {
        id: "antigüedad",
        category: "uncategorized",
        term: "la antigüedad",
        definition: "the antique",
        knowledgelevel: 0
    },
    {
        id: "antorcha",
        category: "uncategorized",
        term: "una antorcha",
        definition: "a torch",
        knowledgelevel: 0
    },
    {
        id: "aparente",
        category: "uncategorized",
        term: "aparente",
        definition: "apparent",
        knowledgelevel: 0
    },
    {
        id: "aparición",
        category: "uncategorized",
        term: "la aparición",
        definition: "the appearance",
        knowledgelevel: 0
    },
    {
        id: "apenado",
        category: "uncategorized",
        term: "apenado (adj)",
        definition: "sorry",
        knowledgelevel: 0
    },
    {
        id: "gato",
        category: "animals",
        term: "el gato",
        definition: "cat",
        knowledgelevel: 1
    },
    {
        id: "apicultora",
        category: "uncategorized",
        term: "una apicultora",
        definition: "a beekeeper",
        knowledgelevel: 0
    },
    {
        id: "aplicada",
        category: "uncategorized",
        term: "aplicada",
        definition: "  applied like a person who applied themself well to a task",
        knowledgelevel: 0
    },
    {
        id: "aporte",
        category: "uncategorized",
        term: "un aporte",
        definition: "an input",
        knowledgelevel: 0
    },
    {
        id: "aprendizaje",
        category: "uncategorized",
        term: "el aprendizaje",
        definition: " the learning",
        knowledgelevel: 0
    },
    {
        id: "aprobación",
        category: "uncategorized",
        term: "la aprobación",
        definition: "the approval",
        knowledgelevel: 0
    },
    {
        id: "apúrate",
        category: "uncategorized",
        term: "apúrate",
        definition: " hurry up",
        knowledgelevel: 0
    },
    {
        id: "árbitro",
        category: "uncategorized",
        term: "el árbitro",
        definition: "  the referree",
        knowledgelevel: 0
    },
    {
        id: "arce",
        category: "uncategorized",
        term: "un arce",
        definition: "a maple",
        knowledgelevel: 0
    },
    {
        id: "arcos",
        category: "uncategorized",
        term: "los arcos",
        definition: "  the arches  or the bow ties?",
        knowledgelevel: 0
    },
    {
        id: "arduamente",
        category: "uncategorized",
        term: "arduamente",
        definition: "  hardly",
        knowledgelevel: 0
    },
    {
        id: "arduo",
        category: "uncategorized",
        term: "arduo (adj)",
        definition: "hard",
        knowledgelevel: 0
    },
    {
        id: "arenosa",
        category: "uncategorized",
        term: "arenosa (adj)",
        definition: "sandy",
        knowledgelevel: 0
    },
    {
        id: "arpones",
        category: "uncategorized",
        term: "los arpones",
        definition: "the harpoons",
        knowledgelevel: 0
    },
    {
        id: "arrancado",
        category: "uncategorized",
        term: "arrancado",
        definition: "torn off",
        knowledgelevel: 0
    },
    {
        id: "arribo",
        category: "uncategorized",
        term: "un arribo",
        definition: "an arrival",
        knowledgelevel: 0
    },
    {
        id: "artesanía",
        category: "uncategorized",
        term: "la artesanía",
        definition: "the craft, craftmanship",
        knowledgelevel: 0
    },
    {
        id: "articulación",
        category: "uncategorized",
        term: "una articulación",
        definition: "a joint",
        knowledgelevel: 0
    },
    {
        id: "asco",
        category: "uncategorized",
        term: "un asco",
        definition: "  a disgust,  a repulsive thing",
        knowledgelevel: 0
    },
    {
        id: "asiento_delantero",
        category: "uncategorized",
        term: "el asiento delantero",
        definition: "  the front seat",
        knowledgelevel: 0
    },
    {
        id: "asimismo",
        category: "uncategorized",
        term: "asimismo",
        definition: "in addition",
        knowledgelevel: 0
    },
    {
        id: "asistente_de_vuelo",
        category: "uncategorized",
        term: "un asistente de vuelo",
        definition: "a flight attendant",
        knowledgelevel: 0
    },
    {
        id: "aspecto",
        category: "uncategorized",
        term: "aspecto",
        definition: "aspect or appearance",
        knowledgelevel: 0
    },
    {
        id: "aspirante",
        category: "uncategorized",
        term: "un aspirante",
        definition: "an applicant",
        knowledgelevel: 0
    },
    {
        id: "astucia",
        category: "uncategorized",
        term: "astucia",
        definition: "cunning",
        knowledgelevel: 0
    },
    {
        id: "asunto_es_que",
        category: "uncategorized",
        term: "el asunto es que",
        definition: "  the thing is that (expression)",
        knowledgelevel: 0
    },
    {
        id: "ataque",
        category: "uncategorized",
        term: "un ataque (2)",
        definition: "attack, stroke",
        knowledgelevel: 0
    },
    {
        id: "atareado",
        category: "uncategorized",
        term: "atareado",
        definition: "  busy",
        knowledgelevel: 0
    },
    {
        id: "atemorizada",
        category: "uncategorized",
        term: "atemorizada (adj)",
        definition: "scared",
        knowledgelevel: 0
    },
    {
        id: "atentamente",
        category: "uncategorized",
        term: "atentamente",
        definition: "sincerely, attentively",
        knowledgelevel: 0
    },
    {
        id: "aterrizaje",
        category: "uncategorized",
        term: "un aterrizaje",
        definition: "a landing",
        knowledgelevel: 0
    },
    {
        id: "atleta",
        category: "uncategorized",
        term: "una atleta",
        definition: "An athlete",
        knowledgelevel: 0
    },
    {
        id: "atónito",
        category: "uncategorized",
        term: "atónito (adj)",
        definition: "amazed",
        knowledgelevel: 0
    },
    {
        id: "atrevida",
        category: "uncategorized",
        term: "atrevida (adj)",
        definition: "daring",
        knowledgelevel: 0
    },
    {
        id: "audífono",
        category: "uncategorized",
        term: "un audífono",
        definition: "  a hearing aid",
        knowledgelevel: 0
    },
    {
        id: "auge",
        category: "uncategorized",
        term: "el auge (au-he)",
        definition: "the boom, the peak",
        knowledgelevel: 0
    },
    {
        id: "aún_así",
        category: "uncategorized",
        term: "aún así",
        definition: "even so",
        knowledgelevel: 0
    },
    {
        id: "aún_hay",
        category: "uncategorized",
        term: "aún hay",
        definition: "there is still",
        knowledgelevel: 0
    },
    {
        id: "aunque_fuera",
        category: "uncategorized",
        term: "aunque fuera",
        definition: "even if it was",
        knowledgelevel: 0
    },
    {
        id: "ausencia",
        category: "uncategorized",
        term: "la ausencia",
        definition: "the absence",
        knowledgelevel: 0
    },
    {
        id: "austral",
        category: "uncategorized",
        term: "austral (adj)",
        definition: "southern",
        knowledgelevel: 0
    },
    {
        id: "autopista",
        category: "uncategorized",
        term: "la autopista",
        definition: "the highway",
        knowledgelevel: 0
    },
    {
        id: "avance",
        category: "uncategorized",
        term: "un avance",
        definition: "an advance, a progress",
        knowledgelevel: 0
    },
    {
        id: "avena",
        category: "uncategorized",
        term: "avena",
        definition: "oatmeal",
        knowledgelevel: 0
    },
    {
        id: "azadón",
        category: "uncategorized",
        term: "un azadón",
        definition: "a hoe (gardening)",
        knowledgelevel: 0
    },
    {
        id: "baba",
        category: "uncategorized",
        term: "la baba",
        definition: "the drool/saliva",
        knowledgelevel: 0
    },
    {
        id: "bailarín",
        category: "uncategorized",
        term: "un bailarín",
        definition: "a dancer",
        knowledgelevel: 0
    },
    {
        id: "baldío",
        category: "uncategorized",
        term: "un baldío",
        definition: "a wasteland",
        knowledgelevel: 0
    },
    {
        id: "baloncesto",
        category: "uncategorized",
        term: "baloncesto",
        definition: "basketball",
        knowledgelevel: 0
    },
    {
        id: "bandeja",
        category: "uncategorized",
        term: "una bandeja",
        definition: "  a tray like for cooking",
        knowledgelevel: 0
    },
    {
        id: "bandido",
        category: "uncategorized",
        term: "un bandido",
        definition: "a bandit",
        knowledgelevel: 0
    },
    {
        id: "bando",
        category: "uncategorized",
        term: "el bando",
        definition: "  the side of a group like 1 side ina war",
        knowledgelevel: 0
    },
    {
        id: "barbilla",
        category: "uncategorized",
        term: "una barbilla",
        definition: " a chin (de una cara)",
        knowledgelevel: 0
    },
    {
        id: "barda",
        category: "uncategorized",
        term: "una barda",
        definition: "A fence",
        knowledgelevel: 0
    },
    {
        id: "barrigón",
        category: "uncategorized",
        term: "barrigón / barrigona",
        definition: "potbellied like pregnant or fat",
        knowledgelevel: 0
    },
    {
        id: "basta_con_salir",
        category: "uncategorized",
        term: "basta con salir",
        definition: "just go out",
        knowledgelevel: 0
    },
    {
        id: "bastante",
        category: "uncategorized",
        term: "bastante",
        definition: "  quite",
        knowledgelevel: 0
    },
    {
        id: "bastón",
        category: "uncategorized",
        term: "un bastón",
        definition: "  a cane",
        knowledgelevel: 0
    },
    {
        id: "bata",
        category: "uncategorized",
        term: "una bata",
        definition: "a coat",
        knowledgelevel: 0
    },
    {
        id: "batazo",
        category: "uncategorized",
        term: "un batazo",
        definition: " a hit like in beisbol",
        knowledgelevel: 0
    },
    {
        id: "batido",
        category: "uncategorized",
        term: "el batido",
        definition: " a shake or smoothie",
        knowledgelevel: 0
    },
    {
        id: "berenjena",
        category: "uncategorized",
        term: "una berenjena",
        definition: "an eggplant",
        knowledgelevel: 0
    },
    {
        id: "biberón",
        category: "uncategorized",
        term: "un biberón",
        definition: "A feeding bottle",
        knowledgelevel: 0
    },
    {
        id: "bibliotecario",
        category: "uncategorized",
        term: "el bibliotecario",
        definition: "The librarian",
        knowledgelevel: 0
    },
    {
        id: "blanco_fácil",
        category: "uncategorized",
        term: "un blanco fácil",
        definition: "An easy target",
        knowledgelevel: 0
    },
    {
        id: "bloqueador_solar",
        category: "uncategorized",
        term: "el bloqueador solar",
        definition: "sun block",
        knowledgelevel: 0
    },
    {
        id: "bohío",
        category: "uncategorized",
        term: "un bohío",
        definition: "a hut",
        knowledgelevel: 0
    },
    {
        id: "bola",
        category: "uncategorized",
        term: "una bola",
        definition: " a ball",
        knowledgelevel: 0
    },
    {
        id: "bolita",
        category: "uncategorized",
        term: "una bolita",
        definition: " a pellet ",
        knowledgelevel: 0
    },
    {
        id: "bonachón",
        category: "uncategorized",
        term: "bonachón / bonachona (adj)",
        definition: "good-natured",
        knowledgelevel: 0
    },
    {
        id: "bote_de_basura",
        category: "uncategorized",
        term: "un bote de basura",
        definition: "a trash can",
        knowledgelevel: 0
    },
    {
        id: "botín",
        category: "uncategorized",
        term: "botín",
        definition: " swag, loot, cool stuff",
        knowledgelevel: 0
    },
    {
        id: "botón",
        category: "uncategorized",
        term: "un botón",
        definition: "a button",
        knowledgelevel: 0
    },
    {
        id: "brasa",
        category: "uncategorized",
        term: "una brasa",
        definition: "  an ember",
        knowledgelevel: 0
    },
    {
        id: "brocha",
        category: "uncategorized",
        term: "una brocha",
        definition: "a brush",
        knowledgelevel: 0
    },
    {
        id: "budín",
        category: "uncategorized",
        term: "un budín",
        definition: "a pudding",
        knowledgelevel: 0
    },
    {
        id: "bujía",
        category: "uncategorized",
        term: "una bujía",
        definition: "  a spark plug",
        knowledgelevel: 0
    },
    {
        id: "buril",
        category: "uncategorized",
        term: "buril",
        definition: "  a chisel",
        knowledgelevel: 0
    },
    {
        id: "burla",
        category: "uncategorized",
        term: "burla",
        definition: "a joke",
        knowledgelevel: 0
    },
    {
        id: "burra",
        category: "uncategorized",
        term: "una burra / un burro",
        definition: " burro",
        knowledgelevel: 0
    },
    {
        id: "buzo",
        category: "uncategorized",
        term: "un buzo",
        definition: "a diver",
        knowledgelevel: 0
    },
    {
        id: "cabellera_afro",
        category: "uncategorized",
        term: "cabellera afro",
        definition: "African hair",
        knowledgelevel: 0
    },
    {
        id: "caballito_de_mar",
        category: "uncategorized",
        term: "un caballito de mar",
        definition: "sea horse",
        knowledgelevel: 0
    },
    {
        id: "cabecirrojo",
        category: "uncategorized",
        term: "cabecirrojo/cabecirroja (adj)",
        definition: "  redhead",
        knowledgelevel: 0
    },
    {
        id: "cabo",
        category: "uncategorized",
        term: "el cabo",
        definition: "the cape",
        knowledgelevel: 0
    },
    {
        id: "cacareo_de_una",
        category: "uncategorized",
        term: "un cacareo de una",
        definition: " gallina",
        knowledgelevel: 0
    },
    {
        id: "cacerola",
        category: "uncategorized",
        term: "una cacerola",
        definition: "a pan",
        knowledgelevel: 0
    },
    {
        id: "cadencia",
        category: "uncategorized",
        term: "una cadencia",
        definition: "a cadence, rhythm",
        knowledgelevel: 0
    },
    {
        id: "caer_en_la",
        category: "uncategorized",
        term: "caer en la",
        definition: " cuenta",
        knowledgelevel: 0
    },
    {
        id: "calentamiento_global",
        category: "uncategorized",
        term: "calentamiento global",
        definition: "global warming",
        knowledgelevel: 0
    },
    {
        id: "calidad",
        category: "uncategorized",
        term: "la calidad",
        definition: " the quality, grade, rank",
        knowledgelevel: 0
    },
    {
        id: "calmado",
        category: "uncategorized",
        term: "calmado (adj)",
        definition: "calm (adj)",
        knowledgelevel: 0
    },
    {
        id: "camaleón",
        category: "uncategorized",
        term: "un camaleón",
        definition: "chameleon",
        knowledgelevel: 0
    },
    {
        id: "camiones_repartidores",
        category: "uncategorized",
        term: "los camiones repartidores",
        definition: "the delivery trucks",
        knowledgelevel: 0
    },
    {
        id: "campamento",
        category: "uncategorized",
        term: "un campamento",
        definition: "a camp",
        knowledgelevel: 0
    },
    {
        id: "campaña",
        category: "uncategorized",
        term: "una campaña",
        definition: "a campaign",
        knowledgelevel: 0
    },
    {
        id: "canica",
        category: "uncategorized",
        term: "una canica",
        definition: "  a marble",
        knowledgelevel: 0
    },
    {
        id: "cansador",
        category: "uncategorized",
        term: "cansador (adj)",
        definition: "tiring",
        knowledgelevel: 0
    },
    {
        id: "cantaleta",
        category: "uncategorized",
        term: "una cantaleta",
        definition: "a song",
        knowledgelevel: 0
    },
    {
        id: "cántaro",
        category: "uncategorized",
        term: "un cántaro",
        definition: "  a pitcher",
        knowledgelevel: 0
    },
    {
        id: "caótica",
        category: "uncategorized",
        term: "caótica",
        definition: "  chaotic",
        knowledgelevel: 0
    },
    {
        id: "capa",
        category: "uncategorized",
        term: "una capa",
        definition: "  a cape like clothing",
        knowledgelevel: 0
    },
    {
        id: "capacidades",
        category: "uncategorized",
        term: "capacidades",
        definition: "  abilities?",
        knowledgelevel: 0
    },
    {
        id: "capacitación",
        category: "uncategorized",
        term: "la capacitación",
        definition: "the training",
        knowledgelevel: 0
    },
    {
        id: "capaz",
        category: "uncategorized",
        term: "capaz, capaces (adj)",
        definition: "  capable",
        knowledgelevel: 0
    },
    {
        id: "caprichoso",
        category: "uncategorized",
        term: "caprichoso",
        definition: "whimsical",
        knowledgelevel: 0
    },
    {
        id: "cara_de_creído",
        category: "uncategorized",
        term: "la cara de creído",
        definition: "  cocky face",
        knowledgelevel: 0
    },
    {
        id: "cara_de_pocos_amigos",
        category: "uncategorized",
        term: "una cara de pocos amigos",
        definition: "  angry or serious face",
        knowledgelevel: 0
    },
    {
        id: "caramba",
        category: "uncategorized",
        term: "caramba!",
        definition: "  Jeez!",
        knowledgelevel: 0
    },
    {
        id: "carne_podrida",
        category: "uncategorized",
        term: "la carne podrida",
        definition: "the rotten meat",
        knowledgelevel: 0
    },
    {
        id: "carrasperas",
        category: "uncategorized",
        term: "carrasperas",
        definition: "  throat clearings",
        knowledgelevel: 0
    },
    {
        id: "carrete",
        category: "uncategorized",
        term: "un carrete",
        definition: " a reel, spool",
        knowledgelevel: 0
    },
    {
        id: "carritos_de_comida_ambulante",
        category: "uncategorized",
        term: "los carritos de comida ambulante",
        definition: "the mobile food carts",
        knowledgelevel: 0
    },
    {
        id: "carro_de_carreras",
        category: "uncategorized",
        term: "un carro de carreras",
        definition: "a race car",
        knowledgelevel: 0
    },
    {
        id: "carrocería",
        category: "uncategorized",
        term: "una carrocería",
        definition: "  an auto body",
        knowledgelevel: 0
    },
    {
        id: "carruaje",
        category: "uncategorized",
        term: "un carruaje",
        definition: "a carriage",
        knowledgelevel: 0
    },
    {
        id: "carta",
        category: "uncategorized",
        term: "la carta en un restaurante",
        definition: "restaurant menu",
        knowledgelevel: 0
    },
    {
        id: "casero",
        category: "uncategorized",
        term: "casero (adj)",
        definition: " homemade",
        knowledgelevel: 0
    },
    {
        id: "caso_judicial",
        category: "uncategorized",
        term: "la caso judicial",
        definition: "the court case",
        knowledgelevel: 0
    },
    {
        id: "caucho",
        category: "uncategorized",
        term: "el caucho",
        definition: "the rubber",
        knowledgelevel: 0
    },
    {
        id: "ceguera",
        category: "uncategorized",
        term: "ceguera",
        definition: "blindness",
        knowledgelevel: 0
    },
    {
        id: "célebre",
        category: "uncategorized",
        term: "célebre (adj)",
        definition: "famouse",
        knowledgelevel: 0
    },
    {
        id: "centenar",
        category: "uncategorized",
        term: "un centenar",
        definition: "a hundred",
        knowledgelevel: 0
    },
    {
        id: "céntrico",
        category: "uncategorized",
        term: "céntrico",
        definition: " central",
        knowledgelevel: 0
    },
    {
        id: "cera",
        category: "uncategorized",
        term: "la cera",
        definition: "the wax",
        knowledgelevel: 0
    },
    {
        id: "cerámica",
        category: "uncategorized",
        term: "la cerámica",
        definition: " the pottery",
        knowledgelevel: 0
    },
    {
        id: "cerca",
        category: "uncategorized",
        term: "una cerca",
        definition: "a fence",
        knowledgelevel: 0
    },
    {
        id: "cerdas",
        category: "uncategorized",
        term: "las cerdas",
        definition: "the bristles, like bristles on a cerdo (pig)",
        knowledgelevel: 0
    },
    {
        id: "cero",
        category: "uncategorized",
        term: "un cero",
        definition: "a zero",
        knowledgelevel: 0
    },
    {
        id: "certeza",
        category: "uncategorized",
        term: "certeza",
        definition: "certainty",
        knowledgelevel: 0
    },
    {
        id: "chapulín",
        category: "uncategorized",
        term: "un chapulín",
        definition: " saltamontes (grasshoppers)",
        knowledgelevel: 0
    },
    {
        id: "chicharra",
        category: "uncategorized",
        term: "la chicharra",
        definition: "  the cicada or the buzzer/siren/alarm",
        knowledgelevel: 0
    },
    {
        id: "chico",
        category: "uncategorized",
        term: "chico (adj)",
        definition: "  small",
        knowledgelevel: 0
    },
    {
        id: "chillido",
        category: "uncategorized",
        term: "un chillido",
        definition: "a shriek, squeal",
        knowledgelevel: 0
    },
    {
        id: "chiquero",
        category: "uncategorized",
        term: "un chiquero",
        definition: "a pigsty",
        knowledgelevel: 0
    },
    {
        id: "chupasangre",
        category: "uncategorized",
        term: "chupasangre",
        definition: "  a blood sucking insect or parasite",
        knowledgelevel: 0
    },
    {
        id: "ciempiés",
        category: "uncategorized",
        term: "los ciempiés",
        definition: "the centipedes",
        knowledgelevel: 0
    },
    {
        id: "ciento_diez",
        category: "uncategorized",
        term: "ciento diez",
        definition: "110",
        knowledgelevel: 0
    },
    {
        id: "cigüeña",
        category: "uncategorized",
        term: "una cigüeña",
        definition: "  a stork (bird)",
        knowledgelevel: 0
    },
    {
        id: "cincel",
        category: "uncategorized",
        term: "un cincel",
        definition: "a chisel",
        knowledgelevel: 0
    },
    {
        id: "cincuenta_mil",
        category: "uncategorized",
        term: "cincuenta mil",
        definition: "50000",
        knowledgelevel: 0
    },
    {
        id: "clientes",
        category: "uncategorized",
        term: "los clientes",
        definition: "  clients like customers in a restaurant",
        knowledgelevel: 0
    },
    {
        id: "cobrar_vida",
        category: "uncategorized",
        term: "cobrar vida",
        definition: "to come alive",
        knowledgelevel: 0
    },
    {
        id: "cocción",
        category: "uncategorized",
        term: "la cocción",
        definition: "the cooking",
        knowledgelevel: 0
    },
    {
        id: "cocinero",
        category: "uncategorized",
        term: "un cocinero / cocinera",
        definition: "  a chef or cook",
        knowledgelevel: 0
    },
    {
        id: "código",
        category: "uncategorized",
        term: "el código",
        definition: " the code",
        knowledgelevel: 0
    },
    {
        id: "cohete",
        category: "uncategorized",
        term: "un cohete",
        definition: "the rocket",
        knowledgelevel: 0
    },
    {
        id: "cojín",
        category: "uncategorized",
        term: "un  cojín",
        definition: "a cushion",
        knowledgelevel: 0
    },
    {
        id: "colador",
        category: "uncategorized",
        term: "un colador",
        definition: "a strainer (cooking)",
        knowledgelevel: 0
    },
    {
        id: "colega",
        category: "uncategorized",
        term: "una colega",
        definition: " a colleague",
        knowledgelevel: 0
    },
    {
        id: "colegio",
        category: "uncategorized",
        term: "un colegio",
        definition: "a school",
        knowledgelevel: 0
    },
    {
        id: "colmena",
        category: "uncategorized",
        term: "una colmena",
        definition: "a hive (like beehive)",
        knowledgelevel: 0
    },
    {
        id: "colonia",
        category: "uncategorized",
        term: "una colonia",
        definition: "  a colony",
        knowledgelevel: 0
    },
    {
        id: "columpio",
        category: "uncategorized",
        term: "un columpio",
        definition: "  a swing (like in a kids playground)",
        knowledgelevel: 0
    },
    {
        id: "comensales",
        category: "uncategorized",
        term: "los comensales",
        definition: "  the diners,  the people eating in a restaurant",
        knowledgelevel: 0
    },
    {
        id: "comerciante",
        category: "uncategorized",
        term: "un comerciante",
        definition: "a businessman",
        knowledgelevel: 0
    },
    {
        id: "comercio",
        category: "uncategorized",
        term: "el comercio",
        definition: "the trade, commerce",
        knowledgelevel: 0
    },
    {
        id: "comezón",
        category: "uncategorized",
        term: "un comezón",
        definition: "an itch",
        knowledgelevel: 0
    },
    {
        id: "comisionado",
        category: "uncategorized",
        term: "el comisionado",
        definition: "the commissioner",
        knowledgelevel: 0
    },
    {
        id: "como_acabas_de_leer",
        category: "uncategorized",
        term: "como acabas de leer",
        definition: "as you just read",
        knowledgelevel: 0
    },
    {
        id: "como_de_lejos",
        category: "uncategorized",
        term: "como de lejos",
        definition: "as far away",
        knowledgelevel: 0
    },
    {
        id: "como_recuerdo",
        category: "uncategorized",
        term: "como recuerdo",
        definition: "  as a memory",
        knowledgelevel: 0
    },
    {
        id: "como_resultado",
        category: "uncategorized",
        term: "como resultado",
        definition: "  as a result",
        knowledgelevel: 0
    },
    {
        id: "como_si_fuera",
        category: "uncategorized",
        term: "como si fuera",
        definition: "  as if it were",
        knowledgelevel: 0
    },
    {
        id: "comodidad",
        category: "uncategorized",
        term: "comodidad",
        definition: "comfort",
        knowledgelevel: 0
    },
    {
        id: "compañero",
        category: "uncategorized",
        term: "un compañero",
        definition: "a partner, companion",
        knowledgelevel: 0
    },
    {
        id: "compañía_petrolera",
        category: "uncategorized",
        term: "una compañía petrolera",
        definition: "an oil company",
        knowledgelevel: 0
    },
    {
        id: "compartimiento",
        category: "uncategorized",
        term: "un compartimiento",
        definition: "a compartment, a bin",
        knowledgelevel: 0
    },
    {
        id: "competencia",
        category: "uncategorized",
        term: "competencia",
        definition: "competition, or competence",
        knowledgelevel: 0
    },
    {
        id: "complejo",
        category: "uncategorized",
        term: "complejo (adj)",
        definition: "complex",
        knowledgelevel: 0
    },
    {
        id: "con_ansias",
        category: "uncategorized",
        term: "con ansias",
        definition: "eagerly",
        knowledgelevel: 0
    },
    {
        id: "con_antelación",
        category: "uncategorized",
        term: "con antelación",
        definition: "  in advance",
        knowledgelevel: 0
    },
    {
        id: "con_detenimiento",
        category: "uncategorized",
        term: "con detenimiento",
        definition: "  carefully",
        knowledgelevel: 0
    },
    {
        id: "con_fluidez",
        category: "uncategorized",
        term: "con fluidez",
        definition: "fluently",
        knowledgelevel: 0
    },
    {
        id: "conducta",
        category: "uncategorized",
        term: "una conducta",
        definition: "  a behavior or conduct",
        knowledgelevel: 0
    },
    {
        id: "conductor",
        category: "uncategorized",
        term: "el conductor",
        definition: "  the driver",
        knowledgelevel: 0
    },
    {
        id: "conmovido",
        category: "uncategorized",
        term: "conmovido",
        definition: "  moved, touched, positive feeling",
        knowledgelevel: 0
    },
    {
        id: "conocimiento",
        category: "uncategorized",
        term: "el conocimiento",
        definition: "the knowledge",
        knowledgelevel: 0
    },
    {
        id: "consciente",
        category: "uncategorized",
        term: "consciente (adj)",
        definition: "aware",
        knowledgelevel: 0
    },
    {
        id: "conseguir_ponerse_de_acuerdo",
        category: "uncategorized",
        term: "conseguir ponerse de acuerdo",
        definition: "to get an agreement",
        knowledgelevel: 0
    },
    {
        id: "consigo",
        category: "uncategorized",
        term: "consigo",
        definition: "with him/her",
        knowledgelevel: 0
    },
    {
        id: "contar_con_un",
        category: "uncategorized",
        term: "contar con un",
        definition: " medio",
        knowledgelevel: 0
    },
    {
        id: "continuo",
        category: "uncategorized",
        term: "continuo (adj)",
        definition: "continuous",
        knowledgelevel: 0
    },
    {
        id: "contrincante",
        category: "uncategorized",
        term: "un contrincante",
        definition: "  an opponent",
        knowledgelevel: 0
    },
    {
        id: "copa_de_árbol",
        category: "uncategorized",
        term: "la copa de árbol",
        definition: "a tree top",
        knowledgelevel: 0
    },
    {
        id: "copa_de_trofeo",
        category: "uncategorized",
        term: "la copa de trofeo",
        definition: "a tropy cup",
        knowledgelevel: 0
    },
    {
        id: "corcho",
        category: "uncategorized",
        term: "un corcho",
        definition: "a cork",
        knowledgelevel: 0
    },
    {
        id: "cordillera",
        category: "uncategorized",
        term: "una cordillera",
        definition: "  range like a mountain range",
        knowledgelevel: 0
    },
    {
        id: "corea",
        category: "uncategorized",
        term: "corea",
        definition: "Korea",
        knowledgelevel: 0
    },
    {
        id: "correr_la_voz",
        category: "uncategorized",
        term: "correr la voz",
        definition: "  to spread the word",
        knowledgelevel: 0
    },
    {
        id: "fangoso",
        category: "uncategorized",
        term: "fangoso",
        definition: "muddy",
        knowledgelevel: 0
    },
    {
        id: "corro",
        category: "uncategorized",
        term: "un corro",
        definition: "  a circle or huddle of people talking",
        knowledgelevel: 0
    },
    {
        id: "cortadora_de_grama",
        category: "uncategorized",
        term: "una cortadora de grama",
        definition: "  lawn mower",
        knowledgelevel: 0
    },
    {
        id: "corteza_de_los",
        category: "uncategorized",
        term: "corteza de los",
        definition: " árboles",
        knowledgelevel: 0
    },
    {
        id: "costados",
        category: "uncategorized",
        term: "los costados",
        definition: "the sides",
        knowledgelevel: 0
    },
    {
        id: "costosa",
        category: "uncategorized",
        term: "costosa",
        definition: " expensive",
        knowledgelevel: 0
    },
    {
        id: "costumbre",
        category: "uncategorized",
        term: "un costumbre",
        definition: " a custom or habit",
        knowledgelevel: 0
    },
    {
        id: "cotidiano",
        category: "uncategorized",
        term: "cotidiano (adj)",
        definition: "daily",
        knowledgelevel: 0
    },
    {
        id: "craneana",
        category: "uncategorized",
        term: "craneana (adj)",
        definition: "cranial",
        knowledgelevel: 0
    },
    {
        id: "cráneo",
        category: "uncategorized",
        term: "el cráneo",
        definition: "the skull",
        knowledgelevel: 0
    },
    {
        id: "cría_de_ganado",
        category: "uncategorized",
        term: "la cría de ganado",
        definition: "the cattle breeding",
        knowledgelevel: 0
    },
    {
        id: "criterio",
        category: "uncategorized",
        term: "un criterio",
        definition: "criterion",
        knowledgelevel: 0
    },
    {
        id: "crucigrama",
        category: "uncategorized",
        term: "una crucigrama",
        definition: "a crossword",
        knowledgelevel: 0
    },
    {
        id: "cualidad",
        category: "uncategorized",
        term: "cualidad",
        definition: "quality",
        knowledgelevel: 0
    },
    {
        id: "cucaracha",
        category: "uncategorized",
        term: "una cucaracha",
        definition: "a cockroach",
        knowledgelevel: 0
    },
    {
        id: "cuerda",
        category: "uncategorized",
        term: "cuerda",
        definition: "  rope",
        knowledgelevel: 0
    },
    {
        id: "cultura_materna",
        category: "uncategorized",
        term: "la cultura materna",
        definition: "  home/mother culture",
        knowledgelevel: 0
    },
    {
        id: "cumbre",
        category: "uncategorized",
        term: "un cumbre",
        definition: "a summit, or a top like a shirt",
        knowledgelevel: 0
    },
    {
        id: "cumpleaños",
        category: "uncategorized",
        term: "el cumpleaños",
        definition: " the birthday",
        knowledgelevel: 0
    },
    {
        id: "curación",
        category: "uncategorized",
        term: "la curación",
        definition: "the healing",
        knowledgelevel: 0
    },
    {
        id: "cuyo_/_cuya",
        category: "uncategorized",
        term: "cuyo / cuya",
        definition: "  whose",
        knowledgelevel: 0
    },
    {
        id: "da_picazón",
        category: "uncategorized",
        term: "da picazón",
        definition: "to itch",
        knowledgelevel: 0
    },
    {
        id: "dar_el_patio",
        category: "uncategorized",
        term: "dar el patio",
        definition: "to lead to the patio",
        knowledgelevel: 0
    },
    {
        id: "datacion",
        category: "uncategorized",
        term: "datacion",
        definition: " dating like determining how long a fossil is",
        knowledgelevel: 0
    },
    {
        id: "dato,_los_datos",
        category: "uncategorized",
        term: "un dato, los datos",
        definition: " a fact, the data",
        knowledgelevel: 0
    },
    {
        id: "de_aspecto_gracioso",
        category: "uncategorized",
        term: "de aspecto gracioso (adj)",
        definition: "funny looking",
        knowledgelevel: 0
    },
    {
        id: "de_buen_ánimo",
        category: "uncategorized",
        term: "de buen ánimo",
        definition: "in good spirits",
        knowledgelevel: 0
    },
    {
        id: "de_forma_personal",
        category: "uncategorized",
        term: "de forma personal",
        definition: " personally",
        knowledgelevel: 0
    },
    {
        id: "de_golpe",
        category: "uncategorized",
        term: "de golpe",
        definition: "  suddenly or banging (like slamming a door)",
        knowledgelevel: 0
    },
    {
        id: "de_lata",
        category: "uncategorized",
        term: "de lata",
        definition: "  of tin",
        knowledgelevel: 0
    },
    {
        id: "de_mala_educación",
        category: "uncategorized",
        term: "de mala educación",
        definition: "  rude",
        knowledgelevel: 0
    },
    {
        id: "de_nacida",
        category: "uncategorized",
        term: "de nacida",
        definition: "from birth",
        knowledgelevel: 0
    },
    {
        id: "de_otra_forma",
        category: "uncategorized",
        term: "de otra forma",
        definition: "  otherwise",
        knowledgelevel: 0
    },
    {
        id: "de_par_en_par",
        category: "uncategorized",
        term: "de par en par",
        definition: "  wide open (como ojos)",
        knowledgelevel: 0
    },
    {
        id: "de_partida",
        category: "uncategorized",
        term: "de partida",
        definition: "  starting",
        knowledgelevel: 0
    },
    {
        id: "de_tal_palo_tal_astilla",
        category: "uncategorized",
        term: "de tal palo tal astilla",
        definition: "a chip off the old block",
        knowledgelevel: 0
    },
    {
        id: "de_una",
        category: "uncategorized",
        term: "de una",
        definition: " buena vez",
        knowledgelevel: 0
    },
    {
        id: "debe_de_haber",
        category: "uncategorized",
        term: "debe de haber",
        definition: "there must be",
        knowledgelevel: 0
    },
    {
        id: "decoloración",
        category: "uncategorized",
        term: "la decoloración",
        definition: "the discoloration",
        knowledgelevel: 0
    },
    {
        id: "dedo_gordo",
        category: "uncategorized",
        term: "un dedo gordo",
        definition: "big toe",
        knowledgelevel: 0
    },
    {
        id: "dedo_índice",
        category: "uncategorized",
        term: "el dedo índice",
        definition: "index finger",
        knowledgelevel: 0
    },
    {
        id: "dejar_de_hacer",
        category: "uncategorized",
        term: "dejar de hacer",
        definition: "to stop doing",
        knowledgelevel: 0
    },
    {
        id: "dejar_tras_de_sí",
        category: "uncategorized",
        term: "dejar tras de sí",
        definition: "to leave behind",
        knowledgelevel: 0
    },
    {
        id: "delicia",
        category: "uncategorized",
        term: "una delicia",
        definition: "a delight",
        knowledgelevel: 0
    },
    {
        id: "demanda_legal",
        category: "uncategorized",
        term: "la demanda legal",
        definition: "  a lawsuit",
        knowledgelevel: 0
    },
    {
        id: "demos",
        category: "uncategorized",
        term: "demos",
        definition: "  let’s give",
        knowledgelevel: 0
    },
    {
        id: "denso",
        category: "uncategorized",
        term: "denso",
        definition: "dense",
        knowledgelevel: 0
    },
    {
        id: "denuncia",
        category: "uncategorized",
        term: "una denuncia",
        definition: "a complaint",
        knowledgelevel: 0
    },
    {
        id: "depredador",
        category: "uncategorized",
        term: "un depredador",
        definition: " a predator",
        knowledgelevel: 0
    },
    {
        id: "derrame",
        category: "uncategorized",
        term: "un derrame",
        definition: "  a spill",
        knowledgelevel: 0
    },
    {
        id: "derrumbe",
        category: "uncategorized",
        term: "un derrumbe",
        definition: "a collapse",
        knowledgelevel: 0
    },
    {
        id: "desanimado",
        category: "uncategorized",
        term: "desanimado",
        definition: "discouraged",
        knowledgelevel: 0
    },
    {
        id: "desapercibido",
        category: "uncategorized",
        term: "desapercibido",
        definition: "  unnoticed",
        knowledgelevel: 0
    },
    {
        id: "desaprobación",
        category: "uncategorized",
        term: "desaprobación",
        definition: "  disaproval ",
        knowledgelevel: 0
    },
    {
        id: "descenso",
        category: "uncategorized",
        term: "un descenso",
        definition: "a decline",
        knowledgelevel: 0
    },
    {
        id: "descomunal",
        category: "uncategorized",
        term: "descomunal (adj)",
        definition: "huge",
        knowledgelevel: 0
    },
    {
        id: "desconcertado",
        category: "uncategorized",
        term: "desconcertado (adj)",
        definition: "embarrassed",
        knowledgelevel: 0
    },
    {
        id: "desconocimiento",
        category: "uncategorized",
        term: "el desconocimiento",
        definition: "the ignorance",
        knowledgelevel: 0
    },
    {
        id: "descontrol",
        category: "uncategorized",
        term: "descontrol",
        definition: "lack of control",
        knowledgelevel: 0
    },
    {
        id: "descosido",
        category: "uncategorized",
        term: "descosido (adj)",
        definition: "disjointed",
        knowledgelevel: 0
    },
    {
        id: "descuento",
        category: "uncategorized",
        term: "un descuento",
        definition: "a discount",
        knowledgelevel: 0
    },
    {
        id: "descuido",
        category: "uncategorized",
        term: "un descuido",
        definition: "a neglect, carelessness",
        knowledgelevel: 0
    },
    {
        id: "desechos",
        category: "uncategorized",
        term: "los desechos",
        definition: "  the waste",
        knowledgelevel: 0
    },
    {
        id: "desgaste",
        category: "uncategorized",
        term: "el desgaste",
        definition: "the wear and tear",
        knowledgelevel: 0
    },
    {
        id: "desgreñado",
        category: "uncategorized",
        term: "desgreñado (adj)",
        definition: "disheveled",
        knowledgelevel: 0
    },
    {
        id: "desierto",
        category: "uncategorized",
        term: "desierto (adj)",
        definition: "  deserted",
        knowledgelevel: 0
    },
    {
        id: "despegue",
        category: "uncategorized",
        term: "un despegue",
        definition: "a takeoff, a blast off",
        knowledgelevel: 0
    },
    {
        id: "despensa",
        category: "uncategorized",
        term: "una despensa",
        definition: "a pantry",
        knowledgelevel: 0
    },
    {
        id: "desperdicio",
        category: "uncategorized",
        term: "el desperdicio",
        definition: "the waste",
        knowledgelevel: 0
    },
    {
        id: "desplazamiento",
        category: "uncategorized",
        term: "desplazamiento",
        definition: "displacement",
        knowledgelevel: 0
    },
    {
        id: "desprotegida",
        category: "uncategorized",
        term: "desprotegida",
        definition: "unprotected",
        knowledgelevel: 0
    },
    {
        id: "destrozo",
        category: "uncategorized",
        term: "un destrozo",
        definition: "a destruction",
        knowledgelevel: 0
    },
    {
        id: "detective",
        category: "uncategorized",
        term: "un detective",
        definition: "a detective (career)",
        knowledgelevel: 0
    },
    {
        id: "deterioro",
        category: "uncategorized",
        term: "deterioro",
        definition: "deterioration",
        knowledgelevel: 0
    },
    {
        id: "detonante",
        category: "uncategorized",
        term: "un detonante",
        definition: "  a trigger",
        knowledgelevel: 0
    },
    {
        id: "día_tras_día",
        category: "uncategorized",
        term: "día tras día",
        definition: "day after day",
        knowledgelevel: 0
    },
    {
        id: "diamante",
        category: "uncategorized",
        term: "un diamante",
        definition: "a diamond",
        knowledgelevel: 0
    },
    {
        id: "diámetro",
        category: "uncategorized",
        term: "un diámetro",
        definition: "a diameter",
        knowledgelevel: 0
    },
    {
        id: "dichas",
        category: "uncategorized",
        term: "dichas",
        definition: "  can mean these or the things spoken about",
        knowledgelevel: 0
    },
    {
        id: "diminutivo",
        category: "uncategorized",
        term: "un diminutivo",
        definition: "  a nickname",
        knowledgelevel: 0
    },
    {
        id: "directorio",
        category: "uncategorized",
        term: "un directorio",
        definition: "a directory",
        knowledgelevel: 0
    },
    {
        id: "discapacidad_auditiva",
        category: "uncategorized",
        term: "una discapacidad auditiva",
        definition: "  a hearing impairment",
        knowledgelevel: 0
    },
    {
        id: "discurso",
        category: "uncategorized",
        term: "un discurso",
        definition: "a speech",
        knowledgelevel: 0
    },
    {
        id: "disponible",
        category: "uncategorized",
        term: "disponible",
        definition: " available",
        knowledgelevel: 0
    },
    {
        id: "dispositivo",
        category: "uncategorized",
        term: "un dispositivo",
        definition: " a device",
        knowledgelevel: 0
    },
    {
        id: "dispuesto",
        category: "uncategorized",
        term: "dispuesto (adj)",
        definition: "willing, ready",
        knowledgelevel: 0
    },
    {
        id: "doctorado",
        category: "uncategorized",
        term: "un doctorado",
        definition: "a doctorate",
        knowledgelevel: 0
    },
    {
        id: "dolencia",
        category: "uncategorized",
        term: "una dolencia",
        definition: "a disease",
        knowledgelevel: 0
    },
    {
        id: "doloroso",
        category: "uncategorized",
        term: "doloroso",
        definition: "painful",
        knowledgelevel: 0
    },
    {
        id: "don",
        category: "uncategorized",
        term: "un don",
        definition: " a gift",
        knowledgelevel: 0
    },
    {
        id: "dona",
        category: "uncategorized",
        term: "una dona",
        definition: "a donut",
        knowledgelevel: 0
    },
    {
        id: "doña",
        category: "uncategorized",
        term: "doña",
        definition: "  Spanish title of respect for a woman",
        knowledgelevel: 0
    },
    {
        id: "duradero",
        category: "uncategorized",
        term: "duradero",
        definition: "durable",
        knowledgelevel: 0
    },
    {
        id: "echar_a_reír",
        category: "uncategorized",
        term: "echar a reír",
        definition: "  to be laughing",
        knowledgelevel: 0
    },
    {
        id: "fase",
        category: "uncategorized",
        term: "una fase",
        definition: "a phase",
        knowledgelevel: 0
    },
    {
        id: "echar_de_menos_a_alguien",
        category: "uncategorized",
        term: "echar de menos a alguien",
        definition: "  to miss someone a lot",
        knowledgelevel: 0
    },
    {
        id: "ecuador",
        category: "uncategorized",
        term: "el ecuador",
        definition: "  equator",
        knowledgelevel: 0
    },
    {
        id: "eficaz",
        category: "uncategorized",
        term: "eficaz (adj)",
        definition: "effective",
        knowledgelevel: 0
    },
    {
        id: "ejemplares",
        category: "uncategorized",
        term: "los ejemplares",
        definition: "the specimens",
        knowledgelevel: 0
    },
    {
        id: "elogio",
        category: "uncategorized",
        term: "un elogio",
        definition: "a praise",
        knowledgelevel: 0
    },
    {
        id: "embajada",
        category: "uncategorized",
        term: "una embajada",
        definition: "an embassy",
        knowledgelevel: 0
    },
    {
        id: "embarcación",
        category: "uncategorized",
        term: "la embarcación",
        definition: "the boat",
        knowledgelevel: 0
    },
    {
        id: "embarrado",
        category: "uncategorized",
        term: "embarrado(adj)",
        definition: "muddy",
        knowledgelevel: 0
    },
    {
        id: "emparentado",
        category: "uncategorized",
        term: "emparentado (adj)",
        definition: "  related",
        knowledgelevel: 0
    },
    {
        id: "empleado",
        category: "uncategorized",
        term: "un empleado",
        definition: " an employee",
        knowledgelevel: 0
    },
    {
        id: "empleo",
        category: "uncategorized",
        term: "un empleo",
        definition: " employment",
        knowledgelevel: 0
    },
    {
        id: "empozado",
        category: "uncategorized",
        term: "empozado (adj)",
        definition: "embedded",
        knowledgelevel: 0
    },
    {
        id: "empresa",
        category: "uncategorized",
        term: "una empresa",
        definition: " a company",
        knowledgelevel: 0
    },
    {
        id: "en_aquel",
        category: "uncategorized",
        term: "en aquel",
        definition: " entonces",
        knowledgelevel: 0
    },
    {
        id: "en_efecto",
        category: "uncategorized",
        term: "en efecto",
        definition: "indeed",
        knowledgelevel: 0
    },
    {
        id: "en_forma",
        category: "uncategorized",
        term: "en forma",
        definition: "  in shape, fit",
        knowledgelevel: 0
    },
    {
        id: "en_forma_de_sierra",
        category: "uncategorized",
        term: "en forma de sierra",
        definition: "  saw-shaped like a leaf",
        knowledgelevel: 0
    },
    {
        id: "en_huelga",
        category: "uncategorized",
        term: "en huelga",
        definition: "  on strike",
        knowledgelevel: 0
    },
    {
        id: "en_reversa",
        category: "uncategorized",
        term: "en reversa",
        definition: "in reverse",
        knowledgelevel: 0
    },
    {
        id: "en_si_debes",
        category: "uncategorized",
        term: "en si debes",
        definition: "if you must",
        knowledgelevel: 0
    },
    {
        id: "en_sincronía",
        category: "uncategorized",
        term: "en sincronía",
        definition: "  in synch",
        knowledgelevel: 0
    },
    {
        id: "en_son_de_paz",
        category: "uncategorized",
        term: "en son de paz",
        definition: "in peace",
        knowledgelevel: 0
    },
    {
        id: "en_torno",
        category: "uncategorized",
        term: "en torno",
        definition: " around",
        knowledgelevel: 0
    },
    {
        id: "en_vigencia",
        category: "uncategorized",
        term: "en vigencia",
        definition: "  in force like a law is enforced",
        knowledgelevel: 0
    },
    {
        id: "enana",
        category: "uncategorized",
        term: "una enana",
        definition: "a dwarf",
        knowledgelevel: 0
    },
    {
        id: "encuentro",
        category: "uncategorized",
        term: "un encuentro",
        definition: "  a meeting",
        knowledgelevel: 0
    },
    {
        id: "enfermería",
        category: "uncategorized",
        term: "la enfermería",
        definition: "the nursing",
        knowledgelevel: 0
    },
    {
        id: "enfermero",
        category: "uncategorized",
        term: "un enfermero",
        definition: "a nurse",
        knowledgelevel: 0
    },
    {
        id: "enfoque",
        category: "uncategorized",
        term: "un enfoque",
        definition: "an approach",
        knowledgelevel: 0
    },
    {
        id: "engañoso",
        category: "uncategorized",
        term: "engañoso (adj)",
        definition: "misleading",
        knowledgelevel: 0
    },
    {
        id: "enojo",
        category: "uncategorized",
        term: "enojo",
        definition: "anger",
        knowledgelevel: 0
    },
    {
        id: "enredo",
        category: "uncategorized",
        term: "un enredo",
        definition: "a tangle",
        knowledgelevel: 0
    },
    {
        id: "enrojecimiento",
        category: "uncategorized",
        term: "enrojecimiento",
        definition: "redness",
        knowledgelevel: 0
    },
    {
        id: "ensayo",
        category: "uncategorized",
        term: "un ensayo",
        definition: "  rehearsal",
        knowledgelevel: 0
    },
    {
        id: "ensoñación",
        category: "uncategorized",
        term: "la ensoñación",
        definition: "a daydream",
        knowledgelevel: 0
    },
    {
        id: "ensordecedor",
        category: "uncategorized",
        term: "ensordecedor (adj)",
        definition: "deafening",
        knowledgelevel: 0
    },
    {
        id: "ensueño",
        category: "uncategorized",
        term: "un ensueño",
        definition: "  a dream",
        knowledgelevel: 0
    },
    {
        id: "ente",
        category: "uncategorized",
        term: "un ente",
        definition: "an entity",
        knowledgelevel: 0
    },
    {
        id: "entornado",
        category: "uncategorized",
        term: "entornado (adj)",
        definition: "ajar",
        knowledgelevel: 0
    },
    {
        id: "entorno",
        category: "uncategorized",
        term: "un entorno",
        definition: " an environment or around",
        knowledgelevel: 0
    },
    {
        id: "entrante",
        category: "uncategorized",
        term: "entrante (adj)",
        definition: "  next,  incoming",
        knowledgelevel: 0
    },
    {
        id: "entrega",
        category: "uncategorized",
        term: "la entrega",
        definition: "the delivery",
        knowledgelevel: 0
    },
    {
        id: "entrenadora",
        category: "uncategorized",
        term: "la entrenadora",
        definition: "  the coach",
        knowledgelevel: 0
    },
    {
        id: "entretenimiento",
        category: "uncategorized",
        term: "el entretenimiento",
        definition: "the entertainment",
        knowledgelevel: 0
    },
    {
        id: "entrevistado_&_un_entrevistador",
        category: "uncategorized",
        term: "un entrevistado & un entrevistador",
        definition: "the interviewee & the interviewer",
        knowledgelevel: 0
    },
    {
        id: "enunciado",
        category: "uncategorized",
        term: "un enunciado",
        definition: "a statement",
        knowledgelevel: 0
    },
    {
        id: "envase",
        category: "uncategorized",
        term: "un envase",
        definition: "the container",
        knowledgelevel: 0
    },
    {
        id: "envergadura",
        category: "uncategorized",
        term: "la envergadura",
        definition: "  the wingspan",
        knowledgelevel: 0
    },
    {
        id: "equipamientos",
        category: "uncategorized",
        term: "los equipamientos",
        definition: "the equiptment",
        knowledgelevel: 0
    },
    {
        id: "es_el_colmo",
        category: "uncategorized",
        term: "es el colmo",
        definition: "it’s the last straw",
        knowledgelevel: 0
    },
    {
        id: "escalofrío",
        category: "uncategorized",
        term: "un escalofrío",
        definition: "a chill",
        knowledgelevel: 0
    },
    {
        id: "escaso",
        category: "uncategorized",
        term: "escasa / escaso",
        definition: "scarce",
        knowledgelevel: 0
    },
    {
        id: "escasez",
        category: "uncategorized",
        term: "una escasez",
        definition: "a shortage",
        knowledgelevel: 0
    },
    {
        id: "escenario",
        category: "uncategorized",
        term: "el escenario",
        definition: "the scenery",
        knowledgelevel: 0
    },
    {
        id: "escéptico",
        category: "uncategorized",
        term: "escéptico (es-séptico) (adj)",
        definition: "skeptical",
        knowledgelevel: 0
    },
    {
        id: "escombro",
        category: "uncategorized",
        term: "el escombro",
        definition: "the rubbish",
        knowledgelevel: 0
    },
    {
        id: "escozor",
        category: "uncategorized",
        term: "un escozor",
        definition: "a sting",
        knowledgelevel: 0
    },
    {
        id: "escrito",
        category: "uncategorized",
        term: "un escrito",
        definition: "a writing",
        knowledgelevel: 0
    },
    {
        id: "escritura",
        category: "uncategorized",
        term: "la escritura",
        definition: " the writing",
        knowledgelevel: 0
    },
    {
        id: "escudo",
        category: "uncategorized",
        term: "un escudo",
        definition: "a shield",
        knowledgelevel: 0
    },
    {
        id: "escultor",
        category: "uncategorized",
        term: "un escultor",
        definition: "a sculptor",
        knowledgelevel: 0
    },
    {
        id: "esencia",
        category: "uncategorized",
        term: "una esencia",
        definition: "an essence",
        knowledgelevel: 0
    },
    {
        id: "esencial",
        category: "uncategorized",
        term: "esencial (adj)",
        definition: "essential",
        knowledgelevel: 0
    },
    {
        id: "eslabón",
        category: "uncategorized",
        term: "el eslabón",
        definition: "the link",
        knowledgelevel: 0
    },
    {
        id: "eslóganes",
        category: "uncategorized",
        term: "los eslóganes",
        definition: "the slogans",
        knowledgelevel: 0
    },
    {
        id: "esmero",
        category: "uncategorized",
        term: "esmero",
        definition: "care",
        knowledgelevel: 0
    },
    {
        id: "espantoso",
        category: "uncategorized",
        term: "espantoso",
        definition: "  scary",
        knowledgelevel: 0
    },
    {
        id: "espeluznante",
        category: "uncategorized",
        term: "espeluznante",
        definition: "  terrifying",
        knowledgelevel: 0
    },
    {
        id: "esperada",
        category: "uncategorized",
        term: "esperada (adj)",
        definition: "expected",
        knowledgelevel: 0
    },
    {
        id: "espesa",
        category: "uncategorized",
        term: "espesa",
        definition: "thick,  dense like an ointment or soup",
        knowledgelevel: 0
    },
    {
        id: "espinas",
        category: "uncategorized",
        term: "las espinas",
        definition: "the thorns",
        knowledgelevel: 0
    },
    {
        id: "espinosa",
        category: "uncategorized",
        term: "espinosa",
        definition: "prickly",
        knowledgelevel: 0
    },
    {
        id: "esporas",
        category: "uncategorized",
        term: "los esporas",
        definition: "  the spores",
        knowledgelevel: 0
    },
    {
        id: "esqueje",
        category: "uncategorized",
        term: "un esqueje",
        definition: "a cutting",
        knowledgelevel: 0
    },
    {
        id: "está_a_pocos_pasos",
        category: "uncategorized",
        term: "está a pocos pasos",
        definition: "it's a few steps away",
        knowledgelevel: 0
    },
    {
        id: "el_está_jubilado",
        category: "uncategorized",
        term: "el está jubilado",
        definition: "he's retired",
        knowledgelevel: 0
    },
    {
        id: "esta_por_llegar",
        category: "uncategorized",
        term: "esta por llegar",
        definition: "it/he/she is about to arrive",
        knowledgelevel: 0
    },
    {
        id: "estacional",
        category: "uncategorized",
        term: "estacional",
        definition: "seasonal",
        knowledgelevel: 0
    },
    {
        id: "estacionamientos",
        category: "uncategorized",
        term: "los estacionamientos",
        definition: "the parking lots",
        knowledgelevel: 0
    },
    {
        id: "estadía",
        category: "uncategorized",
        term: "una estadía",
        definition: "A stay",
        knowledgelevel: 0
    },
    {
        id: "estanque",
        category: "uncategorized",
        term: "un estanque",
        definition: "  a pond",
        knowledgelevel: 0
    },
    {
        id: "estar_de_cabeza",
        category: "uncategorized",
        term: "estar de cabeza",
        definition: "to be upside down",
        knowledgelevel: 0
    },
    {
        id: "estar_distribuido",
        category: "uncategorized",
        term: "estar distribuido",
        definition: "to be distributed",
        knowledgelevel: 0
    },
    {
        id: "estera",
        category: "uncategorized",
        term: "una estera",
        definition: "a mat",
        knowledgelevel: 0
    },
    {
        id: "estofado",
        category: "uncategorized",
        term: "un estofado",
        definition: "a stew",
        knowledgelevel: 0
    },
    {
        id: "estrambótico",
        category: "uncategorized",
        term: "estrambótico",
        definition: "  bizarre",
        knowledgelevel: 0
    },
    {
        id: "estruendoso",
        category: "uncategorized",
        term: "estruendoso (adj)",
        definition: "  thunderous",
        knowledgelevel: 0
    },
    {
        id: "etapa",
        category: "uncategorized",
        term: "una etapa",
        definition: "  stage,  phase (like a prehistoric period)",
        knowledgelevel: 0
    },
    {
        id: "etnia",
        category: "uncategorized",
        term: "una etnia",
        definition: "an ethnicity",
        knowledgelevel: 0
    },
    {
        id: "exportación",
        category: "uncategorized",
        term: "la exportación",
        definition: "the export",
        knowledgelevel: 0
    },
    {
        id: "expuesto",
        category: "uncategorized",
        term: "expuesto (adj)",
        definition: "exposed",
        knowledgelevel: 0
    },
    {
        id: "fabricante",
        category: "uncategorized",
        term: "un fabricante",
        definition: "  a manufacturer ",
        knowledgelevel: 0
    },
    {
        id: "fachada",
        category: "uncategorized",
        term: "una fachada",
        definition: "a façade",
        knowledgelevel: 0
    },
    {
        id: "facultad",
        category: "uncategorized",
        term: "facultad",
        definition: "  faculty or power",
        knowledgelevel: 0
    },
    {
        id: "falla",
        category: "uncategorized",
        term: "la falla",
        definition: "  the fault line (tectonic plates)",
        knowledgelevel: 0
    },
    {
        id: "falta",
        category: "uncategorized",
        term: "la falta",
        definition: "  the lack?",
        knowledgelevel: 0
    },
    {
        id: "fango",
        category: "uncategorized",
        term: "fango",
        definition: "mud",
        knowledgelevel: 0
    },
    {
        id: "fastidio",
        category: "uncategorized",
        term: "un fastidio",
        definition: "a nuisance",
        knowledgelevel: 0
    },
    {
        id: "ferrocarril",
        category: "uncategorized",
        term: "un ferrocarril",
        definition: "a railway",
        knowledgelevel: 0
    },
    {
        id: "fertilizante",
        category: "uncategorized",
        term: "fertilizante",
        definition: "fertilizer",
        knowledgelevel: 0
    },
    {
        id: "fiel",
        category: "uncategorized",
        term: "fiel",
        definition: " (adj)",
        knowledgelevel: 0
    },
    {
        id: "fíjate",
        category: "uncategorized",
        term: "fíjate",
        definition: "  imagine,  look!",
        knowledgelevel: 0
    },
    {
        id: "filuda",
        category: "uncategorized",
        term: "filuda (adj)",
        definition: "sharp",
        knowledgelevel: 0
    },
    {
        id: "financiera",
        category: "uncategorized",
        term: "financiera (adj)",
        definition: "financial",
        knowledgelevel: 0
    },
    {
        id: "firmeza",
        category: "uncategorized",
        term: "la firmeza",
        definition: "firmness",
        knowledgelevel: 0
    },
    {
        id: "flaco",
        category: "uncategorized",
        term: "flaco (adj)",
        definition: "  skinny",
        knowledgelevel: 0
    },
    {
        id: "flamante",
        category: "uncategorized",
        term: "flamante",
        definition: "  brand new",
        knowledgelevel: 0
    },
    {
        id: "flauta",
        category: "uncategorized",
        term: "una flauta",
        definition: "a flute",
        knowledgelevel: 0
    },
    {
        id: "flecos",
        category: "uncategorized",
        term: "los flecos",
        definition: "the fringes",
        knowledgelevel: 0
    },
    {
        id: "formato",
        category: "uncategorized",
        term: "un formato",
        definition: "a format",
        knowledgelevel: 0
    },
    {
        id: "forzudo",
        category: "uncategorized",
        term: "forzudo",
        definition: "  strong",
        knowledgelevel: 0
    },
    {
        id: "fosa_nasal",
        category: "uncategorized",
        term: "una fosa nasal",
        definition: "  a nostril",
        knowledgelevel: 0
    },
    {
        id: "frasco",
        category: "uncategorized",
        term: "una frasco",
        definition: "  a bottle or jar",
        knowledgelevel: 0
    },
    {
        id: "frescor",
        category: "uncategorized",
        term: "el frescor",
        definition: "the freshness",
        knowledgelevel: 0
    },
    {
        id: "fuera_de_lugar",
        category: "uncategorized",
        term: "fuera de lugar",
        definition: "out of place",
        knowledgelevel: 0
    },
    {
        id: "funcionamiento",
        category: "uncategorized",
        term: "la funcionamiento",
        definition: "the operation",
        knowledgelevel: 0
    },
    {
        id: "fundador",
        category: "uncategorized",
        term: "una fundador",
        definition: "a founder",
        knowledgelevel: 0
    },
    {
        id: "furia",
        category: "uncategorized",
        term: "una furia",
        definition: "a rage",
        knowledgelevel: 0
    },
    {
        id: "ganado",
        category: "uncategorized",
        term: "ganado",
        definition: "cattle",
        knowledgelevel: 0
    },
    {
        id: "garabato",
        category: "uncategorized",
        term: "un garabato",
        definition: "a scribble",
        knowledgelevel: 0
    },
    {
        id: "garantía",
        category: "uncategorized",
        term: "una garantía",
        definition: "a warranty",
        knowledgelevel: 0
    },
    {
        id: "garrapata",
        category: "uncategorized",
        term: "una garrapata",
        definition: "a tick (insect)",
        knowledgelevel: 0
    },
    {
        id: "garza",
        category: "uncategorized",
        term: "una garza",
        definition: "  a heron (bird)",
        knowledgelevel: 0
    },
    {
        id: "gasto",
        category: "uncategorized",
        term: "un gasto",
        definition: "an expense",
        knowledgelevel: 0
    },
    {
        id: "gemas",
        category: "uncategorized",
        term: "las gemas",
        definition: "the gems",
        knowledgelevel: 0
    },
    {
        id: "germen",
        category: "uncategorized",
        term: "un germen",
        definition: "a germ",
        knowledgelevel: 0
    },
    {
        id: "gimnasta",
        category: "uncategorized",
        term: "una gimnasta",
        definition: "a gymnast",
        knowledgelevel: 0
    },
    {
        id: "giratoria",
        category: "uncategorized",
        term: "giratoria",
        definition: "  rotating (adj)",
        knowledgelevel: 0
    },
    {
        id: "glotón",
        category: "uncategorized",
        term: "glotón (adj)",
        definition: "glutton (eats, drinks, or consumes excessively)",
        knowledgelevel: 0
    },
    {
        id: "gobernante",
        category: "uncategorized",
        term: "un  gobernante",
        definition: "a ruler",
        knowledgelevel: 0
    },
    {
        id: "golosina",
        category: "uncategorized",
        term: "golosina",
        definition: "candy",
        knowledgelevel: 0
    },
    {
        id: "golpe_de_suerte",
        category: "uncategorized",
        term: "un golpe de suerte",
        definition: "a lucky break",
        knowledgelevel: 0
    },
    {
        id: "gorjeo",
        category: "uncategorized",
        term: "un gorjeo",
        definition: "  a twitter like from a bird",
        knowledgelevel: 0
    },
    {
        id: "gráfica",
        category: "uncategorized",
        term: "una gráfica",
        definition: "a graph",
        knowledgelevel: 0
    },
    {
        id: "grasa",
        category: "uncategorized",
        term: "la grasa",
        definition: "the fat",
        knowledgelevel: 0
    },
    {
        id: "grave",
        category: "uncategorized",
        term: "grave, graves (adj)",
        definition: "serious",
        knowledgelevel: 0
    },
    {
        id: "graznido",
        category: "uncategorized",
        term: "el graznido",
        definition: "the squawk",
        knowledgelevel: 0
    },
    {
        id: "grillo",
        category: "uncategorized",
        term: "un grillo",
        definition: "a cricket",
        knowledgelevel: 0
    },
    {
        id: "guarida",
        category: "uncategorized",
        term: "una guarida",
        definition: "a den",
        knowledgelevel: 0
    },
    {
        id: "guata",
        category: "uncategorized",
        term: "guata",
        definition: " tummy in chile",
        knowledgelevel: 0
    },
    {
        id: "guepardo",
        category: "uncategorized",
        term: "un guepardo (gay-par-do)",
        definition: "cheetah",
        knowledgelevel: 0
    },
    {
        id: "guiño_el_ojo",
        category: "uncategorized",
        term: "un guiño el ojo",
        definition: "a wink of an eye",
        knowledgelevel: 0
    },
    {
        id: "hacedor",
        category: "uncategorized",
        term: "el hacedor",
        definition: "a maker",
        knowledgelevel: 0
    },
    {
        id: "mandado",
        category: "uncategorized",
        term: "un mandado",
        definition: "A chore, an errand",
        knowledgelevel: 0
    },
    {
        id: "hacerse_duelo",
        category: "uncategorized",
        term: "hacerse duelo",
        definition: "  to mourn",
        knowledgelevel: 0
    },
    {
        id: "hacha",
        category: "uncategorized",
        term: "una hacha",
        definition: "an axe",
        knowledgelevel: 0
    },
    {
        id: "hada",
        category: "uncategorized",
        term: "una hada",
        definition: " a fairy",
        knowledgelevel: 0
    },
    {
        id: "hallazgo",
        category: "uncategorized",
        term: "el hallazgo",
        definition: "a find",
        knowledgelevel: 0
    },
    {
        id: "harto",
        category: "uncategorized",
        term: "harto",
        definition: "  fed up",
        knowledgelevel: 0
    },
    {
        id: "hazaña",
        category: "uncategorized",
        term: "una hazaña",
        definition: "a feat",
        knowledgelevel: 0
    },
    {
        id: "hebras",
        category: "uncategorized",
        term: "las hebras",
        definition: "the strands",
        knowledgelevel: 0
    },
    {
        id: "hélice",
        category: "uncategorized",
        term: "un hélice",
        definition: "  a propeller",
        knowledgelevel: 0
    },
    {
        id: "heno",
        category: "uncategorized",
        term: "el heno",
        definition: "the hay",
        knowledgelevel: 0
    },
    {
        id: "hierro_derretido",
        category: "uncategorized",
        term: "hierro derretido",
        definition: "  cast iron",
        knowledgelevel: 0
    },
    {
        id: "historiador",
        category: "uncategorized",
        term: "un historiador",
        definition: "A historian",
        knowledgelevel: 0
    },
    {
        id: "hito",
        category: "uncategorized",
        term: "un hito",
        definition: "a milestone",
        knowledgelevel: 0
    },
    {
        id: "hizo_que_fuera",
        category: "uncategorized",
        term: "hizo que fuera",
        definition: "made it out",
        knowledgelevel: 0
    },
    {
        id: "hogar_familiar",
        category: "uncategorized",
        term: "el hogar familiar",
        definition: "a family home",
        knowledgelevel: 0
    },
    {
        id: "hogaza",
        category: "uncategorized",
        term: "una hogaza",
        definition: "a loaf",
        knowledgelevel: 0
    },
    {
        id: "hoguera",
        category: "uncategorized",
        term: "una hoguera",
        definition: "a bonfire, campfire",
        knowledgelevel: 0
    },
    {
        id: "homenaje",
        category: "uncategorized",
        term: "un homenaje",
        definition: "a tribute",
        knowledgelevel: 0
    },
    {
        id: "hondo_",
        category: "uncategorized",
        term: "hondo (adj)",
        definition: "deep",
        knowledgelevel: 0
    },
    {
        id: "horroroso",
        category: "uncategorized",
        term: "horroroso",
        definition: "  terrible",
        knowledgelevel: 0
    },
    {
        id: "hortaliza",
        category: "uncategorized",
        term: "una hortaliza",
        definition: "a vegetable",
        knowledgelevel: 0
    },
    {
        id: "huésped",
        category: "uncategorized",
        term: "el huésped",
        definition: "  guest in hotel,  or host animal of a smaller animal like a parasite",
        knowledgelevel: 0
    },
    {
        id: "humedad",
        category: "uncategorized",
        term: "la humedad",
        definition: "  the humidity",
        knowledgelevel: 0
    },
    {
        id: "un_viaje_de_ida_y_vuelta",
        category: "uncategorized",
        term: "un viaje de ida y vuelta",
        definition: "a round trip",
        knowledgelevel: 0
    },
    {
        id: "ilusionada",
        category: "uncategorized",
        term: "ilusionada",
        definition: "excited, hopeful",
        knowledgelevel: 0
    },
    {
        id: "imprimible",
        category: "uncategorized",
        term: "imprimible",
        definition: " printable",
        knowledgelevel: 0
    },
    {
        id: "impuesto",
        category: "uncategorized",
        term: "un impuesto",
        definition: "a tax",
        knowledgelevel: 0
    },
    {
        id: "impulso",
        category: "uncategorized",
        term: "impulso",
        definition: "  impulse or momentum",
        knowledgelevel: 0
    },
    {
        id: "inadvertido",
        category: "uncategorized",
        term: "inadvertido",
        definition: "  unnoticed",
        knowledgelevel: 0
    },
    {
        id: "inanimado",
        category: "uncategorized",
        term: "inanimado",
        definition: "inanimate",
        knowledgelevel: 0
    },
    {
        id: "incontable",
        category: "uncategorized",
        term: "incontable (adj)",
        definition: "countless",
        knowledgelevel: 0
    },
    {
        id: "incredulidad",
        category: "uncategorized",
        term: "la incredulidad",
        definition: "the disbelief",
        knowledgelevel: 0
    },
    {
        id: "influjo",
        category: "uncategorized",
        term: "un influjo",
        definition: "an influence",
        knowledgelevel: 0
    },
    {
        id: "inform",
        category: "uncategorized",
        term: "un inform",
        definition: "a report",
        knowledgelevel: 0
    },
    {
        id: "informativo",
        category: "uncategorized",
        term: "informativo (adj)",
        definition: "informative",
        knowledgelevel: 0
    },
    {
        id: "ingeniosa",
        category: "uncategorized",
        term: "ingeniosa",
        definition: "ingenious",
        knowledgelevel: 0
    },
    {
        id: "iniciativa",
        category: "uncategorized",
        term: "una iniciativa",
        definition: "an initiative",
        knowledgelevel: 0
    },
    {
        id: "inmóvil",
        category: "uncategorized",
        term: "inmóvil",
        definition: "still",
        knowledgelevel: 0
    },
    {
        id: "innovadora",
        category: "uncategorized",
        term: "innovadora (adj)",
        definition: "innovative",
        knowledgelevel: 0
    },
    {
        id: "insecticida",
        category: "uncategorized",
        term: "una insecticida",
        definition: "an insecticide",
        knowledgelevel: 0
    },
    {
        id: "insólito",
        category: "uncategorized",
        term: "insólito (adj)",
        definition: "unusual",
        knowledgelevel: 0
    },
    {
        id: "instantáneo",
        category: "uncategorized",
        term: "instantáneo (adj)",
        definition: "instant",
        knowledgelevel: 0
    },
    {
        id: "intempestivamente",
        category: "uncategorized",
        term: "intempestivamente",
        definition: "unexpectedly",
        knowledgelevel: 0
    },
    {
        id: "intercambio",
        category: "uncategorized",
        term: "el intercambio",
        definition: "an exchange",
        knowledgelevel: 0
    },
    {
        id: "interminable",
        category: "uncategorized",
        term: "interminable (adj)",
        definition: "endless",
        knowledgelevel: 0
    },
    {
        id: "internado",
        category: "uncategorized",
        term: "un internado",
        definition: "  a boarding school",
        knowledgelevel: 0
    },
    {
        id: "invasora",
        category: "uncategorized",
        term: "invasora (adj)",
        definition: "invasive",
        knowledgelevel: 0
    },
    {
        id: "invitado",
        category: "uncategorized",
        term: "un invitado",
        definition: "a guest",
        knowledgelevel: 0
    },
    {
        id: "jaque",
        category: "uncategorized",
        term: "jaque",
        definition: " check",
        knowledgelevel: 0
    },
    {
        id: "jardín_infantil",
        category: "uncategorized",
        term: "jardín infantil",
        definition: "kindergarten",
        knowledgelevel: 0
    },
    {
        id: "jitomate",
        category: "uncategorized",
        term: "jitomate",
        definition: "  tomato en México",
        knowledgelevel: 0
    },
    {
        id: "jolgorio",
        category: "uncategorized",
        term: "el jolgorio",
        definition: "  the revelry (noisy partying)",
        knowledgelevel: 0
    },
    {
        id: "jonrón",
        category: "uncategorized",
        term: "un jonrón",
        definition: "  home run, like in baseball",
        knowledgelevel: 0
    },
    {
        id: "joya",
        category: "uncategorized",
        term: "una joya",
        definition: "a jewel",
        knowledgelevel: 0
    },
    {
        id: "juez",
        category: "uncategorized",
        term: "un juez",
        definition: "a judge",
        knowledgelevel: 0
    },
    {
        id: "jugarreta",
        category: "uncategorized",
        term: "una jugarreta",
        definition: "  a dirty trick",
        knowledgelevel: 0
    },
    {
        id: "juvenil",
        category: "uncategorized",
        term: "juvenil (adj)",
        definition: "youth",
        knowledgelevel: 0
    },
    {
        id: "laboral",
        category: "uncategorized",
        term: "laboral",
        definition: " labor-related",
        knowledgelevel: 0
    },
    {
        id: "lado_estribor_de_un",
        category: "uncategorized",
        term: "el lado estribor de un",
        definition: " barco",
        knowledgelevel: 0
    },
    {
        id: "ladrido",
        category: "uncategorized",
        term: "un ladrido",
        definition: "a bark (dog barking)",
        knowledgelevel: 0
    },
    {
        id: "lamentablemente",
        category: "uncategorized",
        term: "lamentablemente",
        definition: "unfortunetely",
        knowledgelevel: 0
    },
    {
        id: "lámina",
        category: "uncategorized",
        term: "una lámina",
        definition: "a leaf, sheet",
        knowledgelevel: 0
    },
    {
        id: "lancha",
        category: "uncategorized",
        term: "una lancha",
        definition: "a boat",
        knowledgelevel: 0
    },
    {
        id: "lanzamiento",
        category: "uncategorized",
        term: "un lanzamiento",
        definition: "a launch",
        knowledgelevel: 0
    },
    {
        id: "lapicero",
        category: "uncategorized",
        term: "un lapicero",
        definition: "a pencil",
        knowledgelevel: 0
    },
    {
        id: "larguísimo",
        category: "uncategorized",
        term: "larguísimo (adj)",
        definition: "  lengthy",
        knowledgelevel: 0
    },
    {
        id: "lata",
        category: "uncategorized",
        term: "lata",
        definition: " can (like a tin can)",
        knowledgelevel: 0
    },
    {
        id: "le_haya_arrancado",
        category: "uncategorized",
        term: "le haya arrancado",
        definition: "  was torn from him/her",
        knowledgelevel: 0
    },
    {
        id: "lesión",
        category: "uncategorized",
        term: "un lesión",
        definition: "an injury",
        knowledgelevel: 0
    },
    {
        id: "letal",
        category: "uncategorized",
        term: "letal",
        definition: "letal",
        knowledgelevel: 0
    },
    {
        id: "letargo",
        category: "uncategorized",
        term: "el letargo",
        definition: "the lethargy",
        knowledgelevel: 0
    },
    {
        id: "levadura",
        category: "uncategorized",
        term: "levadura",
        definition: "yeast",
        knowledgelevel: 0
    },
    {
        id: "libia",
        category: "uncategorized",
        term: "libia",
        definition: "Libya",
        knowledgelevel: 0
    },
    {
        id: "liderazgo",
        category: "uncategorized",
        term: "liderazgo",
        definition: "leadership",
        knowledgelevel: 0
    },
    {
        id: "lienzo",
        category: "uncategorized",
        term: "un lienzo",
        definition: "a canvas",
        knowledgelevel: 0
    },
    {
        id: "ligeramente",
        category: "uncategorized",
        term: "ligeramente",
        definition: "slightly",
        knowledgelevel: 0
    },
    {
        id: "límite",
        category: "uncategorized",
        term: "límite",
        definition: "  limit or boundary",
        knowledgelevel: 0
    },
    {
        id: "lío",
        category: "uncategorized",
        term: "un lío",
        definition: "a mess",
        knowledgelevel: 0
    },
    {
        id: "líquido",
        category: "uncategorized",
        term: "un líquido",
        definition: " a liquid ",
        knowledgelevel: 0
    },
    {
        id: "llama",
        category: "uncategorized",
        term: "la llama",
        definition: "  the flame",
        knowledgelevel: 0
    },
    {
        id: "llamaradas",
        category: "uncategorized",
        term: "las llamaradas",
        definition: "  the flares",
        knowledgelevel: 0
    },
    {
        id: "llamas",
        category: "uncategorized",
        term: "las llamas (not animal)",
        definition: "the flames",
        knowledgelevel: 0
    },
    {
        id: "llanta",
        category: "uncategorized",
        term: "una llanta",
        definition: "a tire",
        knowledgelevel: 0
    },
    {
        id: "llevar_a_cabo",
        category: "uncategorized",
        term: "llevar a cabo",
        definition: "  to carry out",
        knowledgelevel: 0
    },
    {
        id: "lluvia_de_ideas",
        category: "uncategorized",
        term: "una lluvia de ideas",
        definition: "  a brainstorm",
        knowledgelevel: 0
    },
    {
        id: "lo_pasé_muy_bien",
        category: "uncategorized",
        term: "lo pasé muy bien",
        definition: "  I had a great time",
        knowledgelevel: 0
    },
    {
        id: "lomo",
        category: "uncategorized",
        term: "lomo",
        definition: "  back (like back of an animal or person )",
        knowledgelevel: 0
    },
    {
        id: "longitud",
        category: "uncategorized",
        term: "la longitud",
        definition: "  the length",
        knowledgelevel: 0
    },
    {
        id: "losa",
        category: "uncategorized",
        term: "un losa",
        definition: "a slab, a paving stone",
        knowledgelevel: 0
    },
    {
        id: "lujo",
        category: "uncategorized",
        term: "el lujo",
        definition: "a luxury",
        knowledgelevel: 0
    },
    {
        id: "macuto",
        category: "uncategorized",
        term: "un macuto",
        definition: "  a backpack",
        knowledgelevel: 0
    },
    {
        id: "madrugador",
        category: "uncategorized",
        term: "un madrugador",
        definition: "an early bird",
        knowledgelevel: 0
    },
    {
        id: "maestría",
        category: "uncategorized",
        term: "una maestría",
        definition: "a mastery",
        knowledgelevel: 0
    },
    {
        id: "maestría_en_psicología",
        category: "uncategorized",
        term: "una maestría en psicología",
        definition: "a masters in psychology",
        knowledgelevel: 0
    },
    {
        id: "magulladura",
        category: "uncategorized",
        term: "una magulladura",
        definition: "a bruise",
        knowledgelevel: 0
    },
    {
        id: "males",
        category: "uncategorized",
        term: "los males",
        definition: "  the evils or sicknesses",
        knowledgelevel: 0
    },
    {
        id: "malestar",
        category: "uncategorized",
        term: "un malestar",
        definition: "a discomfort",
        knowledgelevel: 0
    },
    {
        id: "maletín",
        category: "uncategorized",
        term: "un maletín",
        definition: "a briefcase",
        knowledgelevel: 0
    },
    {
        id: "manada",
        category: "uncategorized",
        term: "la manada",
        definition: "the herd",
        knowledgelevel: 0
    },
    {
        id: "mañanero",
        category: "uncategorized",
        term: "mañanero (adj)",
        definition: "  morning adj como café mañanero",
        knowledgelevel: 0
    },
    {
        id: "manchado",
        category: "uncategorized",
        term: "manchado",
        definition: "stained",
        knowledgelevel: 0
    },
    {
        id: "manejo",
        category: "uncategorized",
        term: "el manejo",
        definition: "the management, handling, driving",
        knowledgelevel: 0
    },
    {
        id: "manglar",
        category: "uncategorized",
        term: "un manglar",
        definition: "a mangrove swamp",
        knowledgelevel: 0
    },
    {
        id: "manjar",
        category: "uncategorized",
        term: "un manjar",
        definition: "a delicacy",
        knowledgelevel: 0
    },
    {
        id: "mantos",
        category: "uncategorized",
        term: "los mantos",
        definition: "the cloaks, robes",
        knowledgelevel: 0
    },
    {
        id: "marchaba_según_lo_esperaba",
        category: "uncategorized",
        term: "marchaba según lo esperaba",
        definition: "  it was going as expected",
        knowledgelevel: 0
    },
    {
        id: "marrana",
        category: "uncategorized",
        term: "una marrana",
        definition: "a sow (female pig) or a slang bad word for women",
        knowledgelevel: 0
    },
    {
        id: "más_a_menudo",
        category: "uncategorized",
        term: "más a menudo",
        definition: "more often",
        knowledgelevel: 0
    },
    {
        id: "más_allá",
        category: "uncategorized",
        term: "más allá",
        definition: "  beyond, further",
        knowledgelevel: 0
    },
    {
        id: "materia",
        category: "uncategorized",
        term: "una materia",
        definition: "  a subject, like in school",
        knowledgelevel: 0
    },
    {
        id: "matorral",
        category: "uncategorized",
        term: "matorral",
        definition: "a scrub, bush, thicket",
        knowledgelevel: 0
    },
    {
        id: "mayúscula",
        category: "uncategorized",
        term: "mayúscula",
        definition: "  capital like capital letter in text",
        knowledgelevel: 0
    },
    {
        id: "me_doy_a_la_tarea",
        category: "uncategorized",
        term: "me doy a la tarea",
        definition: "I get onto the work, start working",
        knowledgelevel: 0
    },
    {
        id: "mechón",
        category: "uncategorized",
        term: "un mechón",
        definition: "  a lock, like a lock of hair",
        knowledgelevel: 0
    },
    {
        id: "mediante",
        category: "uncategorized",
        term: "mediante",
        definition: "through",
        knowledgelevel: 0
    },
    {
        id: "medicamentos",
        category: "uncategorized",
        term: "los medicamentos",
        definition: "  medications",
        knowledgelevel: 0
    },
    {
        id: "medida_preventiva",
        category: "uncategorized",
        term: "una medida preventiva",
        definition: "preventative measure",
        knowledgelevel: 0
    },
    {
        id: "medio_ambiente",
        category: "uncategorized",
        term: "un medio ambiente",
        definition: " an environment ",
        knowledgelevel: 0
    },
    {
        id: "medio_de_transporte",
        category: "uncategorized",
        term: "medio de transporte",
        definition: "means of transportation",
        knowledgelevel: 0
    },
    {
        id: "medio_oriente",
        category: "uncategorized",
        term: "el medio oriente",
        definition: "The Middle East",
        knowledgelevel: 0
    },
    {
        id: "meñique",
        category: "uncategorized",
        term: "meñique",
        definition: "pinky finger",
        knowledgelevel: 0
    },
    {
        id: "menso",
        category: "uncategorized",
        term: "menso",
        definition: "less",
        knowledgelevel: 0
    },
    {
        id: "menta",
        category: "uncategorized",
        term: "la menta",
        definition: "  the mint",
        knowledgelevel: 0
    },
    {
        id: "mercadeo",
        category: "uncategorized",
        term: "mercadeo",
        definition: "marketing",
        knowledgelevel: 0
    },
    {
        id: "mercancías",
        category: "uncategorized",
        term: "mercancías",
        definition: "  goods,  merchandise",
        knowledgelevel: 0
    },
    {
        id: "merienda",
        category: "uncategorized",
        term: "una merienda",
        definition: "a snack",
        knowledgelevel: 0
    },
    {
        id: "meter_la_pata",
        category: "uncategorized",
        term: "meter la pata",
        definition: "to screw up, to blunder",
        knowledgelevel: 0
    },
    {
        id: "método",
        category: "uncategorized",
        term: "un método",
        definition: "  a method",
        knowledgelevel: 0
    },
    {
        id: "mija",
        category: "uncategorized",
        term: "mija",
        definition: "  darling",
        knowledgelevel: 0
    },
    {
        id: "milagro",
        category: "uncategorized",
        term: "un milagro",
        definition: "a miracle",
        knowledgelevel: 0
    },
    {
        id: "mismísima",
        category: "uncategorized",
        term: "mismísima",
        definition: "  same,  same self",
        knowledgelevel: 0
    },
    {
        id: "moderada",
        category: "uncategorized",
        term: "moderada",
        definition: "moderate",
        knowledgelevel: 0
    },
    {
        id: "moho",
        category: "uncategorized",
        term: "el moho",
        definition: "the mold",
        knowledgelevel: 0
    },
    {
        id: "molesta/molesto",
        category: "uncategorized",
        term: "molesta/molesto (adj)",
        definition: "annoying",
        knowledgelevel: 0
    },
    {
        id: "momentáneamente",
        category: "uncategorized",
        term: "momentáneamente",
        definition: "momentarily",
        knowledgelevel: 0
    },
    {
        id: "montículo",
        category: "uncategorized",
        term: "un montículo",
        definition: "a mound",
        knowledgelevel: 0
    },
    {
        id: "mortal",
        category: "uncategorized",
        term: "mortal",
        definition: "  mortal or deadly, fatal",
        knowledgelevel: 0
    },
    {
        id: "motocicleta",
        category: "uncategorized",
        term: "una motocicleta",
        definition: "a motorcycle",
        knowledgelevel: 0
    },
    {
        id: "movible",
        category: "uncategorized",
        term: "movible",
        definition: " moveable",
        knowledgelevel: 0
    },
    {
        id: "mozos",
        category: "uncategorized",
        term: "los mozos",
        definition: "the waiters",
        knowledgelevel: 0
    },
    {
        id: "muchísimo_de_menos",
        category: "uncategorized",
        term: "muchísimo de menos",
        definition: " I miss it a lot",
        knowledgelevel: 0
    },
    {
        id: "mucosidad",
        category: "uncategorized",
        term: "la mucosidad",
        definition: "the mucus",
        knowledgelevel: 0
    },
    {
        id: "mudanza",
        category: "uncategorized",
        term: "una mudanza",
        definition: "  a move (like to a new city)",
        knowledgelevel: 0
    },
    {
        id: "mueca",
        category: "uncategorized",
        term: "una mueca",
        definition: "a grin",
        knowledgelevel: 0
    },
    {
        id: "muelle",
        category: "uncategorized",
        term: "un muelle",
        definition: "  a dock (at a port)",
        knowledgelevel: 0
    },
    {
        id: "muerto_de_susto",
        category: "uncategorized",
        term: "muerto de susto",
        definition: "  scared to death",
        knowledgelevel: 0
    },
    {
        id: "muestra",
        category: "uncategorized",
        term: "una muestra",
        definition: "a sample",
        knowledgelevel: 0
    },
    {
        id: "multa",
        category: "uncategorized",
        term: "una multa",
        definition: "a fine, penalty",
        knowledgelevel: 0
    },
    {
        id: "muñeca",
        category: "uncategorized",
        term: "muñeca",
        definition: " can mean wrist or doll",
        knowledgelevel: 0
    },
    {
        id: "mutuo_",
        category: "uncategorized",
        term: "mutuo (adj)",
        definition: "mutual",
        knowledgelevel: 0
    },
    {
        id: "nadador",
        category: "uncategorized",
        term: "un nadador",
        definition: "a swimmer",
        knowledgelevel: 0
    },
    {
        id: "neoyorquino",
        category: "uncategorized",
        term: "neoyorquina / neoyorquino",
        definition: "New Yorker",
        knowledgelevel: 0
    },
    {
        id: "nervio",
        category: "uncategorized",
        term: "un nervio",
        definition: "a nerve",
        knowledgelevel: 0
    },
    {
        id: "nerviosismo",
        category: "uncategorized",
        term: "el nerviosismo",
        definition: "nervousness",
        knowledgelevel: 0
    },
    {
        id: "neumático",
        category: "uncategorized",
        term: "un neumático",
        definition: "a tire",
        knowledgelevel: 0
    },
    {
        id: "no_obstante",
        category: "uncategorized",
        term: "no obstante",
        definition: "nevertheless",
        knowledgelevel: 0
    },
    {
        id: "no_sorprende",
        category: "uncategorized",
        term: "no sorprende",
        definition: "not surprising",
        knowledgelevel: 0
    },
    {
        id: "nocivo",
        category: "uncategorized",
        term: "nociva / nocivo (adj)",
        definition: "  harmful",
        knowledgelevel: 0
    },
    {
        id: "normalidad",
        category: "uncategorized",
        term: "la normalidad",
        definition: "the normal",
        knowledgelevel: 0
    },
    {
        id: "normas",
        category: "uncategorized",
        term: "las normas",
        definition: "the standards",
        knowledgelevel: 0
    },
    {
        id: "novedad",
        category: "uncategorized",
        term: "una novedad",
        definition: "a novelty",
        knowledgelevel: 0
    },
    {
        id: "novedosa",
        category: "uncategorized",
        term: "novedosa (adj)",
        definition: "novel",
        knowledgelevel: 0
    },
    {
        id: "núcleo",
        category: "uncategorized",
        term: "un núcleo",
        definition: "a core",
        knowledgelevel: 0
    },
    {
        id: "nuevamente",
        category: "uncategorized",
        term: "nuevamente",
        definition: "  again,  newly",
        knowledgelevel: 0
    },
    {
        id: "obstáculo",
        category: "uncategorized",
        term: "un obstáculo",
        definition: "an obstacle",
        knowledgelevel: 0
    },
    {
        id: "obstante",
        category: "uncategorized",
        term: "obstante",
        definition: "however",
        knowledgelevel: 0
    },
    {
        id: "occidental",
        category: "uncategorized",
        term: "occidental (adj)",
        definition: "Western",
        knowledgelevel: 0
    },
    {
        id: "odioso",
        category: "uncategorized",
        term: "odioso",
        definition: "hateful",
        knowledgelevel: 0
    },
    {
        id: "oficial_público",
        category: "uncategorized",
        term: "un oficial público",
        definition: "a public official",
        knowledgelevel: 0
    },
    {
        id: "oficios",
        category: "uncategorized",
        term: "los oficios",
        definition: "the trades, the jobs,the offices",
        knowledgelevel: 0
    },
    {
        id: "oído",
        category: "uncategorized",
        term: "un oído",
        definition: "an ear",
        knowledgelevel: 0
    },
    {
        id: "oleada",
        category: "uncategorized",
        term: "una oleada",
        definition: "  a wave, a surge",
        knowledgelevel: 0
    },
    {
        id: "olfato",
        category: "uncategorized",
        term: "un olfato",
        definition: "  a smell",
        knowledgelevel: 0
    },
    {
        id: "olla_de_presión",
        category: "uncategorized",
        term: "una olla de presión",
        definition: "  pressure cooker",
        knowledgelevel: 0
    },
    {
        id: "olor_fétido",
        category: "uncategorized",
        term: "un olor fétido",
        definition: "a foul smell",
        knowledgelevel: 0
    },
    {
        id: "ombligo",
        category: "uncategorized",
        term: "un ombligo",
        definition: "a belly button, navel",
        knowledgelevel: 0
    },
    {
        id: "ondas_sonoras",
        category: "uncategorized",
        term: "las ondas sonoras",
        definition: "the sound waves",
        knowledgelevel: 0
    },
    {
        id: "opaco",
        category: "uncategorized",
        term: "opaco",
        definition: "opaque",
        knowledgelevel: 0
    },
    {
        id: "opuesto",
        category: "uncategorized",
        term: "opuesto (adj)",
        definition: "opposite",
        knowledgelevel: 0
    },
    {
        id: "orden",
        category: "uncategorized",
        term: "el orden",
        definition: "the order, command",
        knowledgelevel: 0
    },
    {
        id: "ortiga",
        category: "uncategorized",
        term: "una ortiga",
        definition: "a nettle",
        knowledgelevel: 0
    },
    {
        id: "osezno",
        category: "uncategorized",
        term: "un osezno",
        definition: "a bear cub",
        knowledgelevel: 0
    },
    {
        id: "ostra",
        category: "uncategorized",
        term: "una ostra",
        definition: "  an oyster",
        knowledgelevel: 0
    },
    {
        id: "oxidada",
        category: "uncategorized",
        term: "oxidada (adj)",
        definition: "  rusty",
        knowledgelevel: 0
    },
    {
        id: "oyentes",
        category: "uncategorized",
        term: "los oyentes",
        definition: "the listeners",
        knowledgelevel: 0
    },
    {
        id: "paciencia",
        category: "uncategorized",
        term: "la paciencia",
        definition: "the patience",
        knowledgelevel: 0
    },
    {
        id: "paciente",
        category: "uncategorized",
        term: "un paciente",
        definition: "the patient",
        knowledgelevel: 0
    },
    {
        id: "pacifico",
        category: "uncategorized",
        term: "pacifico (adj)",
        definition: "peaceful",
        knowledgelevel: 0
    },
    {
        id: "pago",
        category: "uncategorized",
        term: "un pago",
        definition: "a payment",
        knowledgelevel: 0
    },
    {
        id: "pajarraco",
        category: "uncategorized",
        term: "un pajarraco",
        definition: "a bird",
        knowledgelevel: 0
    },
    {
        id: "palco",
        category: "uncategorized",
        term: "un palco",
        definition: "a box",
        knowledgelevel: 0
    },
    {
        id: "paloma",
        category: "uncategorized",
        term: "una paloma",
        definition: "a pigeon",
        knowledgelevel: 0
    },
    {
        id: "palomitas",
        category: "uncategorized",
        term: "las palomitas",
        definition: "  popcorn",
        knowledgelevel: 0
    },
    {
        id: "pan_comido",
        category: "uncategorized",
        term: "un pan comido",
        definition: "  a piece of cake",
        knowledgelevel: 0
    },
    {
        id: "pandero",
        category: "uncategorized",
        term: "un pandero",
        definition: "  a tamborine ",
        knowledgelevel: 0
    },
    {
        id: "para_ya!",
        category: "uncategorized",
        term: "para ya!",
        definition: "stop now!",
        knowledgelevel: 0
    },
    {
        id: "parabrisa",
        category: "uncategorized",
        term: "una parabrisa",
        definition: "a windshield",
        knowledgelevel: 0
    },
    {
        id: "paracaída",
        category: "uncategorized",
        term: "una paracaída",
        definition: "a parachute",
        knowledgelevel: 0
    },
    {
        id: "paradisíaco",
        category: "uncategorized",
        term: "paradisíaco (adj)",
        definition: "heavenly",
        knowledgelevel: 0
    },
    {
        id: "paraje",
        category: "uncategorized",
        term: "un paraje",
        definition: "a place",
        knowledgelevel: 0
    },
    {
        id: "paralelo",
        category: "uncategorized",
        term: "paralelo (adj)",
        definition: "parallel",
        knowledgelevel: 0
    },
    {
        id: "pararse_de_manos",
        category: "uncategorized",
        term: "una pararse de manos",
        definition: " a handstand",
        knowledgelevel: 0
    },
    {
        id: "parásito",
        category: "uncategorized",
        term: "un parásito",
        definition: "a parasite",
        knowledgelevel: 0
    },
    {
        id: "parcela",
        category: "uncategorized",
        term: "una parcela",
        definition: "a parcel, plot, patch",
        knowledgelevel: 0
    },
    {
        id: "parduzco",
        category: "uncategorized",
        term: "parduzco (adj)",
        definition: "brownish",
        knowledgelevel: 0
    },
    {
        id: "parecido",
        category: "uncategorized",
        term: "un parecido",
        definition: "a similarity",
        knowledgelevel: 0
    },
    {
        id: "párrafo",
        category: "uncategorized",
        term: "un párrafo",
        definition: " a paragraph",
        knowledgelevel: 0
    },
    {
        id: "pasajero",
        category: "uncategorized",
        term: "un pasajero",
        definition: "a passenger",
        knowledgelevel: 0
    },
    {
        id: "pasas",
        category: "uncategorized",
        term: "las pasas",
        definition: "the raisins",
        knowledgelevel: 0
    },
    {
        id: "pastar",
        category: "uncategorized",
        term: "un pastar",
        definition: " a pasture",
        knowledgelevel: 0
    },
    {
        id: "patrimonio",
        category: "uncategorized",
        term: "el patrimonio",
        definition: "the heritage",
        knowledgelevel: 0
    },
    {
        id: "patrón",
        category: "uncategorized",
        term: "un patrón",
        definition: "a pattern",
        knowledgelevel: 0
    },
    {
        id: "patrulla",
        category: "uncategorized",
        term: "una patrulla",
        definition: "a patrol",
        knowledgelevel: 0
    },
    {
        id: "payaso",
        category: "uncategorized",
        term: "un payaso",
        definition: "a clown",
        knowledgelevel: 0
    },
    {
        id: "pedido",
        category: "uncategorized",
        term: "el pedido",
        definition: "the order, the wish",
        knowledgelevel: 0
    },
    {
        id: "pegadizo",
        category: "uncategorized",
        term: "pegadizo (adj)",
        definition: "  catchy,  like a song",
        knowledgelevel: 0
    },
    {
        id: "pegar_cachetadas",
        category: "uncategorized",
        term: "pegar cachetadas",
        definition: "  to slap something",
        knowledgelevel: 0
    },
    {
        id: "pegar_codazos_y_rodillos",
        category: "uncategorized",
        term: "pegar codazos y rodillos",
        definition: "  to elbow or knee something or something",
        knowledgelevel: 0
    },
    {
        id: "peñasco",
        category: "uncategorized",
        term: "un peñasco",
        definition: "a boulder (rock)",
        knowledgelevel: 0
    },
    {
        id: "penetrante",
        category: "uncategorized",
        term: "penetrante (adj)",
        definition: "penetrating",
        knowledgelevel: 0
    },
    {
        id: "pepita",
        category: "uncategorized",
        term: "una pepita",
        definition: "a nugget, seed",
        knowledgelevel: 0
    },
    {
        id: "pequeñísima",
        category: "uncategorized",
        term: "pequeñísima",
        definition: "  tiny",
        knowledgelevel: 0
    },
    {
        id: "perno",
        category: "uncategorized",
        term: "un perno",
        definition: "a pin",
        knowledgelevel: 0
    },
    {
        id: "perro_adiestrado",
        category: "uncategorized",
        term: "un perro adiestrado",
        definition: "a trained dog",
        knowledgelevel: 0
    },
    {
        id: "perseverancia",
        category: "uncategorized",
        term: "la perseverancia",
        definition: "The perseverence",
        knowledgelevel: 0
    },
    {
        id: "personas_de_discapacidades",
        category: "uncategorized",
        term: "las personas de discapacidades",
        definition: "People with disabilities",
        knowledgelevel: 0
    },
    {
        id: "pesadilla",
        category: "uncategorized",
        term: "una pesadilla",
        definition: "  a nightmare",
        knowledgelevel: 0
    },
    {
        id: "pesca",
        category: "uncategorized",
        term: "la pesca",
        definition: "the fishing, the catch",
        knowledgelevel: 0
    },
    {
        id: "pese_a_que",
        category: "uncategorized",
        term: "pese a que",
        definition: "even though",
        knowledgelevel: 0
    },
    {
        id: "peso",
        category: "uncategorized",
        term: "peso",
        definition: "  weight",
        knowledgelevel: 0
    },
    {
        id: "pestaña",
        category: "uncategorized",
        term: "una pestaña",
        definition: "an eyelash",
        knowledgelevel: 0
    },
    {
        id: "pesticida",
        category: "uncategorized",
        term: "una pesticida",
        definition: "a pesticide",
        knowledgelevel: 0
    },
    {
        id: "petición",
        category: "uncategorized",
        term: "una petición",
        definition: "a request, demand",
        knowledgelevel: 0
    },
    {
        id: "petrolero",
        category: "uncategorized",
        term: "petrolero (adj)",
        definition: "  oil",
        knowledgelevel: 0
    },
    {
        id: "picada",
        category: "uncategorized",
        term: "una picada",
        definition: "  a dive? A bite?",
        knowledgelevel: 0
    },
    {
        id: "picazón",
        category: "uncategorized",
        term: "picazón",
        definition: "an itch",
        knowledgelevel: 0
    },
    {
        id: "picor",
        category: "uncategorized",
        term: "un picor",
        definition: "itching",
        knowledgelevel: 0
    },
    {
        id: "pila",
        category: "uncategorized",
        term: "una pila",
        definition: "  a pile, stack, cell (e.g., battery)",
        knowledgelevel: 0
    },
    {
        id: "pinzones",
        category: "uncategorized",
        term: "los pinzones",
        definition: "the finches (birds)",
        knowledgelevel: 0
    },
    {
        id: "piojos",
        category: "uncategorized",
        term: "los piojos",
        definition: "the lice",
        knowledgelevel: 0
    },
    {
        id: "pionero",
        category: "uncategorized",
        term: "un pionero",
        definition: "a pioneer",
        knowledgelevel: 0
    },
    {
        id: "piqueta",
        category: "uncategorized",
        term: "un piqueta",
        definition: "  a tiny sting like from an insect",
        knowledgelevel: 0
    },
    {
        id: "pista",
        category: "uncategorized",
        term: "pista",
        definition: "  clue,  or runway or track",
        knowledgelevel: 0
    },
    {
        id: "pista_con_obstáculos",
        category: "uncategorized",
        term: "una pista con obstáculos",
        definition: "an obstacle course",
        knowledgelevel: 0
    },
    {
        id: "pito",
        category: "uncategorized",
        term: "un pito",
        definition: "a whistle (un silbido)",
        knowledgelevel: 0
    },
    {
        id: "plata_",
        category: "uncategorized",
        term: "plata (adj)",
        definition: "  silver",
        knowledgelevel: 0
    },
    {
        id: "plataforma",
        category: "uncategorized",
        term: "una plataforma",
        definition: "a platform",
        knowledgelevel: 0
    },
    {
        id: "plática",
        category: "uncategorized",
        term: "una plática",
        definition: " a talk, chat",
        knowledgelevel: 0
    },
    {
        id: "platillo",
        category: "uncategorized",
        term: "un platillo",
        definition: "a saucer",
        knowledgelevel: 0
    },
    {
        id: "plazo",
        category: "uncategorized",
        term: "un plazo (como a largo plazo)",
        definition: "a term, like long term",
        knowledgelevel: 0
    },
    {
        id: "plazo_límite",
        category: "uncategorized",
        term: "un plazo límite",
        definition: "  a deadline",
        knowledgelevel: 0
    },
    {
        id: "pleno",
        category: "uncategorized",
        term: "pleno (adj)",
        definition: "full",
        knowledgelevel: 0
    },
    {
        id: "poblado",
        category: "uncategorized",
        term: "un poblado",
        definition: "a town",
        knowledgelevel: 0
    },
    {
        id: "poblador",
        category: "uncategorized",
        term: "un poblador",
        definition: "  a settler or inhabitant",
        knowledgelevel: 0
    },
    {
        id: "poco_comunes",
        category: "uncategorized",
        term: "poco comunes (adj)",
        definition: "uncommon",
        knowledgelevel: 0
    },
    {
        id: "poco_de_pena",
        category: "uncategorized",
        term: "un poco de pena",
        definition: "  a little sorry",
        knowledgelevel: 0
    },
    {
        id: "poco_natural",
        category: "uncategorized",
        term: "poco natural",
        definition: "unnatural",
        knowledgelevel: 0
    },
    {
        id: "poemario",
        category: "uncategorized",
        term: "un poemario",
        definition: "a collection of poems",
        knowledgelevel: 0
    },
    {
        id: "polinizador",
        category: "uncategorized",
        term: "un polinizador",
        definition: "a pollenator",
        knowledgelevel: 0
    },
    {
        id: "pomada",
        category: "uncategorized",
        term: "una pomada",
        definition: "an ointment",
        knowledgelevel: 0
    },
    {
        id: "ponerse_de_pie",
        category: "uncategorized",
        term: "ponerse de pie",
        definition: "to stand up",
        knowledgelevel: 0
    },
    {
        id: "ponerse_las_pilas",
        category: "uncategorized",
        term: "ponerse las pilas",
        definition: "  to get your act together, to start working on something",
        knowledgelevel: 0
    },
    {
        id: "ponte_cómodo",
        category: "uncategorized",
        term: "ponte cómodo",
        definition: "get comfortable",
        knowledgelevel: 0
    },
    {
        id: "por_completo",
        category: "uncategorized",
        term: "por completo",
        definition: "full, fully",
        knowledgelevel: 0
    },
    {
        id: "por_delante",
        category: "uncategorized",
        term: "por delante",
        definition: "  past",
        knowledgelevel: 0
    },
    {
        id: "por_dentro",
        category: "uncategorized",
        term: "por dentro",
        definition: "inside",
        knowledgelevel: 0
    },
    {
        id: "por_ello",
        category: "uncategorized",
        term: "por ello",
        definition: "  for this reason",
        knowledgelevel: 0
    },
    {
        id: "por_fuera",
        category: "uncategorized",
        term: "por fuera",
        definition: "outside",
        knowledgelevel: 0
    },
    {
        id: "por_otro_lado",
        category: "uncategorized",
        term: "por otro lado",
        definition: "  on the other hand",
        knowledgelevel: 0
    },
    {
        id: "por_si_mismos",
        category: "uncategorized",
        term: "por si mismos",
        definition: "  by themselves",
        knowledgelevel: 0
    },
    {
        id: "por_suerte",
        category: "uncategorized",
        term: "por suerte",
        definition: "luckily",
        knowledgelevel: 0
    },
    {
        id: "porcentaje",
        category: "uncategorized",
        term: "porcentaje",
        definition: "percentage",
        knowledgelevel: 0
    },
    {
        id: "porque",
        category: "uncategorized",
        term: "el porque",
        definition: "  the why, the reason",
        knowledgelevel: 0
    },
    {
        id: "porqueriza",
        category: "uncategorized",
        term: "la porqueriza",
        definition: "the pigsty",
        knowledgelevel: 0
    },
    {
        id: "portátil",
        category: "uncategorized",
        term: "portátil (adj)",
        definition: " portable",
        knowledgelevel: 0
    },
    {
        id: "posteriormente",
        category: "uncategorized",
        term: "posteriormente",
        definition: "subsequently",
        knowledgelevel: 0
    },
    {
        id: "precisa",
        category: "uncategorized",
        term: "precisa (adj)",
        definition: "precise",
        knowledgelevel: 0
    },
    {
        id: "precisamente",
        category: "uncategorized",
        term: "precisamente",
        definition: "precisely",
        knowledgelevel: 0
    },
    {
        id: "predilecto",
        category: "uncategorized",
        term: "predilecto (adj)",
        definition: "favorite, chosen",
        knowledgelevel: 0
    },
    {
        id: "premiada",
        category: "uncategorized",
        term: "premiada",
        definition: "awarded",
        knowledgelevel: 0
    },
    {
        id: "prenda",
        category: "uncategorized",
        term: "una prenda",
        definition: "  a garmet",
        knowledgelevel: 0
    },
    {
        id: "prenda_de_vestir",
        category: "uncategorized",
        term: "una prenda de vestir",
        definition: "  a garmet or piece of clothing",
        knowledgelevel: 0
    },
    {
        id: "prensa",
        category: "uncategorized",
        term: "la prensa",
        definition: "the press, the printing press",
        knowledgelevel: 0
    },
    {
        id: "presa",
        category: "uncategorized",
        term: "una presa",
        definition: "  a dam",
        knowledgelevel: 0
    },
    {
        id: "presión",
        category: "uncategorized",
        term: "la presión",
        definition: "the pressure",
        knowledgelevel: 0
    },
    {
        id: "presupuesto",
        category: "uncategorized",
        term: "un presupuesto",
        definition: "  a budget",
        knowledgelevel: 0
    },
    {
        id: "primeros_auxilios",
        category: "uncategorized",
        term: "primeros auxilios",
        definition: "first aid",
        knowledgelevel: 0
    },
    {
        id: "primoroso",
        category: "uncategorized",
        term: "primoroso",
        definition: "exquisite",
        knowledgelevel: 0
    },
    {
        id: "principiantes",
        category: "uncategorized",
        term: "los principiantes",
        definition: "the beginners",
        knowledgelevel: 0
    },
    {
        id: "principios_de_vida",
        category: "uncategorized",
        term: "los principios de vida",
        definition: "the life principles",
        knowledgelevel: 0
    },
    {
        id: "procesador",
        category: "uncategorized",
        term: "un procesador",
        definition: "the processor",
        knowledgelevel: 0
    },
    {
        id: "prodigio",
        category: "uncategorized",
        term: "un prodigio",
        definition: "a prodigy",
        knowledgelevel: 0
    },
    {
        id: "prodigioso",
        category: "uncategorized",
        term: "prodigioso",
        definition: "prodigious",
        knowledgelevel: 0
    },
    {
        id: "productores",
        category: "uncategorized",
        term: "los productores",
        definition: "  the producers",
        knowledgelevel: 0
    },
    {
        id: "promedio",
        category: "uncategorized",
        term: "un promedio",
        definition: "an average",
        knowledgelevel: 0
    },
    {
        id: "propietario",
        category: "uncategorized",
        term: "un propietario",
        definition: "An owner",
        knowledgelevel: 0
    },
    {
        id: "propio_de_determinados_lugares",
        category: "uncategorized",
        term: "propio de determinados lugares",
        definition: "  typical of certain places",
        knowledgelevel: 0
    },
    {
        id: "prosa",
        category: "uncategorized",
        term: "la prosa",
        definition: "the prose",
        knowledgelevel: 0
    },
    {
        id: "protuberancia",
        category: "uncategorized",
        term: "la protuberancia",
        definition: "the boss, jefe",
        knowledgelevel: 0
    },
    {
        id: "provecho",
        category: "uncategorized",
        term: "provecho",
        definition: "  advantage,  benefit",
        knowledgelevel: 0
    },
    {
        id: "proveedor",
        category: "uncategorized",
        term: "un proveedor",
        definition: "  provider, supplier",
        knowledgelevel: 0
    },
    {
        id: "pruebas",
        category: "uncategorized",
        term: "las pruebas",
        definition: "the tests, the studies, the proof",
        knowledgelevel: 0
    },
    {
        id: "psicólogo",
        category: "uncategorized",
        term: "un psicólogo",
        definition: "a psychologist",
        knowledgelevel: 0
    },
    {
        id: "pueblo_alejado",
        category: "uncategorized",
        term: "un pueblo alejado",
        definition: "a remote town",
        knowledgelevel: 0
    },
    {
        id: "puerta_corredizo",
        category: "uncategorized",
        term: "una puerta corredizo",
        definition: "A sliding door",
        knowledgelevel: 0
    },
    {
        id: "puesta_de_sol",
        category: "uncategorized",
        term: "la puesta de sol",
        definition: "the sunset",
        knowledgelevel: 0
    },
    {
        id: "pulga",
        category: "uncategorized",
        term: "una pulga",
        definition: "A flea",
        knowledgelevel: 0
    },
    {
        id: "pulgón",
        category: "uncategorized",
        term: "un pulgón",
        definition: "  an aphid",
        knowledgelevel: 0
    },
    {
        id: "puñado",
        category: "uncategorized",
        term: "un puñado",
        definition: "a handful",
        knowledgelevel: 0
    },
    {
        id: "puntaje",
        category: "uncategorized",
        term: "puntaje",
        definition: "a score",
        knowledgelevel: 0
    },
    {
        id: "puntiaguda_",
        category: "uncategorized",
        term: "puntiaguda (adj)",
        definition: "pointed",
        knowledgelevel: 0
    },
    {
        id: "puntos_de_sutura",
        category: "uncategorized",
        term: "unos puntos de sutura",
        definition: "some stitches",
        knowledgelevel: 0
    },
    {
        id: "pupitre",
        category: "uncategorized",
        term: "un pupitre",
        definition: "a desk",
        knowledgelevel: 0
    },
    {
        id: "puré",
        category: "uncategorized",
        term: "un puré",
        definition: "a puree",
        knowledgelevel: 0
    },
    {
        id: "purificador",
        category: "uncategorized",
        term: "una purificador",
        definition: "a purifier",
        knowledgelevel: 0
    },
    {
        id: "que_asco!",
        category: "uncategorized",
        term: "que asco!",
        definition: "  how disgusting!",
        knowledgelevel: 0
    },
    {
        id: "que_emocionante!",
        category: "uncategorized",
        term: "que emocionante!",
        definition: "how exciting!",
        knowledgelevel: 0
    },
    {
        id: "que_lata!",
        category: "uncategorized",
        term: "que lata!",
        definition: "what a drag!",
        knowledgelevel: 0
    },
    {
        id: "que_peste!",
        category: "uncategorized",
        term: "que peste!",
        definition: "what a pest!",
        knowledgelevel: 0
    },
    {
        id: "quedar_dormido",
        category: "uncategorized",
        term: "quedar dormido",
        definition: "to fall asleep",
        knowledgelevel: 0
    },
    {
        id: "quedarse_hecho_polvo",
        category: "uncategorized",
        term: "quedarse hecho polvo",
        definition: "  to be ruined or really tired",
        knowledgelevel: 0
    },
    {
        id: "queja",
        category: "uncategorized",
        term: "una queja",
        definition: "a complaint",
        knowledgelevel: 0
    },
    {
        id: "quemadura",
        category: "uncategorized",
        term: "una quemadura",
        definition: "a burn",
        knowledgelevel: 0
    },
    {
        id: "racismo",
        category: "uncategorized",
        term: "el racismo",
        definition: "the racism",
        knowledgelevel: 0
    },
    {
        id: "ráfaga",
        category: "uncategorized",
        term: "una ráfaga",
        definition: "a burst",
        knowledgelevel: 0
    },
    {
        id: "rampa",
        category: "uncategorized",
        term: "una rampa",
        definition: "a ramp",
        knowledgelevel: 0
    },
    {
        id: "ranura",
        category: "uncategorized",
        term: "una ranura",
        definition: "a slot",
        knowledgelevel: 0
    },
    {
        id: "rara_vez",
        category: "uncategorized",
        term: "rara vez",
        definition: "seldom",
        knowledgelevel: 0
    },
    {
        id: "rasgado",
        category: "uncategorized",
        term: "rasgado (adj)",
        definition: "torn, ripped",
        knowledgelevel: 0
    },
    {
        id: "rasgo",
        category: "uncategorized",
        term: "un rasgo",
        definition: "a feature, a trait",
        knowledgelevel: 0
    },
    {
        id: "raspadura",
        category: "uncategorized",
        term: "una raspadura",
        definition: "an abrasion",
        knowledgelevel: 0
    },
    {
        id: "raspón",
        category: "uncategorized",
        term: "un raspón",
        definition: "a scrape",
        knowledgelevel: 0
    },
    {
        id: "raya",
        category: "uncategorized",
        term: "una raya",
        definition: "  a stripe",
        knowledgelevel: 0
    },
    {
        id: "realizada_por",
        category: "uncategorized",
        term: "la realizada por",
        definition: "  the one made by",
        knowledgelevel: 0
    },
    {
        id: "rebanada",
        category: "uncategorized",
        term: "una rebanada",
        definition: " a slice",
        knowledgelevel: 0
    },
    {
        id: "recámara",
        category: "uncategorized",
        term: "una recámara",
        definition: "  a bedroom",
        knowledgelevel: 0
    },
    {
        id: "rechazo",
        category: "uncategorized",
        term: "un rechazo",
        definition: "  a rejection",
        knowledgelevel: 0
    },
    {
        id: "recién_hoy",
        category: "uncategorized",
        term: "recién hoy",
        definition: "  just today",
        knowledgelevel: 0
    },
    {
        id: "recio_",
        category: "uncategorized",
        term: "recio (adj)",
        definition: "tough",
        knowledgelevel: 0
    },
    {
        id: "recogida",
        category: "uncategorized",
        term: "la recogida",
        definition: "the collection",
        knowledgelevel: 0
    },
    {
        id: "recompensa",
        category: "uncategorized",
        term: "una recompensa",
        definition: "a reward",
        knowledgelevel: 0
    },
    {
        id: "reconocimiento",
        category: "uncategorized",
        term: "un reconocimiento",
        definition: "a recognition",
        knowledgelevel: 0
    },
    {
        id: "recorrido",
        category: "uncategorized",
        term: "el recorrido",
        definition: "the route",
        knowledgelevel: 0
    },
    {
        id: "recreativa",
        category: "uncategorized",
        term: "recreativa (adj)",
        definition: "recreational",
        knowledgelevel: 0
    },
    {
        id: "recreo",
        category: "uncategorized",
        term: "el recreo",
        definition: "the recreation",
        knowledgelevel: 0
    },
    {
        id: "redil",
        category: "uncategorized",
        term: "el redil",
        definition: " the fold, or the sheep or donkey house",
        knowledgelevel: 0
    },
    {
        id: "regadera",
        category: "uncategorized",
        term: "una regadera",
        definition: "A watering can",
        knowledgelevel: 0
    },
    {
        id: "regaño",
        category: "uncategorized",
        term: "un regaño",
        definition: "  a scolding",
        knowledgelevel: 0
    },
    {
        id: "regazo",
        category: "uncategorized",
        term: "un regazo",
        definition: "a lap",
        knowledgelevel: 0
    },
    {
        id: "reglamento",
        category: "uncategorized",
        term: "un reglamento",
        definition: "a regulation",
        knowledgelevel: 0
    },
    {
        id: "regocijo",
        category: "uncategorized",
        term: "el regocijo",
        definition: "the joy",
        knowledgelevel: 0
    },
    {
        id: "rejilla",
        category: "uncategorized",
        term: "una rejilla",
        definition: "  a grate or vent",
        knowledgelevel: 0
    },
    {
        id: "relacionado",
        category: "uncategorized",
        term: "relacionado",
        definition: " related ",
        knowledgelevel: 0
    },
    {
        id: "relacionar_entre_sí",
        category: "uncategorized",
        term: "relacionar entre sí",
        definition: "  to relate to each other",
        knowledgelevel: 0
    },
    {
        id: "relato",
        category: "uncategorized",
        term: "un relato",
        definition: "  a retelling",
        knowledgelevel: 0
    },
    {
        id: "relieve",
        category: "uncategorized",
        term: "el relieve",
        definition: "  the relief, the surface",
        knowledgelevel: 0
    },
    {
        id: "reluciente",
        category: "uncategorized",
        term: "reluciente (adj)",
        definition: "shimmering",
        knowledgelevel: 0
    },
    {
        id: "renovable",
        category: "uncategorized",
        term: "renovable (adj)",
        definition: "renwable",
        knowledgelevel: 0
    },
    {
        id: "repentino",
        category: "uncategorized",
        term: "repentino",
        definition: "sudden",
        knowledgelevel: 0
    },
    {
        id: "repleto",
        category: "uncategorized",
        term: "repleto",
        definition: "  full",
        knowledgelevel: 0
    },
    {
        id: "requisito",
        category: "uncategorized",
        term: "un requisito",
        definition: "  a requirement",
        knowledgelevel: 0
    },
    {
        id: "reseco",
        category: "uncategorized",
        term: "reseco",
        definition: "  parched",
        knowledgelevel: 0
    },
    {
        id: "reservas",
        category: "uncategorized",
        term: "las reservas",
        definition: "the reservations",
        knowledgelevel: 0
    },
    {
        id: "residuo",
        category: "uncategorized",
        term: "el residuo",
        definition: "the residue",
        knowledgelevel: 0
    },
    {
        id: "respectivo",
        category: "uncategorized",
        term: "respectivo",
        definition: "respective",
        knowledgelevel: 0
    },
    {
        id: "restos",
        category: "uncategorized",
        term: "los restos",
        definition: "  remains, leftovers",
        knowledgelevel: 0
    },
    {
        id: "resuelto",
        category: "uncategorized",
        term: "resuelto (adj)",
        definition: "  deturmined,  resolved",
        knowledgelevel: 0
    },
    {
        id: "resultar_herido",
        category: "uncategorized",
        term: "resultar herido",
        definition: "  to get hurt",
        knowledgelevel: 0
    },
    {
        id: "retorcido",
        category: "uncategorized",
        term: "retorcido (adj)",
        definition: "twisted",
        knowledgelevel: 0
    },
    {
        id: "retrato",
        category: "uncategorized",
        term: "un retrato",
        definition: "a portrait",
        knowledgelevel: 0
    },
    {
        id: "revelación",
        category: "uncategorized",
        term: "una revelación",
        definition: "a revelation",
        knowledgelevel: 0
    },
    {
        id: "revista_de_moda",
        category: "uncategorized",
        term: "una revista de moda",
        definition: "  a fashion magazine",
        knowledgelevel: 0
    },
    {
        id: "revoltijo",
        category: "uncategorized",
        term: "un revoltijo",
        definition: "a jumble",
        knowledgelevel: 0
    },
    {
        id: "rico",
        category: "uncategorized",
        term: "rico",
        definition: "  rich, wealthy, delicious",
        knowledgelevel: 0
    },
    {
        id: "rifle",
        category: "uncategorized",
        term: "rifle",
        definition: "rifle",
        knowledgelevel: 0
    },
    {
        id: "rígido",
        category: "uncategorized",
        term: "rígido",
        definition: "rigid",
        knowledgelevel: 0
    },
    {
        id: "ristra",
        category: "uncategorized",
        term: "una ristra",
        definition: "a string, a rope",
        knowledgelevel: 0
    },
    {
        id: "impactante",
        category: "uncategorized",
        term: "impactante (adj)",
        definition: "shocking",
        knowledgelevel: 0
    },
    {
        id: "roble",
        category: "uncategorized",
        term: "un roble",
        definition: "an oak, oak tree",
        knowledgelevel: 0
    },
    {
        id: "roce",
        category: "uncategorized",
        term: "el roce",
        definition: "the touch",
        knowledgelevel: 0
    },
    {
        id: "rodaje",
        category: "uncategorized",
        term: "el rodaje",
        definition: "the filming",
        knowledgelevel: 0
    },
    {
        id: "rodillera",
        category: "uncategorized",
        term: "una rodillera",
        definition: "a knee pad",
        knowledgelevel: 0
    },
    {
        id: "roma",
        category: "uncategorized",
        term: "roma",
        definition: "Rome",
        knowledgelevel: 0
    },
    {
        id: "rosca",
        category: "uncategorized",
        term: "una rosca",
        definition: "  a thread or bagel",
        knowledgelevel: 0
    },
    {
        id: "rubíes",
        category: "uncategorized",
        term: "los rubíes",
        definition: "the rubies",
        knowledgelevel: 0
    },
    {
        id: "rugoso",
        category: "uncategorized",
        term: "rugosa /rugoso",
        definition: "rough",
        knowledgelevel: 0
    },
    {
        id: "rumbo",
        category: "uncategorized",
        term: "un rumbo",
        definition: "  a course, route",
        knowledgelevel: 0
    },
    {
        id: "sabana",
        category: "uncategorized",
        term: "la sabana",
        definition: "the sheet (like paper) or the savannah (like Africa)",
        knowledgelevel: 0
    },
    {
        id: "sabiduría",
        category: "uncategorized",
        term: "la sabiduría",
        definition: "the wisdom",
        knowledgelevel: 0
    },
    {
        id: "sabroso",
        category: "uncategorized",
        term: "sabroso (adj)",
        definition: "tasty",
        knowledgelevel: 0
    },
    {
        id: "sagrada",
        category: "uncategorized",
        term: "sagrada (adj)",
        definition: "sacred",
        knowledgelevel: 0
    },
    {
        id: "sala",
        category: "uncategorized",
        term: "la sala",
        definition: " de emergencia",
        knowledgelevel: 0
    },
    {
        id: "saltón",
        category: "uncategorized",
        term: "saltón (adj)",
        definition: "  protruding,  jumping out",
        knowledgelevel: 0
    },
    {
        id: "sanción",
        category: "uncategorized",
        term: "la sanción",
        definition: "the sanction",
        knowledgelevel: 0
    },
    {
        id: "saneamiento",
        category: "uncategorized",
        term: "saneamiento",
        definition: "sanitation",
        knowledgelevel: 0
    },
    {
        id: "sargento",
        category: "uncategorized",
        term: "el sargento",
        definition: "the sergent",
        knowledgelevel: 0
    },
    {
        id: "savia",
        category: "uncategorized",
        term: "la savia",
        definition: "the sap",
        knowledgelevel: 0
    },
    {
        id: "sazón",
        category: "uncategorized",
        term: "el sazón",
        definition: "the seasoning",
        knowledgelevel: 0
    },
    {
        id: "se_hace_de_pronto",
        category: "uncategorized",
        term: "se hace de pronto",
        definition: "it happens suddenly",
        knowledgelevel: 0
    },
    {
        id: "seda",
        category: "uncategorized",
        term: "la seda",
        definition: " the silk",
        knowledgelevel: 0
    },
    {
        id: "sediento",
        category: "uncategorized",
        term: "sediento (adj)",
        definition: "thirsty",
        knowledgelevel: 0
    },
    {
        id: "seguimiento",
        category: "uncategorized",
        term: "un seguimiento",
        definition: "a follow-up",
        knowledgelevel: 0
    },
    {
        id: "según_parece",
        category: "uncategorized",
        term: "según parece",
        definition: "as it seems",
        knowledgelevel: 0
    },
    {
        id: "sembradíos",
        category: "uncategorized",
        term: "los sembradíos",
        definition: "the crops",
        knowledgelevel: 0
    },
    {
        id: "semejante",
        category: "uncategorized",
        term: "semejante (adj)",
        definition: "such, similar, like",
        knowledgelevel: 0
    },
    {
        id: "semejanza",
        category: "uncategorized",
        term: "una semejanza",
        definition: "a likeness, similarity",
        knowledgelevel: 0
    },
    {
        id: "sentarse_más_derecha",
        category: "uncategorized",
        term: "sentarse más derecha",
        definition: "to sit straighter",
        knowledgelevel: 0
    },
    {
        id: "sentido_común",
        category: "uncategorized",
        term: "el sentido común",
        definition: "the common sense",
        knowledgelevel: 0
    },
    {
        id: "sepamos",
        category: "uncategorized",
        term: "sepamos",
        definition: "  let us know",
        knowledgelevel: 0
    },
    {
        id: "sereno",
        category: "uncategorized",
        term: "serena / sereno (adj)",
        definition: "serene",
        knowledgelevel: 0
    },
    {
        id: "serie",
        category: "uncategorized",
        term: "una serie",
        definition: "A series",
        knowledgelevel: 0
    },
    {
        id: "serrucho",
        category: "uncategorized",
        term: "un serrucho",
        definition: "a saw",
        knowledgelevel: 0
    },
    {
        id: "seta",
        category: "uncategorized",
        term: "una seta",
        definition: "  a mushroom",
        knowledgelevel: 0
    },
    {
        id: "si_que_los",
        category: "uncategorized",
        term: "si que los",
        definition: " hay",
        knowledgelevel: 0
    },
    {
        id: "si_usar",
        category: "uncategorized",
        term: "si usar",
        definition: "whether to use",
        knowledgelevel: 0
    },
    {
        id: "siembras",
        category: "uncategorized",
        term: "las siembras",
        definition: "the sowing",
        knowledgelevel: 0
    },
    {
        id: "sigiloso",
        category: "uncategorized",
        term: "sigiloso (adj)",
        definition: "secretive",
        knowledgelevel: 0
    },
    {
        id: "siglas",
        category: "uncategorized",
        term: "las siglas",
        definition: "the acronym",
        knowledgelevel: 0
    },
    {
        id: "silla",
        category: "uncategorized",
        term: "silla",
        definition: " de ruedas",
        knowledgelevel: 0
    },
    {
        id: "simulacros",
        category: "uncategorized",
        term: "los simulacros",
        definition: "The drills or simulations",
        knowledgelevel: 0
    },
    {
        id: "sin_cambio_aparente",
        category: "uncategorized",
        term: "sin cambio aparente",
        definition: "no apparent change",
        knowledgelevel: 0
    },
    {
        id: "sinfonía",
        category: "uncategorized",
        term: "un sinfonía",
        definition: "a symphony",
        knowledgelevel: 0
    },
    {
        id: "sino_que_además",
        category: "uncategorized",
        term: "sino que además",
        definition: " but also",
        knowledgelevel: 0
    },
    {
        id: "síntomas",
        category: "uncategorized",
        term: "los síntomas",
        definition: "the symptoms",
        knowledgelevel: 0
    },
    {
        id: "sismos",
        category: "uncategorized",
        term: "los sismos",
        definition: "the earthquakes",
        knowledgelevel: 0
    },
    {
        id: "sistema_digestivo",
        category: "uncategorized",
        term: "un sistema digestivo",
        definition: "  digestive system",
        knowledgelevel: 0
    },
    {
        id: "sobra",
        category: "uncategorized",
        term: "una sobra",
        definition: "a surplus",
        knowledgelevel: 0
    },
    {
        id: "sobre",
        category: "uncategorized",
        term: "el sobre",
        definition: "the envelope",
        knowledgelevel: 0
    },
    {
        id: "sobrenatural",
        category: "uncategorized",
        term: "sobrenatural",
        definition: "supernatural",
        knowledgelevel: 0
    },
    {
        id: "sobreexplotación",
        category: "uncategorized",
        term: "sobreexplotación",
        definition: "overexploitation",
        knowledgelevel: 0
    },
    {
        id: "sol_poner",
        category: "uncategorized",
        term: "el sol poner",
        definition: "the sunset",
        knowledgelevel: 0
    },
    {
        id: "solo_faltan_dos_semanas",
        category: "uncategorized",
        term: "solo faltan dos semanas",
        definition: "  only 2 weeks left",
        knowledgelevel: 0
    },
    {
        id: "sopetón",
        category: "uncategorized",
        term: "sopetón (adj)",
        definition: "suddenly",
        knowledgelevel: 0
    },
    {
        id: "soplo",
        category: "uncategorized",
        term: "un soplo",
        definition: "a breath, puff, blow",
        knowledgelevel: 0
    },
    {
        id: "sordo/sorda",
        category: "uncategorized",
        term: "sordo/sorda (adj)",
        definition: "  deaf",
        knowledgelevel: 0
    },
    {
        id: "sucesivamente",
        category: "uncategorized",
        term: "sucesivamente",
        definition: "  successively ",
        knowledgelevel: 0
    },
    {
        id: "sucesos",
        category: "uncategorized",
        term: "los sucesos",
        definition: "the events",
        knowledgelevel: 0
    },
    {
        id: "sudor",
        category: "uncategorized",
        term: "sudor",
        definition: "  sweat",
        knowledgelevel: 0
    },
    {
        id: "sueldo",
        category: "uncategorized",
        term: "un sueldo",
        definition: "a salary",
        knowledgelevel: 0
    },
    {
        id: "suelto",
        category: "uncategorized",
        term: "suelta / suelto",
        definition: " loose (como ropa)",
        knowledgelevel: 0
    },
    {
        id: "suelta_eso!",
        category: "uncategorized",
        term: "suelta eso!",
        definition: "drop that!",
        knowledgelevel: 0
    },
    {
        id: "sujeto",
        category: "uncategorized",
        term: "un sujeto",
        definition: "  a subject",
        knowledgelevel: 0
    },
    {
        id: "suma",
        category: "uncategorized",
        term: "una suma",
        definition: "  an amount",
        knowledgelevel: 0
    },
    {
        id: "sumamente",
        category: "uncategorized",
        term: "sumamente (adj)",
        definition: "extremely",
        knowledgelevel: 0
    },
    {
        id: "suministro",
        category: "uncategorized",
        term: "un suministro",
        definition: "a supply",
        knowledgelevel: 0
    },
    {
        id: "supervivencia",
        category: "uncategorized",
        term: "la supervivencia",
        definition: "the survival",
        knowledgelevel: 0
    },
    {
        id: "superviviente",
        category: "uncategorized",
        term: "un superviviente",
        definition: " a survivor",
        knowledgelevel: 0
    },
    {
        id: "suposición",
        category: "uncategorized",
        term: "una suposición",
        definition: "an assumption",
        knowledgelevel: 0
    },
    {
        id: "surtidor",
        category: "uncategorized",
        term: "un surtidor",
        definition: "a pump, a jet",
        knowledgelevel: 0
    },
    {
        id: "sustentable",
        category: "uncategorized",
        term: "sustentable",
        definition: "sustainable",
        knowledgelevel: 0
    },
    {
        id: "suyo",
        category: "uncategorized",
        term: "suyo",
        definition: "his",
        knowledgelevel: 0
    },
    {
        id: "tableta",
        category: "uncategorized",
        term: "una tableta",
        definition: "  tablet like iPad",
        knowledgelevel: 0
    },
    {
        id: "tala",
        category: "uncategorized",
        term: "la tala",
        definition: " ilegal",
        knowledgelevel: 0
    },
    {
        id: "tales_",
        category: "uncategorized",
        term: "tales (adj)",
        definition: "such, suchlike",
        knowledgelevel: 0
    },
    {
        id: "tamaño_mediano",
        category: "uncategorized",
        term: "tamaño mediano",
        definition: "medium size",
        knowledgelevel: 0
    },
    {
        id: "te_echo",
        category: "uncategorized",
        term: "te echo",
        definition: " I miss you",
        knowledgelevel: 0
    },
    {
        id: "tejado",
        category: "uncategorized",
        term: "un tejado",
        definition: "  a roof",
        knowledgelevel: 0
    },
    {
        id: "tejido",
        category: "uncategorized",
        term: "un tejido",
        definition: " a tissue or cloth",
        knowledgelevel: 0
    },
    {
        id: "telar",
        category: "uncategorized",
        term: "un telar",
        definition: "a loom",
        knowledgelevel: 0
    },
    {
        id: "telón",
        category: "uncategorized",
        term: "el telón",
        definition: "  the curtain like in a play",
        knowledgelevel: 0
    },
    {
        id: "temblores",
        category: "uncategorized",
        term: "los temblores",
        definition: "the tremors",
        knowledgelevel: 0
    },
    {
        id: "tembloroso",
        category: "uncategorized",
        term: "tembloroso (adj)",
        definition: "trembling, shaky",
        knowledgelevel: 0
    },
    {
        id: "temor",
        category: "uncategorized",
        term: "un temor",
        definition: "a fear",
        knowledgelevel: 0
    },
    {
        id: "témpano",
        category: "uncategorized",
        term: "un témpano",
        definition: "an iceberg",
        knowledgelevel: 0
    },
    {
        id: "temperatura_media",
        category: "uncategorized",
        term: "la temperatura media",
        definition: "  the average temperature",
        knowledgelevel: 0
    },
    {
        id: "tener_en_cuenta",
        category: "uncategorized",
        term: "tener en cuenta",
        definition: "  to take into account",
        knowledgelevel: 0
    },
    {
        id: "tengo_montado_una_cosa",
        category: "uncategorized",
        term: "tengo montado una cosa",
        definition: "  i have set up",
        knowledgelevel: 0
    },
    {
        id: "teoría",
        category: "uncategorized",
        term: "la teoría",
        definition: " the theory",
        knowledgelevel: 0
    },
    {
        id: "térmico",
        category: "uncategorized",
        term: "térmico (adj)",
        definition: "thermal",
        knowledgelevel: 0
    },
    {
        id: "término",
        category: "uncategorized",
        term: "el término",
        definition: "the term, the end",
        knowledgelevel: 0
    },
    {
        id: "tianguis",
        category: "uncategorized",
        term: "los tianguis",
        definition: "the market",
        knowledgelevel: 0
    },
    {
        id: "tienda_de_comestible",
        category: "uncategorized",
        term: "una tienda de comestible",
        definition: "  a grocery store",
        knowledgelevel: 0
    },
    {
        id: "tieso_",
        category: "uncategorized",
        term: "tieso (adj)",
        definition: "stiff",
        knowledgelevel: 0
    },
    {
        id: "tipo",
        category: "uncategorized",
        term: "tipo",
        definition: "  type  or guy",
        knowledgelevel: 0
    },
    {
        id: "títere",
        category: "uncategorized",
        term: "un títere",
        definition: "a puppet",
        knowledgelevel: 0
    },
    {
        id: "titular",
        category: "uncategorized",
        term: "un titular",
        definition: "A holder, or a headline",
        knowledgelevel: 0
    },
    {
        id: "tobogán",
        category: "uncategorized",
        term: "un tobogán",
        definition: "  a slide (like in a kids playground)",
        knowledgelevel: 0
    },
    {
        id: "toditos",
        category: "uncategorized",
        term: "toditos",
        definition: "  everyone",
        knowledgelevel: 0
    },
    {
        id: "tomar_a_broma",
        category: "uncategorized",
        term: "tomar a broma",
        definition: "  to take something as a joke",
        knowledgelevel: 0
    },
    {
        id: "tomar_la_palabra",
        category: "uncategorized",
        term: "tomar la palabra",
        definition: "  take the floor (expression)",
        knowledgelevel: 0
    },
    {
        id: "tonada",
        category: "uncategorized",
        term: "una tonada",
        definition: "  a tune",
        knowledgelevel: 0
    },
    {
        id: "tono",
        category: "uncategorized",
        term: "un tono",
        definition: "a tone",
        knowledgelevel: 0
    },
    {
        id: "torbellino",
        category: "uncategorized",
        term: "un torbellino",
        definition: "a whirlwind",
        knowledgelevel: 0
    },
    {
        id: "torrente",
        category: "uncategorized",
        term: "un torrente",
        definition: "a torrent, a stream",
        knowledgelevel: 0
    },
    {
        id: "tostadas_francesas",
        category: "uncategorized",
        term: "las tostadas francesas",
        definition: "the french toast",
        knowledgelevel: 0
    },
    {
        id: "transitada",
        category: "uncategorized",
        term: "transitada (adj)",
        definition: "busy",
        knowledgelevel: 0
    },
    {
        id: "trapo",
        category: "uncategorized",
        term: "un trapo",
        definition: "a rag, a cloth",
        knowledgelevel: 0
    },
    {
        id: "tratamiento",
        category: "uncategorized",
        term: "tratamiento",
        definition: "  treatment (como un grupo en una estudia medical)",
        knowledgelevel: 0
    },
    {
        id: "trato",
        category: "uncategorized",
        term: "el trato",
        definition: "  the deal or the treatment",
        knowledgelevel: 0
    },
    {
        id: "trato_injusto",
        category: "uncategorized",
        term: "el trato injusto",
        definition: "the unfair treatment",
        knowledgelevel: 0
    },
    {
        id: "travesía",
        category: "uncategorized",
        term: "una travesía",
        definition: "a passage, crossing, sailing",
        knowledgelevel: 0
    },
    {
        id: "travesura",
        category: "uncategorized",
        term: "la travesura",
        definition: "the mischief",
        knowledgelevel: 0
    },
    {
        id: "trazo",
        category: "uncategorized",
        term: "el trazo",
        definition: "the streak, stroke",
        knowledgelevel: 0
    },
    {
        id: "tribunal",
        category: "uncategorized",
        term: "un tribunal",
        definition: "  the court of law",
        knowledgelevel: 0
    },
    {
        id: "tripas",
        category: "uncategorized",
        term: "las tripas",
        definition: "the guts, the innards",
        knowledgelevel: 0
    },
    {
        id: "triunfo",
        category: "uncategorized",
        term: "el triunfo",
        definition: "  the triumph",
        knowledgelevel: 0
    },
    {
        id: "trompa",
        category: "uncategorized",
        term: "la trompa",
        definition: "  the trunk like of an elephant",
        knowledgelevel: 0
    },
    {
        id: "trueque",
        category: "uncategorized",
        term: "trueque",
        definition: "barter",
        knowledgelevel: 0
    },
    {
        id: "tubérculo",
        category: "uncategorized",
        term: "un tubérculo",
        definition: " root vegetable, tuber",
        knowledgelevel: 0
    },
    {
        id: "tumba",
        category: "uncategorized",
        term: "una tumba",
        definition: "a grave, a tomb",
        knowledgelevel: 0
    },
    {
        id: "túnez",
        category: "uncategorized",
        term: "túnez",
        definition: "  Tunisia",
        knowledgelevel: 0
    },
    {
        id: "túnica",
        category: "uncategorized",
        term: "una túnica",
        definition: "  a robe",
        knowledgelevel: 0
    },
    {
        id: "tupido",
        category: "uncategorized",
        term: "tupido",
        definition: "  dense like a dense jungle",
        knowledgelevel: 0
    },
    {
        id: "tener_lugar",
        category: "uncategorized",
        term: "tener lugar",
        definition: "to take place",
        knowledgelevel: 0
    },
    {
        id: "tuvo_presente",
        category: "uncategorized",
        term: "tuvo presente",
        definition: "had in mind",
        knowledgelevel: 0
    },
    {
        id: "unidad",
        category: "uncategorized",
        term: "una unidad",
        definition: "a unit, or unity, or oneness",
        knowledgelevel: 0
    },
    {
        id: "unos_a_otros",
        category: "uncategorized",
        term: "unos a otros",
        definition: "each other",
        knowledgelevel: 0
    },
    {
        id: "unos_flamencos",
        category: "uncategorized",
        term: "unos flamencos",
        definition: "  some flamingos",
        knowledgelevel: 0
    },
    {
        id: "unos_utensilios",
        category: "uncategorized",
        term: "unos utensilios",
        definition: "  some tools or utensils",
        knowledgelevel: 0
    },
    {
        id: "urticante",
        category: "uncategorized",
        term: "urticante (-adj)",
        definition: "  stinging",
        knowledgelevel: 0
    },
    {
        id: "vago",
        category: "uncategorized",
        term: "vago (adj)",
        definition: "lazy",
        knowledgelevel: 0
    },
    {
        id: "vale",
        category: "uncategorized",
        term: "vale",
        definition: "Okay",
        knowledgelevel: 0
    },
    {
        id: "vale_la_pena",
        category: "uncategorized",
        term: "vale la pena",
        definition: "it's worth it",
        knowledgelevel: 0
    },
    {
        id: "valla",
        category: "uncategorized",
        term: "una valla",
        definition: "a fence",
        knowledgelevel: 0
    },
    {
        id: "vara",
        category: "uncategorized",
        term: "una vara",
        definition: "a stick, rod, cane",
        knowledgelevel: 0
    },
    {
        id: "varón",
        category: "uncategorized",
        term: "un varón",
        definition: "a male, a man",
        knowledgelevel: 0
    },
    {
        id: "vasija",
        category: "uncategorized",
        term: "una vasija",
        definition: "a vessel",
        knowledgelevel: 0
    },
    {
        id: "vasto",
        category: "uncategorized",
        term: "vasto",
        definition: "vast",
        knowledgelevel: 0
    },
    {
        id: "vello",
        category: "uncategorized",
        term: "un vello",
        definition: "a hair, fuzz",
        knowledgelevel: 0
    },
    {
        id: "vendaje",
        category: "uncategorized",
        term: "un vendaje",
        definition: "a bandage",
        knowledgelevel: 0
    },
    {
        id: "venida_a_menos",
        category: "uncategorized",
        term: "una venida a menos",
        definition: " a downfall",
        knowledgelevel: 0
    },
    {
        id: "venta",
        category: "uncategorized",
        term: "la venta",
        definition: "the sale",
        knowledgelevel: 0
    },
    {
        id: "ventanilla",
        category: "uncategorized",
        term: "la ventanilla",
        definition: "the window",
        knowledgelevel: 0
    },
    {
        id: "vereda",
        category: "uncategorized",
        term: "una vereda",
        definition: "a sidewalk",
        knowledgelevel: 0
    },
    {
        id: "vergonzoso",
        category: "uncategorized",
        term: "vergonzoso (adj)",
        definition: "shameful",
        knowledgelevel: 0
    },
    {
        id: "verja",
        category: "uncategorized",
        term: "una verja",
        definition: "a gate",
        knowledgelevel: 0
    },
    {
        id: "vertedero",
        category: "uncategorized",
        term: "un vertedero",
        definition: "  a landfill",
        knowledgelevel: 0
    },
    {
        id: "vertiente",
        category: "uncategorized",
        term: "un vertiente",
        definition: "a slope",
        knowledgelevel: 0
    },
    {
        id: "vestimenta",
        category: "uncategorized",
        term: "una vestimenta",
        definition: "an outfit",
        knowledgelevel: 0
    },
    {
        id: "vestuario_teatral",
        category: "uncategorized",
        term: "un vestuario teatral",
        definition: "a  theatrical costume",
        knowledgelevel: 0
    },
    {
        id: "victim",
        category: "uncategorized",
        term: "un/una victim, víctima",
        definition: "a victim",
        knowledgelevel: 0
    },
    {
        id: "viga",
        category: "uncategorized",
        term: "una viga",
        definition: "a  beam,  like holding up the ceiling",
        knowledgelevel: 0
    },
    {
        id: "vínculo",
        category: "uncategorized",
        term: "un vínculo",
        definition: "a bond, a link",
        knowledgelevel: 0
    },
    {
        id: "violento",
        category: "uncategorized",
        term: "violenta / violento (adj)",
        definition: "violent",
        knowledgelevel: 0
    },
    {
        id: "vista_aérea",
        category: "uncategorized",
        term: "una vista aérea",
        definition: "  a arial view",
        knowledgelevel: 0
    },
    {
        id: "vivaz",
        category: "uncategorized",
        term: "vivaz",
        definition: "vivacious, breezy, happy",
        knowledgelevel: 0
    },
    {
        id: "vivero",
        category: "uncategorized",
        term: "un vivero",
        definition: "a nursery like for plants",
        knowledgelevel: 0
    },
    {
        id: "volantines",
        category: "uncategorized",
        term: "unos volantines",
        definition: " some kites",
        knowledgelevel: 0
    },
    {
        id: "volumen",
        category: "uncategorized",
        term: "el volumen",
        definition: "the volume, the bulk, the loudness",
        knowledgelevel: 0
    },
    {
        id: "volverse_a_poner",
        category: "uncategorized",
        term: "volverse a poner",
        definition: "to put back on",
        knowledgelevel: 0
    },
    {
        id: "yacimiento_de_un_mineral",
        category: "uncategorized",
        term: "un yacimiento de un mineral",
        definition: "a deposit of a mineral",
        knowledgelevel: 0
    },
    {
        id: "zacate",
        category: "uncategorized",
        term: "zacate",
        definition: "grass",
        knowledgelevel: 0
    },
    {
        id: "zanja",
        category: "uncategorized",
        term: "una zanja",
        definition: "a ditch",
        knowledgelevel: 0
    },
    {
        id: "zapallo",
        category: "uncategorized",
        term: "un zapallo",
        definition: "a pumpkin",
        knowledgelevel: 0
    },
    {
        id: "zar",
        category: "uncategorized",
        term: "un zar",
        definition: "a tsar (russia)",
        knowledgelevel: 0
    },
    {
        id: "zumbido",
        category: "uncategorized",
        term: "un zumbido",
        definition: "  a buzzing sound",
        knowledgelevel: 0
    },
    {
        id: "carraspear",
        category: "verbs",
        term: "carraspear",
        definition: " to clear your throat",
        knowledgelevel: 0
    },
    {
        id: "conducir",
        category: "verbs",
        term: "conducir",
        definition: "to drive",
        knowledgelevel: 0
    },
    {
        id: "despedir",
        category: "verbs",
        term: "despedir vs despedirse",
        definition: "to dismiss / reflexive = say good bye ",
        knowledgelevel: 0
    },
    {
        id: "juntarse",
        category: "verbs",
        term: "juntarse",
        definition: " come together",
        knowledgelevel: 0
    },
    {
        id: "abalanzar",
        category: "verbs",
        term: "abalanzar, abalanzarse",
        definition: "to pounce, or lunge",
        knowledgelevel: 0
    },
    {
        id: "abarcar",
        category: "verbs",
        term: "abarcar",
        definition: " to encompass include",
        knowledgelevel: 0
    },
    {
        id: "ablandarse",
        category: "verbs",
        term: "ablandarse",
        definition: "to soften",
        knowledgelevel: 0
    },
    {
        id: "abrocharse",
        category: "verbs",
        term: "abrocharse",
        definition: "to fasten, to button",
        knowledgelevel: 0
    },
    {
        id: "acalorar",
        category: "verbs",
        term: "acalorar",
        definition: "to heat",
        knowledgelevel: 0
    },
    {
        id: "acarrear",
        category: "verbs",
        term: "acarrear",
        definition: "to carry, or to cause",
        knowledgelevel: 0
    },
    {
        id: "acceder",
        category: "verbs",
        term: "acceder (ack sed der)",
        definition: " access, log on, or agree",
        knowledgelevel: 0
    },
    {
        id: "accidentar",
        category: "verbs",
        term: "accidentar",
        definition: "to produce accident",
        knowledgelevel: 0
    },
    {
        id: "accionar",
        category: "verbs",
        term: "accionar",
        definition: "to act, to work",
        knowledgelevel: 0
    },
    {
        id: "acelerar",
        category: "verbs",
        term: "acelerar",
        definition: "to accelerate, to speed up",
        knowledgelevel: 0
    },
    {
        id: "achicar",
        category: "verbs",
        term: "achicar",
        definition: "to reduce",
        knowledgelevel: 0
    },
    {
        id: "acicalar",
        category: "verbs",
        term: "acicalar",
        definition: "to groom",
        knowledgelevel: 0
    },
    {
        id: "acoger",
        category: "verbs",
        term: "acoger",
        definition: "to welcome, to receive",
        knowledgelevel: 0
    },
    {
        id: "acorralar",
        category: "verbs",
        term: "acorralar",
        definition: "to corral, to corner",
        knowledgelevel: 0
    },
    {
        id: "acudir",
        category: "verbs",
        term: "acudir",
        definition: " go like go to court",
        knowledgelevel: 0
    },
    {
        id: "acumular",
        category: "verbs",
        term: "acumular / acumularse",
        definition: "to accumulate, to gather",
        knowledgelevel: 0
    },
    {
        id: "acurrucar",
        category: "verbs",
        term: "acurrucar / acurrarse",
        definition: "to snuggle, to cuddle",
        knowledgelevel: 0
    },
    {
        id: "adiestrar",
        category: "verbs",
        term: "adiestrar",
        definition: " train like train a dog",
        knowledgelevel: 0
    },
    {
        id: "afectar",
        category: "verbs",
        term: "afectar",
        definition: "to affect, to impact",
        knowledgelevel: 0
    },
    {
        id: "aferrarse",
        category: "verbs",
        term: "aferrarse",
        definition: "to hang on, to grapple",
        knowledgelevel: 0
    },
    {
        id: "afinar",
        category: "verbs",
        term: "afinar",
        definition: "to tune",
        knowledgelevel: 0
    },
    {
        id: "agilizarse",
        category: "verbs",
        term: "agilizarse",
        definition: "to speed up",
        knowledgelevel: 0
    },
    {
        id: "agobiar",
        category: "verbs",
        term: "agobiar",
        definition: "to overwhelm",
        knowledgelevel: 0
    },
    {
        id: "aguantarse",
        category: "verbs",
        term: "aguantarse",
        definition: " to endure, hold on, put up work",
        knowledgelevel: 0
    },
    {
        id: "agudizar",
        category: "verbs",
        term: "agudizar",
        definition: "to sharpen",
        knowledgelevel: 0
    },
    {
        id: "ahuyentar",
        category: "verbs",
        term: "ahuyentar",
        definition: "to chase away, or drive away",
        knowledgelevel: 0
    },
    {
        id: "ajustar",
        category: "verbs",
        term: "ajustar",
        definition: "to adjust",
        knowledgelevel: 0
    },
    {
        id: "alardear",
        category: "verbs",
        term: "alardear",
        definition: "to boast",
        knowledgelevel: 0
    },
    {
        id: "alistar",
        category: "verbs",
        term: "alistar",
        definition: " to get ready, enlist, enroll",
        knowledgelevel: 0
    },
    {
        id: "alojarse",
        category: "verbs",
        term: "alojarse",
        definition: " stay like in a hotel",
        knowledgelevel: 0
    },
    {
        id: "amasar",
        category: "verbs",
        term: "amasar",
        definition: "to knead, to mash",
        knowledgelevel: 0
    },
    {
        id: "amontonar",
        category: "verbs",
        term: "amontonar",
        definition: "to pile up, to amass",
        knowledgelevel: 0
    },
    {
        id: "analizar",
        category: "verbs",
        term: "analizar",
        definition: "to analyze",
        knowledgelevel: 0
    },
    {
        id: "apartar",
        category: "verbs",
        term: "apartar",
        definition: "to set aside",
        knowledgelevel: 0
    },
    {
        id: "apestar",
        category: "verbs",
        term: "apestar",
        definition: "to reek, to stink",
        knowledgelevel: 0
    },
    {
        id: "apilar",
        category: "verbs",
        term: "apilar",
        definition: "to stack, to pile up",
        knowledgelevel: 0
    },
    {
        id: "aprobar",
        category: "verbs",
        term: "aprobar / aprobarse",
        definition: "to approve, or to be approved (reflexive)",
        knowledgelevel: 0
    },
    {
        id: "apuntar",
        category: "verbs",
        term: "apuntar",
        definition: " point, aim, or record (write down),  aim",
        knowledgelevel: 0
    },
    {
        id: "arder",
        category: "verbs",
        term: "arder",
        definition: "to burn",
        knowledgelevel: 0
    },
    {
        id: "arponear",
        category: "verbs",
        term: "arponear",
        definition: "to harpoon",
        knowledgelevel: 0
    },
    {
        id: "arredrar",
        category: "verbs",
        term: "arredrar",
        definition: " to daunt,  to be daunting and hard, or to remove",
        knowledgelevel: 0
    },
    {
        id: "arrimar",
        category: "verbs",
        term: "arrimar",
        definition: "to bring up, to move close",
        knowledgelevel: 0
    },
    {
        id: "arrojar",
        category: "verbs",
        term: "arrojar",
        definition: "to throw",
        knowledgelevel: 0
    },
    {
        id: "aserrar",
        category: "verbs",
        term: "aserrar",
        definition: "to saw (e.g., lumber)",
        knowledgelevel: 0
    },
    {
        id: "asignar",
        category: "verbs",
        term: "asignar",
        definition: "to assign, allocate",
        knowledgelevel: 0
    },
    {
        id: "asir",
        category: "verbs",
        term: "asir / asirse",
        definition: "to grab, to hold on",
        knowledgelevel: 0
    },
    {
        id: "asolearse",
        category: "verbs",
        term: "asolearse",
        definition: "to sun bathe",
        knowledgelevel: 0
    },
    {
        id: "astillar",
        category: "verbs",
        term: "astillar",
        definition: " splinter, shatter",
        knowledgelevel: 0
    },
    {
        id: "aterrizar",
        category: "verbs",
        term: "aterrizar",
        definition: " to land (como un avión)",
        knowledgelevel: 0
    },
    {
        id: "atesorar",
        category: "verbs",
        term: "atesorar",
        definition: "to treasure, to haard",
        knowledgelevel: 0
    },
    {
        id: "atorarse",
        category: "verbs",
        term: "atorarse",
        definition: "to get stuck",
        knowledgelevel: 0
    },
    {
        id: "atrasar",
        category: "verbs",
        term: "atrasar",
        definition: "to delay",
        knowledgelevel: 0
    },
    {
        id: "aullar",
        category: "verbs",
        term: "aullar",
        definition: "to howl",
        knowledgelevel: 0
    },
    {
        id: "automatizar",
        category: "verbs",
        term: "automatizar",
        definition: "to automate",
        knowledgelevel: 0
    },
    {
        id: "aventarse",
        category: "verbs",
        term: "aventarse",
        definition: "to throw",
        knowledgelevel: 0
    },
    {
        id: "azorar",
        category: "verbs",
        term: "azorar",
        definition: " ro whip, lash,  como un huracán",
        knowledgelevel: 0
    },
    {
        id: "balancear",
        category: "verbs",
        term: "balancear",
        definition: "to swing, to sway",
        knowledgelevel: 0
    },
    {
        id: "barritar",
        category: "verbs",
        term: "barritar",
        definition: "to trumpet",
        knowledgelevel: 0
    },
    {
        id: "batir",
        category: "verbs",
        term: "batir",
        definition: "to break, to churn",
        knowledgelevel: 0
    },
    {
        id: "beneficiarse",
        category: "verbs",
        term: "beneficiarse",
        definition: "to profit",
        knowledgelevel: 0
    },
    {
        id: "borrar",
        category: "verbs",
        term: "borrar",
        definition: "to delete",
        knowledgelevel: 0
    },
    {
        id: "bostezar",
        category: "verbs",
        term: "bostezar",
        definition: "to yawn",
        knowledgelevel: 0
    },
    {
        id: "brindar",
        category: "verbs",
        term: "brindar",
        definition: " to toast or offer",
        knowledgelevel: 0
    },
    {
        id: "cabecear",
        category: "verbs",
        term: "cabecear",
        definition: " to nod off to sleep",
        knowledgelevel: 0
    },
    {
        id: "calcular",
        category: "verbs",
        term: "calcular",
        definition: "to calculate",
        knowledgelevel: 0
    },
    {
        id: "camuflarse",
        category: "verbs",
        term: "camuflarse",
        definition: "to camaflouge",
        knowledgelevel: 0
    },
    {
        id: "captar",
        category: "verbs",
        term: "captar",
        definition: "to capture",
        knowledgelevel: 0
    },
    {
        id: "ceder",
        category: "verbs",
        term: "ceder",
        definition: "to give, yield, cede",
        knowledgelevel: 0
    },
    {
        id: "cernir",
        category: "verbs",
        term: "cernir",
        definition: "to sift",
        knowledgelevel: 0
    },
    {
        id: "chasquear",
        category: "verbs",
        term: "chasquear",
        definition: "to snap, to click",
        knowledgelevel: 0
    },
    {
        id: "chillar",
        category: "verbs",
        term: "chillar",
        definition: " to scream",
        knowledgelevel: 0
    },
    {
        id: "cimbrarse",
        category: "verbs",
        term: "cimbrarse",
        definition: "to shake",
        knowledgelevel: 0
    },
    {
        id: "clavar",
        category: "verbs",
        term: "clavar",
        definition: "to nail",
        knowledgelevel: 0
    },
    {
        id: "cobijar",
        category: "verbs",
        term: "cobijar",
        definition: "to shelter",
        knowledgelevel: 0
    },
    {
        id: "cobrar",
        category: "verbs",
        term: "cobrar",
        definition: " to charge collect",
        knowledgelevel: 0
    },
    {
        id: "cocer",
        category: "verbs",
        term: "cocer",
        definition: "to cook",
        knowledgelevel: 0
    },
    {
        id: "codificar",
        category: "verbs",
        term: "codificar",
        definition: "to encode",
        knowledgelevel: 0
    },
    {
        id: "coincidir",
        category: "verbs",
        term: "coincidir",
        definition: "to coincide",
        knowledgelevel: 0
    },
    {
        id: "colar",
        category: "verbs",
        term: "colar",
        definition: " strain but can also mean pass like person passing for something they’re not",
        knowledgelevel: 0
    },
    {
        id: "colonizar",
        category: "verbs",
        term: "colonizar",
        definition: "to colonize",
        knowledgelevel: 0
    },
    {
        id: "columpiar",
        category: "verbs",
        term: "columpiar",
        definition: " to swing",
        knowledgelevel: 0
    },
    {
        id: "comandar",
        category: "verbs",
        term: "comandar",
        definition: "to command",
        knowledgelevel: 0
    },
    {
        id: "compactar",
        category: "verbs",
        term: "compactar",
        definition: "to compact",
        knowledgelevel: 0
    },
    {
        id: "comprimir",
        category: "verbs",
        term: "comprimir",
        definition: "to compress",
        knowledgelevel: 0
    },
    {
        id: "conceder",
        category: "verbs",
        term: "conceder / concederse",
        definition: "to grant, to give / to be granted",
        knowledgelevel: 0
    },
    {
        id: "congregar",
        category: "verbs",
        term: "congregar",
        definition: "to congrate",
        knowledgelevel: 0
    },
    {
        id: "conjurar",
        category: "verbs",
        term: "conjurar",
        definition: "to conjure",
        knowledgelevel: 0
    },
    {
        id: "contratar",
        category: "verbs",
        term: "contratar",
        definition: "to hire, to contract",
        knowledgelevel: 0
    },
    {
        id: "convergir",
        category: "verbs",
        term: "convergir",
        definition: "to converge",
        knowledgelevel: 0
    },
    {
        id: "convocar",
        category: "verbs",
        term: "convocar",
        definition: "to convene",
        knowledgelevel: 0
    },
    {
        id: "curvarse",
        category: "verbs",
        term: "curvarse",
        definition: "to bend",
        knowledgelevel: 0
    },
    {
        id: "custodiar",
        category: "verbs",
        term: "custodiar",
        definition: "to guard, to keep",
        knowledgelevel: 0
    },
    {
        id: "decaer",
        category: "verbs",
        term: "decaer",
        definition: "to decay, decline",
        knowledgelevel: 0
    },
    {
        id: "defraudar",
        category: "verbs",
        term: "defraudar",
        definition: "to defraud",
        knowledgelevel: 0
    },
    {
        id: "delatar",
        category: "verbs",
        term: "delatar",
        definition: "to betray",
        knowledgelevel: 0
    },
    {
        id: "deletrear",
        category: "verbs",
        term: "deletrear",
        definition: "to spell, to spell out a word",
        knowledgelevel: 0
    },
    {
        id: "denominar",
        category: "verbs",
        term: "denominar / denominarse",
        definition: "to name or give a name / to be given a name",
        knowledgelevel: 0
    },
    {
        id: "derramar",
        category: "verbs",
        term: "derramar",
        definition: " to shed, spill (como un derrame de petróleo)",
        knowledgelevel: 0
    },
    {
        id: "desafinar",
        category: "verbs",
        term: "desafinar",
        definition: "to detune, sing out of tune",
        knowledgelevel: 0
    },
    {
        id: "desanimar",
        category: "verbs",
        term: "desanimar",
        definition: "to discourage",
        knowledgelevel: 0
    },
    {
        id: "desbordar",
        category: "verbs",
        term: "desbordar",
        definition: "to overflow, to flood",
        knowledgelevel: 0
    },
    {
        id: "descifrar",
        category: "verbs",
        term: "descifrar",
        definition: "to decipher",
        knowledgelevel: 0
    },
    {
        id: "descolgar",
        category: "verbs",
        term: "descolgar",
        definition: "to pick up, unhang, take down",
        knowledgelevel: 0
    },
    {
        id: "desempaquetar",
        category: "verbs",
        term: "desempaquetar",
        definition: "to unpack",
        knowledgelevel: 0
    },
    {
        id: "desempeñar",
        category: "verbs",
        term: "desempeñar (como desempeñar un papel)",
        definition: "to play, like playing a role",
        knowledgelevel: 0
    },
    {
        id: "desencadenar",
        category: "verbs",
        term: "desencadenar",
        definition: "to trigger, to unchain",
        knowledgelevel: 0
    },
    {
        id: "desenterrar",
        category: "verbs",
        term: "desenterrar",
        definition: "to unearth, to dig up",
        knowledgelevel: 0
    },
    {
        id: "deshacer",
        category: "verbs",
        term: "deshacerse vs deshacer",
        definition: " undo vs get rid of",
        knowledgelevel: 0
    },
    {
        id: "desmayarse",
        category: "verbs",
        term: "desmayarse",
        definition: "to faint, pass out",
        knowledgelevel: 0
    },
    {
        id: "desmontar",
        category: "verbs",
        term: "desmontar",
        definition: "dissassemble, or dismout",
        knowledgelevel: 0
    },
    {
        id: "desparramar",
        category: "verbs",
        term: "desparramar",
        definition: "to spread",
        knowledgelevel: 0
    },
    {
        id: "despegar",
        category: "verbs",
        term: "despegar",
        definition: "to detach, take a thing off",
        knowledgelevel: 0
    },
    {
        id: "desperdiciar",
        category: "verbs",
        term: "desperdiciar",
        definition: "to waste, throw away, dissapate",
        knowledgelevel: 0
    },
    {
        id: "desplazar",
        category: "verbs",
        term: "desplazar",
        definition: "to displace",
        knowledgelevel: 0
    },
    {
        id: "desplegar",
        category: "verbs",
        term: "desplegar",
        definition: "to deploy",
        knowledgelevel: 0
    },
    {
        id: "desprender",
        category: "verbs",
        term: "desprender",
        definition: "to detach, unpin",
        knowledgelevel: 0
    },
    {
        id: "desterrar",
        category: "verbs",
        term: "desterrar",
        definition: "to banish, exile",
        knowledgelevel: 0
    },
    {
        id: "destinar",
        category: "verbs",
        term: "destinar",
        definition: "to allocate, to destine, ",
        knowledgelevel: 0
    },
    {
        id: "desvanecerse",
        category: "verbs",
        term: "desvanecerse",
        definition: "to vanish",
        knowledgelevel: 0
    },
    {
        id: "desvelar",
        category: "verbs",
        term: "desvelar",
        definition: "to reveal",
        knowledgelevel: 0
    },
    {
        id: "desviar",
        category: "verbs",
        term: "desviar",
        definition: "to divert",
        knowledgelevel: 0
    },
    {
        id: "diagnosticar",
        category: "verbs",
        term: "diagnosticar",
        definition: "to diagnose",
        knowledgelevel: 0
    },
    {
        id: "difundir",
        category: "verbs",
        term: "difundir",
        definition: "to spread, diffuse",
        knowledgelevel: 0
    },
    {
        id: "dirigir",
        category: "verbs",
        term: "dirigir / digerirse",
        definition: "to digest",
        knowledgelevel: 0
    },
    {
        id: "disipar",
        category: "verbs",
        term: "disipar",
        definition: "to dispel",
        knowledgelevel: 0
    },
    {
        id: "disminuir",
        category: "verbs",
        term: "disminuir",
        definition: "to decrease",
        knowledgelevel: 0
    },
    {
        id: "disputar",
        category: "verbs",
        term: "disputar",
        definition: "to dispute",
        knowledgelevel: 0
    },
    {
        id: "distanciar",
        category: "verbs",
        term: "distanciar",
        definition: "to distance",
        knowledgelevel: 0
    },
    {
        id: "divisar",
        category: "verbs",
        term: "divisar",
        definition: " to spot to catch sight of something",
        knowledgelevel: 0
    },
    {
        id: "dorarse",
        category: "verbs",
        term: "dorarse",
        definition: " to brown (like a cooked bagel)",
        knowledgelevel: 0
    },
    {
        id: "embelesar",
        category: "verbs",
        term: "embelesar",
        definition: "to enchant",
        knowledgelevel: 0
    },
    {
        id: "embrutecer",
        category: "verbs",
        term: "embrutecer",
        definition: "to brutalize",
        knowledgelevel: 0
    },
    {
        id: "emitir",
        category: "verbs",
        term: "emitir",
        definition: "to issue, to emit",
        knowledgelevel: 0
    },
    {
        id: "empeñar",
        category: "verbs",
        term: "empeñar",
        definition: " to commit, to pledge, engage",
        knowledgelevel: 0
    },
    {
        id: "emprender",
        category: "verbs",
        term: "emprender",
        definition: "to understake, to start",
        knowledgelevel: 0
    },
    {
        id: "encajar",
        category: "verbs",
        term: "encajar",
        definition: "to fit, to insert",
        knowledgelevel: 0
    },
    {
        id: "encerrarse",
        category: "verbs",
        term: "encerrarse",
        definition: "to lock up, lock oneself up",
        knowledgelevel: 0
    },
    {
        id: "endurecerse",
        category: "verbs",
        term: "endurecerse",
        definition: "to harden, to stiffen",
        knowledgelevel: 0
    },
    {
        id: "enfatizar",
        category: "verbs",
        term: "enfatizar",
        definition: "to emphasize",
        knowledgelevel: 0
    },
    {
        id: "enfocar",
        category: "verbs",
        term: "enfocar",
        definition: "to focus",
        knowledgelevel: 0
    },
    {
        id: "enfrentar",
        category: "verbs",
        term: "enfrentar",
        definition: "to face",
        knowledgelevel: 0
    },
    {
        id: "enfurecer",
        category: "verbs",
        term: "enfurecer",
        definition: "to infuriate",
        knowledgelevel: 0
    },
    {
        id: "enganchar",
        category: "verbs",
        term: "enganchar",
        definition: "to hook, attach, ",
        knowledgelevel: 0
    },
    {
        id: "enmascarar",
        category: "verbs",
        term: "enmascarar",
        definition: "to mask",
        knowledgelevel: 0
    },
    {
        id: "enriquecerse",
        category: "verbs",
        term: "enriquecerse",
        definition: "to get rich",
        knowledgelevel: 0
    },
    {
        id: "ensayar",
        category: "verbs",
        term: "ensayar",
        definition: "to test, to rehearse",
        knowledgelevel: 0
    },
    {
        id: "ensimismarse",
        category: "verbs",
        term: "ensimismarse",
        definition: " to be absorbed lost in thought",
        knowledgelevel: 0
    },
    {
        id: "ensordecer",
        category: "verbs",
        term: "ensordecer",
        definition: "to deafen",
        knowledgelevel: 0
    },
    {
        id: "enterarse",
        category: "verbs",
        term: "enterarse",
        definition: " to find out",
        knowledgelevel: 0
    },
    {
        id: "entrelazar",
        category: "verbs",
        term: "entrelazar",
        definition: "to weave",
        knowledgelevel: 0
    },
    {
        id: "equipar",
        category: "verbs",
        term: "equipar",
        definition: "to equip",
        knowledgelevel: 0
    },
    {
        id: "erizar",
        category: "verbs",
        term: "erizar",
        definition: "to bristle (like a hedgehog's bristles)",
        knowledgelevel: 0
    },
    {
        id: "escarapelarse",
        category: "verbs",
        term: "escarapelarse",
        definition: " to get goose bumps",
        knowledgelevel: 0
    },
    {
        id: "esculpir",
        category: "verbs",
        term: "esculpir",
        definition: "to sculpt, to carve",
        knowledgelevel: 0
    },
    {
        id: "escurrirse",
        category: "verbs",
        term: "escurrirse",
        definition: "to drain, slip away",
        knowledgelevel: 0
    },
    {
        id: "esfumarse",
        category: "verbs",
        term: "esfumarse",
        definition: "to vanish, to fade",
        knowledgelevel: 0
    },
    {
        id: "especializarse",
        category: "verbs",
        term: "especializarse",
        definition: "to specialize",
        knowledgelevel: 0
    },
    {
        id: "espesar",
        category: "verbs",
        term: "espesar",
        definition: "to thicken",
        knowledgelevel: 0
    },
    {
        id: "espolvorear",
        category: "verbs",
        term: "espolvorear",
        definition: "to sprinkle",
        knowledgelevel: 0
    },
    {
        id: "estabilizar",
        category: "verbs",
        term: "estabilizar",
        definition: "to stabilize",
        knowledgelevel: 0
    },
    {
        id: "estallar",
        category: "verbs",
        term: "estallar",
        definition: "to burst, to explode",
        knowledgelevel: 0
    },
    {
        id: "estrechar",
        category: "verbs",
        term: "estrechar",
        definition: " to narrow tighten or grasp",
        knowledgelevel: 0
    },
    {
        id: "estrellar",
        category: "verbs",
        term: "estrellar",
        definition: " to star like the sky has stars?",
        knowledgelevel: 0
    },
    {
        id: "estremecerse",
        category: "verbs",
        term: "estremecerse",
        definition: "to shudder",
        knowledgelevel: 0
    },
    {
        id: "expandir",
        category: "verbs",
        term: "expandir",
        definition: " to expand",
        knowledgelevel: 0
    },
    {
        id: "exponer",
        category: "verbs",
        term: "exponer",
        definition: " to expose or put on an exhibit",
        knowledgelevel: 0
    },
    {
        id: "exprimir",
        category: "verbs",
        term: "exprimir",
        definition: "to squeeze, to squeeze out",
        knowledgelevel: 0
    },
    {
        id: "extinguir",
        category: "verbs",
        term: "extinguir / extinguirse",
        definition: "to extinguish / reflexive = to become extinct",
        knowledgelevel: 0
    },
    {
        id: "extraviar",
        category: "verbs",
        term: "extraviar",
        definition: "to mislead",
        knowledgelevel: 0
    },
    {
        id: "fantasear",
        category: "verbs",
        term: "fantasear",
        definition: "to fantasize",
        knowledgelevel: 0
    },
    {
        id: "fastidiar",
        category: "verbs",
        term: "fastidiar",
        definition: "to annoy",
        knowledgelevel: 0
    },
    {
        id: "filmar",
        category: "verbs",
        term: "filmar",
        definition: "to film",
        knowledgelevel: 0
    },
    {
        id: "filtrar",
        category: "verbs",
        term: "filtrar / filtrarse",
        definition: "to filter / reflexive = to leak or seep",
        knowledgelevel: 0
    },
    {
        id: "flanquear",
        category: "verbs",
        term: "flanquear",
        definition: "to flank",
        knowledgelevel: 0
    },
    {
        id: "fomentar",
        category: "verbs",
        term: "fomentar",
        definition: "to promote, encourage",
        knowledgelevel: 0
    },
    {
        id: "forjar",
        category: "verbs",
        term: "forjar",
        definition: "to forge",
        knowledgelevel: 0
    },
    {
        id: "forrar",
        category: "verbs",
        term: "forrar",
        definition: " to line, cover, like line a box with aluminum foil",
        knowledgelevel: 0
    },
    {
        id: "fracasar",
        category: "verbs",
        term: "fracasar",
        definition: "to fail, to break down",
        knowledgelevel: 0
    },
    {
        id: "graznar",
        category: "verbs",
        term: "graznar",
        definition: "to squawk",
        knowledgelevel: 0
    },
    {
        id: "heder",
        category: "verbs",
        term: "heder",
        definition: "to stink, to smell",
        knowledgelevel: 0
    },
    {
        id: "heredar",
        category: "verbs",
        term: "heredar",
        definition: "to inherit",
        knowledgelevel: 0
    },
    {
        id: "hinchar",
        category: "verbs",
        term: "hinchar",
        definition: "to swell, to inflate",
        knowledgelevel: 0
    },
    {
        id: "hogar",
        category: "verbs",
        term: "hogar (verb)",
        definition: " to house or be a home to",
        knowledgelevel: 0
    },
    {
        id: "hojear",
        category: "verbs",
        term: "hojear",
        definition: " to lead through something like a books pages",
        knowledgelevel: 0
    },
    {
        id: "humedecer",
        category: "verbs",
        term: "humedecer / humedecerse",
        definition: "to moisten",
        knowledgelevel: 0
    },
    {
        id: "hurgar",
        category: "verbs",
        term: "hurgar",
        definition: "to rummage, poke around",
        knowledgelevel: 0
    },
    {
        id: "idear",
        category: "verbs",
        term: "idear",
        definition: " to think of something like come up sith an idea",
        knowledgelevel: 0
    },
    {
        id: "impulsar",
        category: "verbs",
        term: "impulsar",
        definition: "to boost, to propel",
        knowledgelevel: 0
    },
    {
        id: "inaugurar",
        category: "verbs",
        term: "inaugurar",
        definition: "to inaugurate",
        knowledgelevel: 0
    },
    {
        id: "incumplir",
        category: "verbs",
        term: "incumplir",
        definition: " to breach, break, like not comply with a law",
        knowledgelevel: 0
    },
    {
        id: "independizar",
        category: "verbs",
        term: "independizar / independizarse",
        definition: "to make independent / to become independent",
        knowledgelevel: 0
    },
    {
        id: "inferir",
        category: "verbs",
        term: "inferir",
        definition: "to infer",
        knowledgelevel: 0
    },
    {
        id: "influir",
        category: "verbs",
        term: "influir",
        definition: "to influence",
        knowledgelevel: 0
    },
    {
        id: "ingerir",
        category: "verbs",
        term: "ingerir",
        definition: "to ingest",
        knowledgelevel: 0
    },
    {
        id: "instalar",
        category: "verbs",
        term: "instalar / instalarse",
        definition: "to install, set up",
        knowledgelevel: 0
    },
    {
        id: "interactuar",
        category: "verbs",
        term: "interactuar",
        definition: "to interact",
        knowledgelevel: 0
    },
    {
        id: "interpretar",
        category: "verbs",
        term: "interpretar",
        definition: "to interpret",
        knowledgelevel: 0
    },
    {
        id: "intervenir",
        category: "verbs",
        term: "intervenir",
        definition: "to intervene",
        knowledgelevel: 0
    },
    {
        id: "involucrar",
        category: "verbs",
        term: "involucrar / involucrarse",
        definition: "to involve / to get involved",
        knowledgelevel: 0
    },
    {
        id: "jubilar",
        category: "verbs",
        term: "jubilar",
        definition: "to retire",
        knowledgelevel: 0
    },
    {
        id: "laborar",
        category: "verbs",
        term: "laborar",
        definition: "to labor",
        knowledgelevel: 0
    },
    {
        id: "labrar",
        category: "verbs",
        term: "labrar (la tierra)",
        definition: "to till, work the soil",
        knowledgelevel: 0
    },
    {
        id: "lamer",
        category: "verbs",
        term: "lamer",
        definition: "to lick",
        knowledgelevel: 0
    },
    {
        id: "largar",
        category: "verbs",
        term: "largar",
        definition: "to release, launch, unfurl",
        knowledgelevel: 0
    },
    {
        id: "lesionar",
        category: "verbs",
        term: "lesionar",
        definition: "to injure",
        knowledgelevel: 0
    },
    {
        id: "licuar",
        category: "verbs",
        term: "licuar",
        definition: "to liquefy",
        knowledgelevel: 0
    },
    {
        id: "lidiar",
        category: "verbs",
        term: "lidiar",
        definition: "to cope or to fight",
        knowledgelevel: 0
    },
    {
        id: "ligar",
        category: "verbs",
        term: "ligar",
        definition: "to bind, tie",
        knowledgelevel: 0
    },
    {
        id: "lucir",
        category: "verbs",
        term: "lucir",
        definition: " can me to show off like wearing a nice sombrero",
        knowledgelevel: 0
    },
    {
        id: "machacar",
        category: "verbs",
        term: "machacar",
        definition: "to crush, pound",
        knowledgelevel: 0
    },
    {
        id: "magullar",
        category: "verbs",
        term: "magullar",
        definition: "to bruise",
        knowledgelevel: 0
    },
    {
        id: "marchitar",
        category: "verbs",
        term: "marchitar",
        definition: "to wither, to wilt",
        knowledgelevel: 0
    },
    {
        id: "maullar",
        category: "verbs",
        term: "maullar",
        definition: "to meow",
        knowledgelevel: 0
    },
    {
        id: "mecerse",
        category: "verbs",
        term: "mecerse",
        definition: "to rock or sway, like to music",
        knowledgelevel: 0
    },
    {
        id: "medicar",
        category: "verbs",
        term: "medicar",
        definition: "to medicate",
        knowledgelevel: 0
    },
    {
        id: "merendar",
        category: "verbs",
        term: "merendar",
        definition: "to snack",
        knowledgelevel: 0
    },
    {
        id: "meterse",
        category: "verbs",
        term: "meterse",
        definition: " get into, like get into trouble",
        knowledgelevel: 0
    },
    {
        id: "movilizar",
        category: "verbs",
        term: "movilizar",
        definition: "to mobilize",
        knowledgelevel: 0
    },
    {
        id: "olfatear",
        category: "verbs",
        term: "olfatear",
        definition: " to sniff ",
        knowledgelevel: 0
    },
    {
        id: "oprimir",
        category: "verbs",
        term: "oprimir / oprimirse",
        definition: " to press,  to opress",
        knowledgelevel: 0
    },
    {
        id: "optar",
        category: "verbs",
        term: "optar",
        definition: "to opt",
        knowledgelevel: 0
    },
    {
        id: "otorgar",
        category: "verbs",
        term: "otorgar",
        definition: "to grant, to give",
        knowledgelevel: 0
    },
    {
        id: "padecer",
        category: "verbs",
        term: "padecer",
        definition: "to suffer",
        knowledgelevel: 0
    },
    {
        id: "palpar",
        category: "verbs",
        term: "palpar",
        definition: "to feel, palpate",
        knowledgelevel: 0
    },
    {
        id: "paralizar",
        category: "verbs",
        term: "paralizar",
        definition: "to paralyze",
        knowledgelevel: 0
    },
    {
        id: "pasear",
        category: "verbs",
        term: "pasear",
        definition: " to go sightseeing",
        knowledgelevel: 0
    },
    {
        id: "payasear",
        category: "verbs",
        term: "payasear",
        definition: "to clown",
        knowledgelevel: 0
    },
    {
        id: "percatarse",
        category: "verbs",
        term: "percatarse",
        definition: "to notice",
        knowledgelevel: 0
    },
    {
        id: "perdurar",
        category: "verbs",
        term: "perdurar",
        definition: "to endure, to outlast",
        knowledgelevel: 0
    },
    {
        id: "perjudicar",
        category: "verbs",
        term: "perjudicar",
        definition: "to harm, to damage",
        knowledgelevel: 0
    },
    {
        id: "permanecer",
        category: "verbs",
        term: "permanecer",
        definition: "to stay, remain",
        knowledgelevel: 0
    },
    {
        id: "pescar",
        category: "verbs",
        term: "pescar (but not for fishing )",
        definition: " to catch",
        knowledgelevel: 0
    },
    {
        id: "pestañear",
        category: "verbs",
        term: "pestañear",
        definition: "to blink, wink",
        knowledgelevel: 0
    },
    {
        id: "planear",
        category: "verbs",
        term: "planear",
        definition: " to plan or glide like a hawk",
        knowledgelevel: 0
    },
    {
        id: "podar_una_planta",
        category: "verbs",
        term: "podar una planta",
        definition: "to prune a plant",
        knowledgelevel: 0
    },
    {
        id: "posar",
        category: "verbs",
        term: "posar",
        definition: " to pose, or perch for a bird",
        knowledgelevel: 0
    },
    {
        id: "poseer",
        category: "verbs",
        term: "poseer",
        definition: "to possess, to have",
        knowledgelevel: 0
    },
    {
        id: "predecir",
        category: "verbs",
        term: "predecir",
        definition: "to predict",
        knowledgelevel: 0
    },
    {
        id: "privilegiar",
        category: "verbs",
        term: "privilegiar",
        definition: "to privledge",
        knowledgelevel: 0
    },
    {
        id: "procesar",
        category: "verbs",
        term: "procesar",
        definition: "to process, to prosecute",
        knowledgelevel: 0
    },
    {
        id: "programar",
        category: "verbs",
        term: "programar",
        definition: "to schedule,  program",
        knowledgelevel: 0
    },
    {
        id: "promocionar",
        category: "verbs",
        term: "promocionar",
        definition: "to promote,push",
        knowledgelevel: 0
    },
    {
        id: "propagar",
        category: "verbs",
        term: "propagar",
        definition: "to spread, propagate ",
        knowledgelevel: 0
    },
    {
        id: "protagonizar",
        category: "verbs",
        term: "protagonizar",
        definition: "to star",
        knowledgelevel: 0
    },
    {
        id: "proveer",
        category: "verbs",
        term: "proveer",
        definition: "to provide",
        knowledgelevel: 0
    },
    {
        id: "provenir",
        category: "verbs",
        term: "provenir",
        definition: " to come from, stem from, or proceed",
        knowledgelevel: 0
    },
    {
        id: "provocar",
        category: "verbs",
        term: "provocar",
        definition: "to provoke",
        knowledgelevel: 0
    },
    {
        id: "publicitar",
        category: "verbs",
        term: "publicitar",
        definition: "to advertise",
        knowledgelevel: 0
    },
    {
        id: "pulir",
        category: "verbs",
        term: "pulir",
        definition: "to polish",
        knowledgelevel: 0
    },
    {
        id: "purificar",
        category: "verbs",
        term: "purificar",
        definition: "to purify",
        knowledgelevel: 0
    },
    {
        id: "quepar",
        category: "verbs",
        term: "quepar",
        definition: " to fit",
        knowledgelevel: 0
    },
    {
        id: "rasgar",
        category: "verbs",
        term: "rasgar",
        definition: "to rip",
        knowledgelevel: 0
    },
    {
        id: "raspar",
        category: "verbs",
        term: "raspar",
        definition: "to scrape",
        knowledgelevel: 0
    },
    {
        id: "reavivar",
        category: "verbs",
        term: "reavivar",
        definition: "to revive",
        knowledgelevel: 0
    },
    {
        id: "recetar",
        category: "verbs",
        term: "recetar",
        definition: "to prescribe",
        knowledgelevel: 0
    },
    {
        id: "rechazar",
        category: "verbs",
        term: "rechazar",
        definition: "to reject, refuse",
        knowledgelevel: 0
    },
    {
        id: "reclamar",
        category: "verbs",
        term: "reclamar",
        definition: " to claim or demand",
        knowledgelevel: 0
    },
    {
        id: "recobrar",
        category: "verbs",
        term: "recobrar",
        definition: "to recover",
        knowledgelevel: 0
    },
    {
        id: "reencontrarse",
        category: "verbs",
        term: "reencontrarse",
        definition: "to meet again",
        knowledgelevel: 0
    },
    {
        id: "reflejar",
        category: "verbs",
        term: "reflejar",
        definition: "to reflect",
        knowledgelevel: 0
    },
    {
        id: "reforzar",
        category: "verbs",
        term: "reforzar",
        definition: "reinforce",
        knowledgelevel: 0
    },
    {
        id: "refrenar",
        category: "verbs",
        term: "refrenar",
        definition: "to restrain",
        knowledgelevel: 0
    },
    {
        id: "refugiar",
        category: "verbs",
        term: "refugiar",
        definition: "to shelter",
        knowledgelevel: 0
    },
    {
        id: "regularse",
        category: "verbs",
        term: "regularse",
        definition: "to regulate",
        knowledgelevel: 0
    },
    {
        id: "rehusar",
        category: "verbs",
        term: "rehusar",
        definition: " to decline refuse",
        knowledgelevel: 0
    },
    {
        id: "reiniciar",
        category: "verbs",
        term: "reiniciar",
        definition: "to reboot",
        knowledgelevel: 0
    },
    {
        id: "reinventar",
        category: "verbs",
        term: "reinventar",
        definition: "to reinvent / to reinvent yourself",
        knowledgelevel: 0
    },
    {
        id: "remendar",
        category: "verbs",
        term: "remendar",
        definition: "to patch, to repair",
        knowledgelevel: 0
    },
    {
        id: "remontar",
        category: "verbs",
        term: "remontar",
        definition: "to go back, to ascend / to soar",
        knowledgelevel: 0
    },
    {
        id: "remover",
        category: "verbs",
        term: "remover",
        definition: " remove or stir",
        knowledgelevel: 0
    },
    {
        id: "rendir",
        category: "verbs",
        term: "rendir",
        definition: " surrender or pay like pay tribute?",
        knowledgelevel: 0
    },
    {
        id: "repasar",
        category: "verbs",
        term: "repasar",
        definition: "to review, go over",
        knowledgelevel: 0
    },
    {
        id: "replegar",
        category: "verbs",
        term: "replegar",
        definition: "to retract",
        knowledgelevel: 0
    },
    {
        id: "reponer",
        category: "verbs",
        term: "reponer",
        definition: "to replenish / to recover (replenish oneself)",
        knowledgelevel: 0
    },
    {
        id: "reportear",
        category: "verbs",
        term: "reportear",
        definition: "to report",
        knowledgelevel: 0
    },
    {
        id: "reproducir",
        category: "verbs",
        term: "reproducir",
        definition: "to reproduce / to breed",
        knowledgelevel: 0
    },
    {
        id: "reptar",
        category: "verbs",
        term: "reptar",
        definition: "to creep",
        knowledgelevel: 0
    },
    {
        id: "resguardar",
        category: "verbs",
        term: "resguardar",
        definition: "to guard / to shelter",
        knowledgelevel: 0
    },
    {
        id: "resoplar",
        category: "verbs",
        term: "resoplar",
        definition: "to blow, to pant",
        knowledgelevel: 0
    },
    {
        id: "respaldar",
        category: "verbs",
        term: "respaldar",
        definition: "to support, to back",
        knowledgelevel: 0
    },
    {
        id: "restablecer",
        category: "verbs",
        term: "restablecer",
        definition: "to restore, re-establish",
        knowledgelevel: 0
    },
    {
        id: "restaurar",
        category: "verbs",
        term: "restaurar",
        definition: "to restore, refurbish",
        knowledgelevel: 0
    },
    {
        id: "retirar",
        category: "verbs",
        term: "retirar",
        definition: "to withdraw",
        knowledgelevel: 0
    },
    {
        id: "retorcer",
        category: "verbs",
        term: "retorcer",
        definition: "to twist",
        knowledgelevel: 0
    },
    {
        id: "revelar",
        category: "verbs",
        term: "revelar",
        definition: "to reveal",
        knowledgelevel: 0
    },
    {
        id: "reventarse",
        category: "verbs",
        term: "reventarse",
        definition: "to break",
        knowledgelevel: 0
    },
    {
        id: "revolcarse",
        category: "verbs",
        term: "revolcarse",
        definition: " thrash about like agitated water in a river",
        knowledgelevel: 0
    },
    {
        id: "revolver",
        category: "verbs",
        term: "revolver",
        definition: "to stir, to turn",
        knowledgelevel: 0
    },
    {
        id: "rociar",
        category: "verbs",
        term: "rociar",
        definition: "to spray, sprinkle",
        knowledgelevel: 0
    },
    {
        id: "roer",
        category: "verbs",
        term: "roer",
        definition: "to gnaw, nibble",
        knowledgelevel: 0
    },
    {
        id: "rogar",
        category: "verbs",
        term: "rogar",
        definition: "to pray",
        knowledgelevel: 0
    },
    {
        id: "rozar",
        category: "verbs",
        term: "rozar",
        definition: "to touch, to rub",
        knowledgelevel: 0
    },
    {
        id: "saborear",
        category: "verbs",
        term: "saborear",
        definition: "to savor, to relish",
        knowledgelevel: 0
    },
    {
        id: "saciar",
        category: "verbs",
        term: "saciar",
        definition: "to satiate",
        knowledgelevel: 0
    },
    {
        id: "saltear",
        category: "verbs",
        term: "saltear",
        definition: " to skip or sauté (cooking)",
        knowledgelevel: 0
    },
    {
        id: "saludar",
        category: "verbs",
        term: "saludar",
        definition: " can mean salute for a soldier",
        knowledgelevel: 0
    },
    {
        id: "sangrar",
        category: "verbs",
        term: "sangrar",
        definition: "to bleed",
        knowledgelevel: 0
    },
    {
        id: "satisfacer",
        category: "verbs",
        term: "satisfacer",
        definition: "to satisfy",
        knowledgelevel: 0
    },
    {
        id: "segar",
        category: "verbs",
        term: "segar",
        definition: "to reap (harvest), to mow / cut (like grass)",
        knowledgelevel: 0
    },
    {
        id: "sisear",
        category: "verbs",
        term: "sisear",
        definition: "to hiss",
        knowledgelevel: 0
    },
    {
        id: "situar",
        category: "verbs",
        term: "situar",
        definition: "to place, to position",
        knowledgelevel: 0
    },
    {
        id: "sobreponerse",
        category: "verbs",
        term: "sobreponerse",
        definition: "to overcome, to get over",
        knowledgelevel: 0
    },
    {
        id: "sobrevolar",
        category: "verbs",
        term: "sobrevolar",
        definition: " to fly over",
        knowledgelevel: 0
    },
    {
        id: "solidificarse",
        category: "verbs",
        term: "solidificarse",
        definition: "to solidify, to harden",
        knowledgelevel: 0
    },
    {
        id: "soltar",
        category: "verbs",
        term: "soltar",
        definition: "to drop, release",
        knowledgelevel: 0
    },
    {
        id: "suavizar",
        category: "verbs",
        term: "suavizar",
        definition: "to soften",
        knowledgelevel: 0
    },
    {
        id: "sumar",
        category: "verbs",
        term: "sumar",
        definition: "to add",
        knowledgelevel: 0
    },
    {
        id: "sumergir",
        category: "verbs",
        term: "sumergir",
        definition: "to immerse, submerge",
        knowledgelevel: 0
    },
    {
        id: "sumir",
        category: "verbs",
        term: "sumir",
        definition: "to plunge, sink",
        knowledgelevel: 0
    },
    {
        id: "suplicar",
        category: "verbs",
        term: "suplicar",
        definition: " supplicate, pray, appeal",
        knowledgelevel: 0
    },
    {
        id: "tararear",
        category: "verbs",
        term: "tararear",
        definition: "to hum",
        knowledgelevel: 0
    },
    {
        id: "teclear",
        category: "verbs",
        term: "teclear",
        definition: "to type, key in",
        knowledgelevel: 0
    },
    {
        id: "tender",
        category: "verbs",
        term: "tender",
        definition: "to tend",
        knowledgelevel: 0
    },
    {
        id: "titilar",
        category: "verbs",
        term: "titilar",
        definition: "to twinkle",
        knowledgelevel: 0
    },
    {
        id: "topar",
        category: "verbs",
        term: "topar",
        definition: " to bump into something / to uncover or find by chance",
        knowledgelevel: 0
    },
    {
        id: "tramar",
        category: "verbs",
        term: "tramar",
        definition: "to hatch, eingineer, concoct",
        knowledgelevel: 0
    },
    {
        id: "transcurrir",
        category: "verbs",
        term: "transcurrir",
        definition: "to elapse, lapse",
        knowledgelevel: 0
    },
    {
        id: "trastabillar",
        category: "verbs",
        term: "trastabillar",
        definition: "to stumble",
        knowledgelevel: 0
    },
    {
        id: "trazar",
        category: "verbs",
        term: "trazar",
        definition: "to draw, trace",
        knowledgelevel: 0
    },
    {
        id: "tropezar",
        category: "verbs",
        term: "tropezar",
        definition: " to encounter or trip over something",
        knowledgelevel: 0
    },
    {
        id: "ubicar",
        category: "verbs",
        term: "ubicar",
        definition: " to locate",
        knowledgelevel: 0
    },
    {
        id: "untar",
        category: "verbs",
        term: "untar",
        definition: "to spread",
        knowledgelevel: 0
    },
    {
        id: "vendar",
        category: "verbs",
        term: "vendar",
        definition: "to bandage",
        knowledgelevel: 0
    },
    {
        id: "ventilar",
        category: "verbs",
        term: "ventilar",
        definition: "to ventilate, to air out",
        knowledgelevel: 0
    },
    {
        id: "verse",
        category: "verbs",
        term: "verse",
        definition: " see one another, meet, get together",
        knowledgelevel: 0
    },
    {
        id: "visualizar",
        category: "verbs",
        term: "visualizar",
        definition: "to visualize",
        knowledgelevel: 0
    },
    {
        id: "vociferar",
        category: "verbs",
        term: "vociferar",
        definition: "to shout, rant",
        knowledgelevel: 0
    },
    {
        id: "volcar",
        category: "verbs",
        term: "volcar",
        definition: "to overturn",
        knowledgelevel: 0
    },
    {
        id: "zafarse",
        category: "verbs",
        term: "zafarse",
        definition: " to slip away",
        knowledgelevel: 0
    },
    {
        id: "zambullir",
        category: "verbs",
        term: "zambullir",
        definition: "to drive",
        knowledgelevel: 0
    },
    {
        id: "ofuscar",
        category: "verbs",
        term: "ofuscar",
        definition: "to obfuscate, dim, fog",
        knowledgelevel: 0
    },
    {
        id: "100_pies_de_largo",
        category: "uncategorized",
        term: "100 pies de largo ",
        definition: " 100 feet long",
        knowledgelevel: 0
    },
    {
        id: "a_escondidas",
        category: "uncategorized",
        term: "A las escondidas ",
        definition: " hide and seek",
        knowledgelevel: 0
    },
    {
        id: "a_lo_largo",
        category: "uncategorized",
        term: "A lo largo ",
        definition: " along",
        knowledgelevel: 0
    },
    {
        id: "a_medida_que",
        category: "uncategorized",
        term: "A medida que ",
        definition: " as,  according to",
        knowledgelevel: 0
    },
    {
        id: "a_partir_de",
        category: "uncategorized",
        term: "A partir de ",
        definition: " from",
        knowledgelevel: 0
    },
    {
        id: "a_partir_de_ahora",
        category: "uncategorized",
        term: "A partir de ahora ",
        definition: " hereinafter",
        knowledgelevel: 0
    },
    {
        id: "a_partir_de_hoy",
        category: "uncategorized",
        term: "A partir de hoy ",
        definition: " from today forwards",
        knowledgelevel: 0
    },
    {
        id: "a_pesar_vs_pesar",
        category: "uncategorized",
        term: "A pesar vs pesar ",
        definition: " a pesar = despite,  pesar = to weigh",
        knowledgelevel: 0
    },
    {
        id: "a_propósito",
        category: "uncategorized",
        term: "A propósito ",
        definition: " by the way",
        knowledgelevel: 0
    },
    {
        id: "a_su_paso",
        category: "uncategorized",
        term: "A su paso ",
        definition: " in your/his/her path",
        knowledgelevel: 0
    },
    {
        id: "abrigado",
        category: "uncategorized",
        term: "Abrigado ",
        definition: " sheltered",
        knowledgelevel: 0
    },
    {
        id: "acaso",
        category: "uncategorized",
        term: "Acaso ",
        definition: " perhaps",
        knowledgelevel: 0
    },
    {
        id: "acento",
        category: "uncategorized",
        term: "Acento ",
        definition: " accent",
        knowledgelevel: 0
    },
    {
        id: "acero",
        category: "uncategorized",
        term: "Acero ",
        definition: " steel",
        knowledgelevel: 0
    },
    {
        id: "adelantado",
        category: "uncategorized",
        term: "Adelantado (adj) ",
        definition: " advanced",
        knowledgelevel: 0
    },
    {
        id: "ahora_mismo",
        category: "uncategorized",
        term: "Ahora mismo ",
        definition: " right now",
        knowledgelevel: 0
    },
    {
        id: "ajedrez",
        category: "uncategorized",
        term: "Ajedrez ",
        definition: " chess",
        knowledgelevel: 0
    },
    {
        id: "al_cabo",
        category: "uncategorized",
        term: "Al cabo ",
        definition: " after",
        knowledgelevel: 0
    },
    {
        id: "al_parecer",
        category: "uncategorized",
        term: "Al parecer ",
        definition: " apparently",
        knowledgelevel: 0
    },
    {
        id: "al_revés",
        category: "uncategorized",
        term: "Al revés ",
        definition: " the other way around,  like backwards or upside down",
        knowledgelevel: 0
    },
    {
        id: "aluminio",
        category: "uncategorized",
        term: "Aluminio ",
        definition: " aluminum",
        knowledgelevel: 0
    },
    {
        id: "amarga",
        category: "uncategorized",
        term: "Amarga (adj) ",
        definition: " bitter",
        knowledgelevel: 0
    },
    {
        id: "anterior",
        category: "uncategorized",
        term: "Anterior ",
        definition: " former,  previous",
        knowledgelevel: 0
    },
    {
        id: "apreciada",
        category: "uncategorized",
        term: "Apreciada (adj) ",
        definition: " appreciated (adj)",
        knowledgelevel: 0
    },
    {
        id: "apretar_paso",
        category: "uncategorized",
        term: "Apretar el paso ",
        definition: " to step out",
        knowledgelevel: 0
    },
    {
        id: "arcil",
        category: "uncategorized",
        term: "Arcilla ",
        definition: " clay",
        knowledgelevel: 0
    },
    {
        id: "arrasado",
        category: "uncategorized",
        term: "Arrasado (adj) ",
        definition: " devastated",
        knowledgelevel: 0
    },
    {
        id: "arrodillado",
        category: "uncategorized",
        term: "Arrodillado ",
        definition: " on vended knee",
        knowledgelevel: 0
    },
    {
        id: "atorado",
        category: "uncategorized",
        term: "Atorado ",
        definition: " stuck",
        knowledgelevel: 0
    },
    {
        id: "ballena_jorobada",
        category: "uncategorized",
        term: "Ballena jorobada ",
        definition: " humpback whale",
        knowledgelevel: 0
    },
    {
        id: "botiquín",
        category: "uncategorized",
        term: "Botiquín ",
        definition: " a first aid kit",
        knowledgelevel: 0
    },
    {
        id: "breve",
        category: "uncategorized",
        term: "Breve ",
        definition: " brief",
        knowledgelevel: 0
    },
    {
        id: "burbujeante",
        category: "uncategorized",
        term: "Burbujeante (adj) ",
        definition: " bubbly",
        knowledgelevel: 0
    },
    {
        id: "busquémos",
        category: "uncategorized",
        term: "Busquémosla ",
        definition: " lets look for it",
        knowledgelevel: 0
    },
    {
        id: "cabizbajo",
        category: "uncategorized",
        term: "Cabizbajo ",
        definition: " crestfallen,  head bowed",
        knowledgelevel: 0
    },
    {
        id: "callejero",
        category: "uncategorized",
        term: "Callejero ",
        definition: " stray",
        knowledgelevel: 0
    },
    {
        id: "caro",
        category: "uncategorized",
        term: "Caro (adj) ",
        definition: " expensive",
        knowledgelevel: 0
    },
    {
        id: "cautelosamente",
        category: "uncategorized",
        term: "Cautelosamente ",
        definition: " cautiously",
        knowledgelevel: 0
    },
    {
        id: "chiquitita",
        category: "uncategorized",
        term: "Chiquitita ",
        definition: " little girl",
        knowledgelevel: 0
    },
    {
        id: "chistosisimo",
        category: "uncategorized",
        term: "Chistosisimo ",
        definition: " hilarious",
        knowledgelevel: 0
    },
    {
        id: "chucheria",
        category: "uncategorized",
        term: "Chucheria ",
        definition: " trinket",
        knowledgelevel: 0
    },
    {
        id: "chueca",
        category: "uncategorized",
        term: "Chueca (adj) ",
        definition: " crooked or curved",
        knowledgelevel: 0
    },
    {
        id: "ciego",
        category: "uncategorized",
        term: "Ciego (adj) ",
        definition: " blind",
        knowledgelevel: 0
    },
    {
        id: "cobertores",
        category: "uncategorized",
        term: "Cobertores ",
        definition: " covers (como una cama)",
        knowledgelevel: 0
    },
    {
        id: "cobre",
        category: "uncategorized",
        term: "Cobre",
        definition: " cobrizo ,  copper",
        knowledgelevel: 0
    },
    {
        id: "combate",
        category: "uncategorized",
        term: "Combate ",
        definition: " combat",
        knowledgelevel: 0
    },
    {
        id: "comestible",
        category: "uncategorized",
        term: "Comestible (adj) ",
        definition: " edible",
        knowledgelevel: 0
    },
    {
        id: "comiquísima",
        category: "uncategorized",
        term: "Comiquísima ",
        definition: " very funny",
        knowledgelevel: 0
    },
    {
        id: "como",
        category: "uncategorized",
        term: "Como ",
        definition: " how or since",
        knowledgelevel: 0
    },
    {
        id: "como_si_ésta_fuera_poco",
        category: "uncategorized",
        term: "como si ésta fuera poco ",
        definition: " as if this were not enough",
        knowledgelevel: 0
    },
    {
        id: "como_rayo",
        category: "uncategorized",
        term: "Como un rayo ",
        definition: " like lightning",
        knowledgelevel: 0
    },
    {
        id: "como_ves",
        category: "uncategorized",
        term: "Como ves ",
        definition: " as you see,  you see",
        knowledgelevel: 0
    },
    {
        id: "comportamiento",
        category: "uncategorized",
        term: "Comportamiento ",
        definition: " behavior",
        knowledgelevel: 0
    },
    {
        id: "con_tiempo",
        category: "uncategorized",
        term: "Con el tiempo ",
        definition: " over time",
        knowledgelevel: 0
    },
    {
        id: "con_exactitud",
        category: "uncategorized",
        term: "Con exactitud ",
        definition: " with precision",
        knowledgelevel: 0
    },
    {
        id: "concentrado",
        category: "uncategorized",
        term: "Concentrado (adj) ",
        definition: " concentrated",
        knowledgelevel: 0
    },
    {
        id: "confianza",
        category: "uncategorized",
        term: "Confianza ",
        definition: " confidence",
        knowledgelevel: 0
    },
    {
        id: "constante",
        category: "uncategorized",
        term: "Constante (adj) ",
        definition: " constant",
        knowledgelevel: 0
    },
    {
        id: "contrario",
        category: "uncategorized",
        term: "Contrario (adj) ",
        definition: " contrary",
        knowledgelevel: 0
    },
    {
        id: "crucero",
        category: "uncategorized",
        term: "Crucero ",
        definition: " cruise",
        knowledgelevel: 0
    },
    {
        id: "cubierto",
        category: "uncategorized",
        term: "Cubierto (adj) ",
        definition: " covered",
        knowledgelevel: 0
    },
    {
        id: "cuero",
        category: "uncategorized",
        term: "Cuero ",
        definition: " leather",
        knowledgelevel: 0
    },
    {
        id: "dale",
        category: "uncategorized",
        term: "Dale ",
        definition: " go ahead",
        knowledgelevel: 0
    },
    {
        id: "dañino",
        category: "uncategorized",
        term: "Dañino (adj) ",
        definition: " harmful",
        knowledgelevel: 0
    },
    {
        id: "dar_vuelta",
        category: "uncategorized",
        term: "Dar una vuelta ",
        definition: " to take a walk",
        knowledgelevel: 0
    },
    {
        id: "de_camino",
        category: "uncategorized",
        term: "De Camino ",
        definition: " on the way",
        knowledgelevel: 0
    },
    {
        id: "de_inmediato",
        category: "uncategorized",
        term: "De inmediato ",
        definition: " immediately",
        knowledgelevel: 0
    },
    {
        id: "de_lo_que_no_cabe_duda",
        category: "uncategorized",
        term: "de lo que no cabe duda ",
        definition: " of that there is no doubt (doubt doesn’t fit)",
        knowledgelevel: 0
    },
    {
        id: "de_ningmanera",
        category: "uncategorized",
        term: "De ninguna manera ",
        definition: " no way",
        knowledgelevel: 0
    },
    {
        id: "de_partir",
        category: "uncategorized",
        term: "De partir ",
        definition: " to leave",
        knowledgelevel: 0
    },
    {
        id: "de_paso",
        category: "uncategorized",
        term: "De paso ",
        definition: " by the way",
        knowledgelevel: 0
    },
    {
        id: "de_vez",
        category: "uncategorized",
        term: "De una vez ",
        definition: " (of one time) can mean at this moment, now",
        knowledgelevel: 0
    },
    {
        id: "debido_a_que",
        category: "uncategorized",
        term: "Debido a que ",
        definition: " because",
        knowledgelevel: 0
    },
    {
        id: "desafiante",
        category: "uncategorized",
        term: "Desafiante (adj) ",
        definition: " challenging",
        knowledgelevel: 0
    },
    {
        id: "desafortunadamente",
        category: "uncategorized",
        term: "Desafortunadamente ",
        definition: " unfortunately",
        knowledgelevel: 0
    },
    {
        id: "desechable",
        category: "uncategorized",
        term: "Desechable ",
        definition: " disposable (como bolsas de plástico)",
        knowledgelevel: 0
    },
    {
        id: "deslumbrante",
        category: "uncategorized",
        term: "Deslumbrante (adj) ",
        definition: " dazzling",
        knowledgelevel: 0
    },
    {
        id: "despistada",
        category: "uncategorized",
        term: "Despistada (adj) ",
        definition: " clueless",
        knowledgelevel: 0
    },
    {
        id: "después_de_todo",
        category: "uncategorized",
        term: "Después de todo ",
        definition: " after all",
        knowledgelevel: 0
    },
    {
        id: "destel",
        category: "uncategorized",
        term: "Destellos ",
        definition: " sparkles",
        knowledgelevel: 0
    },
    {
        id: "dibujos_animados",
        category: "uncategorized",
        term: "Dibujos animados ",
        definition: " cartoons",
        knowledgelevel: 0
    },
    {
        id: "diminuto",
        category: "uncategorized",
        term: "Diminuto (adj) ",
        definition: " tiny",
        knowledgelevel: 0
    },
    {
        id: "dinamarca",
        category: "uncategorized",
        term: "Dinamarca ",
        definition: " Denmark",
        knowledgelevel: 0
    },
    {
        id: "disculpa",
        category: "uncategorized",
        term: "Disculpa ",
        definition: " sorry",
        knowledgelevel: 0
    },
    {
        id: "disgusto",
        category: "uncategorized",
        term: "Disgusto ",
        definition: " dislike",
        knowledgelevel: 0
    },
    {
        id: "echado",
        category: "uncategorized",
        term: "Echado ",
        definition: " lying down",
        knowledgelevel: 0
    },
    {
        id: "echar_a_perder",
        category: "uncategorized",
        term: "Echar a perder ",
        definition: " to spoil",
        knowledgelevel: 0
    },
    {
        id: "echar_porras",
        category: "uncategorized",
        term: "Echar porras ",
        definition: " to cheer (throw cheers)",
        knowledgelevel: 0
    },
    {
        id: "asunto",
        category: "uncategorized",
        term: "El asunto ",
        definition: " the case",
        knowledgelevel: 0
    },
    {
        id: "bulto",
        category: "uncategorized",
        term: "El bulto ",
        definition: " the lump",
        knowledgelevel: 0
    },
    {
        id: "cansancio",
        category: "uncategorized",
        term: "El cansancio ",
        definition: " the fatigue",
        knowledgelevel: 0
    },
    {
        id: "contenedor",
        category: "uncategorized",
        term: "El contenedor ",
        definition: " the container",
        knowledgelevel: 0
    },
    {
        id: "coro",
        category: "uncategorized",
        term: "El coro ",
        definition: " the chorus",
        knowledgelevel: 0
    },
    {
        id: "gol",
        category: "uncategorized",
        term: "el gol ",
        definition: " a goal",
        knowledgelevel: 0
    },
    {
        id: "ingreso",
        category: "uncategorized",
        term: "El ingreso ",
        definition: " income or entry",
        knowledgelevel: 0
    },
    {
        id: "mito",
        category: "uncategorized",
        term: "El mito ",
        definition: " the myth",
        knowledgelevel: 0
    },
    {
        id: "remo",
        category: "uncategorized",
        term: "El remo ",
        definition: " the row,  the paddle (de una canoa)",
        knowledgelevel: 0
    },
    {
        id: "emotivo",
        category: "uncategorized",
        term: "Emotivo ",
        definition: " emotional",
        knowledgelevel: 0
    },
    {
        id: "en_cambio",
        category: "uncategorized",
        term: "En cambio ",
        definition: " instead",
        knowledgelevel: 0
    },
    {
        id: "en_cuanto",
        category: "uncategorized",
        term: "En cuanto ",
        definition: " as soon as",
        knowledgelevel: 0
    },
    {
        id: "en_ese_entonces",
        category: "uncategorized",
        term: "En ese entonces ",
        definition: " at that time",
        knowledgelevel: 0
    },
    {
        id: "en_actualidad",
        category: "uncategorized",
        term: "En la actualidad ",
        definition: " currently",
        knowledgelevel: 0
    },
    {
        id: "en_línea",
        category: "uncategorized",
        term: "En línea ",
        definition: " online",
        knowledgelevel: 0
    },
    {
        id: "enjaulado",
        category: "uncategorized",
        term: "Enjaulado ",
        definition: " caged",
        knowledgelevel: 0
    },
    {
        id: "enmarcar",
        category: "uncategorized",
        term: "Enmarcar ",
        definition: " to frame (como un photo en un marco)",
        knowledgelevel: 0
    },
    {
        id: "enseguida",
        category: "uncategorized",
        term: "Enseguida ",
        definition: " right away,  immediately",
        knowledgelevel: 0
    },
    {
        id: "entre_muchos",
        category: "uncategorized",
        term: "Entre muchos ",
        definition: " among many",
        knowledgelevel: 0
    },
    {
        id: "entreabierto",
        category: "uncategorized",
        term: "Entreabierta/entreabieto (adj) ",
        definition: " ajar",
        knowledgelevel: 0
    },
    {
        id: "entretenido",
        category: "uncategorized",
        term: "Entretenido ",
        definition: " amusing",
        knowledgelevel: 0
    },
    {
        id: "entristeció",
        category: "uncategorized",
        term: "Entristeció (adj) ",
        definition: " saddened",
        knowledgelevel: 0
    },
    {
        id: "escondiéndose",
        category: "uncategorized",
        term: "Escondiéndose ",
        definition: " hiding",
        knowledgelevel: 0
    },
    {
        id: "esto_lo_llevo_a",
        category: "uncategorized",
        term: "esto lo llevo a ",
        definition: " this led him to",
        knowledgelevel: 0
    },
    {
        id: "estrecho",
        category: "uncategorized",
        term: "Estrecha/o (adj) ",
        definition: " narrow",
        knowledgelevel: 0
    },
    {
        id: "estropeado",
        category: "uncategorized",
        term: "Estropeado (adj) ",
        definition: " spoiled",
        knowledgelevel: 0
    },
    {
        id: "exhausta",
        category: "uncategorized",
        term: "Exhausta (adj) ",
        definition: " exhausted",
        knowledgelevel: 0
    },
    {
        id: "extensa",
        category: "uncategorized",
        term: "Extensa (adj) ",
        definition: " extensive",
        knowledgelevel: 0
    },
    {
        id: "extrañado",
        category: "uncategorized",
        term: "Extrañado (adj) ",
        definition: " missed",
        knowledgelevel: 0
    },
    {
        id: "extremadamente",
        category: "uncategorized",
        term: "Extremadamente ",
        definition: " extremely",
        knowledgelevel: 0
    },
    {
        id: "fama",
        category: "uncategorized",
        term: "Fama ",
        definition: " fame",
        knowledgelevel: 0
    },
    {
        id: "fiable",
        category: "uncategorized",
        term: "Fiable ",
        definition: " reliable",
        knowledgelevel: 0
    },
    {
        id: "fiera",
        category: "uncategorized",
        term: "Fiera (adj or noun)",
        definition: " fierce  or wild beast",
        knowledgelevel: 0
    },
    {
        id: "figurado",
        category: "uncategorized",
        term: "Figurado (adj) ",
        definition: " figurative",
        knowledgelevel: 0
    },
    {
        id: "fija",
        category: "uncategorized",
        term: "Fija (rutas fijas) ",
        definition: " fixed (fixed routes)",
        knowledgelevel: 0
    },
    {
        id: "fue_tal",
        category: "uncategorized",
        term: "Fue tal ",
        definition: " it was such",
        knowledgelevel: 0
    },
    {
        id: "fuentes",
        category: "uncategorized",
        term: "Fuentes ",
        definition: " sources",
        knowledgelevel: 0
    },
    {
        id: "fuerza_aérea",
        category: "uncategorized",
        term: "Fuerza aérea ",
        definition: " air force",
        knowledgelevel: 0
    },
    {
        id: "ganarse_vida",
        category: "uncategorized",
        term: "Ganarse la vida ",
        definition: " earn a living",
        knowledgelevel: 0
    },
    {
        id: "grandote",
        category: "uncategorized",
        term: "Grandote (adj) ",
        definition: " huge",
        knowledgelevel: 0
    },
    {
        id: "había_vez",
        category: "uncategorized",
        term: "Había una vez ",
        definition: " once upon a time",
        knowledgelevel: 0
    },
    {
        id: "hace_algún_tiempo",
        category: "uncategorized",
        term: "Hace algún tiempo ",
        definition: " some time ago",
        knowledgelevel: 0
    },
    {
        id: "hace_algunos_años",
        category: "uncategorized",
        term: "Hace algunos años ",
        definition: " some years ago",
        knowledgelevel: 0
    },
    {
        id: "hace_apenas_unos_días",
        category: "uncategorized",
        term: "Hace apenas unos días ",
        definition: " just a few days ago",
        knowledgelevel: 0
    },
    {
        id: "hacer_caso",
        category: "uncategorized",
        term: "Hacer caso ",
        definition: " to heed,  to follow a direction",
        knowledgelevel: 0
    },
    {
        id: "hasta_hace_poco",
        category: "uncategorized",
        term: "Hasta hace poco ",
        definition: " until very recently",
        knowledgelevel: 0
    },
    {
        id: "hasta_no_hace_mucho_tiempo",
        category: "uncategorized",
        term: "Hasta no hace mucho tiempo ",
        definition: " until not long ago",
        knowledgelevel: 0
    },
    {
        id: "hay_que",
        category: "uncategorized",
        term: "Hay que ",
        definition: " one has to, must",
        knowledgelevel: 0
    },
    {
        id: "hierro",
        category: "uncategorized",
        term: "Hierro ",
        definition: " iron",
        knowledgelevel: 0
    },
    {
        id: "hule",
        category: "uncategorized",
        term: "Hule ",
        definition: " rubber",
        knowledgelevel: 0
    },
    {
        id: "humilde",
        category: "uncategorized",
        term: "Humilde ",
        definition: " humble",
        knowledgelevel: 0
    },
    {
        id: "imponente",
        category: "uncategorized",
        term: "Imponente ",
        definition: " imposing",
        knowledgelevel: 0
    },
    {
        id: "impredecible",
        category: "uncategorized",
        term: "Impredecible ",
        definition: " unpredictable",
        knowledgelevel: 0
    },
    {
        id: "inalámbrico",
        category: "uncategorized",
        term: "Inalámbrico ",
        definition: " wireless",
        knowledgelevel: 0
    },
    {
        id: "incluso",
        category: "uncategorized",
        term: "Incluso ",
        definition: " even",
        knowledgelevel: 0
    },
    {
        id: "ingeniería",
        category: "uncategorized",
        term: "Ingeniería ",
        definition: " Engineering",
        knowledgelevel: 0
    },
    {
        id: "injusto",
        category: "uncategorized",
        term: "Injusto ",
        definition: " unfair",
        knowledgelevel: 0
    },
    {
        id: "instantáneamente",
        category: "uncategorized",
        term: "Instantáneamente ",
        definition: " instantly",
        knowledgelevel: 0
    },
    {
        id: "interesantísimo",
        category: "uncategorized",
        term: "Interesantísimo (adj) ",
        definition: " very interesting",
        knowledgelevel: 0
    },
    {
        id: "inusual",
        category: "uncategorized",
        term: "Inusual ",
        definition: " unusual",
        knowledgelevel: 0
    },
    {
        id: "aldea",
        category: "uncategorized",
        term: "La aldea ",
        definition: " the village",
        knowledgelevel: 0
    },
    {
        id: "armada",
        category: "uncategorized",
        term: "La armada ",
        definition: " the army",
        knowledgelevel: 0
    },
    {
        id: "armonía",
        category: "uncategorized",
        term: "La armonía ",
        definition: " the harmony",
        knowledgelevel: 0
    },
    {
        id: "búsqueda",
        category: "uncategorized",
        term: "La búsqueda ",
        definition: " the search",
        knowledgelevel: 0
    },
    {
        id: "cantidad",
        category: "uncategorized",
        term: "La cantidad ",
        definition: " the amount",
        knowledgelevel: 0
    },
    {
        id: "cartulina",
        category: "uncategorized",
        term: "la Cartulina ",
        definition: " the cardboard",
        knowledgelevel: 0
    },
    {
        id: "celda",
        category: "uncategorized",
        term: "La celda ",
        definition: " the cell",
        knowledgelevel: 0
    },
    {
        id: "conexión",
        category: "uncategorized",
        term: "la conexión ",
        definition: " the connection",
        knowledgelevel: 0
    },
    {
        id: "leña",
        category: "uncategorized",
        term: "La leña ",
        definition: " the firewood",
        knowledgelevel: 0
    },
    {
        id: "marea",
        category: "uncategorized",
        term: "La Marea ",
        definition: " the tide",
        knowledgelevel: 0
    },
    {
        id: "matrícu",
        category: "uncategorized",
        term: "La matrícula ",
        definition: " the enrollment or tuition",
        knowledgelevel: 0
    },
    {
        id: "nevada",
        category: "uncategorized",
        term: "la nevada ",
        definition: " the snowfall",
        knowledgelevel: 0
    },
    {
        id: "palma",
        category: "uncategorized",
        term: "La Palma ",
        definition: " the palm",
        knowledgelevel: 0
    },
    {
        id: "poza",
        category: "uncategorized",
        term: "La poza ",
        definition: " the pool",
        knowledgelevel: 0
    },
    {
        id: "traductora",
        category: "uncategorized",
        term: "La traductora ",
        definition: " the translator",
        knowledgelevel: 0
    },
    {
        id: "ubicación",
        category: "uncategorized",
        term: "La ubicación ",
        definition: " the location",
        knowledgelevel: 0
    },
    {
        id: "vitrina",
        category: "uncategorized",
        term: "La vitrina ",
        definition: " a showcase",
        knowledgelevel: 0
    },
    {
        id: "lanudo",
        category: "uncategorized",
        term: "Lanudo ",
        definition: " woolly",
        knowledgelevel: 0
    },
    {
        id: "aletas",
        category: "uncategorized",
        term: "Las aletas ",
        definition: " the fins",
        knowledgelevel: 0
    },
    {
        id: "bayas",
        category: "uncategorized",
        term: "las bayas ",
        definition: " the berries",
        knowledgelevel: 0
    },
    {
        id: "branquias",
        category: "uncategorized",
        term: "Las branquias ",
        definition: " the gills",
        knowledgelevel: 0
    },
    {
        id: "escamas",
        category: "uncategorized",
        term: "Las escamas ",
        definition: " the scales",
        knowledgelevel: 0
    },
    {
        id: "fichas",
        category: "uncategorized",
        term: "Las fichas ",
        definition: " the chips",
        knowledgelevel: 0
    },
    {
        id: "ganas",
        category: "uncategorized",
        term: "Las ganas ",
        definition: " the desire",
        knowledgelevel: 0
    },
    {
        id: "heridas",
        category: "uncategorized",
        term: "Las Heridas ",
        definition: " the wounds",
        knowledgelevel: 0
    },
    {
        id: "largas",
        category: "uncategorized",
        term: "Las largas ",
        definition: "the long ones",
        knowledgelevel: 0
    },
    {
        id: "migajas",
        category: "uncategorized",
        term: "las Migajas ",
        definition: " crumbs",
        knowledgelevel: 0
    },
    {
        id: "per",
        category: "uncategorized",
        term: "Las perlas ",
        definition: " the pearls",
        knowledgelevel: 0
    },
    {
        id: "pide_repuesto",
        category: "uncategorized",
        term: "Las pilas de repuesto ",
        definition: " spare batteries",
        knowledgelevel: 0
    },
    {
        id: "tenaza",
        category: "uncategorized",
        term: "Las tenaza ",
        definition: " the pincers",
        knowledgelevel: 0
    },
    {
        id: "lastimado",
        category: "uncategorized",
        term: "Lastimado (ajd) ",
        definition: " hurt",
        knowledgelevel: 0
    },
    {
        id: "lejísimo",
        category: "uncategorized",
        term: "Lejísimo (adj) ",
        definition: " very far away",
        knowledgelevel: 0
    },
    {
        id: "liso",
        category: "uncategorized",
        term: "Liso ",
        definition: " smooth",
        knowledgelevel: 0
    },
    {
        id: "liviano",
        category: "uncategorized",
        term: "Liviano (adj) ",
        definition: " lightweight",
        knowledgelevel: 0
    },
    {
        id: "llevaba_muchas_horas",
        category: "uncategorized",
        term: "Llevaba muchas horas ",
        definition: " it took many hours",
        knowledgelevel: 0
    },
    {
        id: "llevar_puesto",
        category: "uncategorized",
        term: "Llevar puesto ",
        definition: " to wear",
        knowledgelevel: 0
    },
    {
        id: "lo_echas_a_perder",
        category: "uncategorized",
        term: "Lo echas a perder ",
        definition: " you ruin it",
        knowledgelevel: 0
    },
    {
        id: "lodosa",
        category: "uncategorized",
        term: "Lodosa (adj) ",
        definition: " muddy",
        knowledgelevel: 0
    },
    {
        id: "archivos",
        category: "uncategorized",
        term: "Los archivos ",
        definition: " the files,  records",
        knowledgelevel: 0
    },
    {
        id: "colonizadores",
        category: "uncategorized",
        term: "Los colonizadores ",
        definition: " the colonizers",
        knowledgelevel: 0
    },
    {
        id: "cuadros",
        category: "uncategorized",
        term: "Los cuadros ",
        definition: " the paintings",
        knowledgelevel: 0
    },
    {
        id: "espectácu",
        category: "uncategorized",
        term: "Los espectáculos ",
        definition: " the shows",
        knowledgelevel: 0
    },
    {
        id: "espectadores",
        category: "uncategorized",
        term: "Los espectadores ",
        definition: " the spectators",
        knowledgelevel: 0
    },
    {
        id: "factores",
        category: "uncategorized",
        term: "Los factores ",
        definition: " the facts",
        knowledgelevel: 0
    },
    {
        id: "habitantes",
        category: "uncategorized",
        term: "Los Habitantes ",
        definition: " the population",
        knowledgelevel: 0
    },
    {
        id: "huéspedes",
        category: "uncategorized",
        term: "los huéspedes ",
        definition: " the guests",
        knowledgelevel: 0
    },
    {
        id: "logros",
        category: "uncategorized",
        term: "Los logros ",
        definition: " the achievements",
        knowledgelevel: 0
    },
    {
        id: "malvavisvos",
        category: "uncategorized",
        term: "Los malvavisvos ",
        definition: " the marshmallows",
        knowledgelevel: 0
    },
    {
        id: "nietos",
        category: "uncategorized",
        term: "los nietos ",
        definition: " the grandchildren",
        knowledgelevel: 0
    },
    {
        id: "precios",
        category: "uncategorized",
        term: "Los precios ",
        definition: " the prices",
        knowledgelevel: 0
    },
    {
        id: "preparativos",
        category: "uncategorized",
        term: "Los Preparativos ",
        definition: " the preparations",
        knowledgelevel: 0
    },
    {
        id: "sorbetos",
        category: "uncategorized",
        term: "Los sorbetos ",
        definition: " the straws",
        knowledgelevel: 0
    },
    {
        id: "majestuoso",
        category: "uncategorized",
        term: "Majestuoso (adj) ",
        definition: " magestic",
        knowledgelevel: 0
    },
    {
        id: "maldita",
        category: "uncategorized",
        term: "Maldita (adj) ",
        definition: " damned,  cursed",
        knowledgelevel: 0
    },
    {
        id: "malencarado",
        category: "uncategorized",
        term: "Malencarado",
        definition: " mean",
        knowledgelevel: 0
    },
    {
        id: "malvada",
        category: "uncategorized",
        term: "Malvada (adj) ",
        definition: " evil",
        knowledgelevel: 0
    },
    {
        id: "manso",
        category: "uncategorized",
        term: "Manso ",
        definition: " meek,  tame",
        knowledgelevel: 0
    },
    {
        id: "marítimos",
        category: "uncategorized",
        term: "Marítimos ",
        definition: " maritime",
        knowledgelevel: 0
    },
    {
        id: "me_muero_por…",
        category: "uncategorized",
        term: "Me muero por… ",
        definition: " im dying to…",
        knowledgelevel: 0
    },
    {
        id: "me_pierdo",
        category: "uncategorized",
        term: "Me pierdo ",
        definition: " I get lost",
        knowledgelevel: 0
    },
    {
        id: "menor",
        category: "uncategorized",
        term: "Menor (adj) ",
        definition: " minor",
        knowledgelevel: 0
    },
    {
        id: "miedosa",
        category: "uncategorized",
        term: "Miedosa ",
        definition: " fearful",
        knowledgelevel: 0
    },
    {
        id: "mientras_tanto",
        category: "uncategorized",
        term: "Mientras tanto ",
        definition: " meanwhile",
        knowledgelevel: 0
    },
    {
        id: "miles_vs_mil",
        category: "uncategorized",
        term: "Miles vs millas ",
        definition: " miles = thousands,  millas = miles",
        knowledgelevel: 0
    },
    {
        id: "mudo",
        category: "uncategorized",
        term: "Mudo ",
        definition: " dumb,  mute",
        knowledgelevel: 0
    },
    {
        id: "muy_seguido",
        category: "uncategorized",
        term: "Muy seguido ",
        definition: " very often",
        knowledgelevel: 0
    },
    {
        id: "muy_segura_de_sí_misma",
        category: "uncategorized",
        term: "Muy segura de sí misma ",
        definition: " very sure of herself",
        knowledgelevel: 0
    },
    {
        id: "nena",
        category: "uncategorized",
        term: "Nena ",
        definition: " chick,  girl",
        knowledgelevel: 0
    },
    {
        id: "ni_tantito",
        category: "uncategorized",
        term: "Ni tantito ",
        definition: " not in the slightest",
        knowledgelevel: 0
    },
    {
        id: "no_se_dio_por_vencido",
        category: "uncategorized",
        term: "No se dio por vencido ",
        definition: " she/she did not give up",
        knowledgelevel: 0
    },
    {
        id: "ortografía",
        category: "uncategorized",
        term: "Ortografía ",
        definition: " spelling/orthography",
        knowledgelevel: 0
    },
    {
        id: "pálida",
        category: "uncategorized",
        term: "Pálida (adj) ",
        definition: " pale",
        knowledgelevel: 0
    },
    {
        id: "pañales",
        category: "uncategorized",
        term: "Pañales ",
        definition: " diapers",
        knowledgelevel: 0
    },
    {
        id: "pantuf",
        category: "uncategorized",
        term: "Pantuflas ",
        definition: " slippers",
        knowledgelevel: 0
    },
    {
        id: "papagayo",
        category: "uncategorized",
        term: "Papagayo ",
        definition: " parrot",
        knowledgelevel: 0
    },
    {
        id: "patas_arriba",
        category: "uncategorized",
        term: "Patas arriba ",
        definition: " upside down",
        knowledgelevel: 0
    },
    {
        id: "pillado",
        category: "uncategorized",
        term: "Pillado ",
        definition: " caught",
        knowledgelevel: 0
    },
    {
        id: "placentero",
        category: "uncategorized",
        term: "Placentero ",
        definition: " pleasant",
        knowledgelevel: 0
    },
    {
        id: "plateado",
        category: "uncategorized",
        term: "Plateado ",
        definition: " silver",
        knowledgelevel: 0
    },
    {
        id: "poco_después",
        category: "uncategorized",
        term: "Poco después ",
        definition: " shoftly after",
        knowledgelevel: 0
    },
    {
        id: "por_casualidad",
        category: "uncategorized",
        term: "Por casualidad ",
        definition: " by chance",
        knowledgelevel: 0
    },
    {
        id: "por_ello_de",
        category: "uncategorized",
        term: "Por ello de ",
        definition: " for that reason",
        knowledgelevel: 0
    },
    {
        id: "por_eso_mismo",
        category: "uncategorized",
        term: "Por eso mismo ",
        definition: " for that reason",
        knowledgelevel: 0
    },
    {
        id: "por_haber_corrido_tan_rápido",
        category: "uncategorized",
        term: "Por haber corrido tan rápido ",
        definition: " for having run so fast",
        knowledgelevel: 0
    },
    {
        id: "por_medio",
        category: "uncategorized",
        term: "Por medio ",
        definition: " through",
        knowledgelevel: 0
    },
    {
        id: "por_otra_parte",
        category: "uncategorized",
        term: "Por otra parte ",
        definition: " besides",
        knowledgelevel: 0
    },
    {
        id: "por_si_acaso",
        category: "uncategorized",
        term: "Por si acaso ",
        definition: " just in case",
        knowledgelevel: 0
    },
    {
        id: "por_su_cuenta",
        category: "uncategorized",
        term: "Por su cuenta ",
        definition: " on your own",
        knowledgelevel: 0
    },
    {
        id: "presumido",
        category: "uncategorized",
        term: "Presumido ",
        definition: " smug",
        knowledgelevel: 0
    },
    {
        id: "prometedor",
        category: "uncategorized",
        term: "Prometedor (adj) ",
        definition: " promising (adj)",
        knowledgelevel: 0
    },
    {
        id: "propósito",
        category: "uncategorized",
        term: "Propósito ",
        definition: " purpose",
        knowledgelevel: 0
    },
    {
        id: "pues_resulta",
        category: "uncategorized",
        term: "Pues resulta ",
        definition: " well it turns out",
        knowledgelevel: 0
    },
    {
        id: "que_siga",
        category: "uncategorized",
        term: "Que siga ",
        definition: " continue",
        knowledgelevel: 0
    },
    {
        id: "que_tal_si_hacemos…",
        category: "uncategorized",
        term: "Que tal si hacemos… ",
        definition: " What if we do…",
        knowledgelevel: 0
    },
    {
        id: "rebonito",
        category: "uncategorized",
        term: "Rebonito ",
        definition: " very beautiful",
        knowledgelevel: 0
    },
    {
        id: "recien_habia_cumplido_nueve_años",
        category: "uncategorized",
        term: "recien habia cumplido nueve años ",
        definition: " had just turned 9 years old",
        knowledgelevel: 0
    },
    {
        id: "recipientes",
        category: "uncategorized",
        term: "Recipientes ",
        definition: " containers  duplicate?",
        knowledgelevel: 0
    },
    {
        id: "regordeta",
        category: "uncategorized",
        term: "Regordeta (adj) ",
        definition: " plump",
        knowledgelevel: 0
    },
    {
        id: "rellena_de_carne",
        category: "uncategorized",
        term: "Rellena de carne ",
        definition: " filled with meat",
        knowledgelevel: 0
    },
    {
        id: "respetuoso",
        category: "uncategorized",
        term: "Respetuoso ",
        definition: " respectful",
        knowledgelevel: 0
    },
    {
        id: "rodante",
        category: "uncategorized",
        term: "Rodante ",
        definition: " rolling",
        knowledgelevel: 0
    },
    {
        id: "ronca",
        category: "uncategorized",
        term: "Ronca ",
        definition: " hoarse",
        knowledgelevel: 0
    },
    {
        id: "sabias",
        category: "uncategorized",
        term: "Sabias (adj) ",
        definition: " wise",
        knowledgelevel: 0
    },
    {
        id: "sabio",
        category: "uncategorized",
        term: "Sabio (adj) ",
        definition: " wise",
        knowledgelevel: 0
    },
    {
        id: "se_había_puesto_en_contacto",
        category: "uncategorized",
        term: "Se había puesto en contacto ",
        definition: " had been contacted",
        knowledgelevel: 0
    },
    {
        id: "se_hace_de_noche",
        category: "uncategorized",
        term: "Se hace de noche ",
        definition: " its getting dark,  its becoming night",
        knowledgelevel: 0
    },
    {
        id: "se_supo",
        category: "uncategorized",
        term: "Se supo ",
        definition: " it was known",
        knowledgelevel: 0
    },
    {
        id: "sello",
        category: "uncategorized",
        term: "Sello  ",
        definition: " seal for a letter,  stamp",
        knowledgelevel: 0
    },
    {
        id: "sencillo",
        category: "uncategorized",
        term: "Sencillo ",
        definition: " simple",
        knowledgelevel: 0
    },
    {
        id: "si_de_comida_se_trata…",
        category: "uncategorized",
        term: "Si de comida se trata… ",
        definition: " if it’s about food…",
        knowledgelevel: 0
    },
    {
        id: "sino",
        category: "uncategorized",
        term: "Sino ",
        definition: " but (conjunction)",
        knowledgelevel: 0
    },
    {
        id: "sino_hasta",
        category: "uncategorized",
        term: "Sino hasta ",
        definition: " but until",
        knowledgelevel: 0
    },
    {
        id: "sobresalen",
        category: "uncategorized",
        term: "Sobresalen ",
        definition: " they stand out",
        knowledgelevel: 0
    },
    {
        id: "solamente",
        category: "uncategorized",
        term: "Solamente ",
        definition: " only",
        knowledgelevel: 0
    },
    {
        id: "suecia",
        category: "uncategorized",
        term: "Suecia ",
        definition: " Sweden",
        knowledgelevel: 0
    },
    {
        id: "tabaco",
        category: "uncategorized",
        term: "Tabaco ",
        definition: " tobacco",
        knowledgelevel: 0
    },
    {
        id: "tal",
        category: "uncategorized",
        term: "Tal ",
        definition: " such",
        knowledgelevel: 0
    },
    {
        id: "tal_y_como",
        category: "uncategorized",
        term: "Tal y como ",
        definition: " just like",
        knowledgelevel: 0
    },
    {
        id: "tan_solo",
        category: "uncategorized",
        term: "Tan solo ",
        definition: " just",
        knowledgelevel: 0
    },
    {
        id: "tardado",
        category: "uncategorized",
        term: "Tardado (adj) ",
        definition: " delayed",
        knowledgelevel: 0
    },
    {
        id: "temerosa",
        category: "uncategorized",
        term: "Temerosa ",
        definition: " fearful",
        knowledgelevel: 0
    },
    {
        id: "tener_motivos",
        category: "uncategorized",
        term: "Tener motivos ",
        definition: " to have reasons",
        knowledgelevel: 0
    },
    {
        id: "tener_sentido",
        category: "uncategorized",
        term: "Tener sentido ",
        definition: " to make sense",
        knowledgelevel: 0
    },
    {
        id: "tengo_fama_de_ser_sabio",
        category: "uncategorized",
        term: "Tengo fama de ser sabio ",
        definition: " I have a reputation for being wise",
        knowledgelevel: 0
    },
    {
        id: "tensa",
        category: "uncategorized",
        term: "Tensa ",
        definition: " tense",
        knowledgelevel: 0
    },
    {
        id: "terca",
        category: "uncategorized",
        term: "Terca ",
        definition: " stubborn",
        knowledgelevel: 0
    },
    {
        id: "terciopelo",
        category: "uncategorized",
        term: "Terciopelo ",
        definition: " velvet",
        knowledgelevel: 0
    },
    {
        id: "tirándole_de_manga",
        category: "uncategorized",
        term: "Tirándole de una manga ",
        definition: " pulling his sleeve",
        knowledgelevel: 0
    },
    {
        id: "tocar_puerta",
        category: "uncategorized",
        term: "Tocar la puerta ",
        definition: " knock on the door",
        knowledgelevel: 0
    },
    {
        id: "trasero",
        category: "uncategorized",
        term: "Trasero ",
        definition: " rear",
        knowledgelevel: 0
    },
    {
        id: "trayectoria",
        category: "uncategorized",
        term: "Trayectoria ",
        definition: " a trajectory",
        knowledgelevel: 0
    },
    {
        id: "últimamente",
        category: "uncategorized",
        term: "Últimamente ",
        definition: " lately",
        knowledgelevel: 0
    },
    {
        id: "acabado",
        category: "uncategorized",
        term: "Un acabado ",
        definition: " a finish",
        knowledgelevel: 0
    },
    {
        id: "acertijo",
        category: "uncategorized",
        term: "Un acertijo ",
        definition: " a riddle",
        knowledgelevel: 0
    },
    {
        id: "aficionado",
        category: "uncategorized",
        term: "Un aficionado ",
        definition: " an amateur",
        knowledgelevel: 0
    },
    {
        id: "alambre",
        category: "uncategorized",
        term: "Un alambre ",
        definition: " a wire",
        knowledgelevel: 0
    },
    {
        id: "alboroto",
        category: "uncategorized",
        term: "Un alboroto ",
        definition: " a rampage,  a riot",
        knowledgelevel: 0
    },
    {
        id: "alce",
        category: "uncategorized",
        term: "Un alce ",
        definition: " a moose",
        knowledgelevel: 0
    },
    {
        id: "amante",
        category: "uncategorized",
        term: "Un amante ",
        definition: " a lover",
        knowledgelevel: 0
    },
    {
        id: "arqueólogo",
        category: "uncategorized",
        term: "Un Arqueólogo ",
        definition: " an archeologist",
        knowledgelevel: 0
    },
    {
        id: "átomo",
        category: "uncategorized",
        term: "Un átomo ",
        definition: " an atom",
        knowledgelevel: 0
    },
    {
        id: "aumento",
        category: "uncategorized",
        term: "Un aumento ",
        definition: " an increase",
        knowledgelevel: 0
    },
    {
        id: "banco",
        category: "uncategorized",
        term: "Un banco ",
        definition: " bank or bench",
        knowledgelevel: 0
    },
    {
        id: "barrote",
        category: "uncategorized",
        term: "Un barrote ",
        definition: " a bar",
        knowledgelevel: 0
    },
    {
        id: "bate",
        category: "uncategorized",
        term: "Un bate ",
        definition: " a bat",
        knowledgelevel: 0
    },
    {
        id: "beneficio",
        category: "uncategorized",
        term: "Un beneficio ",
        definition: " a benefit",
        knowledgelevel: 0
    },
    {
        id: "bistec",
        category: "uncategorized",
        term: "un Bistec ",
        definition: " steak",
        knowledgelevel: 0
    },
    {
        id: "bostezo",
        category: "uncategorized",
        term: "Un bostezo ",
        definition: " a yawn",
        knowledgelevel: 0
    },
    {
        id: "brinco",
        category: "uncategorized",
        term: "Un brinco ",
        definition: " a jump",
        knowledgelevel: 0
    },
    {
        id: "buey",
        category: "uncategorized",
        term: "Un buey ",
        definition: " an ox",
        knowledgelevel: 0
    },
    {
        id: "buque",
        category: "uncategorized",
        term: "Un buque ",
        definition: " a vessel",
        knowledgelevel: 0
    },
    {
        id: "buzón",
        category: "uncategorized",
        term: "Un buzón ",
        definition: " a mailbox",
        knowledgelevel: 0
    },
    {
        id: "campeonato",
        category: "uncategorized",
        term: "Un campeonato ",
        definition: " a championship",
        knowledgelevel: 0
    },
    {
        id: "cañón",
        category: "uncategorized",
        term: "Un Cañón ",
        definition: " a cannon",
        knowledgelevel: 0
    },
    {
        id: "chiste",
        category: "uncategorized",
        term: "un chiste ",
        definition: " a joke",
        knowledgelevel: 0
    },
    {
        id: "combustible",
        category: "uncategorized",
        term: "Un combustible ",
        definition: " a fuel",
        knowledgelevel: 0
    },
    {
        id: "comentario",
        category: "uncategorized",
        term: "un comentario ",
        definition: " a comment",
        knowledgelevel: 0
    },
    {
        id: "cuarto_de_pulgada_de_ancho",
        category: "uncategorized",
        term: "Un cuarto de pulgada de ancho ",
        definition: " a quarter inch wide",
        knowledgelevel: 0
    },
    {
        id: "cuentacuento",
        category: "uncategorized",
        term: "Un cuentacuento ",
        definition: " a storyteller",
        knowledgelevel: 0
    },
    {
        id: "documental",
        category: "uncategorized",
        term: "Un documental ",
        definition: " a documentary",
        knowledgelevel: 0
    },
    {
        id: "empate",
        category: "uncategorized",
        term: "Un empate ",
        definition: " a tie (like 2 sports teams are tied)",
        knowledgelevel: 0
    },
    {
        id: "escopeta",
        category: "uncategorized",
        term: "Un escopeta ",
        definition: " a shotgun",
        knowledgelevel: 0
    },
    {
        id: "espectáculo",
        category: "uncategorized",
        term: "Un espectáculo ",
        definition: " a show",
        knowledgelevel: 0
    },
    {
        id: "fenómeno",
        category: "uncategorized",
        term: "un Fenómeno ",
        definition: " a freak,  or a phenomenon",
        knowledgelevel: 0
    },
    {
        id: "golfo",
        category: "uncategorized",
        term: "Un golfo ",
        definition: " a gulf",
        knowledgelevel: 0
    },
    {
        id: "guión",
        category: "uncategorized",
        term: "Un guión ",
        definition: " a script",
        knowledgelevel: 0
    },
    {
        id: "imán",
        category: "uncategorized",
        term: "Un imán ",
        definition: " a magnet",
        knowledgelevel: 0
    },
    {
        id: "jarrón",
        category: "uncategorized",
        term: "Un jarrón ",
        definition: " a vase",
        knowledgelevel: 0
    },
    {
        id: "ladrillo",
        category: "uncategorized",
        term: "un ladrillo ",
        definition: " a brick",
        knowledgelevel: 0
    },
    {
        id: "leopardo",
        category: "uncategorized",
        term: "Un leopardo ",
        definition: " a leopard",
        knowledgelevel: 0
    },
    {
        id: "listón",
        category: "uncategorized",
        term: "Un listón ",
        definition: " a ribbon",
        knowledgelevel: 0
    },
    {
        id: "marco",
        category: "uncategorized",
        term: "Un marco ",
        definition: " a border (como un photo)",
        knowledgelevel: 0
    },
    {
        id: "martillo",
        category: "uncategorized",
        term: "Un martillo ",
        definition: " a hammer",
        knowledgelevel: 0
    },
    {
        id: "molusco",
        category: "uncategorized",
        term: "Un molusco ",
        definition: " a mollusk",
        knowledgelevel: 0
    },
    {
        id: "murmullo",
        category: "uncategorized",
        term: "Un murmullo ",
        definition: " a murmur",
        knowledgelevel: 0
    },
    {
        id: "parpadeo_de_ojo",
        category: "uncategorized",
        term: "Un parpadeo de un ojo ",
        definition: " a blink of an eye",
        knowledgelevel: 0
    },
    {
        id: "pasadizo",
        category: "uncategorized",
        term: "Un pasadizo ",
        definition: " passageway",
        knowledgelevel: 0
    },
    {
        id: "pavo_real",
        category: "uncategorized",
        term: "Un Pavo real ",
        definition: " a peacock",
        knowledgelevel: 0
    },
    {
        id: "pececil",
        category: "uncategorized",
        term: "Un pececilla ",
        definition: " a minnow",
        knowledgelevel: 0
    },
    {
        id: "peón",
        category: "uncategorized",
        term: "Un peón,  Los Peones ",
        definition: " a pawn, the pawns",
        knowledgelevel: 0
    },
    {
        id: "pestillo",
        category: "uncategorized",
        term: "Un pestillo ",
        definition: " a latch",
        knowledgelevel: 0
    },
    {
        id: "polluelo",
        category: "uncategorized",
        term: "Un Polluelo ",
        definition: " a chick",
        knowledgelevel: 0
    },
    {
        id: "pozo",
        category: "uncategorized",
        term: "Un pozo ",
        definition: " a well",
        knowledgelevel: 0
    },
    {
        id: "puesto",
        category: "uncategorized",
        term: "Un puesto ",
        definition: " a position,  or a place",
        knowledgelevel: 0
    },
    {
        id: "punto_de_partida",
        category: "uncategorized",
        term: "Un punto de partida ",
        definition: " a starting point",
        knowledgelevel: 0
    },
    {
        id: "rastro",
        category: "uncategorized",
        term: "Un Rastro ",
        definition: " the trace/trail",
        knowledgelevel: 0
    },
    {
        id: "recuadro",
        category: "uncategorized",
        term: "Un recuadro ",
        definition: " a box",
        knowledgelevel: 0
    },
    {
        id: "reno",
        category: "uncategorized",
        term: "Un reno ",
        definition: " a reindeer",
        knowledgelevel: 0
    },
    {
        id: "reportero",
        category: "uncategorized",
        term: "Un reportero ",
        definition: " a reporter",
        knowledgelevel: 0
    },
    {
        id: "riachuelo",
        category: "uncategorized",
        term: "Un riachuelo ",
        definition: " a creek",
        knowledgelevel: 0
    },
    {
        id: "riesgo",
        category: "uncategorized",
        term: "Un riesgo ",
        definition: " a risk",
        knowledgelevel: 0
    },
    {
        id: "rugido",
        category: "uncategorized",
        term: "Un rugido ",
        definition: " a roar",
        knowledgelevel: 0
    },
    {
        id: "saco",
        category: "uncategorized",
        term: "Un saco ",
        definition: " a sack",
        knowledgelevel: 0
    },
    {
        id: "saco_de_dormir",
        category: "uncategorized",
        term: "Un saco de dormir ",
        definition: " a sleeping bag",
        knowledgelevel: 0
    },
    {
        id: "sentido",
        category: "uncategorized",
        term: "un sentido ",
        definition: " a sense",
        knowledgelevel: 0
    },
    {
        id: "siglo",
        category: "uncategorized",
        term: "Un siglo ",
        definition: " a century",
        knowledgelevel: 0
    },
    {
        id: "símbolo",
        category: "uncategorized",
        term: "Un símbolo ",
        definition: " a symbol",
        knowledgelevel: 0
    },
    {
        id: "similitud",
        category: "uncategorized",
        term: "Un Similitud ",
        definition: " a similarity",
        knowledgelevel: 0
    },
    {
        id: "sobresalto",
        category: "uncategorized",
        term: "Un sobresalto ",
        definition: " a shock",
        knowledgelevel: 0
    },
    {
        id: "tablero",
        category: "uncategorized",
        term: "Un tablero ",
        definition: " a board",
        knowledgelevel: 0
    },
    {
        id: "tallo",
        category: "uncategorized",
        term: "Un tallo ",
        definition: " a stem",
        knowledgelevel: 0
    },
    {
        id: "tanto_molesta",
        category: "uncategorized",
        term: "Un tanto molesta ",
        definition: " kinda annoyed",
        knowledgelevel: 0
    },
    {
        id: "termostato",
        category: "uncategorized",
        term: "Un termostato ",
        definition: " a thermostat",
        knowledgelevel: 0
    },
    {
        id: "adivinanza",
        category: "uncategorized",
        term: "Una adivinanza ",
        definition: " a riddle",
        knowledgelevel: 0
    },
    {
        id: "aleta",
        category: "uncategorized",
        term: "Una aleta ",
        definition: " a fin",
        knowledgelevel: 0
    },
    {
        id: "almeja",
        category: "uncategorized",
        term: "Una almeja ",
        definition: " a clam",
        knowledgelevel: 0
    },
    {
        id: "ba",
        category: "uncategorized",
        term: "Una bala ",
        definition: " a bullet",
        knowledgelevel: 0
    },
    {
        id: "brúju",
        category: "uncategorized",
        term: "Una brújula ",
        definition: " a compass",
        knowledgelevel: 0
    },
    {
        id: "canasta",
        category: "uncategorized",
        term: "una canasta ",
        definition: " a basket",
        knowledgelevel: 0
    },
    {
        id: "cancha",
        category: "uncategorized",
        term: "Una cancha ",
        definition: " a court,  for sports or judging people",
        knowledgelevel: 0
    },
    {
        id: "casualidad",
        category: "uncategorized",
        term: "Una casualidad ",
        definition: " a chance,  una oportunidad",
        knowledgelevel: 0
    },
    {
        id: "colina",
        category: "uncategorized",
        term: "Una colina ",
        definition: " a hill",
        knowledgelevel: 0
    },
    {
        id: "cucharadita",
        category: "uncategorized",
        term: "Una cucharadita ",
        definition: " a teaspoonful",
        knowledgelevel: 0
    },
    {
        id: "destreza",
        category: "uncategorized",
        term: "Una destreza ",
        definition: " skill",
        knowledgelevel: 0
    },
    {
        id: "escoba",
        category: "uncategorized",
        term: "Una escoba ",
        definition: " a broom",
        knowledgelevel: 0
    },
    {
        id: "escuadril",
        category: "uncategorized",
        term: "Una Escuadrilla ",
        definition: " a squadron",
        knowledgelevel: 0
    },
    {
        id: "esquina",
        category: "uncategorized",
        term: "Una esquina ",
        definition: " a corner",
        knowledgelevel: 0
    },
    {
        id: "fort",
        category: "uncategorized",
        term: "Una fortuna ",
        definition: " a fortune",
        knowledgelevel: 0
    },
    {
        id: "gorrión",
        category: "uncategorized",
        term: "Una gorrión ",
        definition: " a sparrow",
        knowledgelevel: 0
    },
    {
        id: "jugada",
        category: "uncategorized",
        term: "Una Jugada ",
        definition: " a move",
        knowledgelevel: 0
    },
    {
        id: "juguetería",
        category: "uncategorized",
        term: "Una Juguetería ",
        definition: " a toy store",
        knowledgelevel: 0
    },
    {
        id: "ladera",
        category: "uncategorized",
        term: "Una ladera ",
        definition: " a hillside",
        knowledgelevel: 0
    },
    {
        id: "lona",
        category: "uncategorized",
        term: "Una lona ",
        definition: " a tarp",
        knowledgelevel: 0
    },
    {
        id: "maldición",
        category: "uncategorized",
        term: "Una maldición ",
        definition: " a curse",
        knowledgelevel: 0
    },
    {
        id: "mejoría",
        category: "uncategorized",
        term: "Una mejoría ",
        definition: " an improvement",
        knowledgelevel: 0
    },
    {
        id: "palmadita",
        category: "uncategorized",
        term: "Una palmadita ",
        definition: " a pat (like a pat on the back with the palm of one’s hand)",
        knowledgelevel: 0
    },
    {
        id: "pantal",
        category: "uncategorized",
        term: "Una pantalla ",
        definition: " a screen",
        knowledgelevel: 0
    },
    {
        id: "pantera",
        category: "uncategorized",
        term: "Una pantera ",
        definition: " a panther",
        knowledgelevel: 0
    },
    {
        id: "patineta",
        category: "uncategorized",
        term: "Una patineta ",
        definition: " a skateboard",
        knowledgelevel: 0
    },
    {
        id: "pizarra",
        category: "uncategorized",
        term: "Una pizarra ",
        definition: " a board (like a blackboard)",
        knowledgelevel: 0
    },
    {
        id: "premiacion",
        category: "uncategorized",
        term: "una premiacion ",
        definition: " an award",
        knowledgelevel: 0
    },
    {
        id: "probadita",
        category: "uncategorized",
        term: "Una probadita ",
        definition: " a taste",
        knowledgelevel: 0
    },
    {
        id: "propina",
        category: "uncategorized",
        term: "Una propina ",
        definition: " a tip",
        knowledgelevel: 0
    },
    {
        id: "púa",
        category: "uncategorized",
        term: "Una Púa ",
        definition: " a spike",
        knowledgelevel: 0
    },
    {
        id: "recompense",
        category: "uncategorized",
        term: "Una recompense ",
        definition: " a reward",
        knowledgelevel: 0
    },
    {
        id: "sábana",
        category: "uncategorized",
        term: "Una sábana ",
        definition: " a sheet",
        knowledgelevel: 0
    },
    {
        id: "soga",
        category: "uncategorized",
        term: "una Soga ",
        definition: " a rope",
        knowledgelevel: 0
    },
    {
        id: "sustancia",
        category: "uncategorized",
        term: "Una sustancia ",
        definition: " a substance",
        knowledgelevel: 0
    },
    {
        id: "tapa",
        category: "uncategorized",
        term: "Una tapa ",
        definition: " a lid",
        knowledgelevel: 0
    },
    {
        id: "tarima",
        category: "uncategorized",
        term: "Una tarima ",
        definition: " a platform",
        knowledgelevel: 0
    },
    {
        id: "tira",
        category: "uncategorized",
        term: "Una tira ",
        definition: " a strip",
        knowledgelevel: 0
    },
    {
        id: "tonta",
        category: "uncategorized",
        term: "Una tonta ",
        definition: " a fool",
        knowledgelevel: 0
    },
    {
        id: "tubería",
        category: "uncategorized",
        term: "Una tubería ",
        definition: " a pipe",
        knowledgelevel: 0
    },
    {
        id: "vainil",
        category: "uncategorized",
        term: "Vainilla ",
        definition: " vanilla",
        knowledgelevel: 0
    },
    {
        id: "varias_veces",
        category: "uncategorized",
        term: "Varias veces ",
        definition: " repeatedly",
        knowledgelevel: 0
    },
    {
        id: "vaya!",
        category: "uncategorized",
        term: "Vaya! ",
        definition: " oh!",
        knowledgelevel: 0
    },
    {
        id: "veloz",
        category: "uncategorized",
        term: "Veloz (adj) ",
        definition: " fast",
        knowledgelevel: 0
    },
    {
        id: "vestido_de_novia",
        category: "uncategorized",
        term: "Vestido de novia ",
        definition: " wedding dress",
        knowledgelevel: 0
    },
    {
        id: "volver_a_guardar",
        category: "uncategorized",
        term: "Volver a guardar ",
        definition: " save again",
        knowledgelevel: 0
    },
    {
        id: "ya_sea_que",
        category: "uncategorized",
        term: "Ya sea que ",
        definition: " whether",
        knowledgelevel: 0
    },
    {
        id: "abandonar",
        category: "verbs",
        term: "abandonar",
        definition: "to abandon, to leave",
        knowledgelevel: 0
    },
    {
        id: "abrir",
        category: "verbs",
        term: "abrir",
        definition: "to open",
        knowledgelevel: 0
    },
    {
        id: "acabar",
        category: "verbs",
        term: "acabar",
        definition: "to finish, to end, to complete",
        knowledgelevel: 0
    },
    {
        id: "aceptar",
        category: "verbs",
        term: "aceptar",
        definition: "to accept",
        knowledgelevel: 0
    },
    {
        id: "acercar",
        category: "verbs",
        term: "acercar",
        definition: "to bring closer",
        knowledgelevel: 0
    },
    {
        id: "acercarse",
        category: "verbs",
        term: "acercarse",
        definition: "to approach (oneself)",
        knowledgelevel: 0
    },
    {
        id: "acompañar",
        category: "verbs",
        term: "acompañar",
        definition: "to accompany",
        knowledgelevel: 0
    },
    {
        id: "aconsejar",
        category: "verbs",
        term: "aconsejar",
        definition: "to advise, to suggest, to counsel",
        knowledgelevel: 0
    },
    {
        id: "acordar",
        category: "verbs",
        term: "acordar",
        definition: "to agree, to agree on or upon",
        knowledgelevel: 0
    },
    {
        id: "acordarse",
        category: "verbs",
        term: "acordarse",
        definition: "to remember",
        knowledgelevel: 0
    },
    {
        id: "acostar",
        category: "verbs",
        term: "acostar",
        definition: "to put to bed, to lay down",
        knowledgelevel: 0
    },
    {
        id: "acostarse",
        category: "verbs",
        term: "acostarse",
        definition: "to go to bed (oneself), to lie down (oneself)",
        knowledgelevel: 0
    },
    {
        id: "actuar",
        category: "verbs",
        term: "actuar",
        definition: "to act, to perform",
        knowledgelevel: 0
    },
    {
        id: "admirar",
        category: "verbs",
        term: "admirar",
        definition: "to admire",
        knowledgelevel: 0
    },
    {
        id: "admitir",
        category: "verbs",
        term: "admitir",
        definition: "to admit",
        knowledgelevel: 0
    },
    {
        id: "adoptar",
        category: "verbs",
        term: "adoptar",
        definition: "to adopt",
        knowledgelevel: 0
    },
    {
        id: "adquirir",
        category: "verbs",
        term: "adquirir",
        definition: "to acquire, to purchase",
        knowledgelevel: 0
    },
    {
        id: "ahorrar",
        category: "verbs",
        term: "ahorrar",
        definition: "to save (money), to spare",
        knowledgelevel: 0
    },
    {
        id: "alcanzar",
        category: "verbs",
        term: "alcanzar",
        definition: "to reach, to attain, to achieve, to accomplish",
        knowledgelevel: 0
    },
    {
        id: "almorzar",
        category: "verbs",
        term: "almorzar",
        definition: "to lunch, to eat lunch",
        knowledgelevel: 0
    },
    {
        id: "alquilar",
        category: "verbs",
        term: "alquilar",
        definition: "to rent, to hire",
        knowledgelevel: 0
    },
    {
        id: "amar",
        category: "verbs",
        term: "amar",
        definition: "to love",
        knowledgelevel: 0
    },
    {
        id: "amenazar",
        category: "verbs",
        term: "amenazar",
        definition: "to threaten, to menace",
        knowledgelevel: 0
    },
    {
        id: "andar",
        category: "verbs",
        term: "andar",
        definition: "to walk, to go, to go around",
        knowledgelevel: 0
    },
    {
        id: "anunciar",
        category: "verbs",
        term: "anunciar",
        definition: "to announce, to advertise",
        knowledgelevel: 0
    },
    {
        id: "apagar",
        category: "verbs",
        term: "apagar",
        definition: "to turn off, to extinguish",
        knowledgelevel: 0
    },
    {
        id: "aparecer",
        category: "verbs",
        term: "aparecer",
        definition: "to appear",
        knowledgelevel: 0
    },
    {
        id: "aplicar",
        category: "verbs",
        term: "aplicar",
        definition: "to apply",
        knowledgelevel: 0
    },
    {
        id: "apoyar",
        category: "verbs",
        term: "apoyar",
        definition: "to support",
        knowledgelevel: 0
    },
    {
        id: "aprender",
        category: "verbs",
        term: "aprender",
        definition: "to learn",
        knowledgelevel: 0
    },
    {
        id: "apretar",
        category: "verbs",
        term: "apretar",
        definition: "to tighten",
        knowledgelevel: 0
    },
    {
        id: "aprovechar",
        category: "verbs",
        term: "aprovechar",
        definition: "to take advantage of",
        knowledgelevel: 0
    },
    {
        id: "arreglar",
        category: "verbs",
        term: "arreglar",
        definition: "to fix, to mend, to arrange",
        knowledgelevel: 0
    },
    {
        id: "arreglarse",
        category: "verbs",
        term: "arreglarse",
        definition: "to get ready",
        knowledgelevel: 0
    },
    {
        id: "asegurar",
        category: "verbs",
        term: "asegurar",
        definition: "to ensure, to secure, to insure",
        knowledgelevel: 0
    },
    {
        id: "asegurarse",
        category: "verbs",
        term: "asegurarse",
        definition: "to ensure, to be sure",
        knowledgelevel: 0
    },
    {
        id: "asistir",
        category: "verbs",
        term: "asistir",
        definition: "to assist, to attend",
        knowledgelevel: 0
    },
    {
        id: "atender",
        category: "verbs",
        term: "atender",
        definition: "to attend to, to serve, to tend to",
        knowledgelevel: 0
    },
    {
        id: "aumentar",
        category: "verbs",
        term: "aumentar",
        definition: "to increase, to enlarge",
        knowledgelevel: 0
    },
    {
        id: "avanzar",
        category: "verbs",
        term: "avanzar",
        definition: "to advance, to proceed, to move",
        knowledgelevel: 0
    },
    {
        id: "averiguar",
        category: "verbs",
        term: "averiguar",
        definition: "to find out, to ascertain",
        knowledgelevel: 0
    },
    {
        id: "ayudar",
        category: "verbs",
        term: "ayudar",
        definition: "to help, to assist",
        knowledgelevel: 0
    },
    {
        id: "bailar",
        category: "verbs",
        term: "bailar",
        definition: "to dance",
        knowledgelevel: 0
    },
    {
        id: "bajar",
        category: "verbs",
        term: "bajar",
        definition: "to go down, to lower, to bring down",
        knowledgelevel: 0
    },
    {
        id: "beber",
        category: "verbs",
        term: "beber",
        definition: "to drink",
        knowledgelevel: 0
    },
    {
        id: "buscar",
        category: "verbs",
        term: "buscar",
        definition: "to search (for), to look (for)",
        knowledgelevel: 0
    },
    {
        id: "caber",
        category: "verbs",
        term: "caber",
        definition: "to fit",
        knowledgelevel: 0
    },
    {
        id: "caer",
        category: "verbs",
        term: "caer",
        definition: "to fall, to fall down",
        knowledgelevel: 0
    },
    {
        id: "caerse",
        category: "verbs",
        term: "caerse",
        definition: "to fall, to fall down",
        knowledgelevel: 0
    },
    {
        id: "calentar",
        category: "verbs",
        term: "calentar",
        definition: "to warm (up), to heat (up)",
        knowledgelevel: 0
    },
    {
        id: "calentarse",
        category: "verbs",
        term: "calentarse",
        definition: "to heat (oneself)",
        knowledgelevel: 0
    },
    {
        id: "cambiar",
        category: "verbs",
        term: "cambiar",
        definition: "to change",
        knowledgelevel: 0
    },
    {
        id: "cambiarse",
        category: "verbs",
        term: "cambiarse",
        definition: "to change (clothes)",
        knowledgelevel: 0
    },
    {
        id: "caminar",
        category: "verbs",
        term: "caminar",
        definition: "to walk",
        knowledgelevel: 0
    },
    {
        id: "cancelar",
        category: "verbs",
        term: "cancelar",
        definition: "to cancel",
        knowledgelevel: 0
    },
    {
        id: "cantar",
        category: "verbs",
        term: "cantar",
        definition: "to sing",
        knowledgelevel: 0
    },
    {
        id: "casarse",
        category: "verbs",
        term: "casarse",
        definition: "to marry",
        knowledgelevel: 0
    },
    {
        id: "celebrar",
        category: "verbs",
        term: "celebrar",
        definition: "to celebrate, to hold (an event), to put on (an event)",
        knowledgelevel: 0
    },
    {
        id: "celebrarse",
        category: "verbs",
        term: "celebrarse",
        definition: "to be celebrated, to take place",
        knowledgelevel: 0
    },
    {
        id: "cenar",
        category: "verbs",
        term: "cenar",
        definition: "to dine",
        knowledgelevel: 0
    },
    {
        id: "cepillar",
        category: "verbs",
        term: "cepillar",
        definition: "to brush",
        knowledgelevel: 0
    },
    {
        id: "cepillarse",
        category: "verbs",
        term: "cepillarse",
        definition: "to brush (oneself)",
        knowledgelevel: 0
    },
    {
        id: "cerrar",
        category: "verbs",
        term: "cerrar",
        definition: "to close, to shut, to lock, to seal",
        knowledgelevel: 0
    },
    {
        id: "cocinar",
        category: "verbs",
        term: "cocinar",
        definition: "to cook",
        knowledgelevel: 0
    },
    {
        id: "coger",
        category: "verbs",
        term: "coger",
        definition: "to take, to catch, to get, to pick",
        knowledgelevel: 0
    },
    {
        id: "colocar",
        category: "verbs",
        term: "colocar",
        definition: "to place, to locate, to put",
        knowledgelevel: 0
    },
    {
        id: "comenzar",
        category: "verbs",
        term: "comenzar",
        definition: "to start, to commence, to begin",
        knowledgelevel: 0
    },
    {
        id: "comer",
        category: "verbs",
        term: "comer",
        definition: "to eat",
        knowledgelevel: 0
    },
    {
        id: "comerse",
        category: "verbs",
        term: "comerse",
        definition: "to consume, to eat away",
        knowledgelevel: 0
    },
    {
        id: "compartir",
        category: "verbs",
        term: "compartir",
        definition: "to share",
        knowledgelevel: 0
    },
    {
        id: "comprar",
        category: "verbs",
        term: "comprar",
        definition: "to buy",
        knowledgelevel: 0
    },
    {
        id: "comprender",
        category: "verbs",
        term: "comprender",
        definition: "to comprehend, to understand",
        knowledgelevel: 0
    },
    {
        id: "comprobar",
        category: "verbs",
        term: "comprobar",
        definition: "to check, to test",
        knowledgelevel: 0
    },
    {
        id: "concluir",
        category: "verbs",
        term: "concluir",
        definition: "to conclude",
        knowledgelevel: 0
    },
    {
        id: "conocer",
        category: "verbs",
        term: "conocer",
        definition: "to know (people, places)",
        knowledgelevel: 0
    },
    {
        id: "conocerse",
        category: "verbs",
        term: "conocerse",
        definition: "to know (oneself), to meet",
        knowledgelevel: 0
    },
    {
        id: "conseguir",
        category: "verbs",
        term: "conseguir",
        definition: "to get, to obtain",
        knowledgelevel: 0
    },
    {
        id: "consentir",
        category: "verbs",
        term: "consentir",
        definition: "to consent, to accept, to agree",
        knowledgelevel: 0
    },
    {
        id: "conservar",
        category: "verbs",
        term: "conservar",
        definition: "to keep, to retain, to conserve",
        knowledgelevel: 0
    },
    {
        id: "considerar",
        category: "verbs",
        term: "considerar",
        definition: "to consider",
        knowledgelevel: 0
    },
    {
        id: "consistir",
        category: "verbs",
        term: "consistir",
        definition: "to consist",
        knowledgelevel: 0
    },
    {
        id: "consolar",
        category: "verbs",
        term: "consolar",
        definition: "to comfort",
        knowledgelevel: 0
    },
    {
        id: "consolidar",
        category: "verbs",
        term: "consolidar",
        definition: "to consolidate",
        knowledgelevel: 0
    },
    {
        id: "construir",
        category: "verbs",
        term: "construir",
        definition: "to build, to construct",
        knowledgelevel: 0
    },
    {
        id: "consumir",
        category: "verbs",
        term: "consumir",
        definition: "to consume",
        knowledgelevel: 0
    },
    {
        id: "contactar",
        category: "verbs",
        term: "contactar",
        definition: "to contact",
        knowledgelevel: 0
    },
    {
        id: "contagiar",
        category: "verbs",
        term: "contagiar",
        definition: "to transmit, to spread (a virus)",
        knowledgelevel: 0
    },
    {
        id: "contar",
        category: "verbs",
        term: "contar",
        definition: "to count, to tell",
        knowledgelevel: 0
    },
    {
        id: "contener",
        category: "verbs",
        term: "contener",
        definition: "to contain, to hold, to include",
        knowledgelevel: 0
    },
    {
        id: "contestar",
        category: "verbs",
        term: "contestar",
        definition: "to answer, to reply",
        knowledgelevel: 0
    },
    {
        id: "continuar",
        category: "verbs",
        term: "continuar",
        definition: "to continue",
        knowledgelevel: 0
    },
    {
        id: "convertir",
        category: "verbs",
        term: "convertir",
        definition: "to convert",
        knowledgelevel: 0
    },
    {
        id: "copiar",
        category: "verbs",
        term: "copiar",
        definition: "to copy",
        knowledgelevel: 0
    },
    {
        id: "corregir",
        category: "verbs",
        term: "corregir",
        definition: "to correct, to mend",
        knowledgelevel: 0
    },
    {
        id: "correr",
        category: "verbs",
        term: "correr",
        definition: "to run, to race",
        knowledgelevel: 0
    },
    {
        id: "corresponder",
        category: "verbs",
        term: "corresponder",
        definition: "to correspond",
        knowledgelevel: 0
    },
    {
        id: "cortar",
        category: "verbs",
        term: "cortar",
        definition: "to cut",
        knowledgelevel: 0
    },
    {
        id: "coser",
        category: "verbs",
        term: "coser",
        definition: "to sew, to stitch",
        knowledgelevel: 0
    },
    {
        id: "costar",
        category: "verbs",
        term: "costar",
        definition: "to cost",
        knowledgelevel: 0
    },
    {
        id: "crear",
        category: "verbs",
        term: "crear",
        definition: "to create",
        knowledgelevel: 0
    },
    {
        id: "crecer",
        category: "verbs",
        term: "crecer",
        definition: "to grow up, to rise, to increase",
        knowledgelevel: 0
    },
    {
        id: "creer",
        category: "verbs",
        term: "creer",
        definition: "to believe",
        knowledgelevel: 0
    },
    {
        id: "criar",
        category: "verbs",
        term: "criar",
        definition: "to raise, to bring up",
        knowledgelevel: 0
    },
    {
        id: "criarse",
        category: "verbs",
        term: "criarse",
        definition: "to raise, to bring up",
        knowledgelevel: 0
    },
    {
        id: "cruzar",
        category: "verbs",
        term: "cruzar",
        definition: "to cross, to walk across",
        knowledgelevel: 0
    },
    {
        id: "cubrir",
        category: "verbs",
        term: "cubrir",
        definition: "to cover",
        knowledgelevel: 0
    },
    {
        id: "cuidar",
        category: "verbs",
        term: "cuidar",
        definition: "to look after, to care",
        knowledgelevel: 0
    },
    {
        id: "cuidarse",
        category: "verbs",
        term: "cuidarse",
        definition: "to look after (oneself)",
        knowledgelevel: 0
    },
    {
        id: "cumplir",
        category: "verbs",
        term: "cumplir",
        definition: "to carry out, to fulfil",
        knowledgelevel: 0
    },
    {
        id: "dar",
        category: "verbs",
        term: "dar",
        definition: "to give",
        knowledgelevel: 0
    },
    {
        id: "darse",
        category: "verbs",
        term: "darse",
        definition: "to give (oneself)",
        knowledgelevel: 0
    },
    {
        id: "deber",
        category: "verbs",
        term: "deber",
        definition: "to owe, to must, to should",
        knowledgelevel: 0
    },
    {
        id: "decidir",
        category: "verbs",
        term: "decidir",
        definition: "to decide",
        knowledgelevel: 0
    },
    {
        id: "decir",
        category: "verbs",
        term: "decir",
        definition: "to say, to tell",
        knowledgelevel: 0
    },
    {
        id: "decirse",
        category: "verbs",
        term: "decirse",
        definition: "to say (to oneself)",
        knowledgelevel: 0
    },
    {
        id: "dedicar",
        category: "verbs",
        term: "dedicar",
        definition: "to devote, to dedicate",
        knowledgelevel: 0
    },
    {
        id: "dedicarse",
        category: "verbs",
        term: "dedicarse",
        definition: "to devote (oneself), to dedicate (oneself)",
        knowledgelevel: 0
    },
    {
        id: "defender",
        category: "verbs",
        term: "defender",
        definition: "to defend",
        knowledgelevel: 0
    },
    {
        id: "defenderse",
        category: "verbs",
        term: "defenderse",
        definition: "to defend (oneself)",
        knowledgelevel: 0
    },
    {
        id: "dejar",
        category: "verbs",
        term: "dejar",
        definition: "to leave, to let, to allow",
        knowledgelevel: 0
    },
    {
        id: "dejarse",
        category: "verbs",
        term: "dejarse",
        definition: "to let (oneself), to let oneself go",
        knowledgelevel: 0
    },
    {
        id: "demandar",
        category: "verbs",
        term: "demandar",
        definition: "to demand",
        knowledgelevel: 0
    },
    {
        id: "demostrar",
        category: "verbs",
        term: "demostrar",
        definition: "to demonstrate, to show, to prove",
        knowledgelevel: 0
    },
    {
        id: "depender",
        category: "verbs",
        term: "depender",
        definition: "to depend",
        knowledgelevel: 0
    },
    {
        id: "desaparecer",
        category: "verbs",
        term: "desaparecer",
        definition: "to disappear, to vanish",
        knowledgelevel: 0
    },
    {
        id: "desarrollar",
        category: "verbs",
        term: "desarrollar",
        definition: "to develop",
        knowledgelevel: 0
    },
    {
        id: "desarrollarse",
        category: "verbs",
        term: "desarrollarse",
        definition: "to develop (oneself)",
        knowledgelevel: 0
    },
    {
        id: "desayunar",
        category: "verbs",
        term: "desayunar",
        definition: "to have breakfast",
        knowledgelevel: 0
    },
    {
        id: "descansar",
        category: "verbs",
        term: "descansar",
        definition: "to rest",
        knowledgelevel: 0
    },
    {
        id: "descargar",
        category: "verbs",
        term: "descargar",
        definition: "to download",
        knowledgelevel: 0
    },
    {
        id: "desconectar",
        category: "verbs",
        term: "desconectar",
        definition: "to disconnect",
        knowledgelevel: 0
    },
    {
        id: "describir",
        category: "verbs",
        term: "describir",
        definition: "to describe",
        knowledgelevel: 0
    },
    {
        id: "descubrir",
        category: "verbs",
        term: "descubrir",
        definition: "to discover",
        knowledgelevel: 0
    },
    {
        id: "desear",
        category: "verbs",
        term: "desear",
        definition: "to wish, to want, to desire",
        knowledgelevel: 0
    },
    {
        id: "despedirse",
        category: "verbs",
        term: "despedirse",
        definition: "to say goodbye",
        knowledgelevel: 0
    },
    {
        id: "despertar",
        category: "verbs",
        term: "despertar",
        definition: "to wake, to awaken",
        knowledgelevel: 0
    },
    {
        id: "despertarse",
        category: "verbs",
        term: "despertarse",
        definition: "to wake (oneself), to awaken (oneself)",
        knowledgelevel: 0
    },
    {
        id: "detener",
        category: "verbs",
        term: "detener",
        definition: "to stop, to arrest, to detain",
        knowledgelevel: 0
    },
    {
        id: "detenerse",
        category: "verbs",
        term: "detenerse",
        definition: "to stop, to arrest, to detain",
        knowledgelevel: 0
    },
    {
        id: "determinar",
        category: "verbs",
        term: "determinar",
        definition: "to determine",
        knowledgelevel: 0
    },
    {
        id: "devolver",
        category: "verbs",
        term: "devolver",
        definition: "to give back, to return (something)",
        knowledgelevel: 0
    },
    {
        id: "dibujar",
        category: "verbs",
        term: "dibujar",
        definition: "to draw",
        knowledgelevel: 0
    },
    {
        id: "disculpar",
        category: "verbs",
        term: "disculpar",
        definition: "to excuse",
        knowledgelevel: 0
    },
    {
        id: "diseñar",
        category: "verbs",
        term: "diseñar",
        definition: "to design",
        knowledgelevel: 0
    },
    {
        id: "disfrutar",
        category: "verbs",
        term: "disfrutar",
        definition: "to enjoy",
        knowledgelevel: 0
    },
    {
        id: "disponer",
        category: "verbs",
        term: "disponer",
        definition: "to prepare, to get something ready",
        knowledgelevel: 0
    },
    {
        id: "divertir",
        category: "verbs",
        term: "divertir",
        definition: "to amuse, to entertain",
        knowledgelevel: 0
    },
    {
        id: "divertirse",
        category: "verbs",
        term: "divertirse",
        definition: "to enjoy (oneself), to amuse (oneself), to entertain (oneself)",
        knowledgelevel: 0
    },
    {
        id: "dividir",
        category: "verbs",
        term: "dividir",
        definition: "to divide",
        knowledgelevel: 0
    },
    {
        id: "doler",
        category: "verbs",
        term: "doler",
        definition: "to hurt, to ache, to pain",
        knowledgelevel: 0
    },
    {
        id: "dormir",
        category: "verbs",
        term: "dormir",
        definition: "to sleep",
        knowledgelevel: 0
    },
    {
        id: "dormirse",
        category: "verbs",
        term: "dormirse",
        definition: "to sleep",
        knowledgelevel: 0
    },
    {
        id: "duchar",
        category: "verbs",
        term: "duchar",
        definition: "to shower (someone), to shower (something)",
        knowledgelevel: 0
    },
    {
        id: "ducharse",
        category: "verbs",
        term: "ducharse",
        definition: "to shower (oneself)",
        knowledgelevel: 0
    },
    {
        id: "dudar",
        category: "verbs",
        term: "dudar",
        definition: "to doubt",
        knowledgelevel: 0
    },
    {
        id: "echar",
        category: "verbs",
        term: "echar",
        definition: "to throw, to put, to drop,",
        knowledgelevel: 0
    },
    {
        id: "echarse",
        category: "verbs",
        term: "echarse",
        definition: "to throw (oneself), to lean, to lie down",
        knowledgelevel: 0
    },
    {
        id: "educar",
        category: "verbs",
        term: "educar",
        definition: "to educate",
        knowledgelevel: 0
    },
    {
        id: "ejercitar",
        category: "verbs",
        term: "ejercitar",
        definition: "to excercise",
        knowledgelevel: 0
    },
    {
        id: "elegir",
        category: "verbs",
        term: "elegir",
        definition: "to choose, to select, to elect",
        knowledgelevel: 0
    },
    {
        id: "emigrar",
        category: "verbs",
        term: "emigrar",
        definition: "to emigrate",
        knowledgelevel: 0
    },
    {
        id: "empeorar",
        category: "verbs",
        term: "empeorar",
        definition: "to worsen, to deteriorate",
        knowledgelevel: 0
    },
    {
        id: "empezar",
        category: "verbs",
        term: "empezar",
        definition: "to start, to begin",
        knowledgelevel: 0
    },
    {
        id: "emplear",
        category: "verbs",
        term: "emplear",
        definition: "to employ, to use",
        knowledgelevel: 0
    },
    {
        id: "empujar",
        category: "verbs",
        term: "empujar",
        definition: "to push",
        knowledgelevel: 0
    },
    {
        id: "encantar",
        category: "verbs",
        term: "encantar",
        definition: "to love, to enchant",
        knowledgelevel: 0
    },
    {
        id: "encender",
        category: "verbs",
        term: "encender",
        definition: "to turn on, to switch on, to ignite, to light up",
        knowledgelevel: 0
    },
    {
        id: "encontrar",
        category: "verbs",
        term: "encontrar",
        definition: "to find",
        knowledgelevel: 0
    },
    {
        id: "encontrarse",
        category: "verbs",
        term: "encontrarse",
        definition: "to find (oneself)",
        knowledgelevel: 0
    },
    {
        id: "engañar",
        category: "verbs",
        term: "engañar",
        definition: "to cheat, to deceive",
        knowledgelevel: 0
    },
    {
        id: "enseñar",
        category: "verbs",
        term: "enseñar",
        definition: "to teach",
        knowledgelevel: 0
    },
    {
        id: "entender",
        category: "verbs",
        term: "entender",
        definition: "to understand",
        knowledgelevel: 0
    },
    {
        id: "entrar",
        category: "verbs",
        term: "entrar",
        definition: "to enter",
        knowledgelevel: 0
    },
    {
        id: "entregar",
        category: "verbs",
        term: "entregar",
        definition: "to deliver, to give, to submit",
        knowledgelevel: 0
    },
    {
        id: "entrenar",
        category: "verbs",
        term: "entrenar",
        definition: "to train",
        knowledgelevel: 0
    },
    {
        id: "enviar",
        category: "verbs",
        term: "enviar",
        definition: "to send",
        knowledgelevel: 0
    },
    {
        id: "escalar",
        category: "verbs",
        term: "escalar",
        definition: "to climb",
        knowledgelevel: 0
    },
    {
        id: "escoger",
        category: "verbs",
        term: "escoger",
        definition: "to choose, to pick",
        knowledgelevel: 0
    },
    {
        id: "escoltar",
        category: "verbs",
        term: "escoltar",
        definition: "to escort",
        knowledgelevel: 0
    },
    {
        id: "esconder",
        category: "verbs",
        term: "esconder",
        definition: "to hide",
        knowledgelevel: 0
    },
    {
        id: "escribir",
        category: "verbs",
        term: "escribir",
        definition: "to write",
        knowledgelevel: 0
    },
    {
        id: "escribirse",
        category: "verbs",
        term: "escribirse",
        definition: "to write to each other",
        knowledgelevel: 0
    },
    {
        id: "escuchar",
        category: "verbs",
        term: "escuchar",
        definition: "to listen",
        knowledgelevel: 0
    },
    {
        id: "esperar",
        category: "verbs",
        term: "esperar",
        definition: "to wait, to hope",
        knowledgelevel: 0
    },
    {
        id: "establecer",
        category: "verbs",
        term: "establecer",
        definition: "to establish",
        knowledgelevel: 0
    },
    {
        id: "estacionar",
        category: "verbs",
        term: "estacionar",
        definition: "to park",
        knowledgelevel: 0
    },
    {
        id: "estar",
        category: "verbs",
        term: "estar",
        definition: "to be (temporary)",
        knowledgelevel: 0
    },
    {
        id: "estudiar",
        category: "verbs",
        term: "estudiar",
        definition: "to study",
        knowledgelevel: 0
    },
    {
        id: "evacuar",
        category: "verbs",
        term: "evacuar",
        definition: "to evacuate",
        knowledgelevel: 0
    },
    {
        id: "evitar",
        category: "verbs",
        term: "evitar",
        definition: "to avoid, to prevent",
        knowledgelevel: 0
    },
    {
        id: "examinar",
        category: "verbs",
        term: "examinar",
        definition: "to examine",
        knowledgelevel: 0
    },
    {
        id: "excluir",
        category: "verbs",
        term: "excluir",
        definition: "to exclude",
        knowledgelevel: 0
    },
    {
        id: "exigir",
        category: "verbs",
        term: "exigir",
        definition: "to require, to demand",
        knowledgelevel: 0
    },
    {
        id: "existir",
        category: "verbs",
        term: "existir",
        definition: "to exist",
        knowledgelevel: 0
    },
    {
        id: "explicar",
        category: "verbs",
        term: "explicar",
        definition: "to explain",
        knowledgelevel: 0
    },
    {
        id: "expresar",
        category: "verbs",
        term: "expresar",
        definition: "to express, to convey",
        knowledgelevel: 0
    },
    {
        id: "fabricar",
        category: "verbs",
        term: "fabricar",
        definition: "to manufacture, to make",
        knowledgelevel: 0
    },
    {
        id: "faltar",
        category: "verbs",
        term: "faltar",
        definition: "to lack, to fail, to fall short (of)",
        knowledgelevel: 0
    },
    {
        id: "fijar",
        category: "verbs",
        term: "fijar",
        definition: "to pin up, to set, to fix",
        knowledgelevel: 0
    },
    {
        id: "fijarse",
        category: "verbs",
        term: "fijarse",
        definition: "to take notice",
        knowledgelevel: 0
    },
    {
        id: "firmar",
        category: "verbs",
        term: "firmar",
        definition: "to sign",
        knowledgelevel: 0
    },
    {
        id: "formar",
        category: "verbs",
        term: "formar",
        definition: "to form",
        knowledgelevel: 0
    },
    {
        id: "fortalecer",
        category: "verbs",
        term: "fortalecer",
        definition: "to strengthen",
        knowledgelevel: 0
    },
    {
        id: "forzar",
        category: "verbs",
        term: "forzar",
        definition: "to force",
        knowledgelevel: 0
    },
    {
        id: "funcionar",
        category: "verbs",
        term: "funcionar",
        definition: "to function, to work",
        knowledgelevel: 0
    },
    {
        id: "ganar",
        category: "verbs",
        term: "ganar",
        definition: "to win, to gain, to earn",
        knowledgelevel: 0
    },
    {
        id: "garantizar",
        category: "verbs",
        term: "garantizar",
        definition: "to guarantee",
        knowledgelevel: 0
    },
    {
        id: "gastar",
        category: "verbs",
        term: "gastar",
        definition: "to expend",
        knowledgelevel: 0
    },
    {
        id: "gestionar",
        category: "verbs",
        term: "gestionar",
        definition: "to manage",
        knowledgelevel: 0
    },
    {
        id: "girar",
        category: "verbs",
        term: "girar",
        definition: "to turn",
        knowledgelevel: 0
    },
    {
        id: "gritar",
        category: "verbs",
        term: "gritar",
        definition: "to shout, to scream, to yell",
        knowledgelevel: 0
    },
    {
        id: "guardar",
        category: "verbs",
        term: "guardar",
        definition: "to save, to keep, to guard, to hold",
        knowledgelevel: 0
    },
    {
        id: "gustar",
        category: "verbs",
        term: "gustar",
        definition: "to like, to be pleased by",
        knowledgelevel: 0
    },
    {
        id: "haber",
        category: "verbs",
        term: "haber",
        definition: "to have (auxiliary)",
        knowledgelevel: 0
    },
    {
        id: "hablar",
        category: "verbs",
        term: "hablar",
        definition: "to speak, to talk",
        knowledgelevel: 0
    },
    {
        id: "hacer",
        category: "verbs",
        term: "hacer",
        definition: "to do, to make",
        knowledgelevel: 0
    },
    {
        id: "hervir",
        category: "verbs",
        term: "hervir",
        definition: "to boil",
        knowledgelevel: 0
    },
    {
        id: "imaginar",
        category: "verbs",
        term: "imaginar",
        definition: "to imagine",
        knowledgelevel: 0
    },
    {
        id: "implementar",
        category: "verbs",
        term: "implementar",
        definition: "to implement",
        knowledgelevel: 0
    },
    {
        id: "implicar",
        category: "verbs",
        term: "implicar",
        definition: "to implicate, to imply",
        knowledgelevel: 0
    },
    {
        id: "imponer",
        category: "verbs",
        term: "imponer",
        definition: "to impose",
        knowledgelevel: 0
    },
    {
        id: "importar",
        category: "verbs",
        term: "importar",
        definition: "to import, to matter",
        knowledgelevel: 0
    },
    {
        id: "imprimir",
        category: "verbs",
        term: "imprimir",
        definition: "to print",
        knowledgelevel: 0
    },
    {
        id: "inclinar",
        category: "verbs",
        term: "inclinar",
        definition: "to incline",
        knowledgelevel: 0
    },
    {
        id: "incluir",
        category: "verbs",
        term: "incluir",
        definition: "to include",
        knowledgelevel: 0
    },
    {
        id: "indicar",
        category: "verbs",
        term: "indicar",
        definition: "to indicate",
        knowledgelevel: 0
    },
    {
        id: "infectar",
        category: "verbs",
        term: "infectar",
        definition: "to infect",
        knowledgelevel: 0
    },
    {
        id: "informar",
        category: "verbs",
        term: "informar",
        definition: "to inform, to report",
        knowledgelevel: 0
    },
    {
        id: "inhalar",
        category: "verbs",
        term: "inhalar",
        definition: "to breathe in, to inhale",
        knowledgelevel: 0
    },
    {
        id: "iniciar",
        category: "verbs",
        term: "iniciar",
        definition: "to start, to initiate",
        knowledgelevel: 0
    },
    {
        id: "insistir",
        category: "verbs",
        term: "insistir",
        definition: "to insist",
        knowledgelevel: 0
    },
    {
        id: "intentar",
        category: "verbs",
        term: "intentar",
        definition: "to try, to attempt",
        knowledgelevel: 0
    },
    {
        id: "interesar",
        category: "verbs",
        term: "interesar",
        definition: "to interest",
        knowledgelevel: 0
    },
    {
        id: "ir",
        category: "verbs",
        term: "ir",
        definition: "to go",
        knowledgelevel: 0
    },
    {
        id: "irse",
        category: "verbs",
        term: "irse",
        definition: "to go (oneself)",
        knowledgelevel: 0
    },
    {
        id: "jugar",
        category: "verbs",
        term: "jugar",
        definition: "to play",
        knowledgelevel: 0
    },
    {
        id: "juzgar",
        category: "verbs",
        term: "juzgar",
        definition: "to judge",
        knowledgelevel: 0
    },
    {
        id: "lamentar",
        category: "verbs",
        term: "lamentar",
        definition: "to regret, to lament",
        knowledgelevel: 0
    },
    {
        id: "lanzar",
        category: "verbs",
        term: "lanzar",
        definition: "to throw, to launch",
        knowledgelevel: 0
    },
    {
        id: "lavar",
        category: "verbs",
        term: "lavar",
        definition: "to wash",
        knowledgelevel: 0
    },
    {
        id: "lavarse",
        category: "verbs",
        term: "lavarse",
        definition: "to wash (oneself)",
        knowledgelevel: 0
    },
    {
        id: "leer",
        category: "verbs",
        term: "leer",
        definition: "to read",
        knowledgelevel: 0
    },
    {
        id: "levantar",
        category: "verbs",
        term: "levantar",
        definition: "to lift (up), to raise, to pick up",
        knowledgelevel: 0
    },
    {
        id: "levantarse",
        category: "verbs",
        term: "levantarse",
        definition: "to get up (oneself), to stand up",
        knowledgelevel: 0
    },
    {
        id: "liderar",
        category: "verbs",
        term: "liderar",
        definition: "to lead",
        knowledgelevel: 0
    },
    {
        id: "limpiar",
        category: "verbs",
        term: "limpiar",
        definition: "to clean",
        knowledgelevel: 0
    },
    {
        id: "llamar",
        category: "verbs",
        term: "llamar",
        definition: "to call",
        knowledgelevel: 0
    },
    {
        id: "llamarse",
        category: "verbs",
        term: "llamarse",
        definition: "to be named",
        knowledgelevel: 0
    },
    {
        id: "llegar",
        category: "verbs",
        term: "llegar",
        definition: "to arrive, to come, to reach",
        knowledgelevel: 0
    },
    {
        id: "llenar",
        category: "verbs",
        term: "llenar",
        definition: "to fill",
        knowledgelevel: 0
    },
    {
        id: "llenarse",
        category: "verbs",
        term: "llenarse",
        definition: "to be full, to fill up (oneself)",
        knowledgelevel: 0
    },
    {
        id: "llevar",
        category: "verbs",
        term: "llevar",
        definition: "to carry, to take, to bring, to wear",
        knowledgelevel: 0
    },
    {
        id: "llevarse",
        category: "verbs",
        term: "llevarse",
        definition: "to take (with oneself), to get along with",
        knowledgelevel: 0
    },
    {
        id: "llorar",
        category: "verbs",
        term: "llorar",
        definition: "to cry",
        knowledgelevel: 0
    },
    {
        id: "lograr",
        category: "verbs",
        term: "lograr",
        definition: "to achieve, to accomplish, to attain",
        knowledgelevel: 0
    },
    {
        id: "luchar",
        category: "verbs",
        term: "luchar",
        definition: "to struggle, to fight",
        knowledgelevel: 0
    },
    {
        id: "manchar",
        category: "verbs",
        term: "manchar",
        definition: "to stain",
        knowledgelevel: 0
    },
    {
        id: "mandar",
        category: "verbs",
        term: "mandar",
        definition: "to send, to command, to order",
        knowledgelevel: 0
    },
    {
        id: "manejar",
        category: "verbs",
        term: "manejar",
        definition: "to drive, to manage, to handle, to operate",
        knowledgelevel: 0
    },
    {
        id: "mantener",
        category: "verbs",
        term: "mantener",
        definition: "to maintain, to keep",
        knowledgelevel: 0
    },
    {
        id: "mantenerse",
        category: "verbs",
        term: "mantenerse",
        definition: "to support (oneself), to hold up, to remain",
        knowledgelevel: 0
    },
    {
        id: "marcar",
        category: "verbs",
        term: "marcar",
        definition: "to mark, to dial",
        knowledgelevel: 0
    },
    {
        id: "matar",
        category: "verbs",
        term: "matar",
        definition: "to kill",
        knowledgelevel: 0
    },
    {
        id: "medir",
        category: "verbs",
        term: "medir",
        definition: "to measure",
        knowledgelevel: 0
    },
    {
        id: "mencionar",
        category: "verbs",
        term: "mencionar",
        definition: "to mention",
        knowledgelevel: 0
    },
    {
        id: "mentir",
        category: "verbs",
        term: "mentir",
        definition: "to lie",
        knowledgelevel: 0
    },
    {
        id: "merecer",
        category: "verbs",
        term: "merecer",
        definition: "to deserve, to merit",
        knowledgelevel: 0
    },
    {
        id: "meter",
        category: "verbs",
        term: "meter",
        definition: "to put, to place",
        knowledgelevel: 0
    },
    {
        id: "mezclar",
        category: "verbs",
        term: "mezclar",
        definition: "to mix",
        knowledgelevel: 0
    },
    {
        id: "mirar",
        category: "verbs",
        term: "mirar",
        definition: "to look, to watch",
        knowledgelevel: 0
    },
    {
        id: "mirarse",
        category: "verbs",
        term: "mirarse",
        definition: "to look at (oneself)",
        knowledgelevel: 0
    },
    {
        id: "molestar",
        category: "verbs",
        term: "molestar",
        definition: "to bother, to disturb, to annoy",
        knowledgelevel: 0
    },
    {
        id: "montar",
        category: "verbs",
        term: "montar",
        definition: "to mount, to ride",
        knowledgelevel: 0
    },
    {
        id: "morir",
        category: "verbs",
        term: "morir",
        definition: "to die, to decease",
        knowledgelevel: 0
    },
    {
        id: "morirse",
        category: "verbs",
        term: "morirse",
        definition: "to die, to be dying (expression)",
        knowledgelevel: 0
    },
    {
        id: "mostrar",
        category: "verbs",
        term: "mostrar",
        definition: "to show",
        knowledgelevel: 0
    },
    {
        id: "mover",
        category: "verbs",
        term: "mover",
        definition: "to move (something)",
        knowledgelevel: 0
    },
    {
        id: "moverse",
        category: "verbs",
        term: "moverse",
        definition: "to move (oneself)",
        knowledgelevel: 0
    },
    {
        id: "nacer",
        category: "verbs",
        term: "nacer",
        definition: "to be born",
        knowledgelevel: 0
    },
    {
        id: "nadar",
        category: "verbs",
        term: "nadar",
        definition: "to swim",
        knowledgelevel: 0
    },
    {
        id: "necesitar",
        category: "verbs",
        term: "necesitar",
        definition: "to need",
        knowledgelevel: 0
    },
    {
        id: "negar",
        category: "verbs",
        term: "negar",
        definition: "to deny",
        knowledgelevel: 0
    },
    {
        id: "negociar",
        category: "verbs",
        term: "negociar",
        definition: "to negotiate",
        knowledgelevel: 0
    },
    {
        id: "notar",
        category: "verbs",
        term: "notar",
        definition: "to note",
        knowledgelevel: 0
    },
    {
        id: "numerar",
        category: "verbs",
        term: "numerar",
        definition: "to number",
        knowledgelevel: 0
    },
    {
        id: "obligar",
        category: "verbs",
        term: "obligar",
        definition: "to force, to bind, to oblige",
        knowledgelevel: 0
    },
    {
        id: "observar",
        category: "verbs",
        term: "observar",
        definition: "to observe",
        knowledgelevel: 0
    },
    {
        id: "obtener",
        category: "verbs",
        term: "obtener",
        definition: "to get, to obtain",
        knowledgelevel: 0
    },
    {
        id: "ocultar",
        category: "verbs",
        term: "ocultar",
        definition: "to hide",
        knowledgelevel: 0
    },
    {
        id: "ocupar",
        category: "verbs",
        term: "ocupar",
        definition: "to occupy, to concern",
        knowledgelevel: 0
    },
    {
        id: "ocurrir",
        category: "verbs",
        term: "ocurrir",
        definition: "to occur, to happen",
        knowledgelevel: 0
    },
    {
        id: "odiar",
        category: "verbs",
        term: "odiar",
        definition: "to hate, to detest",
        knowledgelevel: 0
    },
    {
        id: "ofrecer",
        category: "verbs",
        term: "ofrecer",
        definition: "to offer",
        knowledgelevel: 0
    },
    {
        id: "oír",
        category: "verbs",
        term: "oír",
        definition: "to hear",
        knowledgelevel: 0
    },
    {
        id: "oler",
        category: "verbs",
        term: "oler",
        definition: "to smell",
        knowledgelevel: 0
    },
    {
        id: "olvidar",
        category: "verbs",
        term: "olvidar",
        definition: "to forget",
        knowledgelevel: 0
    },
    {
        id: "olvidarse",
        category: "verbs",
        term: "olvidarse",
        definition: "to forget",
        knowledgelevel: 0
    },
    {
        id: "organizar",
        category: "verbs",
        term: "organizar",
        definition: "to organise, to arrange",
        knowledgelevel: 0
    },
    {
        id: "originar",
        category: "verbs",
        term: "originar",
        definition: "to originate",
        knowledgelevel: 0
    },
    {
        id: "pagar",
        category: "verbs",
        term: "pagar",
        definition: "to pay (for)",
        knowledgelevel: 0
    },
    {
        id: "parar",
        category: "verbs",
        term: "parar",
        definition: "to stop",
        knowledgelevel: 0
    },
    {
        id: "parecer",
        category: "verbs",
        term: "parecer",
        definition: "to seem, to appear, to look like",
        knowledgelevel: 0
    },
    {
        id: "parecerse",
        category: "verbs",
        term: "parecerse",
        definition: "to look alike, to be alike",
        knowledgelevel: 0
    },
    {
        id: "partir",
        category: "verbs",
        term: "partir",
        definition: "to split, to depart",
        knowledgelevel: 0
    },
    {
        id: "pasar",
        category: "verbs",
        term: "pasar",
        definition: "to pass, to happen, to go through",
        knowledgelevel: 0
    },
    {
        id: "pedir",
        category: "verbs",
        term: "pedir",
        definition: "to ask for, to request, to order (e.g. food)",
        knowledgelevel: 0
    },
    {
        id: "pelear",
        category: "verbs",
        term: "pelear",
        definition: "to fight, to quarrel, to argue",
        knowledgelevel: 0
    },
    {
        id: "peligrar",
        category: "verbs",
        term: "peligrar",
        definition: "to jeopardize, to be in danger",
        knowledgelevel: 0
    },
    {
        id: "pensar",
        category: "verbs",
        term: "pensar",
        definition: "to think",
        knowledgelevel: 0
    },
    {
        id: "perder",
        category: "verbs",
        term: "perder",
        definition: "to lose",
        knowledgelevel: 0
    },
    {
        id: "permitir",
        category: "verbs",
        term: "permitir",
        definition: "to allow, to permit",
        knowledgelevel: 0
    },
    {
        id: "permitirse",
        category: "verbs",
        term: "permitirse",
        definition: "to afford (something)",
        knowledgelevel: 0
    },
    {
        id: "persistir",
        category: "verbs",
        term: "persistir",
        definition: "to persist",
        knowledgelevel: 0
    },
    {
        id: "pertenecer",
        category: "verbs",
        term: "pertenecer",
        definition: "to belong",
        knowledgelevel: 0
    },
    {
        id: "picar",
        category: "verbs",
        term: "picar",
        definition: "to chop, to string, to bite, to itch",
        knowledgelevel: 0
    },
    {
        id: "pintar",
        category: "verbs",
        term: "pintar",
        definition: "to paint",
        knowledgelevel: 0
    },
    {
        id: "pintarse",
        category: "verbs",
        term: "pintarse",
        definition: "to put on makeup",
        knowledgelevel: 0
    },
    {
        id: "planchar",
        category: "verbs",
        term: "planchar",
        definition: "to iron",
        knowledgelevel: 0
    },
    {
        id: "plantar",
        category: "verbs",
        term: "plantar",
        definition: "to plant",
        knowledgelevel: 0
    },
    {
        id: "poder",
        category: "verbs",
        term: "poder",
        definition: "to be able to",
        knowledgelevel: 0
    },
    {
        id: "poner",
        category: "verbs",
        term: "poner",
        definition: "to put, to place",
        knowledgelevel: 0
    },
    {
        id: "ponerse",
        category: "verbs",
        term: "ponerse",
        definition: "to put on, to place on",
        knowledgelevel: 0
    },
    {
        id: "practicar",
        category: "verbs",
        term: "practicar",
        definition: "to practice",
        knowledgelevel: 0
    },
    {
        id: "preferir",
        category: "verbs",
        term: "preferir",
        definition: "to prefer",
        knowledgelevel: 0
    },
    {
        id: "preguntar",
        category: "verbs",
        term: "preguntar",
        definition: "to ask, to question",
        knowledgelevel: 0
    },
    {
        id: "preguntarse",
        category: "verbs",
        term: "preguntarse",
        definition: "to ask (oneself), to wonder",
        knowledgelevel: 0
    },
    {
        id: "preocuparse",
        category: "verbs",
        term: "preocuparse",
        definition: "to worry, to concern",
        knowledgelevel: 0
    },
    {
        id: "preparar",
        category: "verbs",
        term: "preparar",
        definition: "to prepare",
        knowledgelevel: 0
    },
    {
        id: "presentar",
        category: "verbs",
        term: "presentar",
        definition: "to present",
        knowledgelevel: 0
    },
    {
        id: "probar",
        category: "verbs",
        term: "probar",
        definition: "to try, to taste, to test, to prove",
        knowledgelevel: 0
    },
    {
        id: "probarse",
        category: "verbs",
        term: "probarse",
        definition: "to try on (oneself)",
        knowledgelevel: 0
    },
    {
        id: "producir",
        category: "verbs",
        term: "producir",
        definition: "to produce",
        knowledgelevel: 0
    },
    {
        id: "progresar",
        category: "verbs",
        term: "progresar",
        definition: "to progress",
        knowledgelevel: 0
    },
    {
        id: "prohibir",
        category: "verbs",
        term: "prohibir",
        definition: "to ban, to prohibit, to forbid",
        knowledgelevel: 0
    },
    {
        id: "prometer",
        category: "verbs",
        term: "prometer",
        definition: "to promise",
        knowledgelevel: 0
    },
    {
        id: "pronunciar",
        category: "verbs",
        term: "pronunciar",
        definition: "to pronounce",
        knowledgelevel: 0
    },
    {
        id: "proponer",
        category: "verbs",
        term: "proponer",
        definition: "to propose, to put forward",
        knowledgelevel: 0
    },
    {
        id: "proteger",
        category: "verbs",
        term: "proteger",
        definition: "to protect",
        knowledgelevel: 0
    },
    {
        id: "protegerse",
        category: "verbs",
        term: "protegerse",
        definition: "to protect (oneself)",
        knowledgelevel: 0
    },
    {
        id: "proyectar",
        category: "verbs",
        term: "proyectar",
        definition: "to project",
        knowledgelevel: 0
    },
    {
        id: "quedar",
        category: "verbs",
        term: "quedar",
        definition: "to remain, to be left",
        knowledgelevel: 0
    },
    {
        id: "quedarse",
        category: "verbs",
        term: "quedarse",
        definition: "to stay",
        knowledgelevel: 0
    },
    {
        id: "quejarse",
        category: "verbs",
        term: "quejarse",
        definition: "to complain, to moan",
        knowledgelevel: 0
    },
    {
        id: "querer",
        category: "verbs",
        term: "querer",
        definition: "to want, to love",
        knowledgelevel: 0
    },
    {
        id: "quitar",
        category: "verbs",
        term: "quitar",
        definition: "to take away, to remove, to take from",
        knowledgelevel: 0
    },
    {
        id: "quitarse",
        category: "verbs",
        term: "quitarse",
        definition: "to take off (something)",
        knowledgelevel: 0
    },
    {
        id: "realizar",
        category: "verbs",
        term: "realizar",
        definition: "to perform, to carry out, to realise",
        knowledgelevel: 0
    },
    {
        id: "recibir",
        category: "verbs",
        term: "recibir",
        definition: "to receive",
        knowledgelevel: 0
    },
    {
        id: "recoger",
        category: "verbs",
        term: "recoger",
        definition: "to collect, to pick up",
        knowledgelevel: 0
    },
    {
        id: "recomendar",
        category: "verbs",
        term: "recomendar",
        definition: "to recommend",
        knowledgelevel: 0
    },
    {
        id: "reconocer",
        category: "verbs",
        term: "reconocer",
        definition: "to recognise",
        knowledgelevel: 0
    },
    {
        id: "recordar",
        category: "verbs",
        term: "recordar",
        definition: "to remember, to recall, to remind",
        knowledgelevel: 0
    },
    {
        id: "referir",
        category: "verbs",
        term: "referir",
        definition: "to refer",
        knowledgelevel: 0
    },
    {
        id: "referirse",
        category: "verbs",
        term: "referirse",
        definition: "to refer (to oneself)",
        knowledgelevel: 0
    },
    {
        id: "registrar",
        category: "verbs",
        term: "registrar",
        definition: "to register, to record, to search",
        knowledgelevel: 0
    },
    {
        id: "regresar",
        category: "verbs",
        term: "regresar",
        definition: "to return, to go back, to come back",
        knowledgelevel: 0
    },
    {
        id: "reír",
        category: "verbs",
        term: "reír",
        definition: "to laugh",
        knowledgelevel: 0
    },
    {
        id: "reírse",
        category: "verbs",
        term: "reírse",
        definition: "to laugh",
        knowledgelevel: 0
    },
    {
        id: "repetir",
        category: "verbs",
        term: "repetir",
        definition: "to repeat",
        knowledgelevel: 0
    },
    {
        id: "representar",
        category: "verbs",
        term: "representar",
        definition: "to represent",
        knowledgelevel: 0
    },
    {
        id: "reservar",
        category: "verbs",
        term: "reservar",
        definition: "to reserve, to book",
        knowledgelevel: 0
    },
    {
        id: "resolver",
        category: "verbs",
        term: "resolver",
        definition: "to solve, to resolve",
        knowledgelevel: 0
    },
    {
        id: "respirar",
        category: "verbs",
        term: "respirar",
        definition: "to breathe",
        knowledgelevel: 0
    },
    {
        id: "responder",
        category: "verbs",
        term: "responder",
        definition: "to answer, to respond",
        knowledgelevel: 0
    },
    {
        id: "resultar",
        category: "verbs",
        term: "resultar",
        definition: "to become, to turn out, to work",
        knowledgelevel: 0
    },
    {
        id: "reunir",
        category: "verbs",
        term: "reunir",
        definition: "to gather",
        knowledgelevel: 0
    },
    {
        id: "reunirse",
        category: "verbs",
        term: "reunirse",
        definition: "to get together",
        knowledgelevel: 0
    },
    {
        id: "rezar",
        category: "verbs",
        term: "rezar",
        definition: "to pray",
        knowledgelevel: 0
    },
    {
        id: "robar",
        category: "verbs",
        term: "robar",
        definition: "to steal, to rob",
        knowledgelevel: 0
    },
    {
        id: "romper",
        category: "verbs",
        term: "romper",
        definition: "to break",
        knowledgelevel: 0
    },
    {
        id: "saber",
        category: "verbs",
        term: "saber",
        definition: "to know (things)",
        knowledgelevel: 0
    },
    {
        id: "sacar",
        category: "verbs",
        term: "sacar",
        definition: "to take, to get, to take out",
        knowledgelevel: 0
    },
    {
        id: "sacarse",
        category: "verbs",
        term: "sacarse",
        definition: "to extract, to pull out",
        knowledgelevel: 0
    },
    {
        id: "salir",
        category: "verbs",
        term: "salir",
        definition: "to leave, to go out, to get out",
        knowledgelevel: 0
    },
    {
        id: "saltar",
        category: "verbs",
        term: "saltar",
        definition: "to jump, to skip",
        knowledgelevel: 0
    },
    {
        id: "secar",
        category: "verbs",
        term: "secar",
        definition: "to dry, to dry off",
        knowledgelevel: 0
    },
    {
        id: "secarse",
        category: "verbs",
        term: "secarse",
        definition: "to dry (oneself), to dry off (oneself)",
        knowledgelevel: 0
    },
    {
        id: "seguir",
        category: "verbs",
        term: "seguir",
        definition: "to follow, to continue",
        knowledgelevel: 0
    },
    {
        id: "seleccionar",
        category: "verbs",
        term: "seleccionar",
        definition: "to select",
        knowledgelevel: 0
    },
    {
        id: "señalar",
        category: "verbs",
        term: "señalar",
        definition: "to point, to mark",
        knowledgelevel: 0
    },
    {
        id: "sentar",
        category: "verbs",
        term: "sentar",
        definition: "to sit",
        knowledgelevel: 0
    },
    {
        id: "sentarse",
        category: "verbs",
        term: "sentarse",
        definition: "to sit (oneself)",
        knowledgelevel: 0
    },
    {
        id: "sentir",
        category: "verbs",
        term: "sentir",
        definition: "to feel, to regret",
        knowledgelevel: 0
    },
    {
        id: "sentirse",
        category: "verbs",
        term: "sentirse",
        definition: "to feel",
        knowledgelevel: 0
    },
    {
        id: "ser",
        category: "verbs",
        term: "ser",
        definition: "to be (permanent)",
        knowledgelevel: 0
    },
    {
        id: "servir",
        category: "verbs",
        term: "servir",
        definition: "to serve",
        knowledgelevel: 0
    },
    {
        id: "servirse",
        category: "verbs",
        term: "servirse",
        definition: "to serve (oneself), to make use of",
        knowledgelevel: 0
    },
    {
        id: "significar",
        category: "verbs",
        term: "significar",
        definition: "to mean, to signify",
        knowledgelevel: 0
    },
    {
        id: "sobrevivir",
        category: "verbs",
        term: "sobrevivir",
        definition: "to survive",
        knowledgelevel: 0
    },
    {
        id: "soler",
        category: "verbs",
        term: "soler",
        definition: "to be used to, to usually do",
        knowledgelevel: 0
    },
    {
        id: "sonar",
        category: "verbs",
        term: "sonar",
        definition: "to sound, to ring",
        knowledgelevel: 0
    },
    {
        id: "sonreír",
        category: "verbs",
        term: "sonreír",
        definition: "to smile",
        knowledgelevel: 0
    },
    {
        id: "soportar",
        category: "verbs",
        term: "soportar",
        definition: "to put up with, to endure",
        knowledgelevel: 0
    },
    {
        id: "sorprender",
        category: "verbs",
        term: "sorprender",
        definition: "to surprise",
        knowledgelevel: 0
    },
    {
        id: "subir",
        category: "verbs",
        term: "subir",
        definition: "to go up, to upload, to rise",
        knowledgelevel: 0
    },
    {
        id: "suceder",
        category: "verbs",
        term: "suceder",
        definition: "to happen",
        knowledgelevel: 0
    },
    {
        id: "sufrir",
        category: "verbs",
        term: "sufrir",
        definition: "to suffer, to sustain",
        knowledgelevel: 0
    },
    {
        id: "sugerir",
        category: "verbs",
        term: "sugerir",
        definition: "to suggest",
        knowledgelevel: 0
    },
    {
        id: "suponer",
        category: "verbs",
        term: "suponer",
        definition: "to suppose, to guess",
        knowledgelevel: 0
    },
    {
        id: "surfear",
        category: "verbs",
        term: "surfear",
        definition: "to surf",
        knowledgelevel: 0
    },
    {
        id: "surgir",
        category: "verbs",
        term: "surgir",
        definition: "to emerge, to arise",
        knowledgelevel: 0
    },
    {
        id: "tardar",
        category: "verbs",
        term: "tardar",
        definition: "to delay, to be slow",
        knowledgelevel: 0
    },
    {
        id: "temblar",
        category: "verbs",
        term: "temblar",
        definition: "to tremble",
        knowledgelevel: 0
    },
    {
        id: "temer",
        category: "verbs",
        term: "temer",
        definition: "to fear",
        knowledgelevel: 0
    },
    {
        id: "tener",
        category: "verbs",
        term: "tener",
        definition: "to have",
        knowledgelevel: 0
    },
    {
        id: "terminar",
        category: "verbs",
        term: "terminar",
        definition: "to end, to terminate, to finish",
        knowledgelevel: 0
    },
    {
        id: "tirar",
        category: "verbs",
        term: "tirar",
        definition: "to throw",
        knowledgelevel: 0
    },
    {
        id: "tirarse",
        category: "verbs",
        term: "tirarse",
        definition: "to throw (oneself)",
        knowledgelevel: 0
    },
    {
        id: "tocar",
        category: "verbs",
        term: "tocar",
        definition: "to play (an instrument), to touch",
        knowledgelevel: 0
    },
    {
        id: "tolerar",
        category: "verbs",
        term: "tolerar",
        definition: "to tolerate",
        knowledgelevel: 0
    },
    {
        id: "tomar",
        category: "verbs",
        term: "tomar",
        definition: "to drink, to take",
        knowledgelevel: 0
    },
    {
        id: "tomarse",
        category: "verbs",
        term: "tomarse",
        definition: "to take (for oneself), to have, to consume",
        knowledgelevel: 0
    },
    {
        id: "toser",
        category: "verbs",
        term: "toser",
        definition: "to cough",
        knowledgelevel: 0
    },
    {
        id: "trabajar",
        category: "verbs",
        term: "trabajar",
        definition: "to work",
        knowledgelevel: 0
    },
    {
        id: "traducir",
        category: "verbs",
        term: "traducir",
        definition: "to translate",
        knowledgelevel: 0
    },
    {
        id: "traer",
        category: "verbs",
        term: "traer",
        definition: "to bring, to get, to carry",
        knowledgelevel: 0
    },
    {
        id: "transformar",
        category: "verbs",
        term: "transformar",
        definition: "to transform",
        knowledgelevel: 0
    },
    {
        id: "transportar",
        category: "verbs",
        term: "transportar",
        definition: "to transport",
        knowledgelevel: 0
    },
    {
        id: "tratar",
        category: "verbs",
        term: "tratar",
        definition: "to treat, to try",
        knowledgelevel: 0
    },
    {
        id: "usar",
        category: "verbs",
        term: "usar",
        definition: "to use",
        knowledgelevel: 0
    },
    {
        id: "utilizar",
        category: "verbs",
        term: "utilizar",
        definition: "to use, to utilize",
        knowledgelevel: 0
    },
    {
        id: "vaciar",
        category: "verbs",
        term: "vaciar",
        definition: "to empty",
        knowledgelevel: 0
    },
    {
        id: "vacunar",
        category: "verbs",
        term: "vacunar",
        definition: "to vaccinate",
        knowledgelevel: 0
    },
    {
        id: "valer",
        category: "verbs",
        term: "valer",
        definition: "to value, to be worth",
        knowledgelevel: 0
    },
    {
        id: "valorar",
        category: "verbs",
        term: "valorar",
        definition: "to value, to assess, to appraise",
        knowledgelevel: 0
    },
    {
        id: "vender",
        category: "verbs",
        term: "vender",
        definition: "to sell",
        knowledgelevel: 0
    },
    {
        id: "venir",
        category: "verbs",
        term: "venir",
        definition: "to come",
        knowledgelevel: 0
    },
    {
        id: "ver",
        category: "verbs",
        term: "ver",
        definition: "to see",
        knowledgelevel: 0
    },
    {
        id: "vestir",
        category: "verbs",
        term: "vestir",
        definition: "to dress, to wear",
        knowledgelevel: 0
    },
    {
        id: "vestirse",
        category: "verbs",
        term: "vestirse",
        definition: "to dress (oneself), to wear",
        knowledgelevel: 0
    },
    {
        id: "viajar",
        category: "verbs",
        term: "viajar",
        definition: "to travel",
        knowledgelevel: 0
    },
    {
        id: "visitar",
        category: "verbs",
        term: "visitar",
        definition: "to visit",
        knowledgelevel: 0
    },
    {
        id: "vivir",
        category: "verbs",
        term: "vivir",
        definition: "to live",
        knowledgelevel: 0
    },
    {
        id: "volar",
        category: "verbs",
        term: "volar",
        definition: "to fly",
        knowledgelevel: 0
    },
    {
        id: "volver",
        category: "verbs",
        term: "volver",
        definition: "to return",
        knowledgelevel: 0
    },
    {
        id: "votar",
        category: "verbs",
        term: "votar",
        definition: "to vote",
        knowledgelevel: 0
    },
    {
        id: "pingüino",
        category: "animals",
        term: "pingüino",
        definition: "penguin",
        knowledgelevel: 0
    },
    {
        id: "varita",
        category: "household",
        term: "una varita",
        definition: "a wand",
        knowledgelevel: 1
    }
]