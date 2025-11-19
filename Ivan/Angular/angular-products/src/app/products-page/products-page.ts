import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'products-page',
  imports: [NgClass],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
title = 'Mi lista de productos';
  products: Product[] = [{
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: '/ssd.jpg',
    rating: 5
  },{
    id: 2,
    description: 'LGA1151 Motherboard',
    available: '2016-09-15',
    price: 96.95,
    imageUrl: '/motherboard.jpg',
    rating: 4
  },
  {
    id: 3,
    description: 'Hard Drive 4TB',
    available: '2016-09-21',
    price: 56.95,
    imageUrl: '/hdd.jpg',
    rating: 1
  },
  {
    id: 4,
    description: '32 GB Ram DDR5 gSkill',
    available: '2016-09-20',
    price: 185.50,
    imageUrl: '/ram.jpg',
    rating: 4
  }
];
}
