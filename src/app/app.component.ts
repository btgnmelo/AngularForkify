import { Component, ViewEncapsulation, HostListener, OnInit } from '@angular/core';
import { RecipeServices } from './recipe/recipesearch.services';
import { LikeServices } from './recipe/likes.services';
import { HttpClient } from '@angular/common/http';
import { RecipeSearch, Recipe, Ingredient } from './recipe/recipe.model';
import { ShoppingListServices, Shopping } from './shopping-list/shopping-list.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeServices, LikeServices, HttpClient]
  
})
export class AppComponent implements OnInit {
  
  public searchResult: RecipeSearch[] = [];
  public isSearching: boolean = false;
  public isRecipeLoading: boolean = false;
  public selectedRecipeId: string;
  public recipeDetails: Recipe;
  public noRecipe: boolean = false;
  public likes: RecipeSearch[];
  public shoppingList: Shopping[];
 
  constructor(private recipeServices: RecipeServices, private likeServices: LikeServices, private shoppingListServices: ShoppingListServices) {
    this.likeServices.OnLikeUpdated.subscribe(() => {
      this.likes = this.likeServices.getLikes();
    });

    this.shoppingListServices.onShoppingItemUpdated.subscribe(() => {
      this.shoppingList = this.shoppingListServices.getList();
    })
    
  };

  ngOnInit() {
    this.likes = this.likeServices.getLikes();
    this.shoppingList = this.shoppingListServices.getList();
  }

  public onSearch(searchKey: string): void {

    this.isSearching = true;
    this.recipeServices.searchRecipe(searchKey)
      .subscribe(result => {
        this.searchResult = result.recipes;
        this.isSearching = false;
        this.noRecipe = false;
      },
      error => {
        if (error.status === 400) {
          this.noRecipe = true;
          console.log('error is true');
        }
        this.isSearching = false;
        this.searchResult = [];
      });
  }
  @HostListener('window:load', ['$event']) 
  @HostListener('window:hashchange', ['$event'])

  onHashChange() {
    const id = window.location.hash.replace('#', '');
    this.selectedRecipeId = id;
    this.getRecipeDetails(id);
  }

  private getRecipeDetails(recipeId: string): void{

    this.isRecipeLoading = true;
    this.recipeServices.getRecipe(recipeId)
      .subscribe(result => {
        const recipe = result.recipe;
        this.recipeDetails = {
            recipe_id: recipe.recipe_id,
            image_url: recipe.image_url,
            ingredients: this.parseIngredient(recipe.ingredients),
            preparetion_time: 1,
            title: recipe.title,
            serving: 4,
            publisher: recipe.publisher,
            publisher_url: recipe.publisher_url,
            isLike: this.likeServices.isLiked(recipe.recipe_id)
        }
        this.recipeDetails.preparetion_time = this.calcTime(this.recipeDetails.ingredients);
        this.isRecipeLoading = false;
      },
      error => {
        console.log(error.message);
        this.isRecipeLoading = false;
      })



  }

  private parseIngredient(ingredients: string[]): Ingredient[] {
    
    
    const newIngredients = ingredients.map(el => {
 
      const unitsLong = ['tablespoons', 'tablesppon', 'ounces', 'ounce','teaspoons', 'teaspoon', 'cups', 'pounds'];
      const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];

      let ingredient = el.toLowerCase();
      unitsLong.forEach((unit, i) => {
          ingredient = ingredient.replace(unit, unitsShort[i]);
      });

      // Remove parenthesis
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

      // Parse ingredients into unit and ingredient
      const arrIng = ingredient.split(' ');
      const unitIndex = arrIng.findIndex(ing => unitsShort.includes(ing));

      let objIng: Ingredient;
      if (unitIndex > -1) {

          const arrUnitNum = arrIng.slice(0, unitIndex);
          let unitNum;

          if (parseInt(arrUnitNum[0]) === 1) {
              unitNum = eval(arrUnitNum[0]);

          } else {
              unitNum = eval(arrUnitNum.join('+')); 
          };

          objIng = {
              count: unitNum,
              unit: arrIng[unitIndex],
              ingredient: arrIng.slice(unitIndex + 1).join(' ')
          };
      } else if (parseInt(arrIng[0], 10)) {

          objIng = {
              count: eval(arrIng[0]), 
              unit: '', 
              ingredient: arrIng.slice(1).join(' '),
          };

      } else if (unitIndex === -1) {

          objIng = {
              count: 1, 
              unit: '', 
              ingredient
          };
      }


      return objIng;
    });

    return newIngredients;
  }

  private calcTime(ingredients: Ingredient[]) :number{
    const numIng = ingredients.length;
    const periods = Math.ceil(numIng / 3);

    return periods * 15;
  }


  

 

}
