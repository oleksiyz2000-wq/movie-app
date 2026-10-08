import "./OptionsSection.css"

import { useState } from "react"

import OptionButton from "./components/OptionButton/OptionButton.tsx"

const OptionsBtnData = [
  {
    id: 1,
    text: "Episodes",
  },
  {
    id: 2,
    text: "Universe",
  },
  {
    id: 3,
    text: "News",
  },
  {
    id: 4,
    text: "Reviews",
  },
]

export default function OptionsSection() {
  const [activeId, setActiveId] = useState(1)

  return (
    <div className="options-section">
      {OptionsBtnData.map((item) => (
        <OptionButton key={item.id} text={item.text} isActive={activeId === item.id} onClick={() => setActiveId(item.id)} />
      ))}
    </div>
  )
}
