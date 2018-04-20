import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GameCardPage } from '../game-card/game-card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateTo(goTo) {
    switch (goTo) {
      case 'gameCard':
        this.navCtrl.push(GameCardPage);
        break;
    }
  }
}
