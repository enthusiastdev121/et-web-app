import { InterestCategories } from "../profile";

export const categoriesKeys = {
  acting: "acting",
  modeling: "modeling",
  tvReality: "tvReality",
  extras: "extras",
  music: "music",
  filmStage: "filmStage",
  hairMakeup: "hairMakeup",
  presenter: "presenter",
  influencer: "influencer",
  photography: "photography",
  survival: "survival",
  dance: "dance",
};

export const interest: InterestCategories = {
  [categoriesKeys.acting]: {
    id: 1,
    label: "Acting",
    cdIcon: '/svg/cd/actors.svg',
    cdImg: '/images/classes/all-class-11.png',
    checked: false,
    sub: [
      {
        categoryId: 1,
        id: 1,
        label: "Agency Scouts",
        checked:false
      },
      {
        categoryId: 1,
        id: 2,
        label: "Entertainers",
        checked:false
      },
      {
        categoryId: 1,
        id: 3,
        label: "Events & Promotions",
        checked:false
      },
      {
        categoryId: 1,
        id: 4,
        label: "Feature Films",
        checked:false
      },
      {
        categoryId: 1,
        id: 5,
        label: "Music videos",
        checked:false
      },
      {
        categoryId: 1,
        id: 6,
        label: "Short Films",
        checked:false
      },
      {
        categoryId: 1,
        id: 7,
        checked:false,
        label: "Theatre & Musicals",
      },
      {
        categoryId: 1,
        id: 8,
        label: "TV commercials",
        checked:false
      },
      {
        categoryId: 1,
        id: 9,
        label: "TV Series",
        checked:false
      },
      {
        categoryId: 1,
        id: 10,
        label: "Voiceover & Radio",
        checked:false
      },
      {
        categoryId: 1,
        id: 11,
        label: "Web",
        checked:false
      },
      {
        categoryId: 1,
        id: 12,
        label: "Other",
        checked:false
      },
    ],
  },
  [categoriesKeys.modeling]: {
    id: 3,
    label: "Modeling",
    cdIcon: '/svg/cd/model.svg',
    cdImg: '/images/classes/all-class-9.png',
    checked: false,
    sub: [
      { categoryId: 3, id: 21, label: "Agency Scouts", checked:false},
      { categoryId: 3, id: 22, label: "Catwalk",checked:false },
      { categoryId: 3, id: 23, label: "Competitions & Pageants" , checked:false},
      { categoryId: 3, id: 24, label: "Events & Promotions" , checked:false},
      { categoryId: 3, id: 25, label: "Fitting", checked:false },
      { categoryId: 3, id: 26, label: "Hair models" , checked:false},
      { categoryId: 3, id: 27, label: "Music videos" , checked:false},
      { categoryId: 3, id: 28, label: "Print", checked:false },
      { categoryId: 3, id: 29, label: "Time for Prints", checked:false },
      { categoryId: 3, id: 30, label: "TV commercials", checked:false },
      { categoryId: 3, id: 31, label: "Other" , checked:false},
    ],
  },
  [categoriesKeys.tvReality]: {
    label: "Tv & Reality",
    cdIcon: '/svg/cd/Presenters.svg',
    cdImg: '/images/classes/all-class-6.png',
    checked: false,
    id: 8,
    sub: [
      {
        categoryId: 8,
        id: 59,
        label: "Audiences",
        checked:false
      },
      {
        categoryId: 8,
        id: 60,
        label: "Documentaries & Factual",
        checked:false
      },
      {
        categoryId: 8,
        id: 61,
        label: "Game shows",
        checked:false
      },
      {
        categoryId: 8,
        id: 62,
        label: "Reality TV",
        checked:false
      },
    ],
  },
  [categoriesKeys.extras]: {
    id: 2,
    label: "Extras",
    cdIcon: '/svg/cd/extras.svg',
    cdImg: '/images/classes/all-class-1.png',
    checked: false,
    sub: [
      {
        categoryId: 2,
        id: 13,
        label: "Agency Scouts",
        checked:false
      },
      {
        categoryId: 2,
        id: 14,
        label: "Feature Films",
        checked:false
      },
      {
        categoryId: 2,
        id: 15,
        label: "Music videos",
        checked:false
      },
      {
        categoryId: 2,
        id: 16,
        label: "Short Films",
        checked:false
      },
      {
        categoryId: 2,
        id: 17,
        label: "TV commercials",
        checked:false
      },
      {
        categoryId: 2,
        id: 18,
        label: "TV Series",
        checked:false
      },
      {
        categoryId: 2,
        id: 19,
        label: "Web",
        checked:false
      },
      {
        categoryId: 2,
        id: 20,
        label: "Other",
        checked:false
      },
    ],
  },
  [categoriesKeys.music]: {
    id: 6,
    label: "Musician",
    cdIcon: '/svg/cd/music.svg',
    cdImg: '/images/classes/all-class-13.png',
    checked: false,
    sub: [
      {
        categoryId: 6,
        id: 48,
        label: "Singing",
      },
      {
        categoryId: 6,
        id: 49,
        label: "Guitar",
      },
      {
        categoryId: 6,
        id: 50,
        label: "Bass Guitar",
      },
      {
        categoryId: 6,
        id: 51,
        label: "Drums",
      },
      {
        categoryId: 6,
        id: 52,
        label: "Piano/Keyboard",
      },
      {
        categoryId: 6,
        id: 53,
        label: "Composing",
      },
      {
        categoryId: 6,
        id: 54,
        label: "Production",
      },
      {
        categoryId: 6,
        id: 55,
        label: "Bands wanted",
      },
      {
        categoryId: 6,
        id: 56,
        label: "DJing",
      },
      {
        categoryId: 6,
        id: 57,
        label: "Rapper",
      },
      {
        categoryId: 6,
        id: 58,
        label: "Other",
      },
    ],
  },
  [categoriesKeys.filmStage]: {
    id: 10,
    label: "Film & Stage Crew",
    cdIcon: '/svg/cd/Crews.svg',
    cdImg: '/images/classes/all-class-8.png',
    checked: false,
    sub: [
      {
        categoryId: 10,
        id: 65,
        label: "Writing or Directing",
        checked:false
      },
      {
        categoryId: 10,
        id: 66,
        label: "Art Department or Costume",
        checked:false
      },
      {
        categoryId: 10,
        id: 67,
        label: "Camera",
        checked:false
      },
      {
        categoryId: 10,
        id: 68,
        label: "Lighting",
        checked:false
      },
      {
        categoryId: 10,
        id: 69,
        label: "Post Production & Editing",
        checked:false
      },
      {
        categoryId: 10,
        id: 70,
        label: "Production Management",
        checked:false
      },
      {
        categoryId: 10,
        id: 71,
        label: "Runner or Assistant",
        checked:false
      },
      {
        categoryId: 10,
        id: 72,
        label: "Sound",
        checked:false
      },
      {
        categoryId: 10,
        id: 73,
        label: "Other",
        checked:false
      },
    ],
  },
  [categoriesKeys.hairMakeup]: {
    id: 11,
    label: "Hair, Makeup, & Styling",
    cdIcon: '/svg/cd/actors.svg',
    cdImg: '/images/classes/all-class-7.png',
    checked: false,
    sub: [
      {
        categoryId: 11,
        id: 74,
        label: "Hair Stylist",
        checked:false
      },
      {
        categoryId: 11,
        id: 75,
        label: "Makeup Artist",
        checked:false
      },
      {
        categoryId: 11,
        id: 76,
        label: "Fashion Stylist",
        checked:false
      },
    ],
  },
  [categoriesKeys.presenter]: {
    id: 5,
    label: "Presenter",
    cdIcon: '/svg/cd/Presenters.svg',
    cdImg: '/images/classes/all-class-12.png',
    checked: false,
    sub: [
      {
        categoryId: 5,
        id: 45,
        label: "TV",
        checked:false
      },
      {
        categoryId: 5,
        id: 46,
        label: "Radio",
        checked:false
      },
      {
        categoryId: 5,
        id: 47,
        label: "Other",
        checked:false
      },
    ],
  },
  [categoriesKeys.influencer]: {
    id: 4,
    label: "Influencer",
    cdIcon: '/svg/cd/Influencers.svg',
    cdImg: '/images/classes/all-class-14.png',
    checked: false,
    sub: [
      {
        categoryId: 4,
        id: 32,
        label: "Beauty",
        checked:false
      },
      {
        categoryId: 4,
        id: 33,
        label: "Fashion",
        checked:false
      },
      {
        categoryId: 4,
        id: 34,
        label: "Fitness",
        checked:false
      },
      {
        categoryId: 4,
        id: 35,
        label: "Food",
        checked:false
      },
      {
        categoryId: 4,
        id: 36,
        label: "Gaming & Technology",
        checked:false
      },
      {
        categoryId: 4,
        id: 37,
        label: "Health",
        checked:false
      },
      {
        categoryId: 4,
        id: 38,
        label: "Influencer Scouts",
        checked:false
      },
      {
        categoryId: 4,
        id: 39,
        label: "Live Events",
        checked:false
      },
      {
        categoryId: 4,
        id: 40,
        label: "Men's Products",
        checked:false
      },
      {
        categoryId: 4,
        id: 41,
        label: "Music",
        checked:false
      },
      {
        categoryId: 4,
        id: 42,
        label: "Parenting",
        checked:false
      },
      {
        categoryId: 4,
        id: 43,
        label: "Travel",
        checked:false
      },
      {
        categoryId: 4,
        id: 44,
        label: "Other",
        checked:false
      },
    ],
  },
  [categoriesKeys.photography]: {
    id: 7,
    label: "Photography",
    cdIcon: '/svg/cd/Presenters.svg',
    cdImg: '/images/classes/all-class-10.png',
    checked: false,
    sub: [],
  },
  [categoriesKeys.survival]: {
    id: 12,
    label: "Survival Jobs",
    cdIcon: '/svg/cd/extras.svg',
    cdImg: '/images/classes/all-class-3.png',
    checked: false,
    sub: [],
  },
  [categoriesKeys.dance]: {
    id: 9,
    label: "Dancing",
    cdIcon: '/svg/cd/dancer.svg',
    cdImg: '/images/classes/all-class-15.png',
    checked: false,
    sub: [
      {
        categoryId: 9,
        id: 63,
        label: "Dancer",
        checked:false
      },
      {
        categoryId: 9,
        id: 64,
        label: "Teacher & Choreographer",
        checked:false
      },
    ],
  },
  
};

export const interestArray = Object.values(interest);
