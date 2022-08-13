import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elem:ElementRef, public render: Renderer2) {
   
   }
   @Input('color') color='';

   @HostListener('mouseenter')
   onMouserEnter=()=>{
    this.render.setStyle(this.elem.nativeElement, 'background-color', this.color )
   }
   @HostListener('mouseleave')
   onMouserLeave=()=>{
    this.render.setStyle(this.elem.nativeElement, 'background-color','' )
   }

}

/**
 * HostListerner:
 * https://stackoverflow.com/questions/37965647/hostbinding-and-hostlistener-what-do-they-do-and-what-are-they-for
 * 
 */


