import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagesDetailsPage } from '../messages-details/messages-details';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  constructor(public navCtrl: NavController) {
  }
  goToMessagesDetails(params){
    if (!params) params = {};
    this.navCtrl.push(MessagesDetailsPage);
  }
}
