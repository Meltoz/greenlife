import {Component, Input} from '@angular/core';
import {Product} from "../../../../core/models/product";
import {RouterLink} from "@angular/router";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink,
    DecimalPipe
  ],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input() product: Product;
}
