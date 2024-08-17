import {Component, Input} from '@angular/core';
import {Product} from "../../../../core/models/product";
import {RouterLink} from "@angular/router";
import {DecimalPipe, NgClass} from "@angular/common";
import {style, trigger, state, transition, animate} from "@angular/animations";


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink,
    DecimalPipe,
    NgClass
  ],
  templateUrl: './product-card.component.html',
  animations: [
    trigger('slideInOut', [
      state('out', style({
        transform: 'translateY(100px)',
      })),
      state('in', style({
        transform: 'translateY(-20%)',
      })),
      transition('out <=> in', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class ProductCardComponent {

  @Input() product: Product;
  state = 'out';

  onMouseEnter() {
    this.state = 'in';
  }

  onMouseLeave() {
    this.state = 'out';
  }

}
