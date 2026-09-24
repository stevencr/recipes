import type { RecipeDay } from '../types';
import { DaySummary } from '../components/DaySummary';
import { RecipeCard } from '../components/RecipeCard';

type Props = { day: RecipeDay };

export function DayPage({ day }: Props) {
  return (
    <div className="day-page">
      <DaySummary day={day} />
      <section className="meal-list" aria-label="Today's recipes">
        {day.recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </section>
    </div>
  );
}