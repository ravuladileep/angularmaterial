import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
   }
   @HostBinding('style.border') border: string;
   changecolor(color) {
     this.renderer.setStyle(this.el.nativeElement, 'color', color);
   }
   @HostListener('mouseenter') onMouseOver() {
     // onMouseOver() not predefined
     this.changecolor('red');
     this.border = '5px solid blue';
   }
   @HostListener('mouseleave') onMouseLeve() {
    this.changecolor('white');
    this.border = 'none';
  }

}
