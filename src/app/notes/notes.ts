import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  imports: [],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {

    // Create a variable of type string = Muzaffar
 name:string = "Muzaffar";
 age:number = 30;
 hungry:boolean = true;
 // Array of numbers number[]
 scores:number[] = [12,17,15,13,10];
 info =  {"name":"Muzaffar", "location":"Bandar Utama",
  "profession":"IT Trainer"
 }
 
}
