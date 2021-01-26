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

  public showBigImage(event): void {
    const bigImg = event.path[1].querySelector('.big-image-hover');
    bigImg.classList.remove('d-none');
    const imageHeight = parseFloat(getComputedStyle(bigImg, null).height.replace('px', ''));
    bigImg.style.top = imageHeight / -2 + 24.5 + 'px';
  }

  public hideBigImage(event): void {
    const bigImg = event.path[1].querySelector('.big-image-hover');
    bigImg.classList.add('d-none');
  }
}
