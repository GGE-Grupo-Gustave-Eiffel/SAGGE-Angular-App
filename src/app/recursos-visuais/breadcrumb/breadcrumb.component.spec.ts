import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { links_tipos } from 'src/app/utilitarios/tipos';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let list_el : DebugElement;
  let tres_links : Array<links_tipos>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    list_el = fixture.debugElement.query(By.css('.breadcrumb'));
    fixture.detectChanges();
  });

  it('Deve criar uma lista ordenada com três elementos', () => {

    tres_links = [
      {nome : 'link1', link_caminho : 'test1'}, 
      {nome : 'link2', link_caminho : 'test2'},
      {nome : 'link3', link_caminho : 'test3'}
    ]
    component.links = tres_links;

    fixture.detectChanges();
    expect(list_el.nativeElement.childElementCount).toEqual(3);
  });
});
