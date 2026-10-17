import "./SimilarOption.css"

interface SelectProps {
  label: string
}

export default function Option({ label }: SelectProps) {
  return (
    <button className='similar-button'>{label}</button>
  )
}
