import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/leave-page-guard';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64-directive';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products-service';
import { MinDate } from '../../shared/directives/min-date';

@Component({
  selector: 'product-form',
  imports: [FormsModule, EncodeBase64Directive, MinDate],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm implements CanComponentDeactivate {
  newProduct: Product = {
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  };

  saved = false;
  readonly today = new Date().toISOString().split('T')[0];

  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);

  addProduct() {
    this.#productsService
      .insertProduct(this.newProduct)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.#router.navigate(['/products']);
        this.saved = true;
      });
  }

  canDeactivate() {
    if (this.saved) {
      return true;
    } else {
      return confirm('Are you sure you want to leave this page?');
    }
  }

  getValidationClasses(model: NgModel) {
    return {
      'is-valid': model.touched && model.valid,
      'is-invalid': model.touched && !model.valid,
    };
  }
}
