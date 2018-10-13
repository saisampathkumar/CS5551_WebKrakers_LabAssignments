import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { GoogleVisionServiceProvider } from '../../providers/google-vision-service/google-vision-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public base64Image: string;
  public visionResult : string;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, private camera: Camera,private GV:GoogleVisionServiceProvider) {

  }
  Capture(){
      console.log("Camera is called");
      const options : CameraOptions = {
        quality : 100,
        destinationType : this.camera.DestinationType.DATA_URL,
        sourceType : this.camera.PictureSourceType.CAMERA,
        mediaType: this.camera.MediaType.PICTURE,
        encodingType: this.camera.EncodingType.JPEG,
        allowEdit : true,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false
      };
      this.camera.getPicture(options).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.GV.getText(imageData).subscribe((data:any) =>
        {
          console.log(data);
          if(data != null && data != "undefined" && data.response != null && data.response[0] != null && data.response[0] != "undefined" &&
          data.response[0].textAnnotations != null && data.response[0].textAnnotations[0] != null
          && data.response[0].textAnnotations[0] != "undefined")
          {
            this.visionResult = data.response[0].textAnnotations[0].description;
          }
          else
          {
            let alert = this.alertCtrl.create({
              title: 'Data',
              subTitle: "No Text Detected from the Image !!",
              buttons: ['OK']
            });
          alert.present();
          }
      },(error) => {
        let alert = this.alertCtrl.create({
          title: 'Failure',
          subTitle: error,
          buttons: ['OK']
        });
        alert.present();
        console.log(error);// Error getting the data
      });

      

      });
    };

  ngOnInit() {
    this.Capture();
  }
}
