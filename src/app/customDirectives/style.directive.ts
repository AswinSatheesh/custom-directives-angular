import { Directive, ElementRef, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element : ElementRef, private renderer : Renderer2) { }

  @Input('appStyle') set style(value : Object){
    // console.log(value);
    let syleEntries = Object.entries(value);
    // console.log(syleEntries);
    for(let item of syleEntries){
      let[cssStyle,val] = item;
      // console.log(cssStyle , val);
      this.renderer.setStyle(this.element.nativeElement,cssStyle,val);
      
    }
  
    
    
  }

}
