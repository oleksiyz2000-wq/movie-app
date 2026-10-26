import "./Header.css"
import NavContainer from "./components/NavContainer/NavContainer.tsx"
import NavButton from "./components/NavContainer/NavButton.tsx"

import { Search, Bell } from "lucide-react"

import { NAV_LINKS } from "../../../pages/FillmDetailsPage/constants.tsx"

export default function Header() {
  return (
    <>
      <header>
        <a className="logo-link" href="/public">
          <img className="logo" src="src/assets/Logo-brand.svg" alt="Logo" />
        </a>

        <NavContainer>
          {NAV_LINKS.map((item) => (
            <NavButton key={item.id} label={item.label} href={item.href} />
          ))}
        </NavContainer>
        <div className="header-actions">
          <Search className="search-icon" />
          <Bell className="bell-icon" />
        </div>
      </header>
    </>
  )
}
