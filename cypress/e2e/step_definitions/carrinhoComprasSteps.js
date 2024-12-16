import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import produtosLoc from '../locators/produtosLocators';
import menuLoc from '../locators/menuLocators';
import carrinhoLoc from '../locators/carrinhoLocators';
import data from '../../fixtures/data.json'

Given(`que o cliente tenha adicionado um produto ao carrinho de compras`, () => {
    cy.visit(Cypress.env('url'));
    cy.get(produtosLoc.optProduto01).click()
});

Then(`tenha pressionado o ícone referente ao carrinho de compras`, () => {
    cy.get(menuLoc.optMenu).click()
    cy.get(menuLoc.optCarrinho).click()
});

When(`o cliente for redirecionado para a tela do carrinho de compras`, () => {
});

Then(`deve ser exibido na tela o nome do produto, preço unitário, quantidade, taxa e total corretamente`, () => {
    cy.contains('td', data.produtos.produto_01.descricao)
    cy.contains('td', data.produtos.produto_01.preco)
    cy.contains('td', data.produtos.produto_01.quantidade)
    cy.contains('td', data.produtos.produto_01.taxa)
    cy.contains('td', data.produtos.produto_01.total)
});

Then(`esteja na tela do carrinho de compras`, () => {
    cy.get(menuLoc.optMenu).click()
    cy.get(menuLoc.optCarrinho).click()
});

When(`o cliente alterar a {} do produto adicionado`, (Quantidade) => {
    cy.get(carrinhoLoc.txtQuantidade).clear()
    cy.get(carrinhoLoc.txtQuantidade).type(Quantidade)
});

Then(`clicar no botão “Update basket”`, () => {
    cy.get(carrinhoLoc.btnAtualizar).click()
});

Then(`a {}, {}, {} e o {} da compra deve ser atualizado corretamente`, (Quantidade, SubTotal, Taxa, Total) => {
    cy.contains('td', Quantidade)
    cy.contains('td', SubTotal)
    cy.contains('td', Taxa)
    cy.contains('td', Total)
});

Given(`que o tenha adicionado dois produtos ao carrinho de compras`, () => {
    cy.visit(Cypress.env('url'));
    cy.get(produtosLoc.optProduto01).click()
    cy.wait(2000)
    cy.get(produtosLoc.optProduto02).click()
});

When(`o cliente remover um item da lista de compras`, () => {
    cy.contains('td', data.produtos.produto_01.descricao)
    cy.contains('td', data.produtos.produto_01.preco)
    cy.contains('td', data.produtos.produto_01.quantidade)
    cy.contains('td', data.produtos.produto_02.descricao)
    cy.contains('td', data.produtos.produto_02.preco)
    cy.contains('td', data.produtos.produto_02.quantidade)
    cy.contains('td', data.produtos.totalDoisProdutos.taxa)
    cy.contains('td', data.produtos.totalDoisProdutos.total)
    cy.get(carrinhoLoc.btnRemovePrimeiroItem).click()
});

Then(`o item deve ser removido corretamente`, () => {
    cy.contains(carrinhoLoc.msgRemovido, `${data.produtos.produto_01.descricao} removed. Undo?`)
    cy.wait(2000)
    cy.contains('td', data.produtos.produto_02.descricao)
    cy.contains('td', data.produtos.produto_02.preco)
    cy.contains('td', data.produtos.produto_02.taxa)
    cy.contains('td', data.produtos.produto_02.total)
});

