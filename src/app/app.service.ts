import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import jwt_decode from 'jwt-decode';
import Product from './shared/product.interface';
import User from './shared/user.interface';

@Injectable()
export class AppService {
  public user: User;
  public cart: { product: Product, quantity: number }[] = [];

  constructor() {
    const token = Cookie.get('user_token');
    if (token) {
      this.user = jwt_decode(token);
    }

    const cart = Cookie.get('cart');
    if (cart) {
      this.cart = JSON.parse(cart);
    }
  }

  public setUserWithToken(token: string): void {
    Cookie.set('user_token', token, 7, '/');
    this.user = jwt_decode(token) as User;
  }

  public addToCart(product: Product, quantity: number): void {
    for (const cartItem of this.cart) {
      if (cartItem.product.id === product.id) {
        cartItem.quantity += quantity;
        return;
      }
    }
    this.cart.push({product, quantity});
    Cookie.set('cart', JSON.stringify(this.cart), 7, '/');
  }
}
