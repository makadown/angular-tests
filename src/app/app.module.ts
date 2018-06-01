import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
