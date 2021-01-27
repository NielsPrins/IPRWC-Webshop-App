import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ApiService} from '../api.service';
import Order from '../shared/order.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public orders: Order[] = [];

  constructor(public appService: AppService, private apiService: ApiService, private router: Router) {
    this.apiService.get('/user/isAdmin').catch(() => {
      return this.router.navigate(['/login']);
    });

    this.apiService.get('/allOrders').then((res) => {
      this.orders = res.data.result;
    });
  }

  ngOnInit(): void {
  }
}
