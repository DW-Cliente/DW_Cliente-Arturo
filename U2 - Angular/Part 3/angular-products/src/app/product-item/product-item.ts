import { DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../interfaces/product';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'product-item',
  imports: [DatePipe, IntlCurrencyPipe, UpperCasePipe, StarRating],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItem {
  product = input.required<Product>();
  showImage = input(true);
  deleted = output<void>();

  deleteProduct() {
    this.deleted.emit();
  }
}
