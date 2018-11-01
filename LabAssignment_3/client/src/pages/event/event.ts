import { Component } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import {BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  options: BarcodeScannerOptions;
  encodeText: string='';
  encodedData:any={};
  scannedData:any={};

  public eventId:Number;
  public eventName:Number;
  public eventDate:Date;
  public eventaddress:string;
  public eventzipcode:Number;
  url: string;
  public myInput: string;
  public drugName: string;
  public drugDescription: string;
  public classificationClass: string;
  public classificationSubclass: string;
  public dosageForm: string;
  public strength: string;
  public absorption: string;
  public quantityWhenNew: string;
  public quantityCollected: string;
  result:Observable<any>;
  message: string;
  public created_by:string;
  constructor(public navCtrl: NavController, private alert: AlertController,
    public scanner:BarcodeScanner  ,public params:NavParams,private afAuth: AngularFireAuth,private http: HttpClient) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.created_by = user.email;
      else this.created_by = 'admin';
    })
    this.eventId = params.get('id');
    this.eventDate = params.get('sdate');
    this.eventaddress = params.get('adrsOne');
    this.eventzipcode = params.get('zip');
    this.eventName =  this.eventId;
  }
  isReadonly() {
    return this.isReadonly;   //return true/false 
  }
  
  scan(){
    this.options={
      prompt: 'scan your barcode'
    }
      this.scanner.scan(this.options).then((data)=>{
        this.scannedData=data;
      },(err)=>{
        this.showAlert(err);
      })
  }

  showAlert(message) {
    let alert = this.alert.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

detect(){
  if (this.myInput != ""){
      this.url = '/drug/search?searchtext='+this.myInput;
      this.http.get(this.url)
        .subscribe(
          (res:any)=>{
            this.result = res.data;
            console.log(this.result)
            if(this.result){
              this.drugName = this.result[0].name?this.result[0].name:'';
              this.drugDescription = this.result[0].description?this.result[0].description:'';
              this.classificationClass = this.result[0].classification?(this.result[0].classification.class?this.result[0].classification.class:''):'';
              this.classificationSubclass = this.result[0].classification?(this.result[0].classification.subclass?this.result[0].classification.subclass:''):'';
              this.dosageForm = this.result[0].dosages?(this.result[0].dosages.dosage.form?this.result[0].dosages.dosage.form:''):'';
              this.strength = this.result[0].dosages?(this.result[0].dosages.dosage.strength?this.result[0].dosages.dosage.strength:''):'';
              this.absorption = this.result[0].absorption?this.result[0].absorption:'';
            }        
          }
        )
  }
}

drugData(){
  if (this.myInput != "" && this.drugName !="" && this.drugDescription !="" ){
  this.url = '/product/create';
    this.http.post(this.url,
      {
      drugName: this.drugName,
      drugDescription: this.drugDescription,
      classificationClass: this.classificationClass,
      classificationSubclass: this.classificationSubclass,
      dosageForm: this.dosageForm,
      strength:   this.strength,
      absorption: this.absorption,
      quantityWhenNew: this.quantityWhenNew,
      quantityCollected:this.quantityCollected,
      eventName: this.eventName,
      eventdate: this.eventDate,
      eventaddress: this.eventaddress,
      eventzipccode: this.eventzipcode

      }
      ).subscribe(
          (res:any)=>{
          this.message = res.message;
          alert(this.message);
          }
        )
    }
  }
}

