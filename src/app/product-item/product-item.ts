import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  @Input() currentProduct:any ;
  @Output() deletePressed = new EventEmitter<number>();
  
  deleteProduct(){
    // Call the Event Eminter
    this.deletePressed.emit(this.currentProduct.id);
  }

}
