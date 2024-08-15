import {Component, computed, inject, OnInit} from '@angular/core';
import {LinkComponent} from "../shared/components/link/link.component";
import {HeaderComponent} from "../shared/components/layout/header/header.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {ProductService} from "../core/services/product.service";
import {SortComponent} from "./sort/sort.component";
import {FooterComponent} from "../shared/components/layout/footer/footer.component";
import {Category} from "../core/models/category";
import {Product} from "../core/models/product";
import {forkJoin, map} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LinkComponent,
    HeaderComponent,
    ProductListComponent,
    SortComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);

  protected categories = [Category.food, Category.skincare, Category.hygiene, Category.goodies];


  protected productsByCategory: { [key: string]: Product[] } ;


  ngOnInit() {
    const requests  = this.categories.map(category =>
      this.productService.getAllByCategory(category).pipe(
        map(products => ({ category, products }))
      ))

    forkJoin(requests).subscribe(results => {
      results.forEach(result => {
        this.productsByCategory[result.category] = result.products;
      });
    });
  }

}
