import { Component } from '@angular/core';
import { ProductionOrderComponent } from './production-order/production-order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductionOrderComponent],
  template: '<app-production-order></app-production-order>'
})
export class AppComponent { }