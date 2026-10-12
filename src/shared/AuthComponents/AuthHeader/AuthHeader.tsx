import './AuthHeader.css'
import logo from "../../../assets/Logo-brand.svg"

interface AuthHeaderProps {
  AuthText: string;
}

export default function AuthHeader({ AuthText }: AuthHeaderProps) {
  return (
    <>
      <div className='auth-header'>
        <img className='auth-header__logo' src={logo} alt='auth-logo' />
        <button className='auth-header__button'>Cancel</button>
      </div>
      <h6 className='auth-text'>{AuthText}</h6>
    </>
  )
}