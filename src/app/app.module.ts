import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { LikeListComponent } from './recipe/likes/like-list/like-list.component';
import { SearchResultComponent } from './recipe/search/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    LikeListComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
