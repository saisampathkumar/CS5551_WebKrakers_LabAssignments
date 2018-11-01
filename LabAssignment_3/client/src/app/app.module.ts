import { MbscModule } from '@mobiscroll/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler, NavController, NavParams } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/chat/chat';
import { DialogUserComponent } from '../pages/dialog-user/dialog-user.component';
import { EventsHomePage } from '../pages/events-home/events-home';
import { EventsRegisterPage } from '../pages/events-register/events-register';
import { EventsJoinPage } from '../pages/events-join/events-join';
import { EventPage } from '../pages/event/event';
import { ReportsPage } from '../pages/reports/reports';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//firebase
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";

//barcodescanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MaterialModule } from '../shared/material/material.module';
import { SocketService } from '../shared/services/socket.service';
// Initialize Firebase
export const firebaseConfig =
{
  // insert config here
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    AboutPage,
    ChatPage,
    DialogUserComponent,
    EventsHomePage,
    EventsRegisterPage,
    EventsJoinPage,
    EventPage,
    ReportsPage,
    TabsPage
  ],
  imports: [ 
    MbscModule, 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    AboutPage,
    ChatPage,
    DialogUserComponent,
    EventsHomePage,
    EventsRegisterPage,
    EventsJoinPage,
    EventPage,
    ReportsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, 
    SocketService,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
