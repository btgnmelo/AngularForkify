export class LikeServices {
    public likes;

    constructor() {
        this.likes = [];
    }

    getFromStorage() {
        const storage = window.localStorage.getItem('likes');
        if (storage) this.likes = JSON.parse(storage);
    }

    addLike(like): void {
        this.likes.push(like);
        this.setToStorage();
    }


    deleteLike(id: number) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);
        this.setToStorage();
    }

    isLiked(id: number) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    private setToStorage(): void {
        window.localStorage.setItem('likes', JSON.stringify(this.likes));
    }


}