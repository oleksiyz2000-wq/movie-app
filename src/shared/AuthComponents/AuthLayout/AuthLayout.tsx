import './AuthLayout.css'

interface AuthLayoutProps {
  content: string;
}

export default function AuthLayout({content} : AuthLayoutProps) {
    return (
      <>
        <div className='auth-layout'>
          <div className='auth-header'>
            <h3 className='auth-header__text'>{content}</h3>
          </div>
          <div className='auth-input__cocntainer'>
            <input className='auth-input' type='text' placeholder={content} />
          </div>
        </div>
      </>
    )
}