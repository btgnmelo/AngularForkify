import { Ingredient } from '../recipe/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

export interface Shopping {
    id: number,
    Ingredient: Ingredient;
}

@Injectable({
    providedIn: 'root',
})
export class ShoppingListServices {

    private list: Shopping[] = [];

    public onShoppingItemUpdated = new EventEmitter();
    

    public getList(): Shopping[] {
        return this.list.slice();
    }

    public addShoppingItem(ingredient: Ingredient) {

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

    public removeShoppingItem(id: number) {
        const itemInd = this.list.findIndex(el => el.id === id);
        this.list.splice(itemInd, 1);
        
    }

    public updateShoppingItemCount(id: number, newCount) {
        this.list.find(el => el.id === id).Ingredient.count = newCount;
    }


}