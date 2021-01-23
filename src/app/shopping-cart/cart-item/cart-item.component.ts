import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Product from '../../shared/product.interface';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Output() updateTotalCartPrice = new EventEmitter();
  @Input() cartItem: { product: Product, quantity: number };
  public product: Product;
  public quantity: number;

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
    this.product = this.cartItem.product;
    this.quantity = this.cartItem.quantity;
  }

  public quantityChanged(): void {
    if (!(Number.isInteger(this.quantity) || this.quantity > 0)) {
      return;
    }
    this.appService.updateProductQuantityInCart(this.product, this.quantity);
    this.updateTotalCartPrice.emit();
  }

  public quantityAddOne(): void {
    this.quantity += 1;
    this.quantityChanged();
  }

  public quantitySubtractOne(): void {
    if (this.quantity <= 1) {
      return;
    }
    this.quantity -= 1;
    this.quantityChanged();
  }

  public removeProduct(): void {
    this.appService.removeProductFromCart(this.product);
    this.updateTotalCartPrice.emit();
  }

  public onlyIntegers(event): boolean {
    return !isNaN(event.key);
  }

}
