Feature: autenticacao

  Scenario: Registro de um novo usuário com sucesso
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When clico no botao Signup Login
    Then a mensagem New User Signup! deve ser visível
    When eu preencho nome e e-mail e clico no botão Signup
    Then a mensagem ENTER ACCOUNT INFORMATION deve ser visível
    When eu preencho os detalhes da conta
    And clico no botão Create Account
    Then a mensagem ACCOUNT CREATED! deve ser visível
    When eu clico no botão Continue
    Then Logged in as username deve ser visível
    When eu clico no botão Delete Account
    Then a mensagem ACCOUNT DELETED! deve ser visível
    And clico no botão Continue

  Scenario: Login com e-mail e senha corretos
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When clico no botao Signup Login
    Then a mensagem Login to your account deve ser visível
    When eu preencho e-mail e senha corretos
    Then Logged in as username deve ser visível
    When eu clico no botão Delete Account
    Then a mensagem ACCOUNT DELETED! deve ser visível
    And clico no botão Continue

  Scenario: Login com e-mail ou senha incorretos
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When clico no botao Signup Login
    Then a mensagem Login to your account deve ser visível
    When eu preencho e-mail e senha incorretos
    Then a mensagem 'Your email or password is incorrect!' deve ser visível

  Scenario: Logout de usuário com sucesso
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When clico no botao Signup Login
    Then a mensagem Login to your account deve ser visível
    When eu preencho e-mail e senha corretos
    Then Logged in as username deve ser visível
    When eu clico no botão Logout
    Then a mensagem 'Login to your account' deve ser visível

  Scenario: Registrar usuário com e-mail já existente
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When clico no botao Signup Login
    Then a mensagem New User Signup! deve ser visível
    When eu preencho nome e e-mail já cadastrado
    Then a mensagem 'Email Address already exist!' deve ser visível
