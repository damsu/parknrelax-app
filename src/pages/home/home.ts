import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RentPage } from '../rent/rent';
import { RentDetailsPage } from '../rent-details/rent-details';
import { LeasePage } from '../lease/lease';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToRent(params){
    if (!params) params = {};
    this.navCtrl.push(RentPage);
  }goToRentDetails(params){
    if (!params) params = {};
    this.navCtrl.push(RentDetailsPage);
  }goToLease(params){
    if (!params) params = {};
    this.navCtrl.push(LeasePage);
  }
}
