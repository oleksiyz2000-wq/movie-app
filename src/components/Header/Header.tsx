import './Header.css';
import NavContainer from './components/NavContainer/NavContainer';
import NavButton from './components/NavContainer/NavButton';
import { Search, Bell } from 'lucide-react';

export const NAV_LINKS = [
  { label: "Home", 
    href: "/" 
  },
  { label: "Discover", 
    href: "/" 
  },
  { label: "New release", 
    href: "/" 
  },
  { label: "Forum", 
    href: "/" 
  },
  { label: "About", 
    href: "/" 
  },
];

export default function Header() {
  return (
    <header>
      <a className="logo-link" href="/">
        <img className="logo" src="src/assets/Logo-brand.svg" alt="Logo" />
      </a>

      <NavContainer>
        {NAV_LINKS.map((item, index) => (
          <NavButton key={index} label={item.label} href={item.href} />
        ))}
      </NavContainer>
      <div className="header-actions">
        <Search className="search-icon" />
        <Bell className="bell-icon" />
      </div>
    </header>
  );
}