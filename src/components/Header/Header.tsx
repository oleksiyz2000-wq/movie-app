import './Header.css';
import NavContainer from './NavContainer/NavContainer';
import NavButton from './NavContainer/NavButton';
import { NAV_LINKS } from './constants';
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';

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