import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RentPage } from '../pages/rent/rent';
import { RentDetailsPage } from '../pages/rent-details/rent-details';
import { LeasePage } from '../pages/lease/lease';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { MessagesPage } from '../pages/messages/messages';
import { MessagesDetailsPage } from '../pages/messages-details/messages-details';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToRent(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RentPage);
  }goToRentDetails(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RentDetailsPage);
  }goToLease(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LeasePage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProfilePage);
  }goToMessages(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MessagesPage);
  }goToMessagesDetails(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MessagesDetailsPage);
  }
}
