export interface Asset {
    id: string;
    path: string;
    alt?: string;
    type?: string;
}

export interface Brand {
    id: number;
    name: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface Subcategory {
    id: number;
    category: Category;
    name: string;
}

export enum DiscountType {
    Percentage = 1,
    FixedAmount = 2
}

export interface Product {
    id: number;
    name: string;
    imageAssetId?: string;
    imageAsset: Asset;
    smallDescription: string;
    price: number;
    brand: Brand;
    fullTextHTML: string;
    subcategory: Subcategory;
    isDiscount: boolean;
    discountType?: DiscountType;
    discountAmount?: number;
    discountTime?: Date;
    addedAt: Date;
}
