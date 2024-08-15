import {Component, ElementRef, HostListener, inject} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '*',
        opacity: 1,
        overflow: 'hidden',
      })),
      state('closed', style({
        width:'0%',
        opacity: 0,
        overflow: 'hidden',
      })),
      transition('open <=> closed', [
        animate('200ms ease-in-out')
      ])

    ])
  ]
})
export class FilterComponent {
  protected isOpen = false;

  private eRef = inject(ElementRef);

  toggleFilter() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
