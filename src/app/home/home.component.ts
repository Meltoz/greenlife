import {Component, inject, OnInit} from '@angular/core';
import {LinkComponent} from "../shared/components/link/link.component";
import {HeaderComponent} from "../shared/components/layout/header/header.component";
import {ProductService} from "../core/services/product.service";
import {SortComponent} from "./sort/sort.component";
import {FooterComponent} from "../shared/components/layout/footer/footer.component";
import {Category} from "../core/models/category";
import {Product} from "../core/models/product";
import {forkJoin, map} from "rxjs";
import {ProductCardComponent} from "../shared/components/layout/product-card/product-card.component";
import {FilterComponent} from "./filter/filter.component";
import {ScrollHorizontalDirective} from "../shared/directives/scroll-horizontal.directive";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LinkComponent,
    HeaderComponent,
    SortComponent,
    FooterComponent,
    ProductCardComponent,
    FilterComponent,
    ScrollHorizontalDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);

  protected categories = [Category.food, Category.skincare, Category.hygiene, Category.goodies];


  protected productsByCategory: { [key: string]: Product[] } = {} ;


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
