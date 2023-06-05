import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;

  constructor() {}

  dismiss(){
    console.log('dismiss...');
    this.modal.dismiss();
  }

  consoleLog(){
    console.log('do something...');
  }

}
