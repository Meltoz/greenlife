import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {Observable, of} from "rxjs";
import {Sort} from "../helper/helper";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      isNew: true
    }, {
      id: 2,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      isNew: false
    }, {
      id: 3,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      isNew: true,
    }, {
      id: 4,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      isNew: false,
    }, {
      id: 5,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      isNew: true,
    }, {
      id: 6,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      isNew: false,
    }, {
      id: 7,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      isNew: true,
    }, {
      id: 8,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      isNew: false
    },];

  getAll(): Observable<Product[]> {
    return of(this.products);
  }

  getById(id: number): Observable<Product> {
    return of(this.products.find(p => p.id === id))
  }


  filterAndSort(filter: string, order: Sort) {

    let products;

    switch (order) {
      case Sort.new: {
        products = this.products.sort((a, b) => {
          if (a.isNew === b.isNew) {
            return 0;
          } else if (a.isNew) {
            return -1
          } else {
            return 1
          }
        })
        break;
      }
      case Sort.lower:{
        products = this.products.sort((a, b) =>{
          if(a.price > b.price){
            return 1;
          }
          else if(a.price < b.price){
            return -1;
          }
          else{
            return 0;
          }
        })
        break;
      }
      case Sort.higher: {
        products = this.products.sort((a, b) =>{
          if(a.price < b.price){
            return 1;
          }
          else if(a.price > b.price){
            return -1;
          }
          else{
            return 0;
          }
        })
      }
    }

    return products;
  }


}
