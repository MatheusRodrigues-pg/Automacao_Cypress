Feature: Carrinho de Compras

  Scenario: Adicionar produto ao carrinho
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When eu clico no botão Products
    Then a página 'products' deve ser carregada com sucesso
    When eu adiciono um produto ao carrinho
    And eu clico no botão View Cart
    Then o produto deve estar no carrinho
    And o preço, quantidade e preço total do produto devem estar corretos
