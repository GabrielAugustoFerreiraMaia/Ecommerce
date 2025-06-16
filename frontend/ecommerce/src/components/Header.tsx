// components/Header.tsx
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export default function Header() {
    const items = useCartStore(state => state.items);
    const total = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
            <Link to="/" className="text-xl font-bold">Minha Loja</Link>
            <Link to="/checkout" className="relative">
                🛒 Carrinho
                {total > 0 && (
                    <span className="ml-1 px-2 py-0.5 bg-red-500 text-xs rounded-full">
                        {total}
                    </span>
                )}
            </Link>
        </header>
    );
}
