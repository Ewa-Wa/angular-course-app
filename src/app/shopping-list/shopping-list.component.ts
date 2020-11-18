import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnChanges {
  ingredients: Ingredient[] = [
  new Ingredient('Apples', 1),
  new Ingredient('Tomatoes', 2)
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
  console.log('ngOnChanges called!');
  }

  ngOnInit(): void {
  console.log('ngOnInit called!');
  }
  onIngredientAdded(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  }

}
