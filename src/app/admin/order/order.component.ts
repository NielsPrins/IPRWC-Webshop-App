import {Component, Input, OnInit} from '@angular/core';
import Order from '../../shared/order.interface';
import Swal from 'sweetalert2';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  public isCollapsed = true;

  constructor(public apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }

  public changeStatus(): void {
    Swal.fire({
      title: 'Change status',
      input: 'select',
      inputOptions: {
        received: 'Received',
        shipped: 'Shipped',
        delivered: 'Delivered',
      },
      inputValue: this.order.status,
      showCancelButton: true,
      confirmButtonText: 'Save'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.patch('/order', {id: this.order.id, status: result.value}).then((res) => {
          if (res.data.result) {
            this.order.status = result.value;
          }
        });
      }
    });
  }
}
