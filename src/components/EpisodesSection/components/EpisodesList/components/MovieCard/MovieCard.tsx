import "./MovieCard.css"

interface MovieCardProps {
  title: string
  text: string
  background: string
}

export default function MovieCard({ title, text, background }: MovieCardProps) {
  const BackgroundStyle = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(18, 18, 20, 1) 100%), url(${background})`

  return (
    <div className="movie-card" style={{ backgroundImage: BackgroundStyle }}>
      <div className="card-info">
        <h4 className="info-title">{title}</h4>
        <p className="info-text">{text}</p>
      </div>
    </div>
  )
}
