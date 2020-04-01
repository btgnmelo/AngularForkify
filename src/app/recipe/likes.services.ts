import { Recipe } from './recipe.model';

export class LikeServices {

    private likes: Recipe[] = [];

    constructor() {
        this.likes = [ {
            recipe_id:85354,
            title:'Homemade Tomato Pasta...',
            publisher:'All Recipes',
            image_url: '../assets/img/test-3.jpg',
          },
          {
            recipe_id:43563,
            title:'Pasta with Tomato ...',
            publisher:'The Pioneer Woman',
            image_url: '../assets/img/test-4.jpg',
          },
          {
            recipe_id:2256665,
            title:'Greek Pasta with ...',
            publisher:'Chow',
            image_url: '../assets/img/test-5.jpg',
          },];

          this.setToStorage();
    }

    getLikes() {
        this.getFromStorage();
        return this.likes.slice();
    }

    getFromStorage() {
        const storage = window.localStorage.getItem('likes');
        if (storage) this.likes = JSON.parse(storage);
    }

    addLike(like: Recipe): void {
        this.likes.push(like);
        this.setToStorage();
    }


    deleteLike(id: number) {
        const index = this.likes.findIndex(el => el.recipe_id === id);
        this.likes.splice(index, 1);
        this.setToStorage();
    }

    isLiked(id: number) {
        return this.likes.findIndex(el => el.recipe_id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    private setToStorage(): void {
        window.localStorage.setItem('likes', JSON.stringify(this.likes));
    }


}