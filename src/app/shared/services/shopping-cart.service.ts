import { ProductI } from './../../pages/products/interfaces/product.interface';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  products: ProductI[] = [];

  private cartSubject = new BehaviorSubject<ProductI[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private quantitySubject = new BehaviorSubject<number>(0);

  get totalActions$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  get quantityActions$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  get cartActions$(): Observable<ProductI[]> {
    return this.cartSubject.asObservable();
  }

  public updateCart(product: ProductI): void {
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
  }

  private addToCart(product: ProductI): void {
    const isProductInCart = this.products.find(({ id }) => id === product.id);
    if (isProductInCart) {
      isProductInCart.qty += 1;
    } else {
      this.products.push({ ...product, qty: 1 });
    }
    this.cartSubject.next(this.products);
  }

  private quantityProducts(): void {
    const quantity = this.products.reduce((acc, prod) => (acc += prod.qty), 0);
    this.quantitySubject.next(quantity);
  }

  private calcTotal(): void {
    const total = this.products.reduce(
      (acc, prod) => (acc += prod.price * prod.qty),
      0
    );
    this.totalSubject.next(total);
  }
}
