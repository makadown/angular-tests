import { MedicoService } from './medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medicos: any[];

  constructor(public _medicoService: MedicoService) { }

  ngOnInit() {
  }

  saludarMedico(nombreMedico: string) {
    return `Hola ${ nombreMedico }`;
  }

  obtenerMedicos() {
    this._medicoService.getMedicos()
                       .subscribe( (medicos: any[]) => this.medicos = medicos  );
  }

}
