import { FormularioRegister } from './formularioRegister';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {
        let component: FormularioRegister;

        beforeEach( () => {
            component = new FormularioRegister( new FormBuilder() );
        });

        it ( 'Debe de crear un formulario con dos campos', () => {
            expect(component.form.contains('email') ).toBeTruthy();
            expect(component.form.contains('password') ).toBeTruthy();
        });

        it ( 'Email debe ser obligatorio', () => {
            const control = component.form.get('email');
            control.setValue('');
// Aquí, espero a que el control de mail tenga un valor requerido
            expect(control.valid).toBeFalsy();
        });

        it ( 'Email debe ser un email válido', () => {
            const control = component.form.get('email');
            control.setValue('fernando@mail.com');
// Aquí, espero a que el control requiera tener un valor válido
            expect(control.valid).toBeTruthy();
        });
});
