import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShopPage } from '../shop/shop';
import { BuyoutPage } from '../buyout/buyout';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {
     this.navCtrl = navCtrl;

  }

  goToShop(){
  		this.navCtrl.push(ShopPage);
  	}



}

