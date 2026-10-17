import "./SimilarSection.css"

import { SimilarCardsData } from "./constants.ts"

import SimilarCard from "./components/SimilarList/components/SimilarCard/SimilarCard.tsx"
import SimilarButton from "./components/SimilarList/components/SimilarOption/SimilarOption.tsx"

export default function SimilarSection() {
  return (
    <div className="similar-section">
      <div className="episodes-header">
        <h2 className="header-title">Similar series for you</h2>
        <SimilarButton label={"See more"} />
      </div>
      <div className="similar-main">
        <div className="similar-main__container">
          {SimilarCardsData.map((item) => (
            <SimilarCard
              key={item.id}
              title={item.title}
              background={item.background}
              meta={item.meta ?? []}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
