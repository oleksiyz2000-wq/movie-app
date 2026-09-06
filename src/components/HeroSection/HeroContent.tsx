import './HeroContent.css'
import './HeroComponents/MovieBtns/MovieBtn.css'

import MovieMeta from './HeroComponents/MovieMeta/MovieMeta';
import MovieBtn from './HeroComponents/MovieBtns/MovieBtn';

import {
    CirclePlay,
    Bookmark,
    VolumeX,
    Heart,
    Download,
    Share2 
} 
from 'lucide-react';

const movieMetaData = [
  {
    id: 1,
    text: "⭐ 4.9",
    isPrimary: true
  },
  {
    id: 2,
    text: "2022",
    isPrimary: false
  },
  {
    id: 3,
    text: "Fantasy",
    isPrimary: false
  },
  {
    id: 4,
    text: "Actions",
    isPrimary: false
  },
  {
    id: 5,
    text: "Horror",
    isPrimary: false
  }
];

const movieBtnsData = [
  {
    id: 1,
    isPrimary: true,
    icon: <CirclePlay size={20} />,
    text: "Continue Watching"
  },
  {
    id: 2,
    isPrimary: false,
    icon: <Bookmark size={20} />,
    text: "Add Watchlist"

  }

];

const HeroDetailsData = [
  {
    id: 1,
    icon: <VolumeX size={20} />,
    text: null,
    isSmall: true
  },
  {
    id: 2,
    icon: <Heart size={20} />,
    text: "Like",
  },
  {
    id: 3,
    icon: <Download size={20} />,
    text: "Download",
  },
  {
    id: 3,
    icon: <Share2 size={20} />,
    text: "Share",
  }
]

export default function HeroContent() {
  return (
    <div className="hero-content">
      <div className="hero-main">
        <h1 className="hero-title">The Last Of Us Season 1</h1>
        <div className="movie-meta__wrapper">
          {movieMetaData.map((item) => (
            <MovieMeta
              key={item.id}
              text={item.text}
              isPrimary={item.isPrimary}
            />
          ))}
        </div>
        <div className="movie-btns__wrapper">
          {movieBtnsData.map((item) => (
            <MovieBtn
              key={item.id}
              isPrimary={item.isPrimary}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="hero-details">
        <div className="details-btn__wrapper">
          {HeroDetailsData.map((item) => (
            <MovieBtn
              key={item.id}
              icon={item.icon}
              text={item.text}
              isSmall={item.isSmall}
            />
          ))}
        </div>
      </div>
    </div>
  )
}