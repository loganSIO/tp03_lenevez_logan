import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Product } from './models/products';
import { env } from './env/env';


@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }
    public getProducts () : Observable<Product[]> {
        return this.http.get<Product[]>(env.backendProducts);
    }
}