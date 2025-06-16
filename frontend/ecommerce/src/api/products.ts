import axios from 'axios';

export type Product = {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    price: number;
    provider: 'brazilian' | 'european'; // <- adiciona aqui
};

const BRAZILIAN_API = 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider';
const EUROPEAN_API = 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider';

export async function fetchProducts(): Promise<Product[]> {
    const [brazilianRes, europeanRes] = await Promise.all([
        axios.get(BRAZILIAN_API),
        axios.get(EUROPEAN_API),
    ]);

    const brazilianProducts = brazilianRes.data.map(mapBrazilianProduct);
    const europeanProducts = europeanRes.data.map(mapEuropeanProduct);

    return [...brazilianProducts, ...europeanProducts];
}

function mapBrazilianProduct(apiProduct: any): Product {
    return {
        id: apiProduct.id,
        name: apiProduct.nome || apiProduct.name || "Sem nome",
        description: apiProduct.descricao || "",
        category: apiProduct.categoria || "",
        image: apiProduct.imagem || "",
        price: Number(apiProduct.preco) || 0,
        provider: 'brazilian',
    };
}

function mapEuropeanProduct(apiProduct: any): Product {
    return {
        id: apiProduct.id,
        name: apiProduct.name || apiProduct.nome || "Sem nome",
        description: apiProduct.description || apiProduct.descricao || "",
        category: apiProduct.category || apiProduct.categoria || "",
        image: apiProduct.image || apiProduct.imagem || "",
        price: Number(apiProduct.price || apiProduct.preco) || 0,
        provider: 'european',
    };
}
