import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { LikeListComponent } from './recipe/likes/like-list/like-list.component';
import { SearchResultComponent } from './recipe/search/search-result/search-result.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details/recipe-details.component';
import { LimitTitlePipe } from './recipe/search/limit-title.pipe';
import { SearchFormComponent } from './recipe/search/search-form/search-form.component';

import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth-interceptor.service';
import { LoaderComponent } from './loader/loader.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';




@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    LikeListComponent,
    SearchResultComponent,
    RecipeDetailsComponent,
    LimitTitlePipe,
    SearchFormComponent,
    LoaderComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
