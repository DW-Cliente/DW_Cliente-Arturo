import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/leave-page-guard';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64-directive';
import { ProductsService } from '../services/products-service';
import { minDateValidator } from '../../shared/validators/min-date.validator';

@Component({
  selector: 'product-form',
  imports: [ReactiveFormsModule, EncodeBase64Directive],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductForm implements CanComponentDeactivate {
  saved = false;
  readonly today = new Date().toISOString().split('T')[0];

  #productsService = inject(ProductsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);
  #fb = inject(NonNullableFormBuilder);

  productForm = this.#fb.group({
    description: ['', [Validators.required, Validators.minLength(5)]],
    price: [0, [Validators.required, Validators.min(1)]],
    available: ['', [Validators.required, minDateValidator(this.today)]],
    imageUrl: ['', [Validators.required]],
  });

  imageBase64 = '';

  addProduct() {
    this.#productsService
      .insertProduct({ ...this.productForm.getRawValue(), imageUrl: this.imageBase64 })
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => {
        this.saved = true;
        this.#router.navigate(['/products']);
      });
  }

  canDeactivate() {
    if (this.saved || this.productForm.pristine) {
      return true;
    } else {
      return confirm('Are you sure you want to leave this page?');
    }
  }

  getValidationClasses(model: FormControl) {
    return {
      'is-valid': model.touched && model.valid,
      'is-invalid': model.touched && !model.valid,
    };
  }
}
