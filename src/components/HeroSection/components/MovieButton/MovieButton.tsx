import "./MovieButton.css"

interface MovieButtonsProps {
  children?: React.ReactNode
  isPrimary?: boolean
  icon?: React.ReactNode
  isSmall?: boolean
}

export default function MovieButton({ children, isPrimary, icon, isSmall }: MovieButtonsProps) {
  return (
    <button className={`movie-button ${isPrimary && "primary"} ${isSmall && "small"}`}>
      {icon}
      {children}
    </button>
  )
}
