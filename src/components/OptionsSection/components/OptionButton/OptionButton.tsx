import "./OptionButton.css"

interface OptionButtonProps {
  text: string
  isActive: boolean
  onClick?: () => void
}

export default function OptionButton({ text, onClick, isActive }: OptionButtonProps) {
  return (
    <h4 className={`option-button ${isActive && "active"}`} onClick={onClick}>
      {text}
    </h4>
  )
}
