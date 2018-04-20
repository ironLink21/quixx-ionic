import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameCardPage } from './game-card';

@NgModule({
  declarations: [
    GameCardPage,
  ],
  imports: [
    IonicPageModule.forChild(GameCardPage),
  ],
})
export class GameCardPageModule {}
