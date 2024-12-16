# language: pt
Funcionalidade: Dados de cobrança

  @regression @dadosCobranca
  Cenario: 06 - Preencher dados na tela de cobrança
    Dado que o cliente tenha realizado o checkout da compra
    E tenha clicado no botão de “Proceed to checkout”
    Quando o cliente for redirecionado para a tela dos dados de cobrança
    E preencher os todos os campos obrigatórios com dados válidos
    E escolher uma forma de pagamento
    E o cliente clicar no botão “Place order”
    Então a compra deve ser finalizada com sucesso

  @regression @dadosCobranca
  Cenario: 07 - Validar campos obrigatórios não preenchidos
    Dado que o cliente tenha realizado o checkout da compra
    E tenha clicado no botão de “Proceed to checkout”
    Quando o cliente for redirecionado para a tela dos dados de cobrança
    E deixar os campos obrigatórios em branco
    E o cliente clicar no botão “Place order”
    Então deve exibir uma mensagem de erro na tela

  @regression @dadosCobranca
  Cenario: 08 - Validar o campo de Telefone
    Dado que o cliente tenha realizado o checkout da compra
    E tenha clicado no botão de “Proceed to checkout”
    E o cliente for redirecionado para a tela dos dados de cobrança
    E tenha preenchido o campo de Telefone com um valor inválido
    Quando o cliente clicar no botão “Place order”
    Então deve exibir na tela uma mensagem de erro

  @regression @dadosCobranca
  Cenario: 09 - Validar o campo de CEP
    Dado que o cliente tenha realizado o checkout da compra
    E tenha clicado no botão de “Proceed to checkout”
    E o cliente for redirecionado para a tela dos dados de cobrança
    E tenha preenchido o campo de CEP com um valor inválido
    Quando o cliente clicar no botão “Place order”
    Então deve ser exibido na tela uma mensagem de erro