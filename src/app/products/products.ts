import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { AddProduct } from "../add-product/add-product";

@Component({
  selector: 'app-products',
  imports: [ProductItem, AddProduct],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products = [
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

}
