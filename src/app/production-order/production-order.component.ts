import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-production-order',
  templateUrl: './production-order.component.html',
  styleUrls: ['./production-order.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ProductionOrderComponent {
  formData = {
    material: 'XYZ',
    productionPlant: '1100',
    planningPlant: '1100',
    orderType: 'ZP01',
    prdOrderRef: '',
    item: '',
    totalQty: '100',
    delivered: '0',
    schedulingType: '2 Backwards',
    location: '',
    batch: '',
    stkSeg: '',
    endDate: '',
    endTime: '00:00',
    startDate: '',
    startTime: '00:00',
    releaseDate: '',
    releaseTime: '00:00',
    salesOrder: '5100000229',
    salesOrderItem: '10',
    salesOrderSchedule: '0',
    reqDDate: '05.07.2024',
    orderingParty: '1000975',
    orderingPartyName: 'BIRLA CORPORATION LIMITED',
    address: 'P.O. BIRLA VIKAS, SATNA',
  };

  activeTab = 'general';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}