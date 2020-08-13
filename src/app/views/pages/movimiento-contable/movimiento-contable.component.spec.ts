import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoContableComponent } from './movimiento-contable.component';

describe('MovimientoContableComponent', () => {
  let component: MovimientoContableComponent;
  let fixture: ComponentFixture<MovimientoContableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoContableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
