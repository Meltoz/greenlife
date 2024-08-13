import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
    id: 1,
    name: 'Tote Bag',
    price: 1990,
    description:'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
    image: 'totebag.png'
  },{
    id: 2,
    name: 'Tote Bag',
    price: 1990,
    description:'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
    image: 'totebag.png'
  },{
    id: 3,
    name: 'Tote Bag',
    price: 1990,
    description:'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
    image: 'totebag.png'
  },{
    id: 4,
    name: 'Tote Bag',
    price: 1990,
    description:'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
    image: 'totebag.png'
  },{
    id: 5,
    name: 'Tote Bag',
    price: 1990,
    description:'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
    image: 'totebag.png'
  },{
    id: 6,
    name: 'Tote Bag',
    price: 1990,
    description:'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
    image: 'totebag.png'
  },{
    id: 7,
    name: 'Tote Bag',
    price: 1990,
    description:'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
    image: 'totebag.png'
  },{
    id: 8,
    name: 'Tote Bag',
    price: 1990,
    description:'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
    image: 'totebag.png'
  },];

  getAll(): Observable<Product[]>{
    return of(this.products);
  }

  getById(id: number): Observable<Product>{
    return of(this.products.find(p =>p.id===id))
  }

}
