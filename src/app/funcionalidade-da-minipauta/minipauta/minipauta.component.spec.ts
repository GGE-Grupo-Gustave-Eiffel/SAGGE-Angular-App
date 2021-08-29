import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinipautaComponent } from './minipauta.component';

describe('MinipautaComponent', () => {
  let component: MinipautaComponent;
  let fixture: ComponentFixture<MinipautaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinipautaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinipautaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
