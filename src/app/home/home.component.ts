import {Component, computed, effect, inject} from '@angular/core';
import {LinkComponent} from "../shared/components/link/link.component";
import {HeaderComponent} from "../shared/components/layout/header/header.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {ProductService} from "../core/services/product.service";
import {Router} from "express";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LinkComponent,
    HeaderComponent,
    ProductListComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private productService = inject(ProductService);

  protected products = toSignal(this.productService.getAll())

  protected totalProducts= computed(() => this.products().length);

}
