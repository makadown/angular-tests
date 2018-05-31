import { mensaje } from './string';

// describe( 'Pruebas de Strings' );
// it('Debe de regresar un string');

describe('Pruebas de strings', () => {

    it('Debe de regresar un string', () => {
        const resp = mensaje('Mayito');
        // Esto es igual a expect( (typeof resp) === 'string' )
        expect( typeof resp ).toBe('string');
    });

    it('Debe retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan';
        const resp = mensaje(nombre);
        // Esto es igual a expect( (typeof resp) === 'string' )
        expect(resp ).toContain(nombre);
    });
});

