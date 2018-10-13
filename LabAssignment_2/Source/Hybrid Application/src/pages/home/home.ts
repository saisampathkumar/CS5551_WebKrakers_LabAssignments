import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { client_id,client_secret } from '../../config';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public city : String;
  public searchKeyword : String;
  public tips: Observable<any>;
  public url : any;
  client_id = client_id;
  client_secret = client_secret;
  constructor(public navCtrl: NavController,private http: HttpClient) {

  }
  getdetails(){
    this.url = 'https://api.foursquare.com/v2/tips/search?client_id='+this.client_id+'&client_secret='+this.client_secret+'&v=20160215&limit=5&near='+this.city+'&query='+this.searchKeyword;
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.tips = res.response.tips;
          console.log(this.tips);
        }
      )
    }
  // ngOnInit() {
  //     this.getdetails();
  //   }
}
