import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ApiService} from '../api.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public totalPrice: string;

  constructor(public appService: AppService, private apiService: ApiService, private router: Router) {
    this.getTotalCartPrice();
  }

  ngOnInit(): void {
  }

  public getTotalCartPrice(): void {
    let price = 0;
    for (const cartItem of this.appService.cart) {
      price += cartItem.product.price * cartItem.quantity;
    }
    this.totalPrice = price.toFixed(2);
  }

  public orderShoppingCart(): void {
    this.apiService.post('/order', {
      cart: this.appService.cart.map((cartItem) => {
        return {productId: cartItem.product.id, quantity: cartItem.quantity};
      })
    }).then((res) => {
      if (res.data.result) {
        Swal.fire({
          icon: 'success',
          title: 'Order has been placed',
          confirmButtonText: 'account'
        }).then(() => {
          this.appService.cart = [];
          this.appService.saveCartToCookie();
          return this.router.navigate(['/account']);
        });
      }
    });
  }

}
