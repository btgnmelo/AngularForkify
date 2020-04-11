import { Injectable, EventEmitter } from '@angular/core';
import { SearchResponse } from './search/searchresponse.model';
import {  HttpClient,  HttpParams } from '@angular/common/http';
import { RecipeSearch, RecipeResponse } from './recipe.model';


@Injectable()
export class RecipeServices {

    constructor(private http: HttpClient){} 

    public newRecipe = new EventEmitter();

    public searchRecipe(recipeKey: string) {
        const apiendpoint = 'https://forkify-api.herokuapp.com/api/search';

        return this.http
          .get<SearchResponse>(apiendpoint, {
            params: new HttpParams().set('q', recipeKey)
          });
    }

    public getRecipe(recipeId: string) {
      const apiendpoint = 'https://forkify-api.herokuapp.com/api/get';

      return this.http
        .get<RecipeResponse>(apiendpoint, {
          params: new HttpParams().set('rId', recipeId)
        });
      
    }

}