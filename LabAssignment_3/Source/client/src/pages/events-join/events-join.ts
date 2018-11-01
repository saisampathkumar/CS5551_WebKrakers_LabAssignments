import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//firebase
import {AngularFireAuth} from "angularfire2/auth";
import { MbscFormOptions } from '@mobiscroll/angular';
import { ViewChild } from '@angular/core';

@Component({

  selector: 'page-events-join',
  templateUrl: 'events-join.html',

})
export class EventsJoinPage {
  
  @ViewChild('run1')
  r1: any;
  @ViewChild('run2')
  r2: any;
  @ViewChild('run3')
  r3: any;

  formSettings: MbscFormOptions = {
    theme: 'ios'
}

closeAll() {
  this.r1.instance.hide();
  this.r2.instance.hide();
  this.r3.instance.hide();
}

toggleFirst() {
  this.r1.instance.toggle();
}

  public created_by:string;
  public url:string;
  public result:Observable<any>;
  public message:Observable<any>;
  constructor(public navCtrl: NavController,private http: HttpClient,private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.created_by = user.email;
      else this.created_by = 'admin';
      this.loadevents(this.created_by);
    })
  }
  loadevents(name:string){
    this.url = '/events/search/users?user=false&searchtext='+name;
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.result = res.data;
          console.log(this.result);
        }
      )
  }
  joinTheEvent(name:string){
    this.url = '/event/update/users';
    this.http.put(this.url,{
      event_name:name,
      user:this.created_by
    })
      .subscribe(
        (res:any)=>{
          this.message = res.message;
          this.loadevents(this.created_by);
          alert(this.message);
        }
      )
  }
}
