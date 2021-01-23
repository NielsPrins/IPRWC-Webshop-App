import {Component, Input, OnInit} from '@angular/core';
import Product from '../../shared/product.interface';
import {AppService} from '../../app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  public quantity = 1;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  public addToCart(): void {
    this.appService.addProductToCart(this.product, this.quantity);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'Product added to cart'
    });
  }

  public onlyIntegers(event): boolean {
    return !isNaN(event.key);
  }

}
