
export interface RecipeSearch {
    recipe_id: string;
    title: string;
    publisher: string;
    image_url: string;
}

export interface RecipeResponse {
    recipe: {
        recipe_id: string;
        title: string;
        publisher: string;
        image_url: string;
        publisher_url: string;
        ingredients: string[];
    }
}


export interface Recipe {
    isLike: boolean; 
    image_url: string;
    recipe_id: string;
    title: string;
    publisher: string;
    publisher_url: string;
    preparetion_time: number;
    serving: number;
    ingredients: Ingredient[];
}

export interface Ingredient {
    count: number;
    unit: string;
    ingredient: string
}