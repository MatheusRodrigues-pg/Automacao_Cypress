import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../pages/home_page"
import loginPage from "../pages/login_page"
import signupPage from "../pages/signup_page"
import accountCreatedPage from "../pages/account_created_page"
import accountDeletedPage from "../pages/account_deleted"

let dados

beforeEach(() => {
    dados = homePage.gerarDadosCadastro()
    cy.clearCookies()
    cy.clearLocalStorage()
})


//#region  --- Cenário: Registro de um novo usuário com sucesso ---
Given("que eu navego para a página {string}", (url) => {
    cy.visit(url)
})

Then("a página inicial deve ser visível", () => {
    homePage.mainCarousel.should('be.visible')
})

When("clico no botao Signup Login", () => {
    homePage.loginSignupLink.click()
})

Then("a mensagem New User Signup! deve ser visível", () => {
    loginPage.newUserSignupTitle.should('be.visible')
})

When("eu preencho nome e e-mail e clico no botão Signup", () => {
    loginPage.iniciarSignup(dados.nome, dados.email)
})

Then("a mensagem ENTER ACCOUNT INFORMATION deve ser visível", () => {
    signupPage.enterAccountInformationTitle.should('be.visible')
})

When("eu preencho os detalhes da conta", () => {
    signupPage.preencherDetalhesConta(dados)
})

When("clico no botão Create Account", () => {
    signupPage.enviarCadastro()
})

Then("a mensagem ACCOUNT CREATED! deve ser visível", () => {
    accountCreatedPage.accountCreatedTitle.should('be.visible')
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
    accountDeletedPage.accountDeletedTitle.should('contain.text', `Account Deleted!`)
})

When("clico no botão Continue", () => {
    accountDeletedPage.continueButton.click()
})
//#endregion

//#region  --- Cenário: Login com e-mail e senha corretos ---

When("eu preencho e-mail e senha corretos", () => {
    cy.criarContaViaApi(dados)
    loginPage.logar(`${dados.email}`, `${dados.senha}`)
})

Then("a mensagem Login to your account deve ser visível", () => {
    loginPage.loginToYourAccountTitle.should('be.visible')
})
//#endregion

//#region  --- Cenário: Login com e-mail ou senha incorretos ---

When("eu preencho e-mail e senha incorretos", () => {
    loginPage.logar('email_incorreto@teste.com', 'senha_errada')
})

Then("a mensagem {string} deve ser visível", (string) => {
    cy.verificarTextoNaPagina(string)
})
//#endregion

//#region  --- Cenário: Logout de usuário com sucesso ---

When("eu clico no botão Logout", () => {
    homePage.logoutLink.click()
})
//#endregion

//#region  --- Cenário: Registrar usuário com e-mail já existente ---
When("eu preencho nome e e-mail já cadastrado", () => {
    cy.criarContaViaApi(dados)
    loginPage.iniciarSignup(dados.nome, dados.email)
})

//#endregion
