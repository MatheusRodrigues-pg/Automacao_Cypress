import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import productsPage from "../pages/products_page"

When("eu pesquiso pelo produto {string}", (produto) => {
    productsPage.buscarProduto(produto)
})

Then("todos os produtos relacionados à busca devem estar visíveis", () => {
    productsPage.productCards.should('have.length.at.least', 1)
    productsPage.productCards.each(($el) => {
        cy.wrap($el).should('be.visible')
    })
})

Then("os produtos da busca devem conter nome {string} e preço {string}", (nome, preco) => {
    productsPage.productCards.each(($card) => {
        cy.wrap($card).find('.productinfo p').should('contain', nome)
        cy.wrap($card).find('.productinfo h2').should('contain', preco)
    })
})
