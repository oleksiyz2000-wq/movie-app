import { Fragment } from "react";
import "./SimilarCard.css";

interface MovieCardProps {
  title: string;
  background: string;
  meta?: readonly string[];
}

export default function SimilarCard({ title, background, meta=[]}: MovieCardProps) {
  const BackgroundStyle = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(18, 18, 18, 1) 100%), url(${background})`;

  return (
    <div className="similar-card" style={{ backgroundImage: BackgroundStyle }}>
      <div className="card-info">
        <h4 className="info-title">{title}</h4>
        <div className="card-meta">
          {meta.map((item, index) => (
            <Fragment key={index}>
              {index === 0 && <span className="star">⭐ </span>}
              <span className={index === 0 ? "rating-text" : "meta-text"}>
                {item}
              </span>
              {index < meta.length - 1 && <span className="dot"> • </span>}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
