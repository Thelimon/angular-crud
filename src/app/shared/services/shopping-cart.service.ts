import { ProductI } from './../../pages/products/interfaces/product.interface';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  products: ProductI[] = [];

  private cartSubject = new Subject<ProductI[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

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
    this.products.push(product);
    this.cartSubject.next(this.products);
  }

  private quantityProducts(): void {
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }

  private calcTotal(): void {
    const total = this.products.reduce((acc, prod) => (acc += prod.price), 0);
    this.totalSubject.next(total);
  }
}
