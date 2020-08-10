import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent implements OnInit {

  @Input() results: any;
  fruitInfo: FruitInformation;
  confidence: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.fruitInfo = this.results['results'];
    this.confidence = this.results['confidence'];
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}

interface FruitInformation {
  name: string;
  weight: number;
  calories: number;
  sugar: number;
  carbohydrates: number;
}
