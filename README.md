
# Testes Automatizados do Fluxo de Compra em E-commerce

Este projeto implementa testes automatizados no fluxo de compra de um e-commerce utilizando Cypress + JavaScript com a integração do Cucumber para testes BDD (Behavior-Driven Development). A técnica para elaboração dos testes utilizada foi baseada nos riscos dos fluxos críticos da aplicação.


## Estrutura do Projeto

```javascript
.github/
  └── workflows/            # Configuração de CI/CD (GitHub Actions).

cypress/
  ├── e2e/                  # Testes end-to-end.
  │   ├── features/         # Arquivos .feature com cenários de teste.
  │   ├── locators/         # Arquivos para identificação de elementos (separação de seletores).
  │   └── step_definitions/ # Definições dos passos dos testes (BDD).
  │
  ├── fixtures/             # Dados externos para uso nos testes.
  │   └── data.json         # Dados fixos e parametrizados.
  │
  ├── cucumber-html-rep...  # Arquivo de configuração do relatório HTML dos testes com Cucumber.
  ├── cypress.config.js     # Configuração do Cypress.
  └── .cypress-cucumber...  # Configuração do Cucumber no Cypress.

.gitignore                  # Arquivos ignorados no versionamento.
package.json                # Dependências e scripts do projeto.
package-lock.json           # Lockfile para controle de versões das dependências.
README.md                   # Documentação do projeto.

```


## Funcionalidades testadas

- Login do Usuário;
- Gerenciamento do Carrinho;
- Dados de Cobrança (Checkout);
- Finalização do Pedido


## Instalação

Clone o repositório

```bash
  git clone <url-do-repositorio>
  cd <nome-do-repositorio>

```
Instale as dependências

```bash
npm install -f

```
Execute os testes
- Abra o cypress no modo interativo

```bash
npx cypress open
```

- Execute os testes em modo headless
```bash
npx cypress run

```

## Cenários de Teste

#### Estrutura do Arquivo .feature

Os cenários estão no diretório cypress/e2e/features/ e seguem a sintaxe Gherkin

## Passos Definidos (Step Definitions)

Os passos descritos nos arquivos .feature são implementados em step_definitions:

#### Exemplo de Step Definition:

```javascript
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

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
```


## Configuração do Cucumber no Cypress

A integração do Cucumber no Cypress foi configurada utilizando o plugin @badeball/cypress-cucumber-preprocessor.

- Arquivos .feature são usados para descrever os cenários.
- Steps são implementados em JavaScript no diretório step_definitions/.
## Técnica baseada em risco

Os testes priorizam os cenários críticos do fluxo de compra:

- Finalização do Pedido: Risco alto devido ao impacto direto nas vendas.
- Gerenciamento do Carrinho: Garantir que os produtos e totais estejam corretos.
- Login do Usuário: Validação de acesso ao sistema.


## Relatório de Testes

Os resultados são gerados em formato HTML pelo Cucumber HTML Reporter. Para visualizar:

Execute os testes:
```bash
npx cypress run
node cucumber-html-report.js

```
Acesse o relatório gerado em:
```bash
reports/cucumber-htmlreport/


```

## CI/CD com GitHub Actions

A pipeline está configurada em .github/workflows/ para executar os testes automaticamente no GitHub Actions.
## Stack utilizada

**Cypress:** Framework para testes end-to-end.

**Cucumber:** Testes BDD com sintaxe Gherkin.

**Node.js:** Ambiente de execução JavaScript.

**GitHub Actions:** CI/CD para execução automatizada.


## Referência

- Cypress: [https://docs.cypress.io](https://docs.cypress.io)
- Cucumber: [https://cucumber.io](https://cucumber.io) 
- Node: [https://nodejs.org/pt](https://nodejs.org/pt) 
- Vscode: [https://code.visualstudio.com/](https://code.visualstudio.com/) 
