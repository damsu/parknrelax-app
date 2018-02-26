import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RentDetailsPage } from '../rent-details/rent-details';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html',
  providers: [HttpClientModule]
})
export class RentPage {
data: any;
loadedData: any;
filter: any;
  constructor(
  public navCtrl: NavController,
  private dataServiceProvider: DataServiceProvider,
  public http: HttpClient,
  ) {
  }
  initializeItems() {
	this.http.get('https://parking-app-server.herokuapp.com/api/parking-places')
          .subscribe(data => {this.data = data;
		  this.completeValidCall()});
  }

  completeValidCall() {
	this.loadedData = this.data;
	this.filter = 'instant';
	this.getItemsByType(this.filter);
}

  ionViewDidLoad() {
    this.initializeItems();
  }

  goToRentDetails(params){
    if (!params) params = {};
    this.navCtrl.push(RentDetailsPage, params);
  }

  getItemsByAddress(searchbar) {
  // Reset items back to all of the items
  this.data = this.loadedData;
  this.getItemsByType(this.filter);

  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;


  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.data = this.data.filter((v) => {
    if(v.address && q) {
      if (v.address.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });
}

getItemsByType(filter) {
  // Reset items back to all of the items
  this.data = this.loadedData;
  this.filter = filter;

  // set q to the value of the searchbar
  var q = filter;


  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.data = this.data.filter((v) => {
    if(v.type && q) {
      if (v.type.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });
}
}
