# Daily Recipes

A small React + TypeScript recipe app for practical daily meal plans.

## Recipe content

Recipe days live in `src/data/recipes.ts`. Each day contains breakfast, lunch, dinner and a consolidated shopping list.

## AI agents

Before adding or changing recipes, read **`skills.md`**. It points to the source-of-truth agent skill at `skills/daily-recipes/SKILL.md`, which defines the recipe format, content rules, shopping-list requirements and validation steps.

Use that skill rather than inventing a different structure. Ordinary recipe content changes should normally only touch `src/data/recipes.ts`.

## Development

- Vite + React + TypeScript
- Mobile-first responsive UI
- GitHub Pages deployment
