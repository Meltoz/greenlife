import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
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
