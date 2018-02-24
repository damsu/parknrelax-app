import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RentPage } from '../pages/rent/rent';
import { LeasePage } from '../pages/lease/lease';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
import { MessagesPage } from '../pages/messages/messages';
import { MessagesDetailsPage } from '../pages/messages-details/messages-details';
import { RentDetailsPage } from '../pages/rent-details/rent-details';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpModule} from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataServiceProvider } from '../providers/data-service/data-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RentPage,
    LeasePage,
    SettingsPage,
    ProfilePage,
    MessagesPage,
    MessagesDetailsPage,
    RentDetailsPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpModule,
	 HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RentPage,
    LeasePage,
    SettingsPage,
    ProfilePage,
    MessagesPage,
    MessagesDetailsPage,
    RentDetailsPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider
  ]
})
export class AppModule {}