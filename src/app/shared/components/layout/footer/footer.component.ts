import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  protected links = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Products',
    href: '#greenproducts'
  },{
    name: 'Goodies',
    href: '#greenGoodies'
  },]
}
