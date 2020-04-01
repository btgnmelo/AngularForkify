export class Recipe {
    constructor(public recipe_id: number, 
        public title: string, 
        public publisher: string, 
        public image_url: string, 
        public social_rank?: number,
        public publisher_url?: string,
        public source_url?: string) {};
}