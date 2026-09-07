import './AboutSection.css'

import ActorCard from './components/ActorCard/ActorCard.tsx'
import { CardsData } from './constants.ts'

const Description = {
    text: "The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO. Based on the 2013 video game developed by Naughty Dog, the series is set in 2023, twenty years into a pandemic caused by a mass fungal infection, which causes its hosts to transform into zombie-like creatures and collapses society. The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States."
}

export default function AboutSection() {
    return (
        <div className="about-section">
            <div className="description__wrapper">
                <h2 className='title'>Story Line</h2>
                <p className='text'>{Description.text}</p>
            </div>
            <div className="top-cast__wrapper">
                <h2 className='title'>Top Cast</h2>
                <div className='actor-cards__wrapper'>
                    {CardsData.map((item) => (
                        <ActorCard
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}