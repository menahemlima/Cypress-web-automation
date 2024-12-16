# language: pt
Funcionalidade: Login

  @regression @login
  Cenario: 01 - Login no e-commerce com sucesso
    Dado que o cliente tenha acessado a página de login
    Quando o cliente inserir os dados de <Usuario> e <Senha> válidos
    E clicar no botão de “Login”
    Então o login deve ser realizado com sucesso <Usuario>

    Exemplos:
      | Usuario  | Senha       |
      | lima0066 | Pacman@.80? |

  @regression @login
  Cenario: 02 - Login no e-commerce com falha
    Dado que o cliente tenha acessado a página de login
    Quando o cliente inserir os dados de <Usuario> e <Senha> inválidos
    E clicar no botão de “Login”
    Então o login não deve ser realizado
    E a mensagem de erro deve ser exibida na tela <MensagemErro>

    Exemplos:
      | Usuario         | Senha  | MensagemErro                                              |
      | sdfasd@fasf.com | 123qwe | Error: A user could not be found with this email address. |