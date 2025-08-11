import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  // @Input() initial:number = 0;
  @Input() count:number = 0;
  @Input() name :string = "My Counter"
  @Input() min :number = -10;
  @Input() max:number = 10;

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }
  
  reset(){
    this.count = 0;
  }

}
