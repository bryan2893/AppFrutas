import { Injectable } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera:Camera) { }

  async getBase64Piture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: 0,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    try{
      let imageData = await this.camera.getPicture(options);
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      return imageData;
    }catch(error){
      throw new Error(error.message);
    }

  }

}
