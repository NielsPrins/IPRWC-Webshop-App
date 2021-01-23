import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import jwt_decode from 'jwt-decode';
import Product from './shared/product.interface';

interface userData {
  id: string;
  name: string;
  email: string;
  permission_group: string;
}

@Injectable()
export class AppService {
  public user: userData;

  constructor() {
    const token = Cookie.get('user_token');
    if (token) {
      this.user = jwt_decode(token);
    }
  }

  public setUserWithToken(token: string): void {
    Cookie.set('user_token', token, 7, '/');
    this.user = jwt_decode(token) as userData;
  }

  public addToCart(product: Product, quantity: number): void {
    console.log(product);
    console.log(quantity);
  }
}
