import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public recipes: {id: number, title: string , publisher: string, url: string, img: string, ingredients: []}[];
  public selectedRecipeId: number;

  constructor() { }

  ngOnInit(): void {

    this.recipes = [
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
  }

  selectRecipe(id:number): void {
    this.selectedRecipeId = id;
  }

}
