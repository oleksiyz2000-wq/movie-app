import './AuthFooter.css'
import * as React from "react"

interface AuthFooterProps {
  AuthButtonText: string;
  AuthNavText: string;
  AuthNavSubtext: string;
  children?: React.ReactNode;
}

export default function AuthFooter({ AuthButtonText, AuthNavText, AuthNavSubtext, children }: AuthFooterProps) {
  return (
    <div className='auth-footer'>
      {children}
      <button className="auth-footer__button">{AuthButtonText}</button>
      <h3 className='auth__signup'>
        {AuthNavText}
        <a className='auth__signup-link' href='#'>{AuthNavSubtext}</a>
      </h3>
    </div>
  )
}