import { Component } from '@angular/core';
import {LinkComponent} from "../shared/components/link/link.component";
import {HeaderComponent} from "../shared/components/layout/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LinkComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
