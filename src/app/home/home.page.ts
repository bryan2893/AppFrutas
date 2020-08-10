import { Component } from '@angular/core';
import {CameraService} from '../services/camera.service';
import { FruitsApiService } from '../services/fruits-api.service';
import { ModalController } from '@ionic/angular';
import {ModalPageComponent } from '../modal-page/modal-page.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  src = "";

  constructor(private cameraService:CameraService, private fruitService: FruitsApiService, private modalController: ModalController) {
  }

  async takePicture(){
   try{
    const base64Image = await this.cameraService.getBase64Piture();
    this.fruitService.sendImage(base64Image).subscribe(
      async results => {
        await this.presentModal(results);
      },
      error => console.log(error)
    );

  }catch(error){
    console.log(error);
  }
    
  }

  async presentModal(results: any) {
    const modal = await this.modalController.create({
      component: ModalPageComponent,
      componentProps: {
        results: results
      }
    });
    return await modal.present();
  }


}
