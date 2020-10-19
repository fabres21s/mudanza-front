import { by, element } from 'protractor';

export class FurgonPage {
     private linkCrearFurgon = element(by.id('linkCrearFurgon'));
     private linkListarFurgon = element(by.id('linkListarFurgon'));
     private botonCrearFurgon = element(by.id('btnCrearFurgon'));
    // private inputIdProducto = element(by.id('idProducto'));
     private inputPlacaFurgon = element(by.id('placaFurgon'));
    // private listaFurgones = element.all(by.css('ul.furgones li'));

    async clickBotonCrearFurgones() {
        await this.linkCrearFurgon.click();
    }

     async ingresarPlacaFurgon(placaFurgon) {
        await this.inputPlacaFurgon.sendKeys(placaFurgon);
    }

    async clickBotonListarFurgon() {
        await this.linkListarFurgon.click();
    }

    async clickBotonCrearFurgon() {
        await this.botonCrearFurgon.click();
    }

    async listarFurgones() {
        console.log('lista de furgones');
        //console.log(this.listaFurgones.count());
    }

   
    // async contarProductos() {
    //     return this.listaProductos.count();
    // }
}
