import { RecipeSearch } from './recipe.model';
import { Output, EventEmitter } from '@angular/core';

export class LikeServices {

    public OnLikeUpdated = new EventEmitter();

    private likes: RecipeSearch[] = [];

    constructor() {}

    public getLikes() {
        this.getFromStorage();
        return this.likes.slice();
    }

    public addLike(like: RecipeSearch): void {
        this.likes.push(like);
        this.setToStorage();
        this.OnLikeUpdated.emit();
    }

    public deleteLike(id: string) {
        const index = this.likes.findIndex(el => el.recipe_id === id);
        this.likes.splice(index, 1);
        this.setToStorage();
        this.OnLikeUpdated.emit();
    }

    public isLiked(id: string) {
        return this.likes.findIndex(el => el.recipe_id === id) !== -1;
    }

    public getNumLikes() {
        return this.likes.length;
    }

    private getFromStorage() {
        const storage = window.localStorage.getItem('likes');
        if (storage) this.likes = JSON.parse(storage);
    }

    private setToStorage(): void {
        window.localStorage.setItem('likes', JSON.stringify(this.likes));
    }


}