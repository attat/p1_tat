import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';
import { ShopPage } from '../shop/shop';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

 goToBuyout()
   {
      this.navCtrl.push(homePage);
   }

 randomFunc()
 {
   echo "what is going on";
 }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
