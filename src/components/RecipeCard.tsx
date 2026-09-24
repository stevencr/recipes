import type { Recipe } from '../types';

type Props = { recipe: Recipe };

export function RecipeCard({ recipe }: Props) {
  return (
    <article className="recipe-card">
      <div className="recipe-card__header">
        <span className="recipe-card__meal">{recipe.meal}</span>
        <span className="recipe-card__time">{recipe.prepMinutes + recipe.cookMinutes} min</span>
      </div>
      <h2>{recipe.title}</h2>
      <p className="recipe-card__description">{recipe.description}</p>

      <div className="recipe-card__meta">
        <span>Prep {recipe.prepMinutes}m</span>
        <span>Cook {recipe.cookMinutes}m</span>
        <span>{recipe.servings} serving{recipe.servings === 1 ? '' : 's'}</span>
      </div>

      <div className="recipe-card__details">
        <section>
          <h3>Ingredients</h3>
          <ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h3>Method</h3>
          <ol>{recipe.method.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
      </div>
    </article>
  );
}