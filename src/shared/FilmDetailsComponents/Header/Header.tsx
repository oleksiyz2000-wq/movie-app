import "./Header.css"
import NavContainer from "./components/NavContainer/NavContainer.tsx"
import NavButton from "./components/NavContainer/NavButton.tsx"
import { Search, Bell } from "lucide-react"

export const NAV_LINKS = [
  { id: 1, label: "Home", href: "/registration" },
  { id: 2, label: "Discover", href: "/" },
  { id: 3, label: "New release", href: "/" },
  { id: 4, label: "Forum", href: "/" },
  { id: 5, label: "About", href: "/" },
]

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
