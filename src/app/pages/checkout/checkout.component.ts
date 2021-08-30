import { Store } from './../../shared/interfaces/stores.interface';
import { tap } from 'rxjs/operators';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  model = {
    name: 'Juan',
    store: '',
    shippingAdress: '',
    city: '',
  };

  stores: Store[] = [];
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value: boolean) {
    console.log(value);
  }
  onSubmit(): void {}

  private getStores(): void {
    this.dataSvc
      .getStores()
      .pipe(tap((stores: Store[]) => (this.stores = stores)))
      .subscribe();
  }
}
