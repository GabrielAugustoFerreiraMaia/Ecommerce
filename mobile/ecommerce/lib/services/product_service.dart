import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/product.dart';

class ProductService {
  static const _brazilianUrl =
      'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider';
  static const _europeanUrl =
      'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider';

  static Future<List<Product>> fetchAllProducts() async {
    final List<Product> allProducts = [];

    try {
      final brazilianResponse = await http.get(Uri.parse(_brazilianUrl));
      final europeanResponse = await http.get(Uri.parse(_europeanUrl));

      if (brazilianResponse.statusCode == 200) {
        final List brazilianData = jsonDecode(brazilianResponse.body);
        allProducts.addAll(
          brazilianData.map((json) => Product.fromJson(json, 'br')).toList(),
        );
      }

      if (europeanResponse.statusCode == 200) {
        final List europeanData = jsonDecode(europeanResponse.body);
        allProducts.addAll(
          europeanData.map((json) => Product.fromJson(json, 'eu')).toList(),
        );
      }
    } catch (e) {
      print('Erro ao buscar produtos: $e');
    }

    return allProducts;
  }
}
