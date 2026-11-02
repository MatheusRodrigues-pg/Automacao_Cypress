Feature: Busca de Produtos

  Scenario: Pesquisar produto com sucesso
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When eu clico no botão 'Products'
    Then a página 'products' deve ser carregada com sucesso
    When eu pesquiso pelo produto 'Winter Top'
    Then a mensagem 'Searched Products' deve ser visível
    And todos os produtos relacionados à busca devem estar visíveis
    And os produtos da busca devem conter nome 'Winter Top' e preço 'Rs. 600'
