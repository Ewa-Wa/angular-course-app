import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
  new Recipe(
  'Pumpkin cream',
  'Very creamy, delicious, vegan mniam',
  'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
  [
    new Ingredient('pumpkin', 1),
    new Ingredient('cream', 2)
  ]),
  new Recipe(
  'Steak',
  'Simply raw steak',
  'https://www.thespruceeats.com/thmb/kxu3tr3tIob-VCMNTKc5b7g2VFA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marinated-top-round-steak-3060302-hero-02-ed071d5d7e584bea82857112aa734a94.jpg',
  [
      new Ingredient('steak', 1),
      new Ingredient('butter', 1)
  ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
