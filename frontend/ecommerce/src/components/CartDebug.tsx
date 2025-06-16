// src/components/CartDebug.tsx
import React from 'react';
import { useCartStore } from '../store/useCartStore';

const CartDebug: React.FC = () => {
    const items = useCartStore((state) => state.items);

    return (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded p-4 shadow max-w-xs z-50">
            <h3 className="font-bold mb-2 text-lg">Carrinho Debug</h3>
            {items.length === 0 ? (
                <p className="text-gray-500">Sem itens no carrinho</p>
            ) : (
                items.map((item) => (
                    <div key={item.id} className="mb-1 flex justify-between">
                        <span>{item.name}</span>
                        <span className="font-semibold">x {item.quantity}</span>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartDebug;
