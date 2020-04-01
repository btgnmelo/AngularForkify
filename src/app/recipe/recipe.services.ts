import { OnInit, Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeServices  {
    private recipes = [
        {
          id:23456,
          title:'Pasta with Tomato ...',
          publisher:'The Pioneer Woman',
          url: '',
          img: '../assets/img/test-1.jpg',
          ingredients: []
        },
        {
          id:76767,
          title:'Pasta Salad with ...',
          publisher:'Spicy Perspective',
          url: '',
          img: '../assets/img/test-2.jpg',
          ingredients: []
        },
        {
          id:85354,
          title:'Homemade Tomato ...',
          publisher:'All Recipes',
          url: '',
          img: '../assets/img/test-3.jpg',
          ingredients: []
        },
        {
          id:43563,
          title:'Pasta with Tomato ...',
          publisher:'The Pioneer Woman',
          url: '',
          img: '../assets/img/test-4.jpg',
          ingredients: []
        },
        {
          id:2256665,
          title:'Greek Pasta with ...',
          publisher:'Chow',
          url: '',
          img: '../assets/img/test-5.jpg',
          ingredients: []
        },
    ]

    constructor(){} 

    public onRecipeSelected = new EventEmitter<number>();

    getRecipes() {
        return this.recipes.slice();
    }
}