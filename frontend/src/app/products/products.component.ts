import { Component } from '@angular/core';
import { Observable, map, combineLatest, startWith } from 'rxjs';
import { ApiService } from '../api.service';
import { Product } from '../models/products';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  providers: [ApiService]
})

export class ProductsComponent {

  products: Observable<Product[]>;

  searchForm = this.formBuilder.group({
    searchQuery: [''],
  });

  constructor(private api: ApiService, private formBuilder: FormBuilder) {
    this.products = this.getProducts();
  }

  private getProducts(): Observable<Product[]> {
    const products = this.api.getProducts();
    const search = this.searchForm.valueChanges.pipe(
      startWith(this.searchForm.value), map(({ searchQuery }) => (searchQuery ?? '').toLowerCase())
    );

    return combineLatest([products, search]).pipe(
      map(([products, searchQuery ]) =>
        products.filter((product) => {
          return product.title.toLowerCase().includes(searchQuery) || product.artist.toLowerCase().includes(searchQuery) || product.editor.toLowerCase().includes(searchQuery);}),
      ),
    );
  }}
