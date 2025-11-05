export interface ProductInsert {
    description: string;
    price: number;
    imageUrl: string;
    available: string;
}

export interface Product extends ProductInsert {
    id: number;
    rating: number;
}

export interface ProductsResponse {
    products: Product[];
}

export interface SingleProductResponse {
    product: Product;
}
