---
name: daily-recipes
description: Add and maintain breakfast, lunch and dinner recipe days in the Daily Recipes React app, including consolidated shopping lists, while preserving its existing architecture, styling, navigation and deployment workflow.
---

# Daily Recipes Skill

Use this skill whenever the user asks to add, update, remove or organise recipe days, meals or shopping-list content in this repository.

## Source of truth

Recipe content lives in `src/data/recipes.ts`.

For ordinary recipe-content changes, modify that file only. Do not put recipe data into React components.

## Recipe model

Each day is a `RecipeDay` with:

- `id`: unique `YYYY-MM-DD` value
- `dateLabel`: human-readable UK date
- `title`: short editorial title
- `note`: concise description of the day's menu
- exactly three `recipes`: Breakfast, Lunch and Dinner
- `shoppingList`: consolidated ingredients for the complete day

Each recipe contains:

- unique stable `id`
- `meal`
- `title`
- `description`
- `prepMinutes`
- `cookMinutes`
- `servings`
- `ingredients`
- ordered `method` steps

Each shopping item contains a unique stable `id` and a practical `name` including quantity where useful.

## Content rules

Create a coherent daily menu rather than three unrelated recipes.

Prefer:

- balanced everyday meals
- Mediterranean-inspired food
- fish regularly
- occasional curry or other international dishes
- ingredients readily available from a normal UK supermarket
- practical preparation and cooking times
- sensible portions
- variety across days

Avoid unnecessary specialist ingredients, excessive complexity, vague quantities, and repetitive main ingredients.

## Adding dates

When adding a specific date, add a complete `RecipeDay` object to `src/data/recipes.ts`.

When adding multiple days, add separate objects in chronological order.

If the user says “next two days” or similar, use the date supplied by the user or the current date available to the model. Never invent a date.

Do not alter existing days unless explicitly requested.

## Shopping list

The shopping list must cover every ingredient required by breakfast, lunch and dinner.

Consolidate duplicates where sensible and preserve useful supermarket quantities.

Keep the shopping list separate from recipe ingredients because it represents the day's combined buying list.

Do not include cooking instructions in shopping-list entries.

## Architecture

Preserve:

- React + TypeScript
- Vite
- HashRouter
- existing component structure
- light/dark theme system
- mobile-first responsive design
- GitHub Pages deployment

New recipe content should normally require changes only to `src/data/recipes.ts`.

Do not create one-off components for individual recipes or days.

The existing navigation derives its day entries from recipe data; do not manually add navigation items.

## Styling

The app uses the modern Google font **Manrope** throughout.

Do not reintroduce Playfair Display, Georgia as a primary display font, or other old-fashioned serif display fonts.

If styling changes are explicitly requested, use `src/styles.css` and preserve the established design system rather than adding one-off inline styles.

## Validation

Before finishing a recipe-content change:

1. Confirm every day has exactly Breakfast, Lunch and Dinner.
2. Confirm every day has a shopping list.
3. Confirm the shopping list covers all recipe ingredients.
4. Check for duplicate day, recipe and shopping-item IDs.
5. Run `npm run build`.
6. Do not change GitHub Actions unless explicitly requested.

## Git workflow

For normal recipe content:

- change `src/data/recipes.ts`
- use a clear commit such as `Add recipes for 25 September 2026`
- avoid unrelated changes

The existing Pages workflow deploys on pushes to `main`.

## Expected result

A new day should automatically appear in navigation, have its own route, render the three existing RecipeCards, expose the Shopping List modal, support both themes, work on mobile and desktop, and deploy through the existing workflow.
