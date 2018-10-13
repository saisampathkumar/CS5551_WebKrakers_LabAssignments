import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { googleCloudVisionAPIKey } from '../../config';
/*
  Generated class for the GoogleVisionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleVisionServiceProvider {

  constructor(public http: HttpClient) {}
  getText(base64Image) {
    const body = {
      "requests": [
        {
          "image": {
            "content": base64Image
          },
          "features": [
            {
              "type": "TEXT_DETECTION",
               "maxResults":10

            }
          ]
        }
      ]
    }
    return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + googleCloudVisionAPIKey, body);
  }
}
