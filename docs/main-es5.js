function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _recipe_recipesearch_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recipe/recipesearch.services */
    "./src/app/recipe/recipesearch.services.ts");
    /* harmony import */


    var _recipe_likes_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./recipe/likes.services */
    "./src/app/recipe/likes.services.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shopping_list_shopping_list_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shopping-list/shopping-list.services */
    "./src/app/shopping-list/shopping-list.services.ts");
    /* harmony import */


    var _recipe_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recipe/search/search-form/search-form.component */
    "./src/app/recipe/search/search-form/search-form.component.ts");
    /* harmony import */


    var _recipe_likes_like_list_like_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recipe/likes/like-list/like-list.component */
    "./src/app/recipe/likes/like-list/like-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shopping_list_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shopping-list/shopping-list/shopping-list.component */
    "./src/app/shopping-list/shopping-list/shopping-list.component.ts");
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/loader/loader.component.ts");
    /* harmony import */


    var _recipe_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./recipe/search/search-result/search-result.component */
    "./src/app/recipe/search/search-result/search-result.component.ts");
    /* harmony import */


    var _recipe_recipe_details_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./recipe/recipe-details/recipe-details/recipe-details.component */
    "./src/app/recipe/recipe-details/recipe-details/recipe-details.component.ts");

    function AppComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Searched recipe is not yet available.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_app_loader_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 17);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", "Searching recipe");
      }
    }

    function AppComponent_app_search_result_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-result", 18);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipes", ctx_r2.searchResult)("selectedRecipeId", ctx_r2.selectedRecipeId);
      }
    }

    function AppComponent_app_loader_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 17);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", "Loading Recipe");
      }
    }

    function AppComponent_app_recipe_details_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipe-details", 19);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", ctx_r4.recipeDetails);
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(recipeServices, likeServices, shoppingListServices) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.recipeServices = recipeServices;
        this.likeServices = likeServices;
        this.shoppingListServices = shoppingListServices;
        this.searchResult = [];
        this.isSearching = false;
        this.isRecipeLoading = false;
        this.noRecipe = false;
        this.likeServices.OnLikeUpdated.subscribe(function () {
          _this.likes = _this.likeServices.getLikes();
        });
        this.shoppingListServices.onShoppingItemUpdated.subscribe(function () {
          _this.shoppingList = _this.shoppingListServices.getList();
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.likes = this.likeServices.getLikes();
          this.shoppingList = this.shoppingListServices.getList();
        }
      }, {
        key: "onSearch",
        value: function onSearch(searchKey) {
          var _this2 = this;

          this.isSearching = true;
          this.recipeServices.searchRecipe(searchKey).subscribe(function (result) {
            _this2.searchResult = result.recipes;
            _this2.isSearching = false;
            _this2.noRecipe = false;
          }, function (error) {
            if (error.status === 400) {
              _this2.noRecipe = true;
              console.log('error is true');
            }

            _this2.isSearching = false;
            _this2.searchResult = [];
          });
        }
      }, {
        key: "onHashChange",
        value: function onHashChange() {
          var id = window.location.hash.replace('#', '');
          this.selectedRecipeId = id;
          this.getRecipeDetails(id);
        }
      }, {
        key: "getRecipeDetails",
        value: function getRecipeDetails(recipeId) {
          var _this3 = this;

          this.isRecipeLoading = true;
          this.recipeServices.getRecipe(recipeId).subscribe(function (result) {
            var recipe = result.recipe;
            _this3.recipeDetails = {
              recipe_id: recipe.recipe_id,
              image_url: recipe.image_url,
              ingredients: _this3.parseIngredient(recipe.ingredients),
              preparetion_time: 1,
              title: recipe.title,
              serving: 4,
              publisher: recipe.publisher,
              publisher_url: recipe.publisher_url,
              isLike: _this3.likeServices.isLiked(recipe.recipe_id)
            };
            _this3.recipeDetails.preparetion_time = _this3.calcTime(_this3.recipeDetails.ingredients);
            _this3.isRecipeLoading = false;
          }, function (error) {
            console.log(error.message);
            _this3.isRecipeLoading = false;
          });
        }
      }, {
        key: "parseIngredient",
        value: function parseIngredient(ingredients) {
          var newIngredients = ingredients.map(function (el) {
            var unitsLong = ['tablespoons', 'tablesppon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
            var unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
            var ingredient = el.toLowerCase();
            unitsLong.forEach(function (unit, i) {
              ingredient = ingredient.replace(unit, unitsShort[i]);
            }); // Remove parenthesis

            ingredient = ingredient.replace(/ *\([^)]*\) */g, " "); // Parse ingredients into unit and ingredient

            var arrIng = ingredient.split(' ');
            var unitIndex = arrIng.findIndex(function (ing) {
              return unitsShort.includes(ing);
            });
            var objIng;

            if (unitIndex > -1) {
              var arrUnitNum = arrIng.slice(0, unitIndex);
              var unitNum;

              if (parseInt(arrUnitNum[0]) === 1) {
                unitNum = eval(arrUnitNum[0]);
              } else {
                unitNum = eval(arrUnitNum.join('+'));
              }

              ;
              objIng = {
                count: unitNum,
                unit: arrIng[unitIndex],
                ingredient: arrIng.slice(unitIndex + 1).join(' ')
              };
            } else if (parseInt(arrIng[0], 10)) {
              objIng = {
                count: eval(arrIng[0]),
                unit: '',
                ingredient: arrIng.slice(1).join(' ')
              };
            } else if (unitIndex === -1) {
              objIng = {
                count: 1,
                unit: '',
                ingredient: ingredient
              };
            }

            return objIng;
          });
          return newIngredients;
        }
      }, {
        key: "calcTime",
        value: function calcTime(ingredients) {
          var numIng = ingredients.length;
          var periods = Math.ceil(numIng / 3);
          return periods * 15;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipe_recipesearch_services__WEBPACK_IMPORTED_MODULE_1__["RecipeServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipe_likes_services__WEBPACK_IMPORTED_MODULE_2__["LikeServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_shopping_list_services__WEBPACK_IMPORTED_MODULE_4__["ShoppingListServices"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function AppComponent_load_HostBindingHandler($event) {
            return ctx.onHashChange($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("hashchange", function AppComponent_hashchange_HostBindingHandler($event) {
            return ctx.onHashChange($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_recipe_recipesearch_services__WEBPACK_IMPORTED_MODULE_1__["RecipeServices"], _recipe_likes_services__WEBPACK_IMPORTED_MODULE_2__["LikeServices"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])],
      decls: 20,
      vars: 7,
      consts: [[1, "container"], [1, "header"], ["src", "../assets/img/logo.png", "alt", "Logo", 1, "header__logo"], [3, "search"], [1, "likes"], [3, "likes"], [1, "results"], [4, "ngIf"], [3, "message", 4, "ngIf"], [3, "recipes", "selectedRecipeId", 4, "ngIf"], [1, "recipe"], [3, "recipe", 4, "ngIf"], [1, "shopping"], [3, "shoppingList"], [1, "copyright"], ["href", "http://food2fork.com", "target", "_blank", 1, "link"], [1, "heading-2"], [3, "message"], [3, "recipes", "selectedRecipeId"], [3, "recipe"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-search-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function AppComponent_Template_app_search_form_search_3_listener($event) {
            return ctx.onSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-like-list", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 3, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_loader_8_Template, 1, 1, "app-loader", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_app_search_result_9_Template, 1, 2, "app-search-result", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_app_loader_11_Template, 1, 1, "app-loader", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_app_recipe_details_12_Template, 1, 1, "app-recipe-details", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-shopping-list", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \xA9 by Jonas Schmedtmann. Powered by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Food2Fork.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("likes", ctx.likes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noRecipe && !ctx.isSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSearching && ctx.searchResult.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRecipeLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRecipeLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("shoppingList", ctx.shoppingList);
        }
      },
      directives: [_recipe_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"], _recipe_likes_like_list_like_list_component__WEBPACK_IMPORTED_MODULE_6__["LikeListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shopping_list_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingListComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"], _recipe_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__["SearchResultComponent"], _recipe_recipe_details_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_11__["RecipeDetailsComponent"]],
      styles: [".results[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    top: 100px;\r\n    text-align: center;\r\n    color:#f59b85;\r\n}\r\n\r\n.recipe[_ngcontent-%COMP%]   app-loader[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top:200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0cyBkaXYge1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiNmNTliODU7XHJcbn1cclxuXHJcbi5yZWNpcGUgYXBwLWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6MjAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          providers: [_recipe_recipesearch_services__WEBPACK_IMPORTED_MODULE_1__["RecipeServices"], _recipe_likes_services__WEBPACK_IMPORTED_MODULE_2__["LikeServices"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        }]
      }], function () {
        return [{
          type: _recipe_recipesearch_services__WEBPACK_IMPORTED_MODULE_1__["RecipeServices"]
        }, {
          type: _recipe_likes_services__WEBPACK_IMPORTED_MODULE_2__["LikeServices"]
        }, {
          type: _shopping_list_shopping_list_services__WEBPACK_IMPORTED_MODULE_4__["ShoppingListServices"]
        }];
      }, {
        onHashChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:load', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:hashchange', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _recipe_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recipe/recipe-list/recipe-list.component */
    "./src/app/recipe/recipe-list/recipe-list.component.ts");
    /* harmony import */


    var _recipe_likes_like_list_like_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recipe/likes/like-list/like-list.component */
    "./src/app/recipe/likes/like-list/like-list.component.ts");
    /* harmony import */


    var _recipe_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./recipe/search/search-result/search-result.component */
    "./src/app/recipe/search/search-result/search-result.component.ts");
    /* harmony import */


    var _recipe_recipe_details_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./recipe/recipe-details/recipe-details/recipe-details.component */
    "./src/app/recipe/recipe-details/recipe-details/recipe-details.component.ts");
    /* harmony import */


    var _recipe_search_limit_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./recipe/search/limit-title.pipe */
    "./src/app/recipe/search/limit-title.pipe.ts");
    /* harmony import */


    var _recipe_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./recipe/search/search-form/search-form.component */
    "./src/app/recipe/search/search-form/search-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _interceptor_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./interceptor/auth-interceptor.service */
    "./src/app/interceptor/auth-interceptor.service.ts");
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/loader/loader.component.ts");
    /* harmony import */


    var _shopping_list_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shopping-list/shopping-list/shopping-list.component */
    "./src/app/shopping-list/shopping-list/shopping-list.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _recipe_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], _recipe_likes_like_list_like_list_component__WEBPACK_IMPORTED_MODULE_6__["LikeListComponent"], _recipe_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultComponent"], _recipe_recipe_details_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailsComponent"], _recipe_search_limit_title_pipe__WEBPACK_IMPORTED_MODULE_9__["LimitTitlePipe"], _recipe_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__["SearchFormComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"], _shopping_list_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_14__["ShoppingListComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _recipe_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], _recipe_likes_like_list_like_list_component__WEBPACK_IMPORTED_MODULE_6__["LikeListComponent"], _recipe_search_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultComponent"], _recipe_recipe_details_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailsComponent"], _recipe_search_limit_title_pipe__WEBPACK_IMPORTED_MODULE_9__["LimitTitlePipe"], _recipe_search_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__["SearchFormComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"], _shopping_list_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_14__["ShoppingListComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _interceptor_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptor/auth-interceptor.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/interceptor/auth-interceptor.service.ts ***!
    \*********************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppInterceptorAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor() {
        _classCallCheck(this, AuthInterceptor);
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          return next.handle(req);
        }
      }]);

      return AuthInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/loader/loader.component.ts":
  /*!********************************************!*\
    !*** ./src/app/loader/loader.component.ts ***!
    \********************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)();
    };

    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      inputs: {
        message: "message"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "loader"], ["href", "../assets/img/icons.svg#icon-cw"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "use", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.message, "...");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loader',
          templateUrl: './loader.component.html',
          styleUrls: ['./loader.component.css']
        }]
      }], function () {
        return [];
      }, {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/recipe/likes.services.ts":
  /*!******************************************!*\
    !*** ./src/app/recipe/likes.services.ts ***!
    \******************************************/

  /*! exports provided: LikeServices */

  /***/
  function srcAppRecipeLikesServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LikeServices", function () {
      return LikeServices;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LikeServices =
    /*#__PURE__*/
    function () {
      function LikeServices() {
        _classCallCheck(this, LikeServices);

        this.OnLikeUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.likes = [];
      }

      _createClass(LikeServices, [{
        key: "getLikes",
        value: function getLikes() {
          this.getFromStorage();
          return this.likes.slice();
        }
      }, {
        key: "addLike",
        value: function addLike(like) {
          this.likes.push(like);
          this.setToStorage();
          this.OnLikeUpdated.emit();
        }
      }, {
        key: "deleteLike",
        value: function deleteLike(id) {
          var index = this.likes.findIndex(function (el) {
            return el.recipe_id === id;
          });
          this.likes.splice(index, 1);
          this.setToStorage();
          this.OnLikeUpdated.emit();
        }
      }, {
        key: "isLiked",
        value: function isLiked(id) {
          return this.likes.findIndex(function (el) {
            return el.recipe_id === id;
          }) !== -1;
        }
      }, {
        key: "getNumLikes",
        value: function getNumLikes() {
          return this.likes.length;
        }
      }, {
        key: "getFromStorage",
        value: function getFromStorage() {
          var storage = window.localStorage.getItem('likes');
          if (storage) this.likes = JSON.parse(storage);
        }
      }, {
        key: "setToStorage",
        value: function setToStorage() {
          window.localStorage.setItem('likes', JSON.stringify(this.likes));
        }
      }]);

      return LikeServices;
    }();
    /***/

  },

  /***/
  "./src/app/recipe/likes/like-list/like-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/recipe/likes/like-list/like-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: LikeListComponent */

  /***/
  function srcAppRecipeLikesLikeListLikeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LikeListComponent", function () {
      return LikeListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../recipe-list/recipe-list.component */
    "./src/app/recipe/recipe-list/recipe-list.component.ts");

    var LikeListComponent =
    /*#__PURE__*/
    function () {
      function LikeListComponent() {
        _classCallCheck(this, LikeListComponent);
      }

      _createClass(LikeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LikeListComponent;
    }();

    LikeListComponent.ɵfac = function LikeListComponent_Factory(t) {
      return new (t || LikeListComponent)();
    };

    LikeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LikeListComponent,
      selectors: [["app-like-list"]],
      inputs: {
        likes: "likes"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "likes__field"], [1, "likes__icon"], ["href", "../assets/img/icons.svg#icon-heart"], [1, "likes__panel"], [3, "recipes"]],
      template: function LikeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "use", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-recipe-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipes", ctx.likes);
        }
      },
      directives: [_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__["RecipeListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9saWtlcy9saWtlLWxpc3QvbGlrZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-like-list',
          templateUrl: './like-list.component.html',
          styleUrls: ['./like-list.component.css']
        }]
      }], function () {
        return [];
      }, {
        likes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/recipe/recipe-details/recipe-details/recipe-details.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/recipe/recipe-details/recipe-details/recipe-details.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: RecipeDetailsComponent */

  /***/
  function srcAppRecipeRecipeDetailsRecipeDetailsRecipeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeDetailsComponent", function () {
      return RecipeDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _likes_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../likes.services */
    "./src/app/recipe/likes.services.ts");
    /* harmony import */


    var src_app_shopping_list_shopping_list_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shopping-list/shopping-list.services */
    "./src/app/shopping-list/shopping-list.services.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RecipeDetailsComponent_div_0__svg_svg_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecipeDetailsComponent_div_0__svg_svg_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecipeDetailsComponent_div_0_li_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "use", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ingredient_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r11.count % 1 !== 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, ingredient_r11.count, "1.2-2") : ingredient_r11.count);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r11.unit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ingredient_r11.ingredient, " ");
      }
    }

    function RecipeDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " minutes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "use", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " servings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailsComponent_div_0_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onDecreaseServing();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "use", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailsComponent_div_0_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onIncreaseServing();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "use", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailsComponent_div_0_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onLike();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RecipeDetailsComponent_div_0__svg_svg_29_Template, 2, 0, "svg", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RecipeDetailsComponent_div_0__svg_svg_30_Template, 2, 0, "svg", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RecipeDetailsComponent_div_0_li_33_Template, 10, 6, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailsComponent_div_0_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.onShoppingListAdd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "use", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Add to shopping list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "How to cook it");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " This recipe was carefully designed and tested by ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ". Please check out directions at their website. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Directions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "use", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.recipe.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.recipe.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.recipe.preparetion_time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.recipe.serving);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.recipe.isLike);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.recipe.isLike);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.recipe.ingredients);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.recipe.publisher);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r7.recipe.publisher_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var RecipeDetailsComponent =
    /*#__PURE__*/
    function () {
      function RecipeDetailsComponent(likeServices, shoppingListServices) {
        _classCallCheck(this, RecipeDetailsComponent);

        this.likeServices = likeServices;
        this.shoppingListServices = shoppingListServices;
      }

      _createClass(RecipeDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onIncreaseServing",
        value: function onIncreaseServing() {
          var newServing = this.recipe.serving + 1;
          this.updateServings(newServing);
          this.recipe.serving = newServing;
        }
      }, {
        key: "onDecreaseServing",
        value: function onDecreaseServing() {
          if (this.recipe.serving > 1) {
            var newServing = this.recipe.serving - 1;
            this.updateServings(newServing);
            this.recipe.serving = newServing;
          }
        }
      }, {
        key: "onLike",
        value: function onLike() {
          if (this.recipe.isLike) {
            this.likeServices.deleteLike(this.recipe.recipe_id);
            this.recipe.isLike = false;
          } else {
            this.likeServices.addLike({
              recipe_id: this.recipe.recipe_id,
              title: this.recipe.title,
              publisher: this.recipe.publisher,
              image_url: this.recipe.image_url
            });
            this.recipe.isLike = true;
          }
        }
      }, {
        key: "onShoppingListAdd",
        value: function onShoppingListAdd() {
          var _this4 = this;

          var ingredients = this.recipe.ingredients.slice();
          ingredients.forEach(function (ing) {
            var newIng = ing;

            _this4.shoppingListServices.addShoppingItem(newIng);
          });
        }
      }, {
        key: "updateServings",
        value: function updateServings(newServing) {
          var _this5 = this;

          this.recipe.ingredients.forEach(function (ingredient) {
            ingredient.count *= newServing / _this5.recipe.serving;
          });
        }
      }]);

      return RecipeDetailsComponent;
    }();

    RecipeDetailsComponent.ɵfac = function RecipeDetailsComponent_Factory(t) {
      return new (t || RecipeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_likes_services__WEBPACK_IMPORTED_MODULE_1__["LikeServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shopping_list_shopping_list_services__WEBPACK_IMPORTED_MODULE_2__["ShoppingListServices"]));
    };

    RecipeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeDetailsComponent,
      selectors: [["app-recipe-details"]],
      inputs: {
        recipe: "recipe"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "recipe__fig"], ["alt", "Tomato", 1, "recipe__img", 3, "src"], [1, "recipe__title"], [1, "recipe__details"], [1, "recipe__info"], [1, "recipe__info-icon"], ["href", "../assets/img/icons.svg#icon-stopwatch"], [1, "recipe__info-data", "recipe__info-data--minutes"], [1, "recipe__info-text"], ["href", "../assets/img/icons.svg#icon-man"], [1, "recipe__info-data", "recipe__info-data--people"], [1, "recipe__info-buttons"], [1, "btn-tiny", 3, "click"], ["href", "../assets/img/icons.svg#icon-circle-with-minus"], ["href", "../assets/img/icons.svg#icon-circle-with-plus"], [1, "recipe__love", 3, "click"], ["class", "header__likes", 4, "ngIf"], [1, "recipe__ingredients"], [1, "recipe__ingredient-list"], ["class", "recipe__item", 4, "ngFor", "ngForOf"], [1, "btn-small", "recipe__btn", 3, "click"], [1, "search__icon"], ["href", "../assets/img/icons.svg#icon-shopping-cart"], [1, "recipe__directions"], [1, "heading-2"], [1, "recipe__directions-text"], [1, "recipe__by"], ["target", "_blank", 1, "btn-small", "recipe__btn", 3, "href"], ["href", "../assets/img/icons.svg#icon-triangle-right"], [1, "header__likes"], ["href", "../assets/img/icons.svg#icon-heart-outlined"], ["href", "../assets/img/icons.svg#icon-heart"], [1, "recipe__item"], [1, "recipe__icon"], ["href", "../assets/img/icons.svg#icon-check"], [1, "recipe__count"], [1, "recipe__ingredient"], [1, "recipe__unit"]],
      template: function RecipeDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecipeDetailsComponent_div_0_Template, 52, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recipe);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9yZWNpcGUtZGV0YWlscy9yZWNpcGUtZGV0YWlscy9yZWNpcGUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-details',
          templateUrl: './recipe-details.component.html',
          styleUrls: ['./recipe-details.component.css']
        }]
      }], function () {
        return [{
          type: _likes_services__WEBPACK_IMPORTED_MODULE_1__["LikeServices"]
        }, {
          type: src_app_shopping_list_shopping_list_services__WEBPACK_IMPORTED_MODULE_2__["ShoppingListServices"]
        }];
      }, {
        recipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/recipe/recipe-list/recipe-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/recipe/recipe-list/recipe-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: RecipeListComponent */

  /***/
  function srcAppRecipeRecipeListRecipeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function () {
      return RecipeListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_limit_title_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../search/limit-title.pipe */
    "./src/app/recipe/search/limit-title.pipe.ts");

    var _c0 = function _c0(a0) {
      return {
        "results__link--active": a0
      };
    };

    function RecipeListComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "limittitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r6 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", recipe_r6.recipe_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r5.selectedRecipeId === recipe_r6.recipe_id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", recipe_r6.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, recipe_r6.title));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r6.publisher);
      }
    }

    var RecipeListComponent =
    /*#__PURE__*/
    function () {
      function RecipeListComponent() {
        _classCallCheck(this, RecipeListComponent);
      }

      _createClass(RecipeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecipeListComponent;
    }();

    RecipeListComponent.ɵfac = function RecipeListComponent_Factory(t) {
      return new (t || RecipeListComponent)();
    };

    RecipeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeListComponent,
      selectors: [["app-recipe-list"]],
      inputs: {
        recipes: "recipes",
        selectedRecipeId: "selectedRecipeId"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "results__list"], [4, "ngFor", "ngForOf"], [1, "results__link", 3, "ngClass", "href"], [1, "results__fig"], ["alt", "Test", 3, "src"], [1, "results__data"], [1, "results__name"], [1, "results__author"]],
      template: function RecipeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipeListComponent_li_1_Template, 10, 9, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      pipes: [_search_limit_title_pipe__WEBPACK_IMPORTED_MODULE_2__["LimitTitlePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-list',
          templateUrl: './recipe-list.component.html',
          styleUrls: ['./recipe-list.component.css']
        }]
      }], function () {
        return [];
      }, {
        recipes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedRecipeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/recipe/recipesearch.services.ts":
  /*!*************************************************!*\
    !*** ./src/app/recipe/recipesearch.services.ts ***!
    \*************************************************/

  /*! exports provided: RecipeServices */

  /***/
  function srcAppRecipeRecipesearchServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeServices", function () {
      return RecipeServices;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RecipeServices =
    /*#__PURE__*/
    function () {
      function RecipeServices(http) {
        _classCallCheck(this, RecipeServices);

        this.http = http;
        this.newRecipe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(RecipeServices, [{
        key: "searchRecipe",
        value: function searchRecipe(recipeKey) {
          var apiendpoint = 'https://forkify-api.herokuapp.com/api/search';
          return this.http.get(apiendpoint, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('q', recipeKey)
          });
        }
      }, {
        key: "getRecipe",
        value: function getRecipe(recipeId) {
          var apiendpoint = 'https://forkify-api.herokuapp.com/api/get';
          return this.http.get(apiendpoint, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('rId', recipeId)
          });
        }
      }]);

      return RecipeServices;
    }();

    RecipeServices.ɵfac = function RecipeServices_Factory(t) {
      return new (t || RecipeServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RecipeServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecipeServices,
      factory: RecipeServices.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/recipe/search/limit-title.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/recipe/search/limit-title.pipe.ts ***!
    \***************************************************/

  /*! exports provided: LimitTitlePipe */

  /***/
  function srcAppRecipeSearchLimitTitlePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LimitTitlePipe", function () {
      return LimitTitlePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LimitTitlePipe =
    /*#__PURE__*/
    function () {
      function LimitTitlePipe() {
        _classCallCheck(this, LimitTitlePipe);
      }

      _createClass(LimitTitlePipe, [{
        key: "transform",
        value: function transform(title) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 17;
          var newTitle = [];

          if (title.length > limit) {
            title.split(' ').reduce(function (acc, cur) {
              if (acc + cur.length <= limit) {
                newTitle.push(cur);
              }

              return acc + cur.length;
            }, 0);
            return "".concat(newTitle.join(' '), "...");
          } else {
            return title;
          }
        }
      }]);

      return LimitTitlePipe;
    }();

    LimitTitlePipe.ɵfac = function LimitTitlePipe_Factory(t) {
      return new (t || LimitTitlePipe)();
    };

    LimitTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "limittitle",
      type: LimitTitlePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LimitTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'limittitle'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/recipe/search/search-form/search-form.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/recipe/search/search-form/search-form.component.ts ***!
    \********************************************************************/

  /*! exports provided: SearchFormComponent */

  /***/
  function srcAppRecipeSearchSearchFormSearchFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function () {
      return SearchFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _recipesearch_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../recipesearch.services */
    "./src/app/recipe/recipesearch.services.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SearchFormComponent =
    /*#__PURE__*/
    function () {
      function SearchFormComponent(recipeServices) {
        _classCallCheck(this, SearchFormComponent);

        this.recipeServices = recipeServices;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SearchFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSearch",
        value: function onSearch() {
          this.search.emit(this.searchKey);
        }
      }]);

      return SearchFormComponent;
    }();

    SearchFormComponent.ɵfac = function SearchFormComponent_Factory(t) {
      return new (t || SearchFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipesearch_services__WEBPACK_IMPORTED_MODULE_1__["RecipeServices"]));
    };

    SearchFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchFormComponent,
      selectors: [["app-search-form"]],
      outputs: {
        search: "search"
      },
      decls: 7,
      vars: 1,
      consts: [[1, "search"], ["type", "text", "name", "searchKey", "placeholder", "Search over 1,000,000 recipes...", 1, "search__field", 3, "ngModel", "ngModelChange"], [1, "btn", "search__btn", 3, "click"], [1, "search__icon"], ["href", "../assets/img/icons.svg#icon-magnifying-glass"]],
      template: function SearchFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchFormComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.searchKey = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchFormComponent_Template_button_click_2_listener() {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchKey);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9zZWFyY2gvc2VhcmNoLWZvcm0vc2VhcmNoLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-form',
          templateUrl: './search-form.component.html',
          styleUrls: ['./search-form.component.css']
        }]
      }], function () {
        return [{
          type: _recipesearch_services__WEBPACK_IMPORTED_MODULE_1__["RecipeServices"]
        }];
      }, {
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/recipe/search/search-result/search-result.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/recipe/search/search-result/search-result.component.ts ***!
    \************************************************************************/

  /*! exports provided: SearchResultComponent */

  /***/
  function srcAppRecipeSearchSearchResultSearchResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function () {
      return SearchResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _recipesearch_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../recipesearch.services */
    "./src/app/recipe/recipesearch.services.ts");
    /* harmony import */


    var _likes_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../likes.services */
    "./src/app/recipe/likes.services.ts");
    /* harmony import */


    var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../recipe-list/recipe-list.component */
    "./src/app/recipe/recipe-list/recipe-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var SearchResultComponent =
    /*#__PURE__*/
    function () {
      function SearchResultComponent(recipeServices, likeServices) {
        _classCallCheck(this, SearchResultComponent);

        this.recipeServices = recipeServices;
        this.likeServices = likeServices;
        this.recipes = [];
        this.selectedRecipeId = '';
        this.currentPage = 1;
        this.isLoading = false;
        this.resultperPage = 10;
      }

      _createClass(SearchResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotoPage",
        value: function gotoPage(direction) {
          if (direction === 'prev') {
            if (this.currentPage > 1) {
              this.currentPage--;
            }
          } else if (direction === 'next') {
            if (this.currentPage < this.maxPage) {
              this.currentPage++;
            }
          }

          this.renderResultPerPage();
        }
      }, {
        key: "renderResultPerPage",
        value: function renderResultPerPage() {
          var start = (this.currentPage - 1) * this.resultperPage;
          var end = this.currentPage * this.resultperPage;
          this.maxPage = this.recipes.length / this.resultperPage;
          return this.recipes.slice(start, end);
        }
      }]);

      return SearchResultComponent;
    }();

    SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) {
      return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipesearch_services__WEBPACK_IMPORTED_MODULE_1__["RecipeServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_likes_services__WEBPACK_IMPORTED_MODULE_2__["LikeServices"]));
    };

    SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchResultComponent,
      selectors: [["app-search-result"]],
      inputs: {
        recipes: "recipes",
        selectedRecipeId: "selectedRecipeId"
      },
      decls: 13,
      vars: 10,
      consts: [[3, "recipes", "selectedRecipeId"], [1, "results__pages"], [1, "btn-inline", "results__btn--prev", 3, "ngStyle", "click"], [1, "search__icon"], ["href", "../assets/img/icons.svg#icon-triangle-left"], [1, "btn-inline", "results__btn--next", 3, "ngStyle", "click"], ["href", "../assets/img/icons.svg#icon-triangle-right"]],
      template: function SearchResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchResultComponent_Template_button_click_3_listener() {
            return ctx.gotoPage("prev");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchResultComponent_Template_button_click_8_listener() {
            return ctx.gotoPage("next");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "use", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipes", ctx.renderResultPerPage())("selectedRecipeId", ctx.selectedRecipeId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.currentPage > 1 ? "block" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Page ", ctx.currentPage - 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.currentPage < ctx.maxPage ? "block" : "none"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Page ", ctx.currentPage + 1, "");
        }
      },
      directives: [_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_3__["RecipeListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      styles: [".no-recipe[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlL3NlYXJjaC9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9zZWFyY2gvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tcmVjaXBlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-result',
          templateUrl: './search-result.component.html',
          styleUrls: ['./search-result.component.css']
        }]
      }], function () {
        return [{
          type: _recipesearch_services__WEBPACK_IMPORTED_MODULE_1__["RecipeServices"]
        }, {
          type: _likes_services__WEBPACK_IMPORTED_MODULE_2__["LikeServices"]
        }];
      }, {
        recipes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedRecipeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shopping-list/shopping-list.services.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.services.ts ***!
    \*********************************************************/

  /*! exports provided: ShoppingListServices */

  /***/
  function srcAppShoppingListShoppingListServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingListServices", function () {
      return ShoppingListServices;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShoppingListServices =
    /*#__PURE__*/
    function () {
      function ShoppingListServices() {
        _classCallCheck(this, ShoppingListServices);

        this.list = [];
        this.onShoppingItemUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ShoppingListServices, [{
        key: "getList",
        value: function getList() {
          return this.list.slice();
        }
      }, {
        key: "addShoppingItem",
        value: function addShoppingItem(ingredient) {
          this.list.push({
            id: this.list.length + 1,
            Ingredient: {
              count: ingredient.count,
              unit: ingredient.unit,
              ingredient: ingredient.ingredient
            }
          });
          this.onShoppingItemUpdated.emit();
        }
      }, {
        key: "removeShoppingItem",
        value: function removeShoppingItem(id) {
          var itemInd = this.list.findIndex(function (el) {
            return el.id === id;
          });
          this.list.splice(itemInd, 1);
        }
      }, {
        key: "updateShoppingItemCount",
        value: function updateShoppingItemCount(id, newCount) {
          this.list.find(function (el) {
            return el.id === id;
          }).Ingredient.count = newCount;
        }
      }]);

      return ShoppingListServices;
    }();

    ShoppingListServices.ɵfac = function ShoppingListServices_Factory(t) {
      return new (t || ShoppingListServices)();
    };

    ShoppingListServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShoppingListServices,
      factory: ShoppingListServices.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shopping-list/shopping-list/shopping-list.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shopping-list/shopping-list/shopping-list.component.ts ***!
    \************************************************************************/

  /*! exports provided: ShoppingListComponent */

  /***/
  function srcAppShoppingListShoppingListShoppingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function () {
      return ShoppingListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shopping_list_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shopping-list.services */
    "./src/app/shopping-list/shopping-list.services.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ShoppingListComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShoppingListComponent_li_3_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var shoppingItem_r18 = ctx.$implicit;
          return shoppingItem_r18.Ingredient.count = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingListComponent_li_3_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var shoppingItem_r18 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.onRemoveItem(shoppingItem_r18.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var shoppingItem_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("step", shoppingItem_r18.Ingredient.count);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", shoppingItem_r18.Ingredient.count);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", shoppingItem_r18.Ingredient.unit, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shoppingItem_r18.Ingredient.ingredient);
      }
    }

    var ShoppingListComponent =
    /*#__PURE__*/
    function () {
      function ShoppingListComponent(shoppingListServices) {
        _classCallCheck(this, ShoppingListComponent);

        this.shoppingListServices = shoppingListServices;
        this.shoppingList = [];
      }

      _createClass(ShoppingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRemoveItem",
        value: function onRemoveItem(id) {
          var itemInd = this.shoppingList.findIndex(function (el) {
            return el.id === id;
          });
          this.shoppingList.splice(itemInd, 1);
          this.shoppingListServices.removeShoppingItem(id);
        }
      }, {
        key: "onItemCountChange",
        value: function onItemCountChange(id, newCount) {
          this.shoppingListServices.updateShoppingItemCount(id, newCount);
        }
      }]);

      return ShoppingListComponent;
    }();

    ShoppingListComponent.ɵfac = function ShoppingListComponent_Factory(t) {
      return new (t || ShoppingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_services__WEBPACK_IMPORTED_MODULE_1__["ShoppingListServices"]));
    };

    ShoppingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShoppingListComponent,
      selectors: [["app-shopping-list"]],
      inputs: {
        shoppingList: "shoppingList"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "heading-2"], [1, "shopping__list"], ["class", "shopping__item", 4, "ngFor", "ngForOf"], [1, "shopping__item"], [1, "shopping__count"], ["type", "number", 3, "ngModel", "step", "ngModelChange"], [1, "shopping__description"], [1, "shopping__delete", "btn-tiny", 3, "click"], ["href", "../assets/img/icons.svg#icon-circle-with-cross"]],
      template: function ShoppingListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Shopping List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShoppingListComponent_li_3_Template, 10, 4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shoppingList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shopping-list',
          templateUrl: './shopping-list.component.html',
          styleUrls: ['./shopping-list.component.css']
        }]
      }], function () {
        return [{
          type: _shopping_list_services__WEBPACK_IMPORTED_MODULE_1__["ShoppingListServices"]
        }];
      }, {
        shoppingList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Source codes\Web\Angular\Forkify\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map