import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  quantity$ = this.ShoppingCartSvc.quantityActions$;
  total$ = this.ShoppingCartSvc.totalActions$;
  cart$ = this.ShoppingCartSvc.cartActions$;

  constructor(private ShoppingCartSvc: ShoppingCartService) {}
}
