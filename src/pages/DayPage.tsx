import { useState } from 'react';
import type { RecipeDay } from '../types';
import { DaySummary } from '../components/DaySummary';
import { RecipeCard } from '../components/RecipeCard';
import { ShoppingListModal } from '../components/ShoppingListModal';

type Props = { day: RecipeDay };

export function DayPage({ day }: Props) {
  const [shoppingOpen, setShoppingOpen] = useState(false);

  return (
    <div className="day-page">
      <DaySummary day={day} />
      <div className="day-actions">
        <button className="shopping-button" onClick={() => setShoppingOpen(true)}>
          <span aria-hidden="true">🛒</span>
          Shopping list
          <span className="shopping-button__count">{day.shoppingList.length}</span>
        </button>
      </div>
      <section className="meal-list" aria-label="Today's recipes">
        {day.recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </section>
      {shoppingOpen && (
        <ShoppingListModal items={day.shoppingList.map((item) => item.name)} onClose={() => setShoppingOpen(false)} />
      )}
    </div>
  );
}