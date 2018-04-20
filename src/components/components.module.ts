import { NgModule } from '@angular/core';
import { NumberBoxComponent } from './number-box/number-box';
import { NumberRowComponent } from './number-row/number-row';
@NgModule({
	declarations: [NumberBoxComponent,
    NumberRowComponent],
	imports: [],
	exports: [NumberBoxComponent,
    NumberRowComponent]
})
export class ComponentsModule {}
