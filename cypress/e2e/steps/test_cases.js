import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

When("eu clico no botão {string}", (textoBotao) => {
    cy.contains(textoBotao).click()
})

Then("a página {string} deve ser carregada com sucesso", (caminho) => {
    cy.url().should('include', caminho)
})
