import './NavContainer.css';

export default function NavContainer({ children }: { children: React.ReactNode }) {
  return (
    <nav className="nav-container">
      {children}
    </nav>
  );
}