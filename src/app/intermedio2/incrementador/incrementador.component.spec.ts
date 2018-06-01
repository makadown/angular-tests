import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incrementador Component (Integración)', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda de progreso de carga', () => {
        const mensajeDeCarga = 'Progreso de carga (Test)';
        component.leyenda = mensajeDeCarga;
        // dispara deteccion de cambios. Si no se hace esto, truena!
        fixture.detectChanges();
        // el query regresa el primero que encuentre
        const elem: HTMLElement =
                    fixture.debugElement.query( By.css('h3') ).nativeElement;
        expect(elem.innerHTML).toContain(mensajeDeCarga);
    });

    it('Debe mostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query( By.css('input') );
            const elem = input.nativeElement;

            expect( elem.value).toBe('55');
        });

    });

    it('Debe incrementar / decrementar con un click en el boton', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);

    });

    it('Al decrementar con un click en el boton debe cambiar la leyenda de progreso', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();
        const elem: HTMLElement =
                            fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect(elem.innerHTML).toContain('45');

    });

});
