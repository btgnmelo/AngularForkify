import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { RecipeServices } from './search/recipe.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeServices]
  
})
export class AppComponent {
  constructor(private recipeServices: RecipeServices) {};

  @HostListener('window:hashchange', ['$event'])
  hasChange() {
    const id = parseInt(window.location.hash.replace('#', ''));
    this.recipeServices.onHashChanged.emit(id);

  }
}
