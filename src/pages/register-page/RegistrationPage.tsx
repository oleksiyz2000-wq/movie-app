import './RegistrationPage.css'

import logo from '../../assets/Logo-brand.svg';
import { AuthLayout } from "../../shared/AuthLayout"

const AuthLayoutData = [
  {
    id: 1,
    content: "Email",
    //isSecondary: true,
  },
  {
    id: 2,
    content: "Password",
  }
]

export default function RegistrationPage() {
  return (
    <>
      <main className="reg-page__main">
        <div className='registration-main'>
          <div className='auth-header'>
            <img className='auth-header__logo' src={logo} alt='auth-logo' />

            <button className='auth-header__button'>Cancel</button>
          </div>
          <h6 className='auth-text'>Login to your account</h6>
          <div className='auth-main'>
            {AuthLayoutData.map((item) => (
              <AuthLayout
                key={item.id}
                content={item.content}
              />
            ))}
          </div>
          <div className='auth-footer'>
            <h4 className='auth__forgot-password'>Forgot password</h4>
            <button className="auth-footer__button">Login</button>
            <h3 className='auth__signup'>
              Don't have an account?
              <a className='auth__signup-link' href='#'>Sign Up</a>
            </h3>
          </div>
        </div>
      </main>
    </>
  );
}