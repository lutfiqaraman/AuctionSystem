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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    categories: [
      'electronics', 'hardware'
    ]
  },
  {
    id: 2,
    title: 'Second Product',
    price: 64.99,
    rating: 3.5,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    categories: ['books']
  },
  {
    id: 3,
    title: 'Third Product',
    price: 21.99,
    rating: 3.5,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    categories: ['books']
  },
  {
    id: 4,
    title: 'Fourth Product',
    price: 46.23,
    rating: 2.65,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    categories: ['books']
  },
  {
    id: 5,
    title: 'Fifth Product',
    price: 25.37,
    rating: 1.5,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    categories: ['books']
  },
  {
    id: 6,
    title: 'Sixth Product',
    price: 21.99,
    rating: 3.5,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    categories: ['books']
  }
];
