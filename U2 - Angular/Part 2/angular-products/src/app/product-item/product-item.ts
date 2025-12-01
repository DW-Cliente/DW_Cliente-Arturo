import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { IntlCurrencyPipe } from '../pipes/intl-currency-pipe';

@Component({
  selector: 'product-item',
  imports: [DatePipe, IntlCurrencyPipe, UpperCasePipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItem {
  product = signal<Product>({
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: '/ssd.jpg',
    rating: 5,
  });
  showImage = signal(true);

  deleteProduct() { /* Vacía por ahora */}
}
