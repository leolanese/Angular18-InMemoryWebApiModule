import {InMemoryDbService} from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {

  // AppData mock database and returns the matching data.
  createDb() {
    const products = [
      { id: 1, name: 'Laptop', price: 1500 },
      { id: 2, name: 'Phone', price: 500 },
      { id: 3, name: 'Tablet', price: 800 }
    ];
    return { products };
  }
}