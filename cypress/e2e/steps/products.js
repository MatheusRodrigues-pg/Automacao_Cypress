import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../pages/home_page"
import productsPage from "../pages/products_page"
import productDetailsPage from "../pages/product_details_page"

Then("a lista de produtos deve ser visível", () => {
    productsPage.productCards.should('be.visible')
})

When("eu clico em 'View Product' do primeiro produto", () => {
    productsPage.selecionarProduto(0)
})

Then("o usuário deve estar na página de detalhes do produto", () => {
    cy.url().should('include', '/product_details/')
})

Then("os detalhes do produto devem estar visíveis: nome, categoria, preço, disponibilidade, condição, marca", () => {
    productDetailsPage.verificarDetalhesVisiveis()
})
