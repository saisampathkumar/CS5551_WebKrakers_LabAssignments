import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { EventsRegisterPage } from '../events-register/events-register';
import { EventsJoinPage } from '../events-join/events-join';
import { EventPage } from '../event/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-events-home',
  templateUrl: 'events-home.html',
})
export class EventsHomePage {
  
  public tap: number = 2;
  public like: number = 11;
  public created_by:string;
  public url:string;
  public result:Observable<any>;

  constructor(public navCtrl: NavController,private http: HttpClient,private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.created_by = user.email;
      else this.created_by = 'admin';
      this.loadevents(this.created_by);
    })
  }
  refresh() {
    this.loadevents(this.created_by);
  }
  addEvent(){
    this.navCtrl.push(EventsRegisterPage);
  }
  joinEvent(){
    this.navCtrl.push(EventsJoinPage);
  }
  event(ID:string,sdate:Date,adrsOne:string,zip:number){
    this.navCtrl.push(EventPage,{
      id:ID,
      sdate:sdate,
      adrsOne:adrsOne,
      zip:zip
    });
  }
  loadevents(name:string){
    this.url = '/events/search/users?user=true&searchtext='+name;
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.result = res.data;
        }
      )
  }
  deleteEvent(_id:any){
    this.url = '/events/delete?id='+_id;
    this.http.delete(this.url)
      .subscribe(
        (res:any)=>{
          this.loadevents(this.created_by);
          alert(res.message);
        }
      )
  }
  tapEvent(e) {
    this.tap++
  }

  likeEvent(e){
    this.like++
  }

}

