import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Classic Veg Burger',
      'A Classic Veg Burger - just awesome!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9uYeiMnxhRkmWvWWnEsKfspye-aZ_Suq1FA&usqp=CAU',
      [
        new Ingredient('cans black beans, rinsed and drained', 2),
        new Ingredient('medium yellow onion, chopped', 1/2),
        new Ingredient( 'Romaine lettuce leaves',4),
        new Ingredient('cloves garlic, minced',2),
        new Ingredient('plus 2 tbsp. mayonnaise',1/2),
        new Ingredient('bread crumbs',3/4),
        new Ingredient('Freshly ground black pepper',1/2),
        new Ingredient('kosher salt',1/2),
        new Ingredient('canola oil',2),
        new Ingredient('slices white cheddar',4),
        new Ingredient('ketchup',3),
        new Ingredient('Hamburger buns',4),
        new Ingredient('tomato, sliced',1),
        new Ingredient('Romaine lettuce leaves',4),
      ]),
    new Recipe('Cheesecake',
      'What else you need to say?',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4YiVYBWpY2pxH0Ifsv4kvr-3nxAVWT2Msw&usqp=CAU',
      [
        new Ingredient('Butter, for coating the pan', 1),
        new Ingredient('full-fat cream cheese', 2),
        new Ingredient('cup granulated sugar',1),
        new Ingredient('tablespoons all-purpose flour',2),
        new Ingredient('teaspoon salt',1/8),
        new Ingredient('cup sour cream',1/2),
        new Ingredient('teaspoon vanilla extract',1),
        new Ingredient('large eggs',3),
        new Ingredient('large egg yolk',1),
        new Ingredient('whole graham cracker rectangles (6 ounces)',12),
        new Ingredient('tablespoons unsalted butter',5),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
