import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EncodeBase64Directive } from '../directives/encode-base64-directive';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products-service';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm {
  newProduct: Product = {
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  };

  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);

  addProduct() {
    this.#productsService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => this.#router.navigate(['/products']));
  }
}
