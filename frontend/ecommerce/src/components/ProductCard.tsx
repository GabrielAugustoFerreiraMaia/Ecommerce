import React from 'react';
import { Product } from '../api/products';

type Props = {
    product: Product;
    onAddToCart: () => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
    return (
        <div className="border rounded p-4 flex flex-col">
            <img src={product.image} alt={product.name} className="mb-2 w-full h-48 object-cover rounded" />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-600 flex-grow">{product.description}</p>
            <p className="font-bold mt-2">R$ {product.price.toFixed(2)}</p>
            <button onClick={() => {
                console.log('clicou em adicionar:', product.name);
                onAddToCart();
            }} className='mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
                Adicionar ao carrinho
            </button>
        </div>
    );
};

export default ProductCard;
