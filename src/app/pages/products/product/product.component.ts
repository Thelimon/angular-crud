import { ProductI } from './../interfaces/product.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductI;
  @Output() addToCartClick = new EventEmitter<ProductI>();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.addToCartClick.emit(this.product)
  }
}
