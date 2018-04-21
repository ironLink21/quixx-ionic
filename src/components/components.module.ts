import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { NumberBoxComponent }   from './number-box/number-box';
import { NumberRowComponent }   from './number-row/number-row';
import { LockoutBoxComponent }  from './lockout-box/lockout-box';
@NgModule({
  declarations: [
    NumberBoxComponent,
    NumberRowComponent,
    LockoutBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberBoxComponent,
    NumberRowComponent,
    LockoutBoxComponent
  ]
})
export class ComponentsModule {}
