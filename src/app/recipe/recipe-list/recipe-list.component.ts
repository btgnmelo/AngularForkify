import { Component, OnInit, Input } from '@angular/core';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
  
})
export class RecipeListComponent implements OnInit {

  @Input() public recipes = [];
  @Input() public selectedRecipeId: number;

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.recipes);
  }



}
