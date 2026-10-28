import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { faker } from '@faker-js/faker'
import homePage from "../pages/home_page"
import loginPage from "../pages/login_page"
import signupPage from "../pages/signup_page"
import accountCreatedPage from "../pages/account_created_page"

//#region  --- Cenário: Registro de um novo usuário com sucesso ---
const dados = homePage.gerarDadosCadastro()

Given("que eu navego para a página {string}", (url) => {
    cy.visit(url)
})

Then("a página inicial deve ser visível", () => {
    homePage.mainCarousel.estaVisivel()
})

When("clico no botao Signup Login", () => {
    homePage.loginSignupLink.click()
})

Then("a mensagem New User Signup! deve ser visível", () => {
    loginPage.newUserSignupTitle.estaVisivel()
})

When("eu preencho nome e e-mail e clico no botão Signup", () => {
    loginPage.iniciarSignup(dados.nome, dados.email)
})

Then("a mensagem ENTER ACCOUNT INFORMATION deve ser visível", () => {
    signupPage.enterAccountInformationTitle.estaVisivel()
})

When("eu preencho os detalhes da conta", () => {
    signupPage.preencherDetalhesConta(dados)
})

When("clico no botão Create Account", () => {
    signupPage.enviarCadastro()
})

Then("a mensagem ACCOUNT CREATED! deve ser visível", () => {
    accountCreatedPage.accountCreatedTitle.estaVisivel()
})

When("eu clico no botão Continue", () => {
    accountCreatedPage.continueButton.click()
})

Then("Logged in as username deve ser visível", () => {
    homePage.loggedInUser.should('contain.text', `Logged in as ${dados.nome}`)
})

When("eu clico no botão Delete Account", () => {
    homePage.deleteAccountLink.click()
})

Then("a mensagem ACCOUNT DELETED! deve ser visível", () => {
    cy.contains('ACCOUNT DELETED!').estaVisivel()
})

When("clico no botão Continue", () => {
    cy.contains('ACCOUNT DELETED!').click()
})



//#endregion