// ✅ lib/pages/cart_page.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/cart_provider.dart';

class CartPage extends StatelessWidget {
  const CartPage({super.key});

  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<CartProvider>(context);

    return Scaffold(
      appBar: AppBar(title: const Text('Carrinho')),
      body: cart.items.isEmpty
          ? const Center(child: Text('Seu carrinho está vazio.'))
          : Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Expanded(
                    child: ListView.builder(
                      itemCount: cart.items.length,
                      itemBuilder: (context, index) {
                        final item = cart.items[index];
                        return ListTile(
                          title: Text('${item.quantity}x ${item.name}'),
                          subtitle: Text(
                              'R\$ ${(item.price * item.quantity).toStringAsFixed(2)}'),
                          trailing: IconButton(
                            icon: const Icon(Icons.delete),
                            onPressed: () => cart.removeFromCart(item.id),
                          ),
                        );
                      },
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text('Total: R\$ ${cart.total.toStringAsFixed(2)}'),
                  const SizedBox(height: 8),
                  ElevatedButton(
                    onPressed: () => cart.clearCart(),
                    child: const Text('Limpar Carrinho'),
                  ),
                ],
              ),
            ),
    );
  }
}
