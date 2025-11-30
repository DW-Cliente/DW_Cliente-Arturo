import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject, linkedSignal, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';

@Component({
  selector: 'products-page',
  imports: [FormsModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPage {
  products: Product[] = [
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: '/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: '/motherboard.jpg',
      rating: 4,
    },
    {
      id: 3,
      description: 'Hard Drive 4TB',
      available: '2016-11-21',
      price: 56.95,
      imageUrl: '/hdd.jpg',
      rating: 2,
    },
    {
      id: 4,
      description: '16GB DDR5',
      available: '2016-09-15',
      price: 175.95,
      imageUrl: '/ram.jpg',
      rating: 3,
    },
  ];

  showImage = signal(true);
  newProduct: Product = {
    id: 0,
    description: '',
    available: '',
    imageUrl: '',
    rating: 1,
    price: 0,
  };
  nextId = 5;

  count = signal(0);
  doubleCount = linkedSignal(() => this.count() * 2);

  constructor() {
    effect(() => console.log(this.count(), this.doubleCount()));
  }

  #changeDetector = inject(ChangeDetectorRef); // Necessary in new Angular zoneless apps

  toggleImage() {
    this.showImage.update(show => !show);
    this.count.update(v => v + 1);
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('load', () => {
      this.newProduct.imageUrl = reader.result as string;
      this.#changeDetector.markForCheck(); // Necessary in new Angular zoneless apps
    });
  }

  addProduct(form: NgForm) {
    this.newProduct.id = this.nextId++;
    this.products.push({...this.newProduct});
    form.resetForm();
    this.newProduct.imageUrl = '';
  }
}
