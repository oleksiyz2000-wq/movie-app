import "./MovieOption.css"

interface SelectProps {
  value: string
}

export default function Option({ value }: SelectProps) {
  return (
    <option className="select-option" value="1">
      {value}
    </option>
  )
}
