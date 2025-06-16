import { useState } from 'react';
import { useCartStore } from '../store/useCartStore';

export default function Checkout() {
    const { items, clearCart } = useCartStore();
    const [formData, setFormData] = useState({ nome: '', email: '', endereco: '' });
    const [submitted, setSubmitted] = useState(false);

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Dados do cliente:', formData);
        console.log('Itens do pedido:', items);
        setSubmitted(true);
        clearCart();
    };

    if (submitted) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Compra finalizada! ✅</h2>
                <p className="text-gray-600">Obrigado pela sua compra, {formData.nome}.</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Finalizar Compra</h1>

            {items.length === 0 ? (
                <p className="text-gray-600">Seu carrinho está vazio.</p>
            ) : (
                <div>
                    <ul className="mb-6 space-y-2">
                        {items.map((item) => (
                            <li key={item.id} className="flex justify-between">
                                <span>{item.quantity}x {item.name}</span>
                                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>

                    <strong className="block mb-6 text-xl">Total: R$ {total.toFixed(2)}</strong>

                    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                        <input
                            type="text"
                            placeholder="Nome"
                            required
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            className="w-full border px-4 py-2 rounded"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full border px-4 py-2 rounded"
                        />
                        <textarea
                            placeholder="Endereço"
                            required
                            value={formData.endereco}
                            onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                            className="w-full border px-4 py-2 rounded"
                        />
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                        >
                            Finalizar pedido
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
