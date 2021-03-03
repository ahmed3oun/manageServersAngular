import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  @HostBinding("style.backgroundColor") bg ;
  @HostBinding("style.color") cl


  @HostListener('mouseenter') mouseEnter(){
    this.bg = 'grey'
    this.cl = "white"
  }

  @HostListener('mouseleave') mouseLeave(){
    this.bg=null;
    this.cl=null;
  }
  constructor() { }

}
