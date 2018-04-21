import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NumberBoxComponent } from './../number-box/number-box';
import { LockoutBoxComponent } from './../lockout-box/lockout-box';

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

  @Input() color: string;
  numberBoxes: Array<NumberBoxComponent>;
  lockoutBox: LockoutBoxComponent;

  constructor() {
    this.numberBoxes = [];

    if (this.color === 'red' || this.color === 'yellow') {
      for (let i = 2; i < 13; i++) {
        let numberBox = new NumberBoxComponent();
        numberBox.index = i - 2;
        numberBox.number = i;
        numberBox.color = this.color;
        this.numberBoxes.push(numberBox);
      }

    } else if (this.color === 'green' || this.color === 'blue') {
      for (let i = 12; i > 2; i--) {
        let numberBox = new NumberBoxComponent();
        numberBox.index = i - 2;
        numberBox.number = i;
        numberBox.color = this.color;
        this.numberBoxes.push(numberBox);
      }
    }

    let lockoutBox = new LockoutBoxComponent();
    lockoutBox.color = this.color;
    this.lockoutBox = lockoutBox;
  }
}
