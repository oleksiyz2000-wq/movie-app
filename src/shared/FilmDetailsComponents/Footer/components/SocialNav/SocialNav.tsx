import './SocialNav.css'

interface SocialNavProps {
  icon: string;
  link: string;
}

export default function SocialNav({ icon, link }: SocialNavProps) {
  return (
    <a className="social-nav" href={link}>
      <img className="social-nav__logo" src={icon} />
    </a>
  )
}