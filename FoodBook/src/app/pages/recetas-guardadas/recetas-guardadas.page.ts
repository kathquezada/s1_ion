import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonMenuButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonLabel
} from '@ionic/angular/standalone';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';

@Component({
  selector: 'app-recetas-guardadas',
  templateUrl: './recetas-guardadas.page.html',
  styleUrls: ['./recetas-guardadas.page.scss'],
  standalone: true,
  imports: [IonItem, IonButtons,IonList, IonLabel,IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecetasGuardadasPage implements OnInit {

  recetas:any[] = [];
  
  constructor() { }

   ngOnInit() {
    const recetasGuardadas = localStorage.getItem('recetas');

    if (recetasGuardadas) {
      this.recetas = JSON.parse(recetasGuardadas);
    } else {
      this.recetas = [];
    }
  }

}
