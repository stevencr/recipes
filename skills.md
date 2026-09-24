# Daily Recipes — ChatGPT Skill

## Purpose

Use this repository as the source of truth for adding daily breakfast, lunch and dinner recipes to the app.

When asked to add recipes, update the existing React/TypeScript data model and preserve the established UI, architecture and styling. Do not create a different recipe format for individual days.

## Repository structure

- `src/data/recipes.ts` — all daily recipe content
- `src/types.ts` — TypeScript models for recipes, days and shopping items
- `src/pages/DayPage.tsx` — day-level page composition
- `src/components/RecipeCard.tsx` — reusable recipe presentation
- `src/components/ShoppingListModal.tsx` — consolidated daily shopping list
- `src/components/DaySummary.tsx` — day heading and introduction
- `src/components/SiteNavigation.tsx` — day navigation
- `src/styles.css` — global responsive styling and light/dark themes
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Recipe format

Every day is a `RecipeDay`:

```ts
{
  id: 'YYYY-MM-DD',
  dateLabel: '24 September 2026',
  title: 'Short editorial title',
  note: 'A concise description of the day’s menu.',
  recipes: [
    {
      id: 'unique-recipe-id',
      meal: 'Breakfast',
      title: 'Recipe title',
      description: 'Short description.',
      prepMinutes: 10,
      cookMinutes: 5,
      servings: 1,
      ingredients: [
        'Ingredient · quantity',
        'Ingredient · quantity',
      ],
      method: [
        'First preparation step.',
        'Second preparation step.',
      ],
    },
    // Lunch
    // Dinner
  ],
  shoppingList: [
    {
      id: 'unique-shopping-item-id',
      name: 'Ingredient · quantity',
    },
  ],
}
```

## Rules for adding a day

1. Add exactly three recipes: Breakfast, Lunch and Dinner.
2. Use a unique day `id` in `YYYY-MM-DD` format.
3. Keep recipe IDs unique and stable.
4. Keep shopping-list item IDs unique and stable.
5. Include quantities in ingredients and shopping-list entries where practical.
6. The shopping list must cover every item required across all three recipes.
7. Consolidate duplicate ingredients into one shopping-list entry where sensible rather than repeating them.
8. Keep the shopping list practical for buying the day's food; it is deliberately separate from recipe ingredients.
9. Keep recipe ingredients and methods clear enough to cook from directly.
10. Do not change the TypeScript model unless the requested feature genuinely requires a new field.
11. Do not create a new component for an individual recipe or day.
12. Do not add images unless explicitly requested.
13. Preserve existing days unless the user explicitly asks to change or remove them.

## Content style

Recipes should feel like a coherent daily menu rather than three unrelated recipes.

Prefer:
- Balanced everyday meals
- Mediterranean-inspired dishes
- Fish regularly
- Occasional curry or other international dishes
- Straightforward ingredients available from a normal UK supermarket
- Practical preparation and cooking times
- Sensible portions
- Variety across days

Avoid:
- Needlessly specialist ingredients
- Excessively complicated methods
- Repeating the same main ingredients too frequently
- Vague quantities such as "some" or "a bit" when a useful quantity can be given

## Adding recipes

When asked to add recipes for a specific date, edit `src/data/recipes.ts` and add a complete `RecipeDay` object.

When asked for multiple future days, add each day as a separate object in the same array. Keep dates in chronological order.

If the user asks for "the next two days", interpret that relative to the date explicitly supplied by the user or the current date available to ChatGPT. Do not invent a date.

## Shopping list

The shopping list is displayed by the existing Shopping List modal.

For each day:
- Include all ingredients needed by breakfast, lunch and dinner.
- Combine duplicates where useful.
- Preserve useful supermarket quantities.
- Do not include recipe method instructions.
- Do not omit staples merely because they are likely to be in a cupboard unless the user specifically wants a "buy only" list.

## UI and architecture rules

The application is componentised. New recipe content should normally require changes only to `src/data/recipes.ts`.

Do not put recipe content directly into:
- `App.tsx`
- `DayPage.tsx`
- `RecipeCard.tsx`
- `ShoppingListModal.tsx`

The existing navigation automatically discovers days from the recipe data, so do not manually add a navigation item for a new day.

Maintain:
- React + TypeScript
- Vite
- HashRouter
- Existing component structure
- Existing light/dark theme system
- Mobile-first responsive design
- GitHub Pages deployment

## Typography and styling

The app uses the modern Google font **Manrope** throughout. Keep typography consistent with the existing design.

Do not reintroduce:
- Playfair Display
- Georgia as a primary display font
- Other old-fashioned serif display fonts

If styling changes are requested, update `src/styles.css` rather than introducing one-off inline styles.

## Validation

After adding recipes:

1. Check that every `RecipeDay` has exactly three meals.
2. Check that every day has a shopping list.
3. Check that shopping-list items cover all recipe ingredients.
4. Check for duplicate IDs.
5. Run the existing build command:
   `npm run build`
6. Do not change the GitHub Actions workflow unless specifically requested.

## Git workflow

For a normal recipe-content change:
- Change `src/data/recipes.ts`
- Commit with a clear message such as `Add recipes for 25 September 2026`
- Do not modify unrelated files.

The existing GitHub Pages workflow deploys on pushes to `main`, so a normal commit is sufficient to trigger deployment.

## Expected result

A new day should automatically:
- Appear in the navigation
- Have its own route
- Show breakfast, lunch and dinner using the existing RecipeCard
- Have a working Shopping List button
- Support light and dark themes
- Work on mobile and desktop
- Deploy through the existing GitHub Pages workflow
