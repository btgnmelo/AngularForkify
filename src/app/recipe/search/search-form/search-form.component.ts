import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeServices } from '../../recipesearch.services';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public searchKey: string;
  @Output() search = new EventEmitter<string>();

  constructor(private recipeServices: RecipeServices) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.search.emit(this.searchKey);
  }


}
