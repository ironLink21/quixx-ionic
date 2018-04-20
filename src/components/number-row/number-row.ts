import { Component } from '@angular/core';

/**
 * Generated class for the NumberRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'number-row',
  templateUrl: 'number-row.html'
})
export class NumberRowComponent {

  text: string;

  constructor() {
    console.log('Hello NumberRowComponent Component');
    this.text = 'Hello World';
  }

}
