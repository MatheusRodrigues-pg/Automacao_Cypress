Feature: Contact Us

  Scenario: Formulário Contact Us com sucesso
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When eu clico no botão 'Contact us'
    Then a mensagem 'Get In Touch' deve ser visível
    When eu preencho e envio o formulário de contato
    And clico no botao Home
    Then a página inicial deve ser visível
