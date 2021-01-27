import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ApiService} from '../api.service';
import Order from '../shared/order.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public orders: Order[] = [];

  constructor(public appService: AppService, private apiService: ApiService) {
    this.apiService.get('/order').then((res) => {
      this.orders = res.data.result;
    });
  }

  ngOnInit(): void {
  }

  public logout(): void {
    this.appService.logUserOut();
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }

}
