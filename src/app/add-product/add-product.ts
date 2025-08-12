import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {
  //Pass up data using output
  // <any> refers to the data type that will be passed up
  @Output() addPressed = new EventEmitter<Product>();

  name:string = "";
  price:number = 0;


  addProduct(){
    // `${}` -> Interpolation ES6 (New JS)
    console.log(`Add button is pressed, user enter ${this.name} 
      and ${this.price}`);

    // Create a new Product
    const newProduct = {"id":0, "name":this.name, "price":this.price};
      // Pass up the data

    this.addPressed.emit(newProduct)

    // Reset back the form to initial value after it is added inside the list
    this.name = "";
    this.price = 0;
  }

}
