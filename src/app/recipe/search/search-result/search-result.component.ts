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
  public results = [];

  public resultPerPage: number = 10;
  public currentPage: number = 1;
  public maxPage: number = 3;

  constructor(private recipeServices: RecipeServices) { 
    recipeServices.onRecipeSelected.subscribe((id: number)=> {
      this.selectedResultId = id;
    });
  }

  ngOnInit(): void {
    this.results = this.recipeServices.getRecipes();
    this.renderResultPerPage();
  }

  private renderResultPerPage() {
      const start = (this.currentPage - 1) * this.resultPerPage;
      const end = this.currentPage * this.resultPerPage;

      this.searchResults = this.results.slice(start, end);
  }

  gotoPage(direction: string) {
 
    if (direction === 'prev'){
      if(this.currentPage > 1) {       
        this.currentPage--;
      }
    }else if(direction === 'next') {
      if(this.currentPage < this.maxPage) {       
        this.currentPage++;
      }
    }
    this.renderResultPerPage();
  }

}
