import "./FilmDetailsPage.css"

import HeroSection from "../../shared/FilmDetailsComponents/HeroSection/HeroSection.tsx"
import AboutSection from "../../shared/FilmDetailsComponents/AboutSection/AboutSection.tsx"
import OptionsSection from "../../shared/FilmDetailsComponents/OptionsSection/OptionsSection.tsx"
import EpisodesSection from "../../shared/FilmDetailsComponents/EpisodesSection/EpisodesSection.tsx"
import Header from "../../shared/FilmDetailsComponents/Header/Header.tsx"
import SimilarSection from "../../shared/FilmDetailsComponents/SimilarSection/SimilarSection.tsx"
import Footer from "../../shared/FilmDetailsComponents/Footer/Footer.tsx"

import { theLastOfUsHero } from "./constants.tsx"
import { movieCardsData } from "./constants.tsx"
import { movieOptionsBtnData } from "./constants.tsx"
import { theLastOfUsEpisodes } from "./constants.tsx"
import { movieSimilarCardsData} from "./constants.tsx"

export default function FilmDetailsPage() {
  return (
    <>
      <main>
        <Header />
        <HeroSection
          title={"The Last Of Us Season 1"}
          imageSrc={"src/assets/background.png"}

          metaData={theLastOfUsHero.movieMetaData}
          buttonsData={theLastOfUsHero.movieButtonsData}
          detailsData={theLastOfUsHero.movieDetailsData}
        />
        <AboutSection
          cardsData={movieCardsData}
        />
        <OptionsSection
          optionsBtnData={movieOptionsBtnData}
        />
        <EpisodesSection
          episodesSelectData={theLastOfUsEpisodes.movieEpisodesSelectData}
          episodesCardsData={theLastOfUsEpisodes.movieEpisodesCardsData}
        />
        <SimilarSection
          similarCardsData={movieSimilarCardsData}
        />
        <Footer/>
      </main>
    </>
  )
}