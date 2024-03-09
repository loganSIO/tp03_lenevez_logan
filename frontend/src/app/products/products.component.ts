import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Product } from '../models/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  providers: [ApiService]
})

export class ProductsComponent {

  products: Observable<Product[]>;

  constructor(private api: ApiService) {
    this.products = this.api.getProducts();
  }
}
