import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public products = [];

  constructor(public api: ApiService) {
  }

  ngOnInit(): void {
    // this.products = this.api.getAllProducts();
  }

}
