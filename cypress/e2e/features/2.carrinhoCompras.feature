# language: pt
Funcionalidade: Carrinho de Compras

  @regression @carrinhoCompras
  Cenario: 03 - Adicionar produto no carrinho de compras
    Dado que o cliente tenha adicionado um produto ao carrinho de compras
    E tenha pressionado o ícone referente ao carrinho de compras
    Quando o cliente for redirecionado para a tela do carrinho de compras
    Então deve ser exibido na tela o nome do produto, preço unitário, quantidade, taxa e total corretamente

  @regression @carrinhoCompras
  Cenario: 04 - Adicionar uma nova unidade do produto já existente no carrinho
    Dado que o cliente tenha adicionado um produto ao carrinho de compras
    E esteja na tela do carrinho de compras
    Quando o cliente alterar a <Quantidade> do produto adicionado
    E clicar no botão “Update basket”
    Então a <Quantidade>, <SubTotal>, <Taxa> e o <Total> da compra deve ser atualizado corretamente

    Exemplos:
      | Quantidade | SubTotal | Taxa  | Total    |
      |          2 | 1,000.00 | 20.00 | 1,020.00 |

  @regression @carrinhoCompras
  Cenario: 05 - Remover item do carrinho de compras
    Dado que o tenha adicionado dois produtos ao carrinho de compras
    E esteja na tela do carrinho de compras
    Quando o cliente remover um item da lista de compras
    Então o item deve ser removido corretamente