Feature: Test Cases

  Scenario: Verificar a página de Test Cases
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When eu clico no botão 'Test Cases'
    Then a página 'test_cases' deve ser carregada com sucesso
