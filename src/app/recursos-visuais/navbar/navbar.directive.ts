import { Directive, ElementRef, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[subNav]'
})
export class NavbarDirective implements OnInit {

  @Output() onIconMenuOpen : EventEmitter<null> = new EventEmitter();
  @Output() onIconMenuClosed : EventEmitter<null> = new EventEmitter();

  @Output() onFullMenuOpen : EventEmitter<null> = new EventEmitter();
  @Output() onFullMenuClosed : EventEmitter<null> = new EventEmitter();

  private trigger : any;
  private menu : any;
  private isMenuOpen : boolean = false;
  private eventtype : any;
  private windowObj = window

  constructor(private el : ElementRef) { }

  private mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor);
		return check;
	}

  ngOnInit() {
    this.trigger = this.el.nativeElement.querySelector( 'a.gn-icon-menu' ); 
    this.menu = this.el.nativeElement.querySelector( 'nav.gn-menu-wrapper' );
    this.eventtype = this.mobilecheck() ? 'touchstart' : 'click';
    this.initEvents();
  }

  /*
  public bodyClickFn () {
    this.closeMenu();
    //removeEventListener( this.eventtype, this.bodyClickFn );
  };
  */

  private openIconMenu() {
    this.menu.classList.add('gn-open-part');
    this.onIconMenuOpen.emit();
  }

  private closeIconMenu() {
    this.menu.classList.remove('gn-open-part');
    this.onIconMenuClosed.emit();
  }

  private openMenu () {
    if( this.isMenuOpen ) return;
    this.trigger.classList.add('gn-selected');
    this.isMenuOpen = true;
    this.menu.classList.add('gn-open-all');
    this.closeIconMenu();
    this.onFullMenuOpen.emit();
  }

  /*
  private closeMenu() {
    if(!this.isMenuOpen) return;
    this.trigger.classList.remove('gn-selected' );
    this.isMenuOpen = false;
    this.menu.classList.remove('gn-open-all' );
    //this.closeIconMenu();
  }
  */

  private initEvents () {

    let self = this;

    // menu desaparece assim que se clica em qlqr parte do DOM
    document.addEventListener('click', ()=>{
      this.trigger.classList.remove('gn-selected' );
      this.isMenuOpen = false;
      this.menu.classList.remove('gn-open-all' );
      this.onFullMenuClosed.emit();
      //removeEventListener( this.eventtype, this.bodyClickFn );
    })

    if( !this.mobilecheck() ) {
      this.trigger.addEventListener( 'mouseover', function(ev : any) { self.openIconMenu(); } );
      this.trigger.addEventListener( 'mouseout', function(ev : any) { self.closeIconMenu(); } );
    
      this.menu.addEventListener( 'mouseover', function(ev : any) {
        self.openMenu(); 
        //document.addEventListener( self.eventtype, self.bodyClickFn ); 
      } );
    }
    this.trigger.addEventListener( this.eventtype, function( ev : any ) {
      ev.stopPropagation();
      ev.preventDefault();
      if( self.isMenuOpen ) {
        self.trigger.classList.remove('gn-selected' );
        self.isMenuOpen = false;
        self.menu.classList.remove('gn-open-all' );
        //self.closeMenu();
        //document.removeEventListener( self.eventtype, self.bodyClickFn );
      }
      else {
        self.openMenu();
       // document.addEventListener( self.eventtype, self.bodyClickFn );
      }
    } );
    this.menu.addEventListener( this.eventtype, function(ev : any) { ev.stopPropagation(); } );
  }

}
