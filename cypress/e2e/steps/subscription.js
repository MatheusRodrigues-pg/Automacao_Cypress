import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { faker } from '@faker-js/faker'
import homePage from "../pages/home_page"

When("eu clico no botão Cart", () => {
    cy.contains('Cart').click()
})

When("eu rolo até o rodapé", () => {
    cy.scrollTo('bottom')
})

Then("o texto {string} deve estar visível", (texto) => {
    homePage.subscriptionHeader.should('be.visible').and('contain', texto)
})

When("eu insiro um email e clico no botão de inscrição", () => {
    homePage.emailInput.type(faker.internet.email())
    homePage.subscribeButton.click()
})

Then("a mensagem de sucesso {string} deve ser visível", (mensagem) => {
    homePage.successSubscribeMessage.should('be.visible').and('contain', mensagem)
})
