import "./HeroSection.css"
import "./components/MovieButton/MovieButton.css"

import MovieMeta from "./components/MovieMeta/MovieMeta.tsx"
import MovieButton from "./components/MovieButton/MovieButton.tsx"

import { Fragment } from "react"

interface HeroSectionProps {
  title?: string;
  imageSrc?: string;
  metaData?: Array<{ id: number; text: string; isPrimary?: boolean }>;
  buttonsData?: Array<{ id: number; text: string; isPrimary?: boolean; icon?: any }>;
  detailsData?: Array<{ id: number; text: string | null; isSmall?: boolean; icon?: any }>;
}

export default function HeroSection({
  title,
  imageSrc,

  metaData = [],
  buttonsData = [],
  detailsData = [],
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <img className="hero-image" src={imageSrc} />
      <div className="hero-content">
        <div className="hero-main">
          <h1 className="hero-title">{title}</h1>
          <div className="movie-meta__container">
            {metaData.map((item, index) => (
              <Fragment key={item.id}>
                <MovieMeta isPrimary={item.isPrimary}>
                  {index === 0 && <span className="star">⭐ </span>}
                  {item.text}
                </MovieMeta>
                {index < metaData.length - 1 && <span className="dot"> • </span>}
              </Fragment>
            ))}
          </div>
          <div className="movie-button__container">
            {buttonsData.map((item) => (
              <MovieButton key={item.id} isPrimary={item.isPrimary} icon={item.icon}>
                {item.text}
              </MovieButton>
            ))}
          </div>
        </div>
        <div className="hero-details">
          <div className="details-button__container">
            {detailsData.map((item) => (
              <MovieButton key={item.id} icon={item.icon} isSmall={item.isSmall}>
                {item.text}
              </MovieButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}