import { Component } from '@angular/core';
import { IonButton,IonMenuButton,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton,IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton],
})
export class HomePage {
  constructor() {}
}
