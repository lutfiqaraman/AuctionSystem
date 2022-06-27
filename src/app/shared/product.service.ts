export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[])
  {
  }
}

export class ProductService {

  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number) {
    return products.find(p => p.id === productId);
  }

}

const products = [
  {
    id: 1,
    title: 'First Product',
    price: 24.99,
    rating: 4.3,
    description: 'Product No. 1, a product 1 is a product to be used by hardware lovers',
    categories: [
      'electronics', 'hardware'
    ]
  },
  {
    id: 2,
    title: 'Second Product',
    price: 64.99,
    rating: 3.5,
    description: 'Product No. 2, a product 2 is a product to be used by book readers',
    categories: ['books']
  },
  {
    id: 3,
    title: 'Third Product',
    price: 21.99,
    rating: 3.5,
    description: 'Product No.3, a product 3 is a product to be used by food consumers',
    categories: ['books']
  }
];
