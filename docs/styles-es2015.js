(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "* {\n    margin: 0;\n    padding: 0; }\n  \n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit; }\n  \n  html {\n    box-sizing: border-box;\n    font-size: 62.5%; }\n  \n  @media only screen and (max-width: 68.75em) {\n      html {\n        font-size: 50%; } }\n  \n  body {\n    font-family: 'Nunito Sans', sans-serif;\n    font-weight: 400;\n    line-height: 1.6;\n    color: #655A56;\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n    background-size: cover;\n    background-repeat: no-repeat;\n    min-height: calc(100vh - 2 * 4vw); }\n  \n  .container {\n    max-width: 120rem;\n    margin: 4vw auto;\n    background-color: #fff;\n    border-radius: 6px;\n    overflow: hidden;\n    box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);\n    display: grid;\n    grid-template-rows: 10rem minmax(100rem, auto);\n    grid-template-columns: 1.1fr 2fr 1.1fr;\n    grid-template-areas: \"head head head\" \"list recipe shopping\"; }\n  \n  @media only screen and (max-width: 68.75em) {\n      .container {\n        width: 100%;\n        margin: 0;\n        border-radius: 0; } }\n  \n  .btn, .btn-small, .btn-small:link, .btn-small:visited {\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n    border-radius: 10rem;\n    border: none;\n    text-transform: uppercase;\n    color: #fff;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    transition: all .2s; }\n  \n  .btn:hover, .btn-small:hover {\n      transform: scale(1.05); }\n  \n  .btn:focus, .btn-small:focus {\n      outline: none; }\n  \n  .btn > *:first-child, .btn-small > *:first-child {\n      margin-right: 1rem; }\n  \n  .btn {\n    padding: 1.3rem 3rem;\n    font-size: 1.4rem; }\n  \n  .btn svg {\n      height: 2.25rem;\n      width: 2.25rem;\n      fill: currentColor; }\n  \n  .btn-small, .btn-small:link, .btn-small:visited {\n    font-size: 1.3rem;\n    padding: 1rem 1.75rem;\n    text-decoration: none; }\n  \n  .btn-small svg, .btn-small:link svg, .btn-small:visited svg {\n      height: 1.5rem;\n      width: 1.5rem;\n      fill: currentColor; }\n  \n  .btn-inline {\n    color: #F59A83;\n    font-size: 1.2rem;\n    border: none;\n    background-color: #F9F5F3;\n    padding: .8rem 1.2rem;\n    border-radius: 10rem;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    transition: all .2s; }\n  \n  .btn-inline svg {\n      height: 1.5rem;\n      width: 1.5rem;\n      fill: currentColor;\n      margin: 0 .2rem; }\n  \n  .btn-inline span {\n      margin: 0 .4rem; }\n  \n  .btn-inline:hover {\n      color: #F48982;\n      background-color: #F2EFEE; }\n  \n  .btn-inline:focus {\n      outline: none; }\n  \n  .btn-tiny {\n    height: 1.75rem;\n    width: 1.75rem;\n    border: none;\n    background: none;\n    cursor: pointer; }\n  \n  .btn-tiny svg {\n      height: 100%;\n      width: 100%;\n      fill: #F59A83;\n      transition: all .3s; }\n  \n  .btn-tiny:focus {\n      outline: none; }\n  \n  .btn-tiny:hover svg {\n      fill: #F48982;\n      transform: translateY(-1px); }\n  \n  .btn-tiny:active svg {\n      fill: #F48982;\n      transform: translateY(0); }\n  \n  .btn-tiny:not(:last-child) {\n      margin-right: .3rem; }\n  \n  .heading-2 {\n    font-size: 1.8rem;\n    font-weight: 600;\n    color: #F59A83;\n    text-transform: uppercase;\n    margin-bottom: 2.5rem;\n    text-align: center;\n    transform: skewY(-3deg); }\n  \n  .copyright {\n    color: #968B87;\n    font-size: 1.2rem;\n    margin-top: auto; }\n  \n  .link:link,\n  .link:visited {\n    color: #968B87; }\n  \n  .loader {\n    margin: 5rem auto;\n    text-align: center; }\n  \n  .loader svg {\n      height: 5.5rem;\n      width: 5.5rem;\n      fill: #F59A83;\n      transform-origin: 44% 50%;\n      -webkit-animation: rotate 1.5s infinite linear;\n              animation: rotate 1.5s infinite linear; }\n  \n  @-webkit-keyframes rotate {\n    0% {\n      transform: rotate(0); }\n    100% {\n      transform: rotate(360deg); } }\n  \n  @keyframes rotate {\n    0% {\n      transform: rotate(0); }\n    100% {\n      transform: rotate(360deg); } }\n  \n  .header {\n    grid-area: head;\n    background-color: #F9F5F3;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  \n  .header__logo {\n      margin-left: 4rem;\n      height: 4.5rem;\n      display: block; }\n  \n  .search {\n    background-color: #fff;\n    border-radius: 10rem;\n    display: flex;\n    align-items: center;\n    padding-left: 3rem;\n    transition: all .3s; }\n  \n  .search:focus-within {\n      transform: translateY(-2px);\n      box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08); }\n  \n  .search__field {\n      border: none;\n      background: none;\n      font-family: inherit;\n      color: inherit;\n      font-size: 1.7rem;\n      width: 30rem; }\n  \n  .search__field:focus {\n        outline: none; }\n  \n  .search__field::-webkit-input-placeholder {\n        color: #DAD0CC; }\n  \n  .search__field::-moz-placeholder {\n        color: #DAD0CC; }\n  \n  .search__field::-ms-input-placeholder {\n        color: #DAD0CC; }\n  \n  .search__field::placeholder {\n        color: #DAD0CC; }\n  \n  .likes {\n    position: relative;\n    align-self: stretch;\n    padding: 0 !important; }\n  \n  .likes__field {\n      cursor: pointer;\n      padding: 0 4rem;\n      display: flex;\n      align-items: center;\n      height: 100%;\n      transition: all .3s; }\n  \n  .likes__field:hover {\n        background-color: #F2EFEE; }\n  \n  .likes__panel:hover,\n    .likes__field:hover + .likes__panel {\n      visibility: visible;\n      opacity: 1; }\n  \n  .likes__icon {\n      fill: #F59A83;\n      height: 3.75rem;\n      width: 3.75rem; }\n  \n  .likes__panel {\n      position: absolute;\n      right: 0;\n      top: 10rem;\n      z-index: 10;\n      padding: 2rem 0;\n      width: 34rem;\n      background-color: #fff;\n      box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);\n      visibility: hidden;\n      opacity: 0;\n      transition: all .5s .2s; }\n  \n  .results,\n  .likes {\n    padding: 3rem 0; }\n  \n  .results__list,\n    .likes__list {\n      list-style: none; }\n  \n  .results__link:link, .results__link:visited,\n    .likes__link:link,\n    .likes__link:visited {\n      display: flex;\n      align-items: center;\n      padding: 1.5rem 3rem;\n      transition: all .3s;\n      border-right: 1px solid #fff;\n      text-decoration: none; }\n  \n  .results__link:hover,\n    .likes__link:hover {\n      background-color: #F9F5F3;\n      transform: translateY(-2px); }\n  \n  .results__link--active,\n    .likes__link--active {\n      background-color: #F9F5F3; }\n  \n  .results__fig,\n    .likes__fig {\n      flex: 0 0 5.5rem;\n      border-radius: 50%;\n      overflow: hidden;\n      height: 5.5rem;\n      margin-right: 2rem;\n      position: relative;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n  \n  .results__fig::before,\n      .likes__fig::before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n        opacity: .4; }\n  \n  .results__fig img,\n      .likes__fig img {\n        display: block;\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        transition: all .3s; }\n  \n  .results__name,\n    .likes__name {\n      font-size: 1.3rem;\n      color: #F59A83;\n      text-transform: uppercase;\n      font-weight: 600;\n      margin-bottom: .3rem; }\n  \n  .results__author,\n    .likes__author {\n      font-size: 1.1rem;\n      color: #968B87;\n      text-transform: uppercase;\n      font-weight: 600; }\n  \n  .results__pages,\n    .likes__pages {\n      margin-top: 3rem;\n      padding: 0 3rem; }\n  \n  .results__pages::after,\n      .likes__pages::after {\n        content: \"\";\n        display: table;\n        clear: both; }\n  \n  .results__btn--prev,\n    .likes__btn--prev {\n      float: left;\n      flex-direction: row-reverse; }\n  \n  .results__btn--next,\n    .likes__btn--next {\n      float: right; }\n  \n  .recipe {\n    background-color: #F9F5F3;\n    border-top: 1px solid #fff; }\n  \n  .recipe__fig {\n      height: 30rem;\n      position: relative;\n      transform: scale(1.04) translateY(-1px);\n      transform-origin: top; }\n  \n  .recipe__fig::before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n        opacity: .6; }\n  \n  .recipe__img {\n      width: 100%;\n      display: block;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n  \n  .recipe__title {\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      transform: translate(-50%, 20%) skewY(-6deg);\n      color: #fff;\n      font-weight: 700;\n      font-size: 2.75rem;\n      text-transform: uppercase;\n      width: 70%;\n      line-height: 1.95;\n      text-align: center; }\n  \n  .recipe__title span {\n        -webkit-box-decoration-break: clone;\n        box-decoration-break: clone;\n        padding: 1.3rem 2rem;\n        background-image: linear-gradient(to right bottom, #FBDB89, #F48982); }\n  \n  .recipe__details {\n      display: flex;\n      align-items: center;\n      padding: 8rem 3rem 3rem 3rem; }\n  \n  .recipe__info {\n      font-size: 1.5rem;\n      text-transform: uppercase;\n      display: flex;\n      align-items: center; }\n  \n  .recipe__info:not(:last-child) {\n        margin-right: 4rem; }\n  \n  .recipe__info-icon {\n      height: 2rem;\n      width: 2rem;\n      fill: #F59A83;\n      margin-right: 1rem; }\n  \n  .recipe__info-data {\n      margin-right: .4rem;\n      font-weight: 600; }\n  \n  .recipe__info-buttons {\n      display: flex;\n      margin-left: 1.5rem;\n      visibility: hidden;\n      opacity: 0;\n      transform: translateY(5px);\n      transition: all .4s; }\n  \n  .recipe:hover .recipe__info-buttons {\n      visibility: visible;\n      opacity: 1;\n      transform: translateY(0); }\n  \n  .recipe__love {\n      background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n      border-radius: 50%;\n      border: none;\n      cursor: pointer;\n      height: 4.5rem;\n      width: 4.5rem;\n      margin-left: auto;\n      transition: all .2s;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  \n  .recipe__love:hover {\n        transform: scale(1.07); }\n  \n  .recipe__love:focus {\n        outline: none; }\n  \n  .recipe__love svg {\n        height: 2.75rem;\n        width: 2.75rem;\n        fill: #fff; }\n  \n  .recipe__ingredients {\n      padding: 4rem 5rem;\n      font-size: 1.5rem;\n      line-height: 1.4;\n      background-color: #F2EFEE;\n      display: flex;\n      flex-direction: column;\n      align-items: center; }\n  \n  .recipe__ingredient-list {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      grid-column-gap: 1.5rem;\n      grid-row-gap: 2.5rem;\n      list-style: none;\n      margin-bottom: 3rem; }\n  \n  .recipe__item {\n      display: flex; }\n  \n  .recipe__icon {\n      height: 1.8rem;\n      width: 1.8rem;\n      fill: #F59A83;\n      border: 1px solid #F59A83;\n      border-radius: 50%;\n      padding: 2px;\n      margin-right: 1rem;\n      flex: 0 0 auto;\n      margin-top: .1rem; }\n  \n  .recipe__count {\n      margin-right: .5rem;\n      flex: 0 0 auto; }\n  \n  .recipe__directions {\n      padding: 4rem;\n      padding-bottom: 5rem;\n      display: flex;\n      flex-direction: column;\n      align-items: center; }\n  \n  .recipe__directions-text {\n      font-size: 1.5rem;\n      text-align: center;\n      width: 90%;\n      margin-bottom: 3rem;\n      color: #968B87; }\n  \n  .recipe__by {\n      font-weight: 700; }\n  \n  .shopping {\n    padding: 3rem 4rem;\n    display: flex;\n    flex-direction: column; }\n  \n  .shopping__list {\n      list-style: none;\n      max-height: 77rem;\n      overflow: scroll; }\n  \n  .shopping__item {\n      display: flex;\n      align-items: flex-start;\n      padding: 1.3rem 0;\n      border-bottom: 1px solid #F2EFEE;\n      position: relative; }\n  \n  .shopping__count {\n      flex: 0 0 7.5rem;\n      padding: .4rem .5rem;\n      border: 1px solid #F2EFEE;\n      border-radius: 3px;\n      margin-right: 2rem;\n      cursor: pointer;\n      display: flex;\n      justify-content: space-between; }\n  \n  .shopping__count input {\n        color: inherit;\n        font-family: inherit;\n        font-size: 1.2rem;\n        text-align: center;\n        border: none;\n        width: 4.0rem;\n        border-radius: 3px; }\n  \n  .shopping__count input:focus {\n          outline: none;\n          background-color: #F2EFEE; }\n  \n  .shopping__count p {\n        font-size: 1.2rem; }\n  \n  .shopping__description {\n      flex: 1;\n      font-size: 1.3rem;\n      margin-top: .4rem;\n      margin-right: 1.5rem; }\n  \n  .shopping__delete {\n      margin-top: .5rem;\n      position: absolute;\n      right: 0;\n      background-image: linear-gradient(to right, transparent 0%, #fff 40%, #fff 100%);\n      width: 3.75rem;\n      padding-left: 2rem;\n      visibility: hidden;\n      opacity: 0;\n      transition: all .5s; }\n  \n  .shopping__item:hover .shopping__delete {\n      opacity: 1;\n      visibility: visible; }\n  \n/*# sourceMappingURL=data:application/json;base64,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QUNqQixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLGdGQUFnRjtNQUNoRixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsbUJBQW1CLEVBQUU7O0VBQ3ZCO01BQ0UsVUFBVTtNQUNWLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgXG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cbiAgXG4gIGh0bWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiA2Mi41JTsgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjguNzVlbSkge1xuICAgICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTAlOyB9IH1cbiAgXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBjb2xvcjogIzY1NUE1NjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRkJEQjg5LCAjRjQ4OTgyKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIgKiA0dncpOyB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyMHJlbTtcbiAgICBtYXJnaW46IDR2dyBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMCAycmVtIDZyZW0gMC41cmVtIHJnYmEoMTAxLCA5MCwgODYsIDAuMik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcmVtIG1pbm1heCgxMDByZW0sIGF1dG8pO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4xZnIgMmZyIDEuMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZCBoZWFkIGhlYWRcIiBcImxpc3QgcmVjaXBlIHNob3BwaW5nXCI7IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4Ljc1ZW0pIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9IH1cbiAgXG4gIC5idG4sIC5idG4tc21hbGwsIC5idG4tc21hbGw6bGluaywgLmJ0bi1zbWFsbDp2aXNpdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRkJEQjg5LCAjRjQ4OTgyKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7IH1cbiAgICAuYnRuOmhvdmVyLCAuYnRuLXNtYWxsOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cbiAgICAuYnRuOmZvY3VzLCAuYnRuLXNtYWxsOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuYnRuID4gKjpmaXJzdC1jaGlsZCwgLmJ0bi1zbWFsbCA+ICo6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9XG4gIFxuICAuYnRuIHtcbiAgICBwYWRkaW5nOiAxLjNyZW0gM3JlbTtcbiAgICBmb250LXNpemU6IDEuNHJlbTsgfVxuICAgIC5idG4gc3ZnIHtcbiAgICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICAgIHdpZHRoOiAyLjI1cmVtO1xuICAgICAgZmlsbDogY3VycmVudENvbG9yOyB9XG4gIFxuICAuYnRuLXNtYWxsLCAuYnRuLXNtYWxsOmxpbmssIC5idG4tc21hbGw6dmlzaXRlZCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgcGFkZGluZzogMXJlbSAxLjc1cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgIC5idG4tc21hbGwgc3ZnLCAuYnRuLXNtYWxsOmxpbmsgc3ZnLCAuYnRuLXNtYWxsOnZpc2l0ZWQgc3ZnIHtcbiAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjsgfVxuICBcbiAgLmJ0bi1pbmxpbmUge1xuICAgIGNvbG9yOiAjRjU5QTgzO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGNUYzO1xuICAgIHBhZGRpbmc6IC44cmVtIDEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7IH1cbiAgICAuYnRuLWlubGluZSBzdmcge1xuICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgICAgbWFyZ2luOiAwIC4ycmVtOyB9XG4gICAgLmJ0bi1pbmxpbmUgc3BhbiB7XG4gICAgICBtYXJnaW46IDAgLjRyZW07IH1cbiAgICAuYnRuLWlubGluZTpob3ZlciB7XG4gICAgICBjb2xvcjogI0Y0ODk4MjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkVGRUU7IH1cbiAgICAuYnRuLWlubGluZTpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIFxuICAuYnRuLXRpbnkge1xuICAgIGhlaWdodDogMS43NXJlbTtcbiAgICB3aWR0aDogMS43NXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuYnRuLXRpbnkgc3ZnIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmlsbDogI0Y1OUE4MztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cbiAgICAuYnRuLXRpbnk6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgIC5idG4tdGlueTpob3ZlciBzdmcge1xuICAgICAgZmlsbDogI0Y0ODk4MjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgfVxuICAgIC5idG4tdGlueTphY3RpdmUgc3ZnIHtcbiAgICAgIGZpbGw6ICNGNDg5ODI7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAuYnRuLXRpbnk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC4zcmVtOyB9XG4gIFxuICAuaGVhZGluZy0yIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjRjU5QTgzO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0zZGVnKTsgfVxuICBcbiAgLmNvcHlyaWdodCB7XG4gICAgY29sb3I6ICM5NjhCODc7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLXRvcDogYXV0bzsgfVxuICBcbiAgLmxpbms6bGluayxcbiAgLmxpbms6dmlzaXRlZCB7XG4gICAgY29sb3I6ICM5NjhCODc7IH1cbiAgXG4gIC5sb2FkZXIge1xuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5sb2FkZXIgc3ZnIHtcbiAgICAgIGhlaWdodDogNS41cmVtO1xuICAgICAgd2lkdGg6IDUuNXJlbTtcbiAgICAgIGZpbGw6ICNGNTlBODM7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0NCUgNTAlO1xuICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMS41cyBpbmZpbml0ZSBsaW5lYXI7IH1cbiAgXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG4gIFxuICAuaGVhZGVyIHtcbiAgICBncmlkLWFyZWE6IGhlYWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjVGMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG4gICAgLmhlYWRlcl9fbG9nbyB7XG4gICAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICAgIGhlaWdodDogNC41cmVtO1xuICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgXG4gIC5zZWFyY2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XG4gICAgLnNlYXJjaDpmb2N1cy13aXRoaW4ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCAwLjdyZW0gM3JlbSByZ2JhKDEwMSwgOTAsIDg2LCAwLjA4KTsgfVxuICAgIC5zZWFyY2hfX2ZpZWxkIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICB3aWR0aDogMzByZW07IH1cbiAgICAgIC5zZWFyY2hfX2ZpZWxkOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLnNlYXJjaF9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNEQUQwQ0M7IH1cbiAgXG4gIC5saWtlcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XG4gICAgLmxpa2VzX19maWVsZCB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiAwIDRyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cbiAgICAgIC5saWtlc19fZmllbGQ6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFRkVFOyB9XG4gICAgLmxpa2VzX19wYW5lbDpob3ZlcixcbiAgICAubGlrZXNfX2ZpZWxkOmhvdmVyICsgLmxpa2VzX19wYW5lbCB7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgb3BhY2l0eTogMTsgfVxuICAgIC5saWtlc19faWNvbiB7XG4gICAgICBmaWxsOiAjRjU5QTgzO1xuICAgICAgaGVpZ2h0OiAzLjc1cmVtO1xuICAgICAgd2lkdGg6IDMuNzVyZW07IH1cbiAgICAubGlrZXNfX3BhbmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAxMHJlbTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgd2lkdGg6IDM0cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC44cmVtIDVyZW0gMnJlbSByZ2JhKDEwMSwgOTAsIDg2LCAwLjEpO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgLjJzOyB9XG4gIFxuICAucmVzdWx0cyxcbiAgLmxpa2VzIHtcbiAgICBwYWRkaW5nOiAzcmVtIDA7IH1cbiAgICAucmVzdWx0c19fbGlzdCxcbiAgICAubGlrZXNfX2xpc3Qge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgIC5yZXN1bHRzX19saW5rOmxpbmssIC5yZXN1bHRzX19saW5rOnZpc2l0ZWQsXG4gICAgLmxpa2VzX19saW5rOmxpbmssXG4gICAgLmxpa2VzX19saW5rOnZpc2l0ZWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgLnJlc3VsdHNfX2xpbms6aG92ZXIsXG4gICAgLmxpa2VzX19saW5rOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY1RjM7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH1cbiAgICAucmVzdWx0c19fbGluay0tYWN0aXZlLFxuICAgIC5saWtlc19fbGluay0tYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY1RjM7IH1cbiAgICAucmVzdWx0c19fZmlnLFxuICAgIC5saWtlc19fZmlnIHtcbiAgICAgIGZsZXg6IDAgMCA1LjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiA1LjVyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5yZXN1bHRzX19maWc6OmJlZm9yZSxcbiAgICAgIC5saWtlc19fZmlnOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRkJEQjg5LCAjRjQ4OTgyKTtcbiAgICAgICAgb3BhY2l0eTogLjQ7IH1cbiAgICAgIC5yZXN1bHRzX19maWcgaW1nLFxuICAgICAgLmxpa2VzX19maWcgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XG4gICAgLnJlc3VsdHNfX25hbWUsXG4gICAgLmxpa2VzX19uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgY29sb3I6ICNGNTlBODM7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC4zcmVtOyB9XG4gICAgLnJlc3VsdHNfX2F1dGhvcixcbiAgICAubGlrZXNfX2F1dGhvciB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGNvbG9yOiAjOTY4Qjg3O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICAucmVzdWx0c19fcGFnZXMsXG4gICAgLmxpa2VzX19wYWdlcyB7XG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgcGFkZGluZzogMCAzcmVtOyB9XG4gICAgICAucmVzdWx0c19fcGFnZXM6OmFmdGVyLFxuICAgICAgLmxpa2VzX19wYWdlczo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgICAucmVzdWx0c19fYnRuLS1wcmV2LFxuICAgIC5saWtlc19fYnRuLS1wcmV2IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyB9XG4gICAgLnJlc3VsdHNfX2J0bi0tbmV4dCxcbiAgICAubGlrZXNfX2J0bi0tbmV4dCB7XG4gICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgXG4gIC5yZWNpcGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY1RjM7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7IH1cbiAgICAucmVjaXBlX19maWcge1xuICAgICAgaGVpZ2h0OiAzMHJlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCkgdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDsgfVxuICAgICAgLnJlY2lwZV9fZmlnOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRkJEQjg5LCAjRjQ4OTgyKTtcbiAgICAgICAgb3BhY2l0eTogLjY7IH1cbiAgICAucmVjaXBlX19pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XG4gICAgLnJlY2lwZV9fdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjAlKSBza2V3WSgtNmRlZyk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDIuNzVyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjk1O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAucmVjaXBlX190aXRsZSBzcGFuIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogY2xvbmU7XG4gICAgICAgIGJveC1kZWNvcmF0aW9uLWJyZWFrOiBjbG9uZTtcbiAgICAgICAgcGFkZGluZzogMS4zcmVtIDJyZW07XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNGQkRCODksICNGNDg5ODIpOyB9XG4gICAgLnJlY2lwZV9fZGV0YWlscyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhyZW0gM3JlbSAzcmVtIDNyZW07IH1cbiAgICAucmVjaXBlX19pbmZvIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAucmVjaXBlX19pbmZvOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07IH1cbiAgICAucmVjaXBlX19pbmZvLWljb24ge1xuICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgd2lkdGg6IDJyZW07XG4gICAgICBmaWxsOiAjRjU5QTgzO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9XG4gICAgLnJlY2lwZV9faW5mby1kYXRhIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLjRyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gICAgLnJlY2lwZV9faW5mby1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC40czsgfVxuICAgIC5yZWNpcGU6aG92ZXIgLnJlY2lwZV9faW5mby1idXR0b25zIHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgLnJlY2lwZV9fbG92ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRkJEQjg5LCAjRjQ4OTgyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGhlaWdodDogNC41cmVtO1xuICAgICAgd2lkdGg6IDQuNXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgIC5yZWNpcGVfX2xvdmU6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpOyB9XG4gICAgICAucmVjaXBlX19sb3ZlOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLnJlY2lwZV9fbG92ZSBzdmcge1xuICAgICAgICBoZWlnaHQ6IDIuNzVyZW07XG4gICAgICAgIHdpZHRoOiAyLjc1cmVtO1xuICAgICAgICBmaWxsOiAjZmZmOyB9XG4gICAgLnJlY2lwZV9faW5ncmVkaWVudHMge1xuICAgICAgcGFkZGluZzogNHJlbSA1cmVtO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRUZFRTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC5yZWNpcGVfX2luZ3JlZGllbnQtbGlzdCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxLjVyZW07XG4gICAgICBncmlkLXJvdy1nYXA6IDIuNXJlbTtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtOyB9XG4gICAgLnJlY2lwZV9faXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgLnJlY2lwZV9faWNvbiB7XG4gICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICAgIHdpZHRoOiAxLjhyZW07XG4gICAgICBmaWxsOiAjRjU5QTgzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Y1OUE4MztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogLjFyZW07IH1cbiAgICAucmVjaXBlX19jb3VudCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgZmxleDogMCAwIGF1dG87IH1cbiAgICAucmVjaXBlX19kaXJlY3Rpb25zIHtcbiAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC5yZWNpcGVfX2RpcmVjdGlvbnMtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgY29sb3I6ICM5NjhCODc7IH1cbiAgICAucmVjaXBlX19ieSB7XG4gICAgICBmb250LXdlaWdodDogNzAwOyB9XG4gIFxuICAuc2hvcHBpbmcge1xuICAgIHBhZGRpbmc6IDNyZW0gNHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAuc2hvcHBpbmdfX2xpc3Qge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1heC1oZWlnaHQ6IDc3cmVtO1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxuICAgIC5zaG9wcGluZ19faXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nOiAxLjNyZW0gMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjJFRkVFO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLnNob3BwaW5nX19jb3VudCB7XG4gICAgICBmbGV4OiAwIDAgNy41cmVtO1xuICAgICAgcGFkZGluZzogLjRyZW0gLjVyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjJFRkVFO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgICAgLnNob3BwaW5nX19jb3VudCBpbnB1dCB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB3aWR0aDogNC4wcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cbiAgICAgICAgLnNob3BwaW5nX19jb3VudCBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFRkVFOyB9XG4gICAgICAuc2hvcHBpbmdfX2NvdW50IHAge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTsgfVxuICAgIC5zaG9wcGluZ19fZGVzY3JpcHRpb24ge1xuICAgICAgZmxleDogMTtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgbWFyZ2luLXRvcDogLjRyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTsgfVxuICAgIC5zaG9wcGluZ19fZGVsZXRlIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAlLCAjZmZmIDQwJSwgI2ZmZiAxMDAlKTtcbiAgICAgIHdpZHRoOiAzLjc1cmVtO1xuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7IH1cbiAgICAuc2hvcHBpbmdfX2l0ZW06aG92ZXIgLnNob3BwaW5nX19kZWxldGUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Source codes\Web\Angular\Forkify\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map