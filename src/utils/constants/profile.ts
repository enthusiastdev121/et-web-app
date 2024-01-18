import { WHITELABEL } from "../envProviders";
import { WHITELABELS } from "../whitelabelConfig";

//ET
import { categoriesKeys as etCategoriesKeys, interest as etInterest, interestArray as etInterestArray } from "./et/profile";

//TALENTO
import { categoriesKeys as talentoCategoriesKeys, interest as talentoInterest, interestArray as talentoInterestArray } from "./talento/profile";

/**
 * MAIN
 */

export const categoriesKeys = WHITELABEL === WHITELABELS.exploretalent ? etCategoriesKeys : WHITELABEL === WHITELABELS.talento ? talentoCategoriesKeys : etCategoriesKeys;

export const interest: InterestCategories = WHITELABEL === WHITELABELS.exploretalent ? etInterest : WHITELABEL === WHITELABELS.talento ? talentoInterest : etInterest;
export const interestArray: InterestCategories = WHITELABEL === WHITELABELS.exploretalent ? etInterestArray : WHITELABEL === WHITELABELS.talento ? talentoInterestArray : etInterestArray;

export const ethnicities = [
  // {
  //   id: "ethnicity_any",
  //   label: "Any",
  // },
  {
    id: "ethnicity_african",
    label: "African",
  },
  {
    id: "ethnicity_african_am",
    label: "African American",
  },
  {
    id: "ethnicity_asian",
    label: "Asian",
  },
  // {
  //   id: "ethnicity_caribbian",
  //   label: "Caribbean",
  // },
  {
    id: "ethnicity_caucasian",
    label: "Caucasian",
  },
  {
    id: "ethnicity_hispanic",
    label: "Hispanic",
  },
  // {
  //   id: "ethnicity_mediterranean",
  //   label: "Mediterranean",
  // },
  {
    id: "ethnicity_middle_est",
    label: "Middle Eastern",
  },
  {
    id: "ethnicity_native_am",
    label: "American Indian",
  },
  {
    id: "ethnicity_east_indian",
    label: "East Indian",
  },
];

export const eyeColor = [
  {
    name: "Blue",
    color: "#0070F4",
  },
  {
    name: "Black",
    color: "#000",
  },
  {
    name: "Blue-Green",
    color: "#088F8F",
  },
  {
    name: "Brown",
    color: "#964B00",
  },
  {
    name: "Green",
    color: "#70E73B",
  },
  {
    name: "Grey",
    color: "#98999B",
  },
  // {
  //   name: "Gray-Blue",
  //   color: "#6699CC",
  // },
  {
    name: "Grey-Green",
    color: "#5E716A",
  },
  {
    name: "Hazel",
    color: "#C9C789",
  },
];

export const hairColor = [
  {
    name: "Auburn",
    color: "#922724",
  },
  {
    name: "Black",
    color: "#000",
  },
  {
    name: "Blonde",
    color: "#FAF0BE",
  },
  {
    name: "Brown",
    color: "#964B00",
  },
  {
    name: "Bald",
    color: "#F2EDE3",
  },
  {
    name: "Chestnut",
    color: "#954535",
  },
  {
    name: "Dark Brown",
    color: "#4E3423",
  },
  {
    name: "Grey",
    color: "#98999B",
  },
  // {
  //   name: "Red",
  //   color: "#F70000",
  // },
  // {
  //   name: "White",
  //   color: "#FFFFFF",
  // },
  // {
  //   name: "Salt & Pepper",
  //   color: "#8D9599",
  // },
];

export const languages = [
  "Arabic",
  "Armenian",
  "Bosnian",
  "Cambodian",
  "Chinese",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "Estonian",
  "Filipino",
  "Finnish",
  "French",
  "German",
  "Greek",
  "Hebrew",
  "Hindi",
  "Hungarian",
  "Icelandic",
  "Indonesian",
  "Italian",
  "Japanese",
  "Korean",
  "Latin",
  "Latvian",
  "Lithuanian",
  "Norwegian",
  "Polish",
  "Portuguese",
  "Romanian",
  "Russian",
  "Spanish",
  "Swedish",
  "Turkish",
  "Vietnamese",
];

export const accents = [
  "African",
  "Asian",
  "Australian",
  "British",
  "Brooklyn",
  "Canadian",
  "Cantonese",
  "Caribbean",
  "Cuban",
  "Ebonics",
  "English",
  "Ethiopian",
  "French",
  "French Canadian",
  "German",
  "Greek",
  "Irish",
  "Italian",
  "Long Island",
  "Middle Eastern",
  "Midwest",
  "New England",
  "New York",
  "Polish",
  "Puerto Rican",
  "Romanian",
  "Russian",
  "Scottish",
  "Southern",
  "Spanish",
  "Swedish",
  "Tirolean",
  "Turkish",
  "Valley",
  "Yiddish",
];

export const agentType = [
  {
    id: 0,
    label: "I don't have an agent",
  },
  {
    id: 1,
    label: "I want an agent",
  },
  {
    id: 2,
    label: "I have an agent",
  },
];

export const ETHNICITY_KEY_VALUES = {
  ethnicity_african: "African",
  ethnicity_african_am: "African American",
  // ethnicity_american_in: 'American Indian',
  ethnicity_any: "Any",
  ethnicity_asian: "Asian",
  ethnicity_caribbian: "Caribbian",
  ethnicity_caucasian: "Caucasian",
  ethnicity_east_indian: "East Indian",
  ethnicity_hispanic: "Hispanic",
  ethnicity_mediterranean: "Mediterranean",
  ethnicity_middle_est: "Middle East",
  ethnicity_mixed: "Mixed",
  ethnicity_native_am: "American Indian",
  ethnicity_x_asian: "Asian",
  ethnicity_x_black: "Black",
  // ethnicity_x_hispanic: 'Hispanic',
  ethnicity_x_white: "White",
};

export const castingPreferences = [
  { id: 1, label: "Commercials", key: "cat_01" },
  { id: 3, label: "Dance - Ballet/Classic", key: "cat_03" },
  { id: 4, label: "Dance - Modern/Jazz", key: "cat_04" },
  { id: 5, label: "Episodic TV - Pilots", key: "cat_05" },
  { id: 7, label: "Episodic TV - AFTRA", key: "cat_07" },
  { id: 8, label: "Episodic TV - Non-Union", key: "cat_08" },
  { id: 6, label: "Episodic TV - SAG", key: "cat_06" },
  { id: 9, label: "Feature Film - SAG", key: "cat_09" },
  { id: 10, label: "Feature Film - Non-SAG", key: "cat_10" },
  { id: 11, label: "Feature Film - Student Films", key: "cat_11" },
  { id: 12, label: "Feature Film - Short Film", key: "cat_12" },
  { id: 13, label: "Feature Film - Documentaries", key: "cat_13" },
  { id: 14, label: "Feature Film - Low Budget/Independent", key: "cat_14" },
  { id: 15, label: "Infomercials", key: "cat_15" },
  { id: 16, label: "Crew - Assistant &amp; Entry Level", key: "cat_16" },
  { id: 17, label: "Industrial/Traning Films", key: "cat_17" },
  { id: 18, label: "Modeling - Runway", key: "cat_18" },
  { id: 19, label: "Modeling - Hair/Cosmetics", key: "cat_19" },
  { id: 20, label: "Modeling - Print", key: "cat_20" },
  { id: 21, label: "Music Videos", key: "cat_21" },
  { id: 22, label: "Theatre - Equity (Union)", key: "cat_22" },
  { id: 23, label: "Theatre - Non-Equity", key: "cat_23" },
  { id: 24, label: "Trade Shows/Live Events/Promo Model", key: "cat_24" },
  { id: 25, label: "Crew - Marketing / PR", key: "cat_25" },
  { id: 26, label: "Voice-Over", key: "cat_26" },
  { id: 27, label: "Internet", key: "cat_27" },
  { id: 28, label: "Music - Vocals", key: "cat_28" },
  { id: 29, label: "Music - Strings", key: "cat_29" },
  { id: 30, label: "Music - Horns", key: "cat_30" },
  { id: 31, label: "Music - Keyboards", key: "cat_31" },
  { id: 32, label: "Music - Drums", key: "cat_32" },
  { id: 33, label: "Music - Other", key: "cat_33" },
  { id: 34, label: "Crew - Lighting/Sound", key: "cat_34" },
  { id: 35, label: "Crew - Camera/Editor", key: "cat_35" },
  { id: 36, label: "Crew - Producer/Director", key: "cat_36" },
  { id: 37, label: "Crew - Make Up/ Stylist", key: "cat_37" },
  { id: 38, label: "Crew - Other", key: "cat_38" },
  { id: 39, label: "Crew - Writing/Script/Edit", key: "cat_39" },
  { id: 40, label: "Crew - Showbiz Internship", key: "cat_40" },
  { id: 41, label: "Acting - Comedy/Clown", key: "cat_41" },
  { id: 42, label: "Acting - Variety Acts", key: "cat_42" },
  { id: 43, label: "Acting - Acrobatics/Stunts", key: "cat_43" },
  { id: 44, label: "Music - Band", key: "cat_44" },
  { id: 45, label: "Music - DJ/Sound", key: "cat_45" },
  { id: 46, label: "Music - Teacher", key: "cat_46" },
  { id: 47, label: "Crew - TV/Radio", key: "cat_47" },
  { id: 48, label: "Crew - Graphic/Web/Animate", key: "cat_48" },
  { id: 49, label: "Crew - Acounting/Payroll/HR", key: "cat_49" },
  { id: 50, label: "Crew - Technology/MIS", key: "cat_50" },
  { id: 51, label: "Crew - Management", key: "cat_51" },
  { id: 52, label: "Crew - Talent/Casting Mgmt", key: "cat_52" },
  { id: 53, label: "Dance - HipHop", key: "cat_53" },
  { id: 54, label: "Dance - Club/Gogo", key: "cat_54" },
  { id: 55, label: "Dance - Traditional/Latin", key: "cat_55" },
  { id: 56, label: "Dance - Choreography", key: "cat_56" },
  { id: 57, label: "Dance - Teacher", key: "cat_57" },
  { id: 58, label: "Dance - Other/General", key: "cat_58" },
  { id: 59, label: "Reality TV", key: "cat_59" },
  { id: 60, label: "Extras", key: "cat_60" },
  { id: 61, label: "Acting - Other", key: "cat_61" },
];

export const t2t = "t2t";
export const t2c = "t2c";

//TYPES
export type InterestSubCatgeoryD = {
  categoryId: number;
  id: number;
  label: string;
};

export type InterestCatgeoryD = {
  id: number;
  label: string;
  sub: InterestSubCatgeoryD[];
};

export type InterestCategories = {
  filter(arg0: (i: any) => any): unknown;
  every(arg0: (i: any) => boolean): unknown;
  map(arg0: (i: any) => any): unknown;
  [categoriesKeys.acting]: InterestCatgeoryD;
  [categoriesKeys.dance]: InterestCatgeoryD;
  [categoriesKeys.extras]: InterestCatgeoryD;
  [categoriesKeys.filmStage]: InterestCatgeoryD;
  [categoriesKeys.hairMakeup]: InterestCatgeoryD;
  [categoriesKeys.influencer]: InterestCatgeoryD;
  [categoriesKeys.modeling]: InterestCatgeoryD;
  [categoriesKeys.music]: InterestCatgeoryD;
  [categoriesKeys.photography]: InterestCatgeoryD;
  [categoriesKeys.presenter]: InterestCatgeoryD;
  [categoriesKeys.survival]: InterestCatgeoryD;
  [categoriesKeys.tvReality]: InterestCatgeoryD;
};

/**
 * FOR OLD/LEGACY USAGE ------------------------------------------------------------------------------------
 */

export const categories = {
  modeling: {
    id: 0,
    modeling_experience: {
      key: "modeling_experience",
      options: ["Beginner, starting out", "Part-time model - paid commercial work", "Full-time model - paid commercial work"],
    },

    modeling_agent: {
      key: "modeling_agent",
      options: [
        {
          id: 0,
          label: "I don't have an agent",
        },
        {
          id: 1,
          label: "I want an agent",
        },
        {
          id: 2,
          label: "I have an agent",
        },
      ],
    },
  },

  filmStage: {
    art_costume_design: {
      label: "Art & Costume Design ability",
      key: "art_costume_design",
      options: ["Beginner", "Intermediate", "Expert"],
    },
    camera_crew: {
      label: "Camera Crew ability",
      key: "camera_crew",
      options: ["Beginner", "Intermediate", "Expert"],
    },
    directing_writing: {
      label: "Directing & Writing ability",
      key: "directing_writing",

      options: ["Beginner", "Intermediate", "Expert"],
    },
    lighting: {
      label: "Lighting ability",
      key: "lighting",
      options: ["Beginner", "Intermediate", "Expert"],
    },
    post_prod_editing: {
      label: "Post Production & Editing ability",
      key: "post_prod_editing",
      options: ["Beginner", "Intermediate", "Expert"],
    },
    prod_mgmt: {
      label: "Production & Management ability",
      key: "prod_mgmt",
      options: ["Beginner", "Intermediate", "Expert"],
    },
    sound_crew: {
      label: "Sound Crew ability",
      key: "sound_crew",
      options: ["Beginner", "Intermediate", "Expert"],
    },
    runner_assistant: {
      label: "Runner or Assistant ability",
      key: "runner_assistant",
      options: ["Beginner", "Intermediate", "Expert"],
    },
  },

  photography: {
    experience: {
      key: "experience",
      options: ["Amateur photographer", "Photography student", "Part-time professional (paid work)", "Full-time professional (paid work)"],
    },
  },

  presenting: {
    tv_presenter: {
      key: "tv_presenter",
      options: ["No previous TV presenter experience", "Previous unpaid TV presenter roles", "Previous paid TV presenter roles"],
    },
    radio_presenter: {
      key: "radio_presenter",
      options: ["No previous Radio presenter experience", "Previous unpaid Radio presenter roles", "Previous paid Radio presenter roles"],
    },
    acting_agent: {
      key: "acting_agent",
      options: [
        {
          id: 0,
          label: "I don't have an agent",
        },
        {
          id: 1,
          label: "I want an agent",
        },
        {
          id: 2,
          label: "I have an agent",
        },
      ],
    },
  },

  hairMakeup: {
    fashion_styling: {
      label: "Fashion Styling ability",
      options: ["Beginner", "Intermediate", "Expert"],
    },
    hair_styling: {
      label: "Hair Styling ability",

      options: ["Beginner", "Intermediate", "Expert"],
    },
    makeup_artist: {
      label: "Makeup Artist ability",
      options: ["Beginner", "Intermediate", "Expert"],
    },
  },

  extras: {
    extras_experience: {
      key: "extras_experience",
      options: ["No previous extras experience", "Previous extras experience", "Previous featured extras roles", "Previous speaking roles"],
    },
    extras_agent: {
      key: "extras_agent",
      options: [
        { id: 0, label: "I don't have an agent" },
        { id: 1, label: "I want an agent" },
        { id: 2, label: "I have an agent" },
      ],
    },
  },

  acting: {
    acting_experience: {
      key: "acting_experience",
      options: ["No previous acting experience", "Extra", "Previous unpaid speaking roles", "Previous paid speaking roles"],
    },
    acting_agent: {
      key: "acting_agent",
      options: [
        {
          id: 0,
          label: "I don't have an agent",
        },
        {
          id: 1,
          label: "I want an agent",
        },
        {
          id: 2,
          label: "I have an agent",
        },
      ],
    },
  },

  music: {
    genre: {
      options: ["Classical", "Country", "Electronic", "Hip-hop", "Indie", "Jazz", "Metal", "Pop", "Rock"],
    },
    singingAbility: {
      options: ["Beginner", "Backing vocals", "Lead singer", "Classically trained"],
    },
    singingStyle: {
      options: ["Pop", "Rock", "Classica", "Opera"],
    },
    singingRange: {
      options: ["Alto", "Falsetto", "Tenor", "Baritone", "Mezzo-Soprano", "Treble", "Bass", "Soprano"],
    },
    guitarAbility: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
    bassGuitarAbility: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
    drummingAbility: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
    keyboardAbility: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
    rappingAbility: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
    composerAbility: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
    djAbility: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
    producerAbility: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
  },

  dance: {
    style: {
      options: ["Ballet", "Ballroom", "Bellydance", "Bollywood", "Breakdancing", "Contemporary", "Country", "Disco Folk", "Hip Hop", "Jazz", "Latin American", "Rock & Roll", "Salsa", "Swing", "Tango", "Tap"],
    },
    ability: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
    teachingChoreography: {
      options: ["Beginner", "Intermediate", "Expert"],
    },
    agent: {
      options: [
        {
          id: 0,
          label: "I don't have an agent",
        },
        {
          id: 1,
          label: "I want an agent",
        },
        {
          id: 2,
          label: "I have an agent",
        },
      ],
    },
  },

  physicalAttrs: {},
};
