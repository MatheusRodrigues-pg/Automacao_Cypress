import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../pages/home_page"
import contactUsPage from "../pages/contact_us_page"

let dados

beforeEach(() => {
    dados = homePage.gerarDadosCadastro()
})

When("eu preencho e envio o formulário de contato", () => {
    cy.window().then((win) => {
        cy.stub(win, 'confirm').returns(true) 
    })

    contactUsPage.preencherFormulario(dados.nome, dados.email, 'Assunto Teste', 'Mensagem de teste')
    contactUsPage.uploadFileButton.selectFile('cypress/fixtures/example.json', { force: true })
    contactUsPage.enviarFormulario()
    
    cy.verificarTextoNaPagina('Success! Your details have been submitted successfully.')
})

When("clico no botao Home", () => {
    cy.contains(`Home`).click()
})
