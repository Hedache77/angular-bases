import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter {{ counter }}</h2>

    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="reset()" >Reset</button>
    <button (click)="increaseBy(-1)" >-1</button>




  `
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy( param: number ): void {
    this.counter += param;
  }

  reset(): void {
    this.counter = 10;
  }


}