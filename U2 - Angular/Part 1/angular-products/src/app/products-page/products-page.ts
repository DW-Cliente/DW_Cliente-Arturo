import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'products-page',
  imports: [NgClass],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  showImage = true;

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

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
