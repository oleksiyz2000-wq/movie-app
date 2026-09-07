import './NavButton.css';

export default function NavButton({ label, href }: { label: string; href: string }) {
  return (
    <a className="nav-button" href={href}>
      {label}
    </a>
  );
}