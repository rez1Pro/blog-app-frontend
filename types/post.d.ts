interface Category {
    id: number;
    name: string;
}

interface Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    short_description: string;
    image_url: string;
    published_at: string;
    category: Category;
    category_id: number;
}
