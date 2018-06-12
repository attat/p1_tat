import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {
public item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.item = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  ETgoHome()
  {
    this.navCtrl.push(HomePage);
  }

}
