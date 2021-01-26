import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import jwt_decode from 'jwt-decode';
import Product from './shared/product.interface';
import User from './shared/user.interface';
import {Router} from '@angular/router';

@Injectable()
export class AppService {
  public user: User;
  public cart: { product: Product, quantity: number }[] = [];

  constructor(private router: Router) {
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

  public logUserOut(): void {
    Cookie.delete('user_token', '/');
    this.user = undefined;
    this.router.navigate(['/login']);
  }

  public saveCartToCookie(): void {
    Cookie.set('cart', JSON.stringify(this.cart), 7, '/');
  }

  public addProductToCart(product: Product, quantity: number): void {
    for (const cartItem of this.cart) {
      if (cartItem.product.id === product.id) {
        cartItem.quantity += quantity;
        this.saveCartToCookie();
        return;
      }
    }
    this.cart.push({product, quantity});
    this.saveCartToCookie();
  }

  public removeProductFromCart(product: Product): void {
    this.cart.forEach((cartItem, index) => {
      if (cartItem.product.id === product.id) {
        this.cart.splice(index, 1);
        this.saveCartToCookie();
        return;
      }
    });
  }

  public updateProductQuantityInCart(product: Product, quantity: number): void {
    for (const cartItem of this.cart) {
      if (cartItem.product.id === product.id) {
        cartItem.quantity = quantity;
        this.saveCartToCookie();
        return;
      }
    }
  }
}
