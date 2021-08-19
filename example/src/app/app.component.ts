import { Component } from '@angular/core';
import { CellRebelSDK } from 'capacitor-cellrebel-sdk';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    CellRebelSDK.init({clientKey: "d7mrw1n1ig"})
  }
}
