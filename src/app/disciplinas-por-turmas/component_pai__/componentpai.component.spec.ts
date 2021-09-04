import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentpaiComponent } from './componentpai.component';

describe('ComponentpaiComponent', () => {
  let component: ComponentpaiComponent;
  let fixture: ComponentFixture<ComponentpaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentpaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentpaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
