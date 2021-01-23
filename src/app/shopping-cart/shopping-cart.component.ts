import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public totalPrice: number;

  constructor(public appService: AppService) {
    this.getTotalCartPrice();
  }

  ngOnInit(): void {
  }

  public getTotalCartPrice(): void {
    let price = 0;
    for (const cartItem of this.appService.cart) {
      price += cartItem.product.price * cartItem.quantity;
    }
    this.totalPrice = price;
  }

  public orderShoppingCart(): void {
    // @todo create order and redirect
  }

}
