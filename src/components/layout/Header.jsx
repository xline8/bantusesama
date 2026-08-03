import { useState } from 'react';

export default function Header({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    if (onNavigate) {
      onNavigate('login');
    }
  };

  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50 w-full h-16 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
      <div className="flex items-center gap-xs">
        <span className="font-title-md text-title-md font-bold text-primary cursor-pointer" onClick={() => onNavigate?.('home')}>
          BantuSesama
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-md">
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">
          Dashboard
        </a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">
          Events
        </a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">
          Organizations
        </a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">
          Community
        </a>
      </nav>

      <div className="flex items-center gap-sm">
        <button
          onClick={handleLoginClick}
          className="bg-primary-container text-on-primary font-label-sm text-label-sm px-sm py-xs rounded-full hover:bg-primary transition-colors duration-200 cursor-pointer active:scale-95 transition-transform hidden md:block"
        >
          Login
        </button>

        <button
          className="md:hidden text-on-surface-variant"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
