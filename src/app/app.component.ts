import { Component } from '@angular/core';
@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  export class AppComponent {
  textOfComp1 = 'Hello world!';
  textOfComp5 = 'Hello world! 5 ';
  textOfComp51 = 'Hello world! 5.1';
  textOfComp52 = 'Hello world! 5.2';
  textOfComp53 = 'Hello world! 5.3';

  changeComponent1(input: string) {
    this.textOfComp1 = input;
  }
  changeComponent5(input: string) {
    this.textOfComp5 = input;
  }
  changeComponent51(input: string) {
    this.textOfComp51 = input;
  }
  changeComponent52(input: string) {
    this.textOfComp52 = input;
  }
  changeComponent53(input: string) {
    this.textOfComp53 = input;
  }
}
