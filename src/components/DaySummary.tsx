import type { RecipeDay } from '../types';

type Props = { day: RecipeDay };

export function DaySummary({ day }: Props) {
  return (
    <header className="day-summary">
      <div className="day-summary__eyebrow"><span /> Daily menu</div>
      <p className="day-summary__date">{day.dateLabel}</p>
      <h1>{day.title}</h1>
      <p className="day-summary__note">{day.note}</p>
    </header>
  );
}