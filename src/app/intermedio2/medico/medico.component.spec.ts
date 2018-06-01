import { TestBed, ComponentFixture } from '@angular/core/testing';
// para controlar el html, el dom, se hace con componentFixture

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';
describe('Medico component de intermedio 2', () => {
    let medicoComponente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        medicoComponente = fixture.componentInstance;
    });

    it ('Debe de crearse el componente', () => {
        expect( medicoComponente ).toBeTruthy();
    });

    it ('Debe de retornar el nombre del médico', () => {
        const nombre = 'Juan';
        const retorno = medicoComponente.saludarMedico(nombre);
        expect( retorno ).toContain(nombre);
    });
});
