import React, { useEffect, useState } from 'react';
import { fetchProducts, Product } from '../api/products';
import ProductCard from '../components/ProductCard';
import { useCartStore } from '../store/useCartStore';
import CartDebug from '../components/CartDebug';

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');
    const addToCart = useCartStore(state => state.addToCart);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch(err => {
                console.error('Erro ao carregar produtos:', err);
            });
    }, []);

    // Filtra produtos pelo nome com busca simples
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="p-4 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Produtos</h1>

                <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="border rounded p-2 mb-6 w-full max-w-md"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.length === 0 && <p>Nenhum produto encontrado.</p>}

                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => addToCart(product)}
                        />
                    ))}
                </div>
            </div>


        </>
    );
};

export default Home;
