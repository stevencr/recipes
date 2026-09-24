import { NavLink } from 'react-router-dom';

type Props = {
  theme: 'light' | 'dark';
  onThemeChange: () => void;
  menuOpen: boolean;
  onMenuToggle: () => void;
};

export function SiteHeader({ theme, onThemeChange, menuOpen, onMenuToggle }: Props) {
  return (
    <header className="site-header">
      <button
        className="menu-toggle"
        aria-label={menuOpen ? 'Close recipe menu' : 'Open recipe menu'}
        aria-expanded={menuOpen}
        onClick={onMenuToggle}
      >
        <span /><span /><span />
      </button>

      <NavLink className="brand" to="/">
        <span className="brand__mark">✦</span>
        <span>
          <span className="brand__name">Daily Recipes</span>
          <span className="brand__tagline">simple food · every day</span>
        </span>
      </NavLink>

      <div className="header-actions">
        <button
          className="theme-toggle"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          onClick={onThemeChange}
        >
          <span>{theme === 'light' ? '☾' : '☀'}</span>
        </button>
      </div>
    </header>
  );
}