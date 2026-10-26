import { CirclePlay, Bookmark, VolumeX, Heart, Download, Share2 } from "lucide-react"

export const NAV_LINKS = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Discover", href: "/" },
  { id: 3, label: "New release", href: "/" },
  { id: 4, label: "Forum", href: "/" },
  { id: 5, label: "About", href: "/" },
]

export const theLastOfUsHero = {
  title: "The Last Of Us Season 1",
  imageSrc: "src/assets/background.png",

  movieMetaData: [
    { id: 1, text: "4.9", isPrimary: true },
    { id: 2, text: "2022", isPrimary: false },
    { id: 3, text: "Fantasy", isPrimary: false },
    { id: 4, text: "Actions", isPrimary: false },
    { id: 5, text: "Horror", isPrimary: false },
  ],

  movieButtonsData: [
    { id: 1, isPrimary: true, icon: <CirclePlay size={20} />, text: "Continue Watching" },
    { id: 2, isPrimary: false, icon: <Bookmark size={20} />, text: "Add Watchlist" },
  ],

  movieDetailsData: [
    { id: 1, icon: <VolumeX size={20} />, text: null, isSmall: true },
    { id: 2, icon: <Heart size={20} />, text: "Like" },
    { id: 3, icon: <Download size={20} />, text: "Download" },
    { id: 4, icon: <Share2 size={20} />, text: "Share" },
  ],
};

export const movieCardsData = [
  {
    id: 1,
    icon: "/src/assets/Bg.png",
    title: "Pedro Pascal",
    text: "Joel Miller",
  },
  {
    id: 2,
    icon: "/src/assets/Bg.png",
    title: "Pedro Pascal",
    text: "Joel Miller",
  },
  {
    id: 3,
    icon: "/src/assets/Bg.png",
    title: "Pedro Pascal",
    text: "Joel Miller",
  },
  {
    id: 4,
    icon: "/src/assets/Bg.png",
    title: "Pedro Pascal",
    text: "Joel Miller",
  },
  {
    id: 5,
    icon: "/src/assets/Bg.png",
    title: "Pedro Pascal",
    text: "Joel Miller",
  },
  {
    id: 6,
    icon: "/src/assets/Bg.png",
    title: "Pedro Pascal",
    text: "Joel Miller",
  },
]

export const movieOptionsBtnData = [
  {
    id: 1,
    text: "Episodes",
  },
  {
    id: 2,
    text: "Universe",
  },
  {
    id: 3,
    text: "News",
  },
  {
    id: 4,
    text: "Reviews",
  },
]

 export const theLastOfUsEpisodes = {
  movieEpisodesCardsData: [
      {
        id: 1,
        title: "Chapter 1",
        text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
        background: "src/assets/Ep1.png",
      },
      {
        id: 2,
        title: "Chapter 2",
        text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
        background: "src/assets/Ep2.png",
      },
      {
        id: 3,
        title: "Chapter 3",
        text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
        background: "src/assets/Ep3.png",
      },
      {
        id: 4,
        title: "Chapter 4",
        text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
        background: "src/assets/Ep4.png",
      },
      {
        id: 5,
        title: "Chapter 5",
        text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
        background: "src/assets/Ep4.png",
      },
      {
        id: 6,
        title: "Chapter 6",
        text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
        background: "src/assets/Ep4.png",
      },
      {
        id: 7,
        title: "Chapter 6",
        text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
        background: "src/assets/Ep4.png",
      },
  ],

  movieEpisodesSelectData: [
      {
        id: 1,
        value: "Season 1",
      },
      {
        id: 2,
        value: "Season 2",
      },
      {
        id: 3,
        value: "Season 3",
      },
  ]
}

export const movieSimilarCardsData = [
  {
    id: 1,
    title: "Untitled",
    text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
    background: "src/assets/Ep1.png",
    meta: ["4.6", "Action", "Movie"],
  },
  {
    id: 2,
    title: "Untitled",
    text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
    background: "src/assets/Ep2.png",
    meta: ["4.6", "Action", "Movie"],
  },
  {
    id: 3,
    title: "Untitled",
    text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
    background: "src/assets/Ep3.png",
    meta: ["4.6", "Action", "Movie"],
  },
  {
    id: 4,
    title: "Untitled",
    text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
    background: "src/assets/Ep4.png",
    meta: ["4.6", "Action", "Movie"],
  },
  {
    id: 5,
    title: "Untitled",
    text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
    background: "src/assets/Ep4.png",
    meta: ["4.6", "Action", "Movie"],
  },
  {
    id: 6,
    title: "Untitled",
    text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
    background: "src/assets/Ep4.png",
    meta: ["4.6", "Action", "Movie"],
  },
  {
    id: 7,
    title: "Untitled",
    text: "The chapter about geuinea just want to go out fromhis palace to get freedom...",
    background: "src/assets/Ep4.png",
    meta: ["4.6", "Action", "Movie"],
  },
]