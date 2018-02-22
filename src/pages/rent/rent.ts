import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RentDetailsPage } from '../rent-details/rent-details';

@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html'
})
export class RentPage {

  constructor(public navCtrl: NavController) {
  }
  goToRentDetails(params){
    if (!params) params = {};
    this.navCtrl.push(RentDetailsPage);
  }
}
