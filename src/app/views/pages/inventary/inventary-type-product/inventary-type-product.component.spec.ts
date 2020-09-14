import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaryTypeProductComponent } from './inventary-type-product.component';

describe('InventaryTypeProductComponent', () => {
  let component: InventaryTypeProductComponent;
  let fixture: ComponentFixture<InventaryTypeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaryTypeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaryTypeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
