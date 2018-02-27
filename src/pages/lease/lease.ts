import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-lease',
  templateUrl: 'lease.html'
})
export class LeasePage {
  address: any;
  startDate:any;
  endDate:any;
  startTime: any;
  endTime: any;
  result: any;
  price: any;
  constructor(public navCtrl: NavController,public http: HttpClient) {
  }
  submitTheForm(){
    this.http.post('https://parking-app-server.herokuapp.com/api/add-new-place/',
    {
      "address":this.address,
      "type":"long-term",
      "price":this.price,
      "start_date":this.startDate,
      "end_date":this.endDate,
      "start_time":this.startTime,
      "end_time":this.endTime,
      "username":"DummyDemoUser",
      "description":"New description here !"
    },
    {
      headers: { 'Content-Type': 'application/json' }
    })
            .subscribe(data => {this.result = data;});
    this.navCtrl.goToRoot(this.result);
  }
}
