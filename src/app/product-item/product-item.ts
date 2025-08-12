import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [UpperCasePipe, CurrencyPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  // ! means -> It WILL BE PASSED through property binding [] 
  //  It will  NEVER be NULL
  // ? nullable

  @Input() currentProduct!:Product ;
  @Output() deletePressed = new EventEmitter<number>();
  
  deleteProduct(){
    // Call the Event Eminter
    this.deletePressed.emit(this.currentProduct.id);
  }

}
