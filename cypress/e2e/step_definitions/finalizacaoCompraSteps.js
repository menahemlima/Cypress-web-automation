import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import finalizacaoLoc from '../locators/finalizacaoCompraLocators';

Then(`os dados do pedido deve ser exibidos corretamente`, () => {
    cy.contains('strong', 'Direct Bank Transfer')
    cy.get(finalizacaoLoc.txtPreco).eq(0).invoke('text').then((text) => {
        expect(text.trim()).to.include('525.00');
    });
    cy.get(finalizacaoLoc.txtPreco).eq(1).invoke('text').then((text) => {
        expect(text.trim()).to.include('500.00');
    });
    cy.get(finalizacaoLoc.txtPreco).eq(2).invoke('text').then((text) => {
        expect(text.trim()).to.include('500.00');
    });
    cy.get(finalizacaoLoc.txtPreco).eq(3).invoke('text').then((text) => {
        expect(text.trim()).to.include('25.00');
    });
    cy.get(finalizacaoLoc.txtPreco).eq(4).invoke('text').then((text) => {
        expect(text.trim()).to.include('525.00');
    });
});
