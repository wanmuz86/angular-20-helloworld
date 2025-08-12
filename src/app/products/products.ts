import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { AddProduct } from "../add-product/add-product";
import { Product } from '../product';

@Component({
  selector: 'app-products',
  imports: [ProductItem, AddProduct],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{

  // Implicit declaration vs Explicit declaration
  name = "Muzaffar"; // It will take initial data type

  // Declaring it explicitly to be type-safe
  products : Product[] = [
    {
      id:1, 
      name:"Iphone 16",
      price:3999
    },
    {
      id:2,
      name:"Iphone 16 Pro",
      price:4999
    },
    {
      id:3,
      name:"Mac Book Pro",
      price:6999
    }
  ]

  ngOnInit(): void {
    console.log("TEST: ngOnInit works.. this will be called after component loaded")
  }

  handleAddPressed(newProduct:Product){
    // push - add it to the end of the arrray
    // ? : -> Ternary operator -> If the products length == 0, id = 1 , else : 
    newProduct.id = this.products.length === 0 ? 1 : this.products[this.products.length-1].id +1
    this.products.push(newProduct);
  }

  handleDelete(productId:number){
    // Delete the item using filter (eq to Java Stream method / filter)
    this.products = this.products.filter(val=> val.id !== productId);
  }

}
