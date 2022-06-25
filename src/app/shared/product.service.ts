import { Injectable } from '@angular/core';
import { Product } from "../entities/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor() { }

  getProducts() {
    this.products = [
      {
        id: 0,
        title: 'First Product',
        price: 24.99,
        rating: 4.3,
        description: 'Product No. 0, a product 0 is a product to be used for hardware usages',
        categories: [
          'electronics', 'hardware'
        ]
      },

      {
        id: 1,
        title: 'Second Product',
        price: 64.99,
        rating: 3.5,
        description: 'Product No. 1, a product 1 is a product to be used for book readers',
        categories: ['books']
      },
    ];

    return this.products;
  }

  getProductById(productID: number) {
    return this.products.find(p => p.id == productID);
  }
}
