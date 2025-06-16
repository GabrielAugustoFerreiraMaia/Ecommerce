class Product {
  final String id;
  final String name;
  final String description;
  final String category;
  final String image;
  final double price;
  final String material;
  final String department;
  final String provider;

  Product({
    required this.id,
    required this.name,
    required this.description,
    required this.category,
    required this.image,
    required this.price,
    required this.material,
    required this.department,
    required this.provider,
  });

  factory Product.fromJson(Map<String, dynamic> json, String provider) {
    return Product(
      id: json['id'],
      name: json['nome'] ?? json['name'],
      description: json['descricao'] ?? '',
      category: json['categoria'] ?? '',
      image: json['imagem'] ?? '',
      price: double.tryParse(json['preco'] ?? json['price'].toString()) ?? 0.0,
      material: json['material'] ?? '',
      department: json['departamento'] ?? '',
      provider: provider,
    );
  }
}
