import {Component, OnInit} from '@angular/core';
import Product from '../../shared/product.interface';
import {ApiService} from '../../api.service';
import Swal from 'sweetalert2';

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
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3', '4']
    }).queue([
      'Title',
      'Description',
      'Image url',
      'Price'
    ]).then((result: any) => {
      console.log(result);
      if (result.value) {
        const data = {
          title: result.value[0],
          description: result.value[1],
          image: result.value[2],
          price: result.value[3].replace(',', '.'),
        };

        this.apiService.post('/product', data).then(() => {
          this.reloadProducts();
        });
      }
    });
  }

  public reloadProducts(): void {
    this.apiService.get('/product').then((res) => {
      this.products = res.data.result as Product[];
    });
  }
}
