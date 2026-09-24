import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { recipes } from './data/recipes';
import { SiteHeader } from './components/SiteHeader';
import { SiteNavigation } from './components/SiteNavigation';
import { SiteFooter } from './components/SiteFooter';
import { DayPage } from './pages/DayPage';

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('daily-recipes-theme') === 'dark' ? 'dark' : 'light'),
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'light' ? '#fbf8f1' : '#11130f',
    );
    localStorage.setItem('daily-recipes-theme', theme);
  }, [theme]);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      <SiteHeader
        theme={theme}
        onThemeChange={() => setTheme((value) => value === 'light' ? 'dark' : 'light')}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
      />
      <div className="app-shell">
        <SiteNavigation days={recipes} open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="content">
          <Routes>
            <Route path="/" element={<DayPage day={recipes[0]} />} />
            {recipes.map((day) => (
              <Route key={day.id} path={`/days/${day.id}`} element={<DayPage day={day} />} />
            ))}
            <Route path="*" element={<DayPage day={recipes[0]} />} />
          </Routes>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}