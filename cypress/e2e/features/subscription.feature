Feature: Subscription

  Scenario: Verify Subscription in home page
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When eu rolo até o rodapé
    Then o texto 'Subscription' deve estar visível
    When eu insiro um email e clico no botão de inscrição
    Then a mensagem de sucesso 'You have been successfully subscribed!' deve ser visível