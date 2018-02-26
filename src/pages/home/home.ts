import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RentPage } from '../rent/rent';
import { RentDetailsPage } from '../rent-details/rent-details';
import { LeasePage } from '../lease/lease';
import { HttpClient } from '@angular/common/http';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any;
  constructor(
    public navCtrl: NavController,
    private dataServiceProvider: DataServiceProvider,
    public http: HttpClient,
  ) {
  }
  initializeItems() {
  this.http.get('https://parking-app-server.herokuapp.com/api/my-places')
          .subscribe(data => {this.data = data;});
  }

  ionViewDidLoad() {
    this.initializeItems();
  }
  goToRent(params){
    if (!params) params = {};
    this.navCtrl.push(RentPage);
  }goToRentDetails(params){
    if (!params) params = {};
    this.navCtrl.push(RentDetailsPage, params);
  }goToLease(params){
    if (!params) params = {};
    this.navCtrl.push(LeasePage);
  }
}
