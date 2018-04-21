import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the NumberBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'number-box',
  templateUrl: 'number-box.html'
})
export class NumberBoxComponent {

  @Input() index: number;
  @Input() number: number;
  @Input() color: string;
  @Input() sign: string;

  markBox() {
    console.log('change sign');
  }
}
