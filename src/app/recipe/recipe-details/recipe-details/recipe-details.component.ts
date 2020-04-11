import { Component, OnInit, Input } from '@angular/core';
import { RecipeServices } from '../../recipesearch.services';
import { Recipe } from '../../recipe.model';
import { LikeServices } from '../../likes.services';
import { ShoppingListServices } from 'src/app/shopping-list/shopping-list.services';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private likeServices: LikeServices, private shoppingListServices: ShoppingListServices) { 
  
  }

  ngOnInit(): void {
  }

  public onIncreaseServing(): void {
    const newServing = this.recipe.serving + 1;
    this.updateServings(newServing);
    this.recipe.serving = newServing;
  }

  public onDecreaseServing(): void {
    if (this.recipe.serving > 1) {
      const newServing = this.recipe.serving - 1;
      this.updateServings(newServing);
      this.recipe.serving = newServing;
    }
  }

  public onLike() {
    if (this.recipe.isLike) {
      this.likeServices.deleteLike(this.recipe.recipe_id);
      this.recipe.isLike = false;
    } else {
      this.likeServices.addLike({
        recipe_id: this.recipe.recipe_id,
        title: this.recipe.title,
        publisher: this.recipe.publisher,
        image_url: this.recipe.image_url,
      });
      this.recipe.isLike = true;
    }
  }
  
  public onShoppingListAdd() {
    const ingredients = this.recipe.ingredients.slice();

    ingredients.forEach(ing => {
      const newIng = ing;
      this.shoppingListServices.addShoppingItem(newIng);
    })
    
  }

  private updateServings(newServing: number) {

    this.recipe.ingredients.forEach((ingredient) => {
      ingredient.count *= (newServing / this.recipe.serving);
    })
  }





}
