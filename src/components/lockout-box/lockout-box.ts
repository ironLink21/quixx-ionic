import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the LockoutBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lockout-box',
  templateUrl: 'lockout-box.html'
})
export class LockoutBoxComponent {

  icon: string;
  @Input() color: string;

  constructor() {
    this.icon = `${this.color}-lockout`;
  }

  lockout() {
    console.log('lock row');
  }
}
