# language: pt
Funcionalidade: Finalização da Compra

  @regression @dadosCobranca
  Cenario: 10 - Finalizar um pedido com forma de pagamento Transferência
    Dado que o cliente tenha realizado o checkout da compra
    E tenha clicado no botão de “Proceed to checkout”
    Quando o cliente for redirecionado para a tela dos dados de cobrança
    E preencher os todos os campos obrigatórios com dados válidos
    E escolher uma forma de pagamento
    E o cliente clicar no botão “Place order”
    Então a compra deve ser finalizada com sucesso
    E os dados do pedido deve ser exibidos corretamente