import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderComponent } from './production-order.component';

describe('ProductionOrderComponent', () => {
  let component: ProductionOrderComponent;
  let fixture: ComponentFixture<ProductionOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
