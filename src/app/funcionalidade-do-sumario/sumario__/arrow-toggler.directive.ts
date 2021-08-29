import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appArrowToggler]'
})
export class ArrowTogglerDirective {

  @HostBinding('class.open') classe! : boolean;
  @HostListener('click') onClick() {
    this.classe === true ? this.classe = false : this.classe = true;
  }
}
