import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }
  data: any;
  getParkingPlaces(){
	  
    return new Promise(resolve => {
        this.http.get('assets/parking_places.json')
          .subscribe(data => this.data = data);
    });
  }

}
