import "./FilmDetailsPage.css"

import HeroSection from "../../shared/FilmDetailsComponents/HeroSection/HeroSection.tsx"
import AboutSection from "../../shared/FilmDetailsComponents/AboutSection/AboutSection.tsx"
import OptionsSection from "../../shared/FilmDetailsComponents/OptionsSection/OptionsSection.tsx"
import EpisodesSection from "../../shared/FilmDetailsComponents/EpisodesSection/EpisodesSection.tsx"
import Header from "../../shared/FilmDetailsComponents/Header/Header.tsx"
import SimilarSection from "../../shared/FilmDetailsComponents/SimilarSection/SimilarSection.tsx"

export default function FilmDetailsPage() {
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <AboutSection />
        <OptionsSection />
        <EpisodesSection />
        <SimilarSection />
      </main>
    </>
  )
}