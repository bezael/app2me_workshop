import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class DominicodeUIService {
  getAllProducts(): Observable<Product[]> {
    const products: Product[] = [
      { id: '1', name: 'Product 1', price: 100 },
      { id: '2', name: 'Product 2', price: 200 },
      { id: '3', name: 'Product 3', price: 300 },
    ];
    return of(products);
  }
}
