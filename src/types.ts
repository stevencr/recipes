export type MealType = 'Breakfast' | 'Lunch' | 'Dinner';

export type Recipe = {
  id: string;
  meal: MealType;
  title: string;
  description: string;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  ingredients: string[];
  method: string[];
};

export type RecipeDay = {
  id: string;
  dateLabel: string;
  title: string;
  note: string;
  recipes: Recipe[];
};