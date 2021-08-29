import { ShoppingCartService } from './../../../shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  total$ = this.shoppinCartSvc.totalActions$;
  cart$ = this.shoppinCartSvc.cartActions$;
  constructor(private shoppinCartSvc: ShoppingCartService) {}

  ngOnInit(): void {}
}
