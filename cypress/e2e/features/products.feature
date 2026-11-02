Feature: Products

  Scenario: Verificar todos os produtos e página de detalhes
    Given que eu navego para a página 'http://automationexercise.com'
    Then a página inicial deve ser visível
    When eu clico no botão 'Products'
    Then a página 'products' deve ser carregada com sucesso
    And a lista de produtos deve ser visível
    When eu clico em 'View Product' do primeiro produto
    Then o usuário deve estar na página de detalhes do produto
    And os detalhes do produto devem estar visíveis: nome, categoria, preço, disponibilidade, condição, marca
