import {Component, Input, OnInit} from '@angular/core';
import Product from '../../shared/product.interface';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  public quantity = 1;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  public addToCart(): void {
    this.appService.addToCart(this.product, this.quantity);
  }

}
