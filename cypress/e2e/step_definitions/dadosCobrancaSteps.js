import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import produtosLoc from '../locators/produtosLocators';
import menuLoc from '../locators/menuLocators';
import carrinhoLoc from '../locators/carrinhoLocators';
import loginLoc from '../locators/loginLocators';
import cobrancaLoc from '../locators/dadosCobrancaLocators';
import data from '../../fixtures/data.json'


Given(`que o cliente tenha realizado o checkout da compra`, () => {
    cy.visit(Cypress.env('url'))
    cy.get(menuLoc.optMenu).click()
    cy.contains(menuLoc.optMinhaConta).click()
    cy.get(loginLoc.txtUsuario).type(data.login.usuario)
    cy.get(loginLoc.txtSenha).type(data.login.senha)
    cy.get(loginLoc.btnLogin).click()
    cy.get(menuLoc.optMenu).click()
    cy.get(carrinhoLoc.optCarrinhoVazio).then(($element) => {
        const text = $element.text().trim();
        if (text === "0 items") {
            cy.log("Carrinho está vazio, nenhuma ação necessária.");
        } else {
            cy.get(menuLoc.optCarrinho).click()
            cy.get(carrinhoLoc.btnRemovePrimeiroItem).click()
            cy.get(menuLoc.optMenu).click()
        }
    });
    cy.contains(menuLoc.optShop).click()
    cy.get(produtosLoc.optProduto01).click()
    cy.get(menuLoc.optMenu).click()
    cy.get(menuLoc.optCarrinho).click()
});

Given(`tenha clicado no botão de “Proceed to checkout”`, () => {
    cy.get(carrinhoLoc.btnCheckout).click()
});

When(`o cliente for redirecionado para a tela dos dados de cobrança`, () => {
});

When(`preencher os todos os campos obrigatórios com dados válidos`, () => {
    cy.wait(2000)
    cy.get(cobrancaLoc.txtNome).clear()
    cy.get(cobrancaLoc.txtNome).type(faker.person.firstName())
    cy.get(cobrancaLoc.txtSobrenome).clear()
    cy.get(cobrancaLoc.txtSobrenome).type(faker.person.lastName())
    cy.get(cobrancaLoc.txtEmpresa).type(faker.company.name())
    cy.get(cobrancaLoc.txtEmail).clear()
    cy.get(cobrancaLoc.txtEmail).type(faker.internet.email())
    cy.get(cobrancaLoc.txtTelefone).clear()
    cy.get(cobrancaLoc.txtTelefone).type(data.dadosCobranca.telefone)
    cy.get(cobrancaLoc.selPais).click()
    cy.get(cobrancaLoc.txtPais).type(data.dadosCobranca.pais)
    cy.get(cobrancaLoc.selPaisEncontrado).click()
    cy.get(cobrancaLoc.txtEndereco).clear()
    cy.get(cobrancaLoc.txtEndereco).type(faker.location.streetAddress())
    cy.get(cobrancaLoc.txtComplemento).clear()
    cy.get(cobrancaLoc.txtComplemento).type(faker.location.secondaryAddress())
    cy.get(cobrancaLoc.txtCidade).clear()
    cy.get(cobrancaLoc.txtCidade).type(faker.location.city())
    cy.get(cobrancaLoc.selEstado).click()
    cy.get(cobrancaLoc.txtEstado).type(data.dadosCobranca.estado)
    cy.get(cobrancaLoc.selEstadoEncontrado).click()
    cy.get(cobrancaLoc.txtCEP).clear()
    cy.get(cobrancaLoc.txtCEP).type(data.dadosCobranca.cep)

    cy.contains('td', "Selenium Ruby")
    cy.contains('td', "1")
    cy.contains('td', "500.00")
    cy.contains('td', "500.00")
    cy.contains('td', "25.00")
    cy.contains('td', "525.00")
});

When(`escolher uma forma de pagamento`, () => {
    cy.get(cobrancaLoc.selTransferencia).click()
});

When(`o cliente clicar no botão “Place order”`, () => {
    cy.get(cobrancaLoc.btnFazerPedido).click()

});

Then(`a compra deve ser finalizada com sucesso`, () => {
});

When(`deixar os campos obrigatórios em branco`, () => {
    cy.get(cobrancaLoc.txtNome).clear()
    cy.get(cobrancaLoc.txtSobrenome).clear()
    cy.get(cobrancaLoc.txtEmail).clear()
    cy.get(cobrancaLoc.txtTelefone).clear()
    cy.get(cobrancaLoc.txtEndereco).clear()
    cy.get(cobrancaLoc.txtCidade).clear()
    cy.get(cobrancaLoc.txtCEP).clear()
});

Then(`deve exibir uma mensagem de erro na tela`, () => {
    cy.contains('li', data.mensagem_error.nome)
    cy.contains('li', data.mensagem_error.sobrenome)
    cy.contains('li', data.mensagem_error.email)
    cy.contains('li', data.mensagem_error.telefone)
    cy.contains('li', data.mensagem_error.endereco)
    cy.contains('li', data.mensagem_error.cidade)
    cy.contains('li', data.mensagem_error.cep)
});

When(`tenha preenchido o campo de Telefone com um valor inválido`, () => {
    cy.wait(2000)
    cy.get(cobrancaLoc.txtNome).clear()
    cy.get(cobrancaLoc.txtNome).type(faker.person.firstName())
    cy.get(cobrancaLoc.txtSobrenome).clear()
    cy.get(cobrancaLoc.txtSobrenome).type(faker.person.lastName())
    cy.get(cobrancaLoc.txtEmpresa).type(faker.company.name())
    cy.get(cobrancaLoc.txtEmail).clear()
    cy.get(cobrancaLoc.txtEmail).type(faker.internet.email())
    cy.get(cobrancaLoc.txtTelefone).clear()
    cy.get(cobrancaLoc.txtTelefone).type("asdf")
    cy.get(cobrancaLoc.selPais).click()
    cy.get(cobrancaLoc.txtPais).type(data.dadosCobranca.pais)
    cy.get(cobrancaLoc.selPaisEncontrado).click()
    cy.get(cobrancaLoc.txtEndereco).clear()
    cy.get(cobrancaLoc.txtEndereco).type(faker.location.streetAddress())
    cy.get(cobrancaLoc.txtComplemento).clear()
    cy.get(cobrancaLoc.txtComplemento).type(faker.location.secondaryAddress())
    cy.get(cobrancaLoc.txtCidade).clear()
    cy.get(cobrancaLoc.txtCidade).type(faker.location.city())
    cy.get(cobrancaLoc.selEstado).click()
    cy.get(cobrancaLoc.txtEstado).type(data.dadosCobranca.estado)
    cy.get(cobrancaLoc.selEstadoEncontrado).click()
    cy.get(cobrancaLoc.txtCEP).clear()
    cy.get(cobrancaLoc.txtCEP).type(data.dadosCobranca.cep)
});

Then(`deve exibir na tela uma mensagem de erro`, () => {
    cy.contains('li', data.mensagem_error.telefoneInvalido)
});

When(`tenha preenchido o campo de CEP com um valor inválido`, () => {
    cy.wait(2000)
    cy.get(cobrancaLoc.txtNome).clear()
    cy.get(cobrancaLoc.txtNome).type(faker.person.firstName())
    cy.get(cobrancaLoc.txtSobrenome).clear()
    cy.get(cobrancaLoc.txtSobrenome).type(faker.person.lastName())
    cy.get(cobrancaLoc.txtEmpresa).type(faker.company.name())
    cy.get(cobrancaLoc.txtEmail).clear()
    cy.get(cobrancaLoc.txtEmail).type(faker.internet.email())
    cy.get(cobrancaLoc.txtTelefone).clear()
    cy.get(cobrancaLoc.txtTelefone).type(data.dadosCobranca.telefone)
    cy.get(cobrancaLoc.selPais).click()
    cy.get(cobrancaLoc.txtPais).type(data.dadosCobranca.pais)
    cy.get(cobrancaLoc.selPaisEncontrado).click()
    cy.get(cobrancaLoc.txtEndereco).clear()
    cy.get(cobrancaLoc.txtEndereco).type(faker.location.streetAddress())
    cy.get(cobrancaLoc.txtComplemento).clear()
    cy.get(cobrancaLoc.txtComplemento).type(faker.location.secondaryAddress())
    cy.get(cobrancaLoc.txtCidade).clear()
    cy.get(cobrancaLoc.txtCidade).type(faker.location.city())
    cy.get(cobrancaLoc.selEstado).click()
    cy.get(cobrancaLoc.txtEstado).type(data.dadosCobranca.estado)
    cy.get(cobrancaLoc.selEstadoEncontrado).click()
    cy.get(cobrancaLoc.txtCEP).clear()
    cy.get(cobrancaLoc.txtCEP).type("asdf123asdf")
});

Then(`deve ser exibido na tela uma mensagem de erro`, () => {
    cy.contains('li', data.mensagem_error.cepInvalido)
});