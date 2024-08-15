import {Component, ElementRef, EventEmitter, HostListener, inject, Output} from '@angular/core';
import {Sort} from "../../core/helper/helper";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './sort.component.html',
  animations: [
  trigger('openClose', [
    state('open', style({
      height: '*',
      opacity: 1,
      overflow: 'hidden',
    })),
    state('closed', style({
      height: '0px',
      opacity: 0,
      overflow: 'hidden',
    })),
    transition('open <=> closed', [
      animate('200ms ease-in-out')
    ]),
  ]),
]
})
export class SortComponent {

  @Output() sort = new EventEmitter<Sort>();

  private eRef = inject(ElementRef);

  protected sortOptions: SortOption[] = [
    {
      name: 'Featured',
      value: Sort.featured,
      select: true,
    }, {
      name: 'New products',
      value: Sort.new,
      select: false,
    }, {
      name: 'Lower price',
      value: Sort.lower,
      select: false,
    }, {
      name: 'Higher price',
      value: Sort.higher,
      select: false
    }];
  protected sortSelected = this.sortOptions.find(x => x.select);
  protected isOpen = false;


  openMenu() {
    this.isOpen = !this.isOpen;
  }


  selectOne(selected: SortOption){
    this.sortOptions.map(el =>{
      if(el.name == selected.name){
        el.select = true;
      }
      else{
        el.select = false;
      }
    });

    this.sort.emit(selected.value);
    this.isOpen = false;
    this.sortSelected = selected;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}

interface SortOption {
  name: string;
  value: Sort;
  select: boolean;
}
