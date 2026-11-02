import { faker } from '@faker-js/faker'
class HomePage {
  // --- Seletores do Header (Menu de Navegação) ---
  get homeLink() { return cy.get('a[href="/"]') }
  get productsLink() { return cy.get('a[href="/products"]')}
  get cartLink() { return cy.get('header a[href="/view_cart"]').first() }
  get loginSignupLink() { return cy.get('a[href="/login"]') }
  get testCasesLink() { return cy.get('a[href="/test_cases"]') }
  get apiListLink() { return cy.get('a[href="/api_list"]') }
  get contactUsLink() { return cy.get('a[href="/contact_us"]') }
  get logoutLink() { return cy.get('a[href="/logout"]') }
  get loggedInUser() { return cy.contains('Logged in as') }
  get deleteAccountLink() { return cy.get('a[href="/delete_account"]') }

  // --- Componentes Principais ---
  get mainCarousel() { return cy.get('#slider-carousel') }
  get recommendedItemsCarousel() { return cy.get('#recommended-item-carousel') }

  // --- Listagens ---
  get categoryLinks() { return cy.get('a[href^="/category_products/"]') }
  get brandLinks() { return cy.get('a[href^="/brand_products/"]') }
  get productDetailLinks() { return cy.get('a[href^="/product_details/"]') }

  gerarDadosCadastro = () => {
    const data = faker.date.birthdate({ min: 1950, max: 2000 })
    return {
      genero: faker.person.gender(),
      email: faker.internet.email(),
      senha: faker.internet.password(),
      dia: data.getDate().valueOf(),
      mes: data.getMonth(),
      ano: data.getFullYear().valueOf(),
      newsletter: true,
      ofertas: true,
      nome: faker.person.firstName(),
      ultimoNome: faker.person.lastName(),
      empresa: faker.company.name(),
      endereco: faker.location.streetAddress(),
      pais: 'United States',
      estado: faker.location.state(),
      cidade: faker.location.city(),
      cep: faker.location.zipCode(),
      telefone: faker.phone.number()
    }
  }

  // --- Subscription ---
  get subscriptionHeader() { return cy.contains('Subscription') }
  get emailInput() { return cy.get('#susbscribe_email') }
  get subscribeButton() { return cy.get('#subscribe') }
  get successSubscribeMessage() { return cy.get('#success-subscribe') }

  // --- Ações ---
  visit() {
    cy.visit('https://www.automationexercise.com/')
  }
}

export default new HomePage()
