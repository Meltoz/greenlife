import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Product} from "../../core/models/product";
import {ProductCardComponent} from "../../shared/components/layout/product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  @Input({required: true}) products: Product[];
}
