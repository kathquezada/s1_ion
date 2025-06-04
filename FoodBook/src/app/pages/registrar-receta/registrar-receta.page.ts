import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray,FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonButton,IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-registrar-receta',
  templateUrl: './registrar-receta.page.html',
  styleUrls: ['./registrar-receta.page.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,IonButton,IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistrarRecetaPage implements OnInit {

  nuevaRecetaForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.nuevaRecetaForm = this.fb.group({
      nombre: [null, Validators.required],
      ingredientes: this.fb.array([this.fb.control('', Validators.required)]),
      tiempo: [''],
      instrucciones:[null, Validators.required],
    });
  }

  continuar() {
  if (this.nuevaRecetaForm.valid) {
    const receta = this.nuevaRecetaForm.value;

    // Obtener recetas actuales del localStorage
    const recetasGuardadas = JSON.parse(localStorage.getItem('recetas') || '[]');

    // Agregar la nueva
    recetasGuardadas.push(receta);

    // Guardar de nuevo en el localStorage
    localStorage.setItem('recetas', JSON.stringify(recetasGuardadas));

    console.log('Receta guardada:', receta);
    this.nuevaRecetaForm.reset();
  } else {
    console.log('Formulario inválido');
  }
}

  // funciones CRUD campo ingredientes

  get ingredientes(): FormArray {
  return this.nuevaRecetaForm.get('ingredientes') as FormArray;
  }

  agregarIngrediente() {
    this.ingredientes.push(this.fb.control('', Validators.required));
  }

  eliminarIngrediente(index: number) {
    this.ingredientes.removeAt(index);
  }


}
