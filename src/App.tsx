import { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { recipes } from './data/recipes';
import { SiteHeader } from './components/SiteHeader';
import { SiteNavigation } from './components/SiteNavigation';
import { SiteFooter } from './components/SiteFooter';
import { DayPage } from './pages/DayPage';

function getTodayId() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('daily-recipes-theme') === 'dark' ? 'dark' : 'light'),
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const availableRecipes = useMemo(
    () => recipes.filter((day) => day.id >= getTodayId()),
    [],
  );
  const firstAvailableDay = availableRecipes[0];

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

  if (!firstAvailableDay) {
    return (
      <>
        <SiteHeader
          theme={theme}
          onThemeChange={() => setTheme((value) => value === 'light' ? 'dark' : 'light')}
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen((value) => !value)}
        />
        <main className="content">
          <section className="day-summary">
            <span className="day-summary__eyebrow">Daily Recipes</span>
            <h1>No upcoming recipes</h1>
            <p>Check back soon for the next menu.</p>
          </section>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader
        theme={theme}
        onThemeChange={() => setTheme((value) => value === 'light' ? 'dark' : 'light')}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
      />
      <div className="app-shell">
        <SiteNavigation days={availableRecipes} open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="content">
          <Routes>
            <Route path="/" element={<DayPage day={firstAvailableDay} />} />
            {availableRecipes.map((day) => (
              <Route key={day.id} path={`/days/${day.id}`} element={<DayPage day={day} />} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
