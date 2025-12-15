import { ChangeDetectionStrategy, Component, DestroyRef, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64Directive } from '../directives/encode-base64-directive';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm {
  added = output<Product>();

  newProduct: Product = {
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  };

  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);

  addProduct(form: NgForm) {
    this.#productsService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((product) => {
        this.added.emit(product);
        form.resetForm();
        this.newProduct.imageUrl = '';
      });
  }
}
