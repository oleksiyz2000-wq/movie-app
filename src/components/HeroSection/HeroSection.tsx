import './HeroSection.css'
import HeroContent from './HeroContent'

export default function HeroSection() {
    return (
        <section className="hero-section">
            <img className="hero-image" src="src/assets/hero-image.png" />
            <HeroContent />
        </section>
    )
}