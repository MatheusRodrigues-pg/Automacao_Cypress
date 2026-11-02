import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { faker } from '@faker-js/faker'
import homePage from "../pages/home_page"

let dados

// --- Função utilitária ---
const getBody = (response) => {
    return typeof response.body === 'string' ? JSON.parse(response.body) : response.body
}

beforeEach(() => {
    dados = homePage.gerarDadosCadastro()
})

Given("que eu crio uma conta via API", () => {
    cy.criarContaViaApi(dados)
})

When("eu envio uma requisição GET para {string}", (url) => {
    cy.request({ method: 'GET', url: url, failOnStatusCode: false }).as('response')
})

When("eu envio uma requisição POST para {string}", (url) => {
    cy.request({ method: 'POST', url: url, failOnStatusCode: false }).as('response')
})

When("eu envio uma requisição PUT para {string}", (url) => {
    cy.request({ method: 'PUT', url: url, failOnStatusCode: false }).as('response')
})

When("eu envio uma requisição DELETE para {string}", (url) => {
    cy.request({ method: 'DELETE', url: url, failOnStatusCode: false }).as('response')
})

When("eu envio uma requisição POST para {string} com o parâmetro {string} como {string}", (url, param, value) => {
    cy.request({
        method: 'POST',
        url: url,
        form: true,
        body: { [param]: value },
        failOnStatusCode: false
    }).as('response')
})

When("eu envio uma requisição POST para {string} sem parâmetros", (url) => {
    cy.request({ method: 'POST', url: url, form: true, failOnStatusCode: false }).as('response')
})

When("eu envio uma requisição POST para {string} com email e senha válidos", (url) => {
    cy.request({
        method: 'POST',
        url: url,
        form: true,
        body: { email: dados.email, password: dados.senha },
        failOnStatusCode: false
    }).as('response')
})

When("eu envio uma requisição POST para {string} sem o parâmetro {string}", (url, param) => {
    cy.request({
        method: 'POST',
        url: url,
        form: true,
        body: { password: dados.senha },
        failOnStatusCode: false
    }).as('response')
})

When("eu envio uma requisição POST para {string} com email e senha inválidos", (url) => {
    cy.request({
        method: 'POST',
        url: url,
        form: true,
        body: { email: 'invalido@teste.com', password: 'invalido' },
        failOnStatusCode: false
    }).as('response')
})

When("eu envio uma requisição POST para {string} com todos os parâmetros necessários", (url) => {
    cy.request({
        method: 'POST',
        url: url,
        form: true,
        body: {
            name: dados.nome,
            email: dados.email,
            password: dados.senha,
            title: 'Mr',
            birth_date: dados.dia,
            birth_month: dados.mes,
            birth_year: dados.ano,
            firstname: dados.nome,
            lastname: dados.ultimoNome,
            company: dados.empresa,
            address1: dados.endereco,
            country: dados.pais,
            zipcode: dados.cep,
            state: dados.estado,
            city: dados.cidade,
            mobile_number: dados.telefone
        },
        failOnStatusCode: false
    }).as('response')
})

When("eu envio uma requisição DELETE para {string} com email e senha", (url) => {
    cy.request({
        method: 'DELETE',
        url: url,
        form: true,
        body: { email: dados.email, password: dados.senha },
        failOnStatusCode: false
    }).as('response')
})

When("eu envio uma requisição PUT para {string} com os parâmetros atualizados", (url) => {
    cy.request({
        method: 'PUT',
        url: url,
        form: true,
        body: {
            name: 'Nome Atualizado',
            email: dados.email,
            password: dados.senha,
            title: 'Mr',
            birth_date: dados.dia,
            birth_month: dados.mes,
            birth_year: dados.ano,
            firstname: 'Nome Atualizado',
            lastname: dados.ultimoNome,
            company: dados.empresa,
            address1: dados.endereco,
            country: dados.pais,
            zipcode: dados.cep,
            state: dados.estado,
            city: dados.cidade,
            mobile_number: dados.telefone
        },
        failOnStatusCode: false
    }).as('response')
})

When("eu envio uma requisição GET para {string} com o parâmetro {string}", (url, param) => {
    cy.request({
        method: 'GET',
        url: url,
        qs: { [param]: dados.email },
        failOnStatusCode: false
    }).as('response')
})

Then("o status code deve ser {int}", (expectedStatusCode) => {
    cy.get('@response').then((response) => {
        const body = getBody(response)
        const actualCode = body.responseCode !== undefined ? body.responseCode : response.status
        expect(actualCode).to.eq(expectedStatusCode)
    })
})

Then("a mensagem de resposta deve ser {string}", (message) => {
    cy.get('@response').then((response) => {
        const body = getBody(response)
        expect(body.message).to.contain(message)
    })
})

Then("a resposta deve conter a lista de produtos", () => {
    cy.get('@response').then((response) => {
        const body = getBody(response)
        expect(body.products).to.be.an('array')
        expect(body.products).to.have.length(34)
        body.products.forEach(product => {
            Object.values(product).forEach(value => {
                expect(value).to.not.be.null
            })
        })
    })
})

Then("a resposta deve conter a lista de marcas", () => {
    cy.get('@response').then((response) => {
        const body = getBody(response)
        expect(body.brands).to.be.an('array')
        expect(body.brands).to.have.length(34)
        body.brands.forEach(brand => {
            Object.values(brand).forEach(value => {
                expect(value).to.not.be.null
            })
        })
    })
})

Then("a resposta deve conter a lista de produtos buscados", () => {
    cy.get('@response').then((response) => {
        const body = getBody(response)
        expect(body.products).to.be.an('array')
        expect(body.products).to.have.length(1)
        expect(body.products[0].id).to.eq(5)
        expect(body.products[0].name).to.eq('Winter Top')
        expect(body.products[0].price).to.eq('Rs. 600')
        expect(body.products[0].brand).to.eq('Mast & Harbour')
    })
})

Then("a resposta deve conter os detalhes do usuário", () => {
    cy.get('@response').then((response) => {
        const body = getBody(response)
        const user = body.user
        expect(user).to.be.an('object')
        expect(user.name).to.eq(dados.nome)
        expect(user.email).to.eq(dados.email)
        expect(user.first_name).to.eq(dados.nome)
        expect(user.last_name).to.eq(dados.ultimoNome)
        expect(user.country).to.eq(dados.pais)
        expect(user.state).to.eq(dados.estado)
        expect(user.city).to.eq(dados.cidade)
        expect(user.zipcode).to.eq(dados.cep)
    })
})
