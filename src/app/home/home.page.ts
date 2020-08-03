import { Component } from '@angular/core';
import {CameraService} from '../services/camera.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  src = "";

  constructor(private cameraService:CameraService) {
  }

  async takePicture(){
   try{
    let base64Image = await this.cameraService.getBase64Piture();

    //Enviar imagen al modelo...

  }catch(error){
    console.log(error);
  }
    
  }


}
