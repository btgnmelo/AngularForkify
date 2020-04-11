import { Component, OnInit, Input, HostListener } from '@angular/core';
import { RecipeSearch, Recipe, Ingredient } from '../../recipe.model';
import { RecipeServices } from '../../recipesearch.services';
import { LikeServices } from '../../likes.services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() recipes: RecipeSearch[] = []; 
  @Input() selectedRecipeId: string = '';

  public currentPage: number = 1;
  public maxPage: number;
  public recipeDetails: Recipe;
  public isLoading: boolean = false;

  private resultperPage: number = 10;

  constructor(private recipeServices: RecipeServices, private likeServices: LikeServices) {}

  ngOnInit(): void {
  }

 

  public gotoPage(direction: string) {
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

  public renderResultPerPage() {
    const start = (this.currentPage - 1) * this.resultperPage;
    const end = this.currentPage * this.resultperPage;

    this.maxPage =  this.recipes.length/this.resultperPage;
    return this.recipes.slice(start, end);
  }

  

}
