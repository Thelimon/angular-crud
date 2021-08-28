import { ShoppingCartService } from './../../shared/services/shopping-cart.service';
import { ProductI } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: ProductI[] | undefined;
  constructor(
    private productSvc: ProductsService,
    private ShoppingCartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productSvc
      .getProducts()
      .pipe(tap((product: ProductI[]) => (this.products = product)))
      .subscribe();
  }

  addToCart(product: ProductI): void {
    this.ShoppingCartSvc.updateCart(product);
  }
}
