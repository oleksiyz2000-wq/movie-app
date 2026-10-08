import "./App.css"

import HeroSection from "./components/HeroSection/HeroSection.tsx"
import AboutSection from "./components/AboutSection/AboutSection.tsx"
import OptionsSection from "./components/OptionsSection/OptionsSection.tsx"
import EpisodesSection from "./components/EpisodesSection/EpisodesSection.tsx"
import Header from "./components/Header/Header.tsx"

export default function App() {
  return (
    <>
      <Header/>
      <HeroSection />
      <AboutSection />
      <OptionsSection />
      <EpisodesSection />
    </>
  )
}
