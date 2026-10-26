import "./OptionsSection.css"

import { useState } from "react"

import OptionButton from "./components/OptionButton/OptionButton.tsx"

interface OptionsSectionProps {
  optionsBtnData?: Array<{ id: number; text: string; }>;
}

export default function OptionsSection({ optionsBtnData=[] }: OptionsSectionProps) {
  const [activeId, setActiveId] = useState(1)

  return (
    <div className="options-section">
      {optionsBtnData.map((item) => (
        <OptionButton key={item.id} text={item.text} isActive={activeId === item.id} onClick={() => setActiveId(item.id)} />
      ))}
    </div>
  )
}
