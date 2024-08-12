import { Component } from '@angular/core';
import {LinkComponent} from "../shared/components/link/link.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LinkComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
