import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-rent-details',
  templateUrl: 'rent-details.html'
})
export class RentDetailsPage {

    address: any;
    type: any;
    start_time: any;
    end_time: any;
    start_date: any;
    end_date: any;
    price: any;
    username: any;
    description: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    ionViewDidLoad() {
        this.address = this.navParams.get('address');
        this.type = this.navParams.get('type');
        this.start_time = this.navParams.get('start_time');
        this.end_time = this.navParams.get('end_time');
        this.start_date = this.navParams.get('start_date');
        this.end_date = this.navParams.get('end_date');
        this.price = this.navParams.get('price');
        this.username = this.navParams.get('username');
        this.description = this.navParams.get('description');
    }
  
}
