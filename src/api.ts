import {Product} from "./pages/products/consts.ts";

const API_URL = 'https://localhost:7230';

export async function getAllProducts(): Promise<Product[]> {
    try {
        const response = await fetch(`${API_URL}/api/products`);

        if (!response.ok) {
            console.error(`Ошибка при получении продуктов: ${response.status}`);
            return [];
        }

        const data = await response.json();

        // Обработка дат в каждом продукте
        const products = data.map((item: Product) => ({
            ...item,
            discountTime: item.discountTime ? new Date(item.discountTime) : undefined,
            addedAt: new Date(item.addedAt),
        })) as Product[];

        return products;
    } catch (error) {
        console.error(`Сетевая ошибка при получении продуктов:`, error);
        return [];
    }
}