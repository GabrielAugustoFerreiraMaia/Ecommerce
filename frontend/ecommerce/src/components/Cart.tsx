import { useCartStore } from '../store/useCartStore';

export function Cart() {
    const { items, removeFromCart, clearCart } = useCartStore();

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (items.length === 0) {
        return (
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Carrinho</h2>
                <p>Seu carrinho está vazio.</p>
            </div>
        );
    }

    return (
        <div className="p-4 border rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Carrinho</h2>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item.id} className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-semibold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-600 hover:underline text-sm"
                            >
                                Remover
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
                <strong>Total: R$ {total.toFixed(2)}</strong>
                <button
                    onClick={clearCart}
                    className="text-sm text-gray-600 hover:underline"
                >
                    Limpar carrinho
                </button>
            </div>
        </div>
    );
}
