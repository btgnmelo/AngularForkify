import { Component, OnInit } from '@angular/core';
import { RecipeServices } from '../../recipe.services';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public selectedResultId: number;
  public searchResults= [];

  constructor(private recipeServices: RecipeServices) { 
    recipeServices.onRecipeSelected.subscribe((id: number)=> {
      this.selectedResultId = id;
    });
  }

  ngOnInit(): void {
    this.searchResults = this.recipeServices.getRecipes();
  }

}
