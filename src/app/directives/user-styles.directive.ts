import { Directive, HostBinding, HostListener, Input, OnInit,  } from '@angular/core';

@Directive({
  selector: '[appUserStyles]'
})
export class UserStylesDirective implements OnInit {

  @Input ('appUserStyles') hover: string = 'transparent'
  @Input () default: string = 'whitesmoke'
  @HostBinding('style.backgroundColor')background!: string ;
  @HostBinding('style.color')color!: string ;

  constructor() { }

  ngOnInit() {
    this.color = this.default
  }

  @HostListener('mouseenter') mouseEnter() {
    this.color = this.hover
  }

  @HostListener('mouseleave') mouseLeave() {
    this.color = this.default
  }

}
