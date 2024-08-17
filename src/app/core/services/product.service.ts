import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {Observable, of} from "rxjs";
import {Sort} from "../helper/helper";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Bar energétique Greenlife',
      price: 499,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'food.png',
      category: Category.food,
      isNew: true
    }, {
      id: 2,
      name: 'Bar energétique Greenlife',
      price: 499,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'food.png',
      category: Category.food,
      isNew: false
    },  {
      id: 9,
      name: 'Bar energétique Greenlife',
      price: 499,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'food.png',
      category: Category.food,
      isNew: true
    }, {
      id: 10,
      name: 'Bar energétique Greenlife',
      price: 499,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'food.png',
      category: Category.food,
      isNew: false
    },{
      id: 11,
      name: 'Bar energétique Greenlife',
      price: 499,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'food.png',
      category: Category.food,
      isNew: false
    },{
      id: 12,
      name: 'Bar energétique Greenlife',
      price: 499,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'food.png',
      category: Category.food,
      isNew: false
    },{
      id: 3,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'cream.png',
      category: Category.skincare,
      isNew: true,
    }, {
      id: 4,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'cream.png',
      category: Category.skincare,
      isNew: false,
    }, {
      id: 5,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'package-v2.png',
      category: Category.hygiene,
      isNew: true,
    }, {
      id: 6,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'package-v2.png',
      category: Category.hygiene,
      isNew: false,
    }, {
      id: 7,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      category: Category.goodies,
      isNew: true,
    }, {
      id: 8,
      name: 'Tote Bag',
      price: 1990,
      description: 'Un tote bag est toujours pratique peut importe l\'occasion ou le moment',
      image: 'totebag.png',
      category: Category.goodies,
      isNew: false
    },];

  getAllByCategory(category: Category): Observable<Product[]> {
    return of(this.products.filter(p => p.category === category));
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
