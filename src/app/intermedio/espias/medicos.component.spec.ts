import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    // truco para evitar error. Al cabo esto es un test.
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: debe de cargar los médicos con servicio getMedicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return Observable.from( [medicos] );
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe llamar al server para agregar un médico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
            /* No interesa el resultado, interesa que se llame el metodo del servicio de agregar medico */
            return Observable.empty();
        });
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    it('Debe agregar un nuevo médico al arreglo de médicos', () => {
        const medico = { id: 1, nombre: 'Juan' };
        spyOn(servicio, 'agregarMedico')
                     .and.returnValue( Observable.from( [medico] ));
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adicion, la propiedad mensajeError debe ser igual al error del servicio', () => {
        const miError = 'No se pudo agregar el médico';

        spyOn(servicio, 'agregarMedico').and
                      .returnValue( Observable.throw( miError ) );
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    });

    it('Debe llamar al server para borrar un médico', () => {
/* Espio el modal de confirmacion y autoregreso true */
        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.callFake((medico) => {
            /* No interesa el resultado, interesa que se llame el metodo del servicio de agregar medico */
            return Observable.empty();
        });
        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledWith('1');
    });


    it('Debe cancelar la llamada al server para borrar un médico', () => {
        /* Espio el modal de confirmacion y autoregreso false */
        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico').and.callFake((medico) => {
                    /* No interesa el resultado, interesa que se llame el metodo del servicio de agregar medico */
                    return Observable.empty();
                });
                componente.borrarMedico('1');
                expect(espia).not.toHaveBeenCalledWith('1');
    });

});
