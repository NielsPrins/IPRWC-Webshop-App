import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import Product from '../shared/product.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public products: Product[] = [];

  constructor(public apiService: ApiService) {
    this.apiService.get('/product').then((res) => {
      this.products = res.data.result as Product[];
    });
  }

  ngOnInit(): void {
  }

}
