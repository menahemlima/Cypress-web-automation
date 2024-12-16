import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginLoc from '../locators/loginLocators';
import menuLoc from '../locators/menuLocators';

Given(`que o cliente tenha acessado a página de login`, () => {
    cy.visit(Cypress.env('url'))
});

When(`o cliente inserir os dados de {} e {} válidos`, (Usuario, Senha) => {
    cy.get(menuLoc.optMenu).click()
    cy.contains(menuLoc.optMinhaConta).click()
    cy.get(loginLoc.txtUsuario).type(Usuario)
    cy.get(loginLoc.txtSenha).type(Senha)
});

When(`o cliente inserir os dados de {} e {} inválidos`, (Usuario, Senha) => {
    cy.get(menuLoc.optMenu).click()
    cy.contains(menuLoc.optMinhaConta).click()
    cy.get(loginLoc.txtUsuario).type(Usuario)
    cy.get(loginLoc.txtSenha).type(Senha)
});

When(`clicar no botão de “Login”`, () => {
    cy.get(loginLoc.btnLogin).click()
});

Then(`o login deve ser realizado com sucesso {}`, (Usuario) => {
    cy.contains('p', `Hello ${Usuario} (not ${Usuario}? Sign out)`)
});

Then(`o login não deve ser realizado`, () => {
});

Then(`a mensagem de erro deve ser exibida na tela {}`, (MensagemErro) => {
    cy.contains('li', MensagemErro)
});



