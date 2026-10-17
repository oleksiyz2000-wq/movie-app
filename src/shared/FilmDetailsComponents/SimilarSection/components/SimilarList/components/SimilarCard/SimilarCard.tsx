import "./SimilarCard.css"

import MovieMeta from "../../../../../../MovieMeta/MovieMeta.tsx"

interface MovieCardProps {
  title: string
  background: string
}

const movieMetaData = [
  {
    id: 1,
    isPrimary: true,
    text: "⭐ 4.6"
  }
]

export default function SimilarCard({ title, background }: MovieCardProps) {
  const BackgroundStyle = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(18, 18, 20, 1) 100%), url(${background})`

  return (
    <div className="similar-card" style={{ backgroundImage: BackgroundStyle }}>
      <div className="card-info">
        <h4 className="info-title">{title}</h4>
        {movieMetaData.map((item) => (
          <MovieMeta key={item.id} isPrimary={item.isPrimary}>
            {item.text}
          </MovieMeta>
        ))}
      </div>
    </div>
  )
}
