import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EncodeBase64Directive } from '../directives/encode-base64-directive';
import { Product } from '../interfaces/product';

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
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  };
  nextId = 5;

  addProduct(form: NgForm) {
    this.newProduct.id = this.nextId++;
    const newProduct = { ...this.newProduct };
    this.added.emit(newProduct);
    form.resetForm();
    this.newProduct.imageUrl = '';
  }
}
