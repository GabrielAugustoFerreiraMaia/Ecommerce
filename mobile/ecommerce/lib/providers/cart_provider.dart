// ✅ lib/providers/cart_provider.dart
import 'package:flutter/material.dart';
import '../models/product.dart';

class CartItem extends Product {
  int quantity;

  CartItem({
    required super.id,
    required super.name,
    required super.description,
    required super.category,
    required super.image,
    required super.price,
    required super.material,
    required super.department,
    required super.provider,
    this.quantity = 1,
  });
}

class CartProvider extends ChangeNotifier {
  final List<CartItem> _items = [];

  List<CartItem> get items => _items;

  void addToCart(Product product) {
    final index = _items.indexWhere((item) => item.id == product.id);
    if (index >= 0) {
      _items[index].quantity += 1;
    } else {
      _items.add(CartItem(
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        image: product.image,
        price: product.price,
        material: product.material,
        department: product.department,
        provider: product.provider,
      ));
    }
    notifyListeners();
  }

  void removeFromCart(String id) {
    _items.removeWhere((item) => item.id == id);
    notifyListeners();
  }

  void clearCart() {
    _items.clear();
    notifyListeners();
  }

  double get total =>
      _items.fold(0, (sum, item) => sum + item.price * item.quantity);
}
