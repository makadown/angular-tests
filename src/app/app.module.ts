import { RUTAS } from './avanzado/rutas/app.routes';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
