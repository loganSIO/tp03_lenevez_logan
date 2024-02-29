import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

  products: Observable<Product[]> | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.products = this.apiService.getProducts();
  }

}
