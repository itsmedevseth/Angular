import { Directive, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() backgroundColor: string ='green';
  @Input() foregroundColor: string ='blue';
  @Input() hoverBackgroundColor: string ='gray';
  @Input() hoverForegroundColor: string ='orange';
  

  constructor() { }
  ngOnInit(){
  }
  

}
