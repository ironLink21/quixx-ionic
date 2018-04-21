import { Component, OnInit }    from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { NumberRowComponent }   from './../../components/number-row/number-row';
/**
 * Generated class for the GameCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-card',
  templateUrl: 'game-card.html',
})
export class GameCardPage implements OnInit {

  numberRows: Array<NumberRowComponent>;

  constructor(public navCtrl: NavController, public navParams: NavParams/*, private screenOrientation: ScreenOrientation*/) {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
    this.numberRows = [];

    this.numberRows.push();

    let yellowRow = new NumberRowComponent();
    yellowRow.color = 'yellow';
    this.numberRows.push(yellowRow);

    let greenRow = new NumberRowComponent();
    greenRow.color = 'green';
    this.numberRows.push(greenRow);

    let blueRow = new NumberRowComponent();
    blueRow.color = 'blue';
    this.numberRows.push(blueRow);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameCardPage');
  }
}