import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  protected links = [{
    name: 'Home',
  }, {
    name: 'Products',
  },{
    name: 'Goodies',
  },]
}
