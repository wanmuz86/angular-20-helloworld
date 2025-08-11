import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Notes } from "./notes/notes";
import { Footer } from "./footer/footer";
import { Counter } from "./counter/counter";
import { Products } from "./products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Notes, Footer, Counter, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


}
