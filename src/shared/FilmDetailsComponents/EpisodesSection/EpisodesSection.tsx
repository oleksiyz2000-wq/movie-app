import "./EpisodesSection.css"

import MovieCard from "./components/EpisodesList/components/MovieCard/MovieCard.tsx"
import MovieOption from "./components/EpisodesList/components/MovieOption/MovieOption.tsx"

interface EpisodesSectionProps {
  episodesSelectData?: Array<{ id: number; value: string;}>;
  episodesCardsData?: Array<{ id: number; title: string; text: string; background: string;}>;
}

export default function EpisodesSection({ episodesSelectData=[], episodesCardsData=[]}: EpisodesSectionProps) {
  return (
    <div className="episodes-section">
      <div className="episodes-header">
        <h2 className="header-title">1-9 episodes</h2>
        <select className="header-select">
          {episodesSelectData.map((item) => (
            <MovieOption key={item.id} value={item.value} />
          ))}
        </select>
      </div>
      <div className="episodes-main">
        <div className="episodes-main__container">
          {episodesCardsData.map((item) => (
            <MovieCard key={item.id} title={item.title} text={item.text} background={item.background} />
          ))}
        </div>
      </div>
    </div>
  )
}
