import { Component, Input } from '@angular/core';
import { links_tipos } from '../../utilitarios/tipos';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  @Input() links! : Array<links_tipos>;

  constructor() { }

}
