import { ChangeDetectionStrategy, Component, inject, linkedSignal, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItem } from '../product-item/product-item';
import { ProductsService } from '../services/products-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'products-page',
  imports: [ReactiveFormsModule, ProductItem],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPage {
  showImage = signal(true);

  searchControl = new FormControl('', { nonNullable: true });
  search = toSignal(
    this.searchControl.valueChanges.pipe(debounceTime(600), distinctUntilChanged()),
    { initialValue: '' },
  );

  #productsService = inject(ProductsService);
  productsResource = this.#productsService.getProductsResource(this.search);

  products = linkedSignal(() =>
    this.productsResource.hasValue() ? this.productsResource.value().products : [],
  );

  toggleImage() {
    this.showImage.update((show) => !show);
  }

  deleteProduct(product: Product) {
    this.products.update((products) => products.filter((p) => p !== product));
  }
}
