import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public city : String;
  public searchKeyword : String;
  public tips: Observable<any>;
  public url : any;
  constructor(public navCtrl: NavController,private http: HttpClient) {

  }
  getdetails(){

    this.city = 'Kansas city';
    this.searchKeyword = 'Airport';
    this.url = 'https://api.foursquare.com/v2/tips/search?client_id=NTAUYPH1YIVXKZO4IHAFMBEQKJGDZ5URV2NRJJXYK2ZTLZZE&client_secret=FZNYKYV4JDBSZMKSPQNHFDZWMFRR114WALWHRPGGV3YOTBXR&v=20160215&limit=5&near='+this.city+'&query='+this.searchKeyword;
    console.log(this.url);
    this.http.get(this.url)
      .subscribe(
        (res:Observable<any>)=>{
          this.tips = res.response.tips;
          console.log(this.tips);
        }
      )
    }
  ngOnInit() {
      this.getdetails();
    }
}
