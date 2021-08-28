import { ProductI } from './../interfaces/product.interface';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
