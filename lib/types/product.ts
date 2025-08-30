export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  materials: string[];
  rating: number;
  reviews: number;
  bestseller?: boolean;
  exclusive?: boolean;
  inStock: boolean;
  sku: string;
  dimensions?: {
    length?: string;
    width?: string;
    height?: string;
    weight?: string;
  };
  care_instructions?: string;
  warranty?: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  selectedOptions?: Record<string, string>;
}