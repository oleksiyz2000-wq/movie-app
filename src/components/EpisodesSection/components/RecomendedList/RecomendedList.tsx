import './RecomendedList.css'

import RecomendedCard from './components/RecomendedCard/RecomededCard.tsx'

export default function RecomendedList() {
  return (
    <>
      <div className="recomended-list">
        <RecomendedCard
          background={"src/assets/topgun.jpg"}
          title={"TOP GUN:Maverick"}
        />
      </div>
    </>
  )
}