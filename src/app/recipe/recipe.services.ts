import { OnInit, Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeServices {

    private recipes: Recipe[] = []
    public onRecipeSelected = new EventEmitter<number>();

    constructor(){
      this.recipes = [
        {
          id:23456,
          title:'Pasta with Tomato ...',
          publisher:'The Pioneer Woman',
          img: '../assets/img/test-1.jpg',
        },
        {
          id:76767,
          title:'Pasta Salad with ...',
          publisher:'Spicy Perspective',
          img: '../assets/img/test-2.jpg',
        },
        {
          id:85354,
          title:'Homemade Tomato Pasta...',
          publisher:'All Recipes',
          img: '../assets/img/test-3.jpg',
        },
        {
          id:43563,
          title:'Pasta with Tomato ...',
          publisher:'The Pioneer Woman',
          img: '../assets/img/test-4.jpg',
        },
        {
          id:2256665,
          title:'Greek Pasta with ...',
          publisher:'Chow',
          img: '../assets/img/test-5.jpg',
        },
      ]
    } 


    getRecipes() {
        return this.recipes.slice();
    }
}