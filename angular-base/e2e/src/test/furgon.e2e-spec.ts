import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { FurgonPage } from '../page/furgon/furgon.po';
//import { browser } from 'protractor';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let furgon: FurgonPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        furgon = new FurgonPage();
    });

    it('Deberia crear furgon', () => {
        const PLACA_FURGON = 'AAA-003';

        page.navigateTo();
        navBar.clickBotonFurgones();
        furgon.clickBotonCrearFurgones();
        furgon.ingresarPlacaFurgon(PLACA_FURGON);
        furgon.clickBotonCrearFurgon();

        

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar furgones', () => {
        page.navigateTo();
        navBar.clickBotonFurgones();
        furgon.clickBotonListarFurgon();

       // browser.sleep(60000);
        furgon.listarFurgones();
       

       // expect(4).toBe(producto.contarProductos());
    });
});
