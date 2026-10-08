import './RecomededCard.css'

interface RecomendedCardProps {
    background: string;
    title: string;
}

export default function RecomendedCard({background, title}: RecomendedCardProps ) {
  return(
    <>
      <div className="recomended-card">
        <div
          className="card-background"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="card-details">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  )
}