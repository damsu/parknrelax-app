import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { MessagesDetailsPage } from '../messages-details/messages-details';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }
  goToMessages(params){
    if (!params) params = {};
    this.navCtrl.push(MessagesPage);
  }goToMessagesDetails(params){
    if (!params) params = {};
    this.navCtrl.push(MessagesDetailsPage);
  }
}
