import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  @Input() currentProduct:any ;

  

}
