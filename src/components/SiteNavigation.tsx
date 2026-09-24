import { NavLink } from 'react-router-dom';
import type { RecipeDay } from '../types';

type Props = {
  days: RecipeDay[];
  open: boolean;
  onClose: () => void;
};

export function SiteNavigation({ days, open, onClose }: Props) {
  return (
    <>
      <nav className={`sidebar ${open ? 'is-open' : ''}`} aria-label="Recipe days">
        <div className="sidebar__heading">
          <span>Recipe days</span>
          <span>{String(days.length).padStart(2, '0')}</span>
        </div>
        <ul className="sidebar__list">
          {days.map((day, index) => (
            <li key={day.id}>
              <NavLink className="sidebar__link" to={`/days/${day.id}`}>
                <span className="sidebar__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="sidebar__copy">
                  <strong>{day.dateLabel}</strong>
                  <small>{day.title}</small>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <button className="nav-backdrop" aria-label="Close recipe menu" onClick={onClose} />
      )}
    </>
  );
}