import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/product.dart';
import '../providers/cart_provider.dart';

class ProductCard extends StatelessWidget {
  final Product product;
  const ProductCard({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        children: [
          Image.network(product.image),
          Text(product.name),
          Text('R\$ ${product.price.toStringAsFixed(2)}'),
          ElevatedButton(
            onPressed: () {
              context.read<CartProvider>().addToCart(product);
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                    content: Text('Adicionado ao carrinho: ${product.name}')),
              );
            },
            child: const Text('Adicionar ao carrinho'),
          ),
        ],
      ),
    );
  }
}
