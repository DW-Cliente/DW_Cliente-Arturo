import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetail {

}
