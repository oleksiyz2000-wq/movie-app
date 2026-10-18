import './Footer.css'

import { Fragment } from 'react'

import instaIcon from "../../../assets/Social/insta.svg";
import fbIcon from "../../../assets/Social/facebook.svg";
import xIcon from "../../../assets/Social/x-twitter.svg";

import SocialNav from "./components/SocialNav/SocialNav.tsx"
import FooterMeta from "./components/FooterMeta/FooterMeta.tsx"

interface Footer {
  id: number;
  content: string;
  link: string;
}

const FooterNav: Footer[] = [
  {
    id: 1,
    content: "Home",
    link: "/"
  },
  {
    id: 2,
    content: "Discover",
    link: "/"
  },
  {
    id: 3,
    content: "Movie Release",
    link: "/"
  },
  {
    id: 4,
    content: "Forum",
    link: "/"
  },
  {
    id: 5,
    content: "About",
    link: "/"
  },
]

const SocialNavMeta = [
  {
    id: 1,
    icon: instaIcon,
    link: "#"
  },
  {
    id: 2,
    icon: fbIcon,
    link: "#"
  },
  {
    id: 3,
    icon: xIcon,
    link: "#"
  }
]

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <p className="info-text">
              Our platform is trusted by millions & features best updated movies all around the world.
            </p>
          </div>
          <div className="footer-nav">
              <ul className="footer-nav__list">
                {FooterNav.map((item, index) => (
                  <Fragment key={item.id}>
                    <li key={item.id}>
                      <a href={item.link}>
                        {item.content}
                      </a>
                    </li>
                    {index < FooterNav.length - 1 && <span className="footer-nav__dot"> / </span>}
                  </Fragment>
                ))}
              </ul>
              <div className="social-nav__container">
                {SocialNavMeta.map((item) => (
                  <SocialNav
                    key={item.id}
                    icon={item.icon}
                    link={item.link}
                 />
                ))}
              </div>
          </div>
        </div>
        <div className="footer-meta">
          <div className="footer-meta__links">
            <FooterMeta
              link={"#"}
              content={"Privacy Policy"}
            />
            <FooterMeta
              link={"#"}
              content={"Terms of service"}
            />
            <FooterMeta
              link={"#"}
              content={"Language"}
            />
          </div>
          <div className="footer-meta__copyright">@ 2026</div>
        </div>
      </footer>
    </>
  )
}