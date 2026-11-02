Feature: Testes de API Automation Exercise

  Scenario: API 1 - Get All Products List
    When eu envio uma requisição GET para 'https://automationexercise.com/api/productsList'
    Then o status code deve ser 200
    And a resposta deve conter a lista de produtos

  Scenario: API 2 - POST To All Products List (Not Allowed)
    When eu envio uma requisição POST para 'https://automationexercise.com/api/productsList'
    Then o status code deve ser 405
    And a mensagem de resposta deve ser 'This request method is not supported.'

  Scenario: API 3 - Get All Brands List
    When eu envio uma requisição GET para 'https://automationexercise.com/api/brandsList'
    Then o status code deve ser 200
    And a resposta deve conter a lista de marcas

  Scenario: API 4 - PUT To All Brands List (Not Allowed)
    When eu envio uma requisição PUT para 'https://automationexercise.com/api/brandsList'
    Then o status code deve ser 405
    And a mensagem de resposta deve ser 'This request method is not supported.'

  Scenario: API 5 - POST To Search Product
    When eu envio uma requisição POST para 'https://automationexercise.com/api/searchProduct' com o parâmetro 'search_product' como 'Winter Top'
    Then o status code deve ser 200
    And a resposta deve conter a lista de produtos buscados

  Scenario: API 6 - POST To Search Product without parameter
    When eu envio uma requisição POST para 'https://automationexercise.com/api/searchProduct' sem parâmetros
    Then o status code deve ser 400
    And a mensagem de resposta deve ser 'Bad request, search_product parameter is missing in POST request.'

  Scenario: API 7 - POST To Verify Login with valid details
    Given que eu crio uma conta via API
    When eu envio uma requisição POST para 'https://automationexercise.com/api/verifyLogin' com email e senha válidos
    Then o status code deve ser 200
    And a mensagem de resposta deve ser 'User exists!'

  Scenario: API 8 - POST To Verify Login without email
    When eu envio uma requisição POST para 'https://automationexercise.com/api/verifyLogin' sem o parâmetro 'email'
    Then o status code deve ser 400
    And a mensagem de resposta deve ser 'Bad request, email or password parameter is missing in POST request.'

  Scenario: API 9 - DELETE To Verify Login (Not Allowed)
    When eu envio uma requisição DELETE para 'https://automationexercise.com/api/verifyLogin'
    Then o status code deve ser 405
    And a mensagem de resposta deve ser 'This request method is not supported.'

  Scenario: API 10 - POST To Verify Login with invalid details
    When eu envio uma requisição POST para 'https://automationexercise.com/api/verifyLogin' com email e senha inválidos
    Then o status code deve ser 404
    And a mensagem de resposta deve ser 'User not found!'

  Scenario: API 11 - POST To Create/Register User Account
    When eu envio uma requisição POST para 'https://automationexercise.com/api/createAccount' com todos os parâmetros necessários
    Then o status code deve ser 201
    And a mensagem de resposta deve ser 'User created!'

  Scenario: API 12 - DELETE METHOD To Delete User Account
    Given que eu crio uma conta via API
    When eu envio uma requisição DELETE para 'https://automationexercise.com/api/deleteAccount' com email e senha
    Then o status code deve ser 200
    And a mensagem de resposta deve ser 'Account deleted!'

  Scenario: API 13 - PUT METHOD To Update User Account
    Given que eu crio uma conta via API
    When eu envio uma requisição PUT para 'https://automationexercise.com/api/updateAccount' com os parâmetros atualizados
    Then o status code deve ser 200
    And a mensagem de resposta deve ser 'User updated!'

  Scenario: API 14 - GET user account detail by email
    Given que eu crio uma conta via API
    When eu envio uma requisição GET para 'https://automationexercise.com/api/getUserDetailByEmail' com o parâmetro 'email'
    Then o status code deve ser 200
    And a resposta deve conter os detalhes do usuário
