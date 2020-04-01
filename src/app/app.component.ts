import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { RecipeServices } from './recipe/recipe.services';
import { LikeServices } from './recipe/likes.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeServices, LikeServices]
  
})
export class AppComponent {
  constructor(private recipeServices: RecipeServices) {};

  @HostListener('window:hashchange', ['$event'])
  @HostListener('window:load', ['$event'])
  hasChange() {
    const id = parseInt(window.location.hash.replace('#', ''));
    this.recipeServices.onRecipeSelected.emit(id);
  }
}
