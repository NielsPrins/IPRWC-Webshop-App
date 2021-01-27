import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Product from '../../../shared/product.interface';
import {ApiService} from '../../../api.service';
import Swal from 'sweetalert2';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[product-row]',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @Output() onProductDelete = new EventEmitter();


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  public updateProduct(): void {
    this.apiService.patch('/product', this.product).then((res) => {
      console.log(res);
    });
  }

  public deleteProduct(): void {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0090e3',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.apiService.delete('/product/' + this.product.id).then(() => {
          this.onProductDelete.emit();
        });

      }
    });
  }
}
