import "./HeroSection.css"
import MovieMeta from "../../MovieMeta/MovieMeta.tsx"
import MovieButton from "./components/MovieButton/MovieButton.tsx"

import "./HeroContent.css"
import "./components/MovieButton/MovieButton.css"

import { CirclePlay, Bookmark, VolumeX, Heart, Download, Share2 } from "lucide-react"

const movieMetaData = [
  {
    id: 1,
    text: "⭐ 4.9",
    isPrimary: true,
  },
  {
    id: 2,
    text: "2022",
    isPrimary: false,
  },
  {
    id: 3,
    text: "Fantasy",
    isPrimary: false,
  },
  {
    id: 4,
    text: "Actions",
    isPrimary: false,
  },
  {
    id: 5,
    text: "Horror",
    isPrimary: false,
  },
]

const movieButtonsData = [
  {
    id: 1,
    isPrimary: true,
    icon: <CirclePlay size={20} />,
    text: "Continue Watching",
  },
  {
    id: 2,
    isPrimary: false,
    icon: <Bookmark size={20} />,
    text: "Add Watchlist",
  },
]

const HeroDetailsData = [
  {
    id: 1,
    icon: <VolumeX size={20} />,
    text: null,
    isSmall: true,
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
    id: 4,
    icon: <Share2 size={20} />,
    text: "Share",
  },
]

interface HeroSectionProps {
  rating: string;
}

export default function HeroSection({ rating }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <img className="hero-image" src="src/assets/background.png" />
      <div className="hero-content">
        <div className="hero-main">
          <h1 className="hero-title">The Last Of Us Season 1</h1>
          <div className="movie-meta__container">
            {movieMetaData.map((item) => (
              <MovieMeta key={item.id} isPrimary={item.isPrimary}>
                {item.text}
              </MovieMeta>
            ))}
          </div>
          <div className="movie-button__container">
            {movieButtonsData.map((item) => (
              <MovieButton key={item.id} isPrimary={item.isPrimary} icon={item.icon}>
                {item.text}
              </MovieButton>
            ))}
          </div>
        </div>
        <div className="hero-details">
          <div className="details-button__container">
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </section>
  )
}