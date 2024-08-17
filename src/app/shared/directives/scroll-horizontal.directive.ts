import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrollHorizontal]',
  standalone: true
})
export class ScrollHorizontalDirective {

  constructor(private el: ElementRef) {}

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    // Vérifiez si l'élément a un débordement horizontal
    if (this.el.nativeElement.scrollWidth > this.el.nativeElement.clientWidth) {
      if (event.deltaY !== 0 && Math.abs(event.deltaX) < 10) { // Priorise le défilement horizontal si deltaX est faible
        // Empêche le comportement de défilement vertical uniquement si l'on veut défiler horizontalement
        event.preventDefault();
        // Déplace horizontalement l'élément en fonction de la molette
        this.el.nativeElement.scrollLeft += event.deltaY;
      }
    }
  }
}
