export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    provider: 'brazilian' | 'european';
}
