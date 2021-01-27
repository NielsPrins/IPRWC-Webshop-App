import {Component, OnInit} from '@angular/core';
import Product from '../../shared/product.interface';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(public apiService: ApiService) {
    this.apiService.get('/product').then((res) => {
      this.products = res.data.result as Product[];
    });
  }

  ngOnInit(): void {
  }

  public addNewProduct(): void {
    // Add product
  }
}
