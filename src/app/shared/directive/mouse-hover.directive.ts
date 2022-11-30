import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {

  constructor(private el : ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseover') onHover(){
    let part  = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'block');
  }

}
