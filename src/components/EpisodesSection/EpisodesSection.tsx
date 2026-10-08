import "./EpisodesSection.css"

import { MovieCardsData } from "./constants.ts"
import { SelectData } from "./constants.ts"

import MovieCard from "./components/EpisodesList/components/MovieCard/MovieCard"
import MovieOption from "./components/EpisodesList/components/MovieOption/MovieOption.tsx"

export default function EpisodesSection() {
  return (
    <div className="episodes-section">
      <div className="episodes-header">
        <h2 className="header-title">1-9 episodes</h2>
        <select className="header-select">
          {SelectData.map((item) => (
            <MovieOption key={item.id} value={item.value} />
          ))}
        </select>
      </div>
      <div className="episodes-main">
        <div className="episodes-main__container">
          {MovieCardsData.map((item) => (
            <MovieCard key={item.id} title={item.title} text={item.text} background={item.background} />
          ))}
        </div>
    </div>
    </div>
  )
}
