import { Component } from '@angular/core';
import { CellRebelSDK } from 'capacitor-cellrebel-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  onStartTracking() {
    CellRebelSDK.startTracking()
  }

  onStopTracking() {
    CellRebelSDK.stopTracking()
  }

}
