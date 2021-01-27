import {Component, Input, OnInit} from '@angular/core';
import Product from '../../../shared/product.interface';
import {ApiService} from '../../../api.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[product-row]',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  public updateProduct(): void {
    this.apiService.patch('/product', this.product).then((res) => {
      console.log(res);
    });
  }
}
