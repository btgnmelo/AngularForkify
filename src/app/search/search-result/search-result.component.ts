import { Component, OnInit } from '@angular/core';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
  
})
export class SearchResultComponent implements OnInit {

  public recipes = [];
  public selectedRecipeId: number;

  constructor(private recipeServices: RecipeServices) {
    recipeServices.onHashChanged.subscribe((id: number)=> {
      this.selectedRecipeId = id;
    });
   }

  ngOnInit(): void {
      this.recipes = this.recipeServices.getRecipes();
  }

 /*  selectRecipe(id:number): void {
    this.selectedRecipeId = id;
  } */

}
