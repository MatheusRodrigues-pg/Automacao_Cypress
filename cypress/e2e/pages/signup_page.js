class SignupPage {
  // --- Seletores ---
  get genderMale() { return cy.get('#id_gender1') }
  get genderFemale() { return cy.get('#id_gender2') }
  get passwordInput() { return cy.get('#password') }
  get daySelect() { return cy.get('#days') }
  get monthSelect() { return cy.get('#months') }
  get yearSelect() { return cy.get('#years') }
  get newsletterCheckbox() { return cy.get('#newsletter') }
  get specialOffersCheckbox() { return cy.get('#optin') }
  get firstNameInput() { return cy.get('#first_name') }
  get lastNameInput() { return cy.get('#last_name') }
  get companyInput() { return cy.get('#company') }
  get addressInput() { return cy.get('#address1') }
  get address2Input() { return cy.get('#address2') }
  get countrySelect() { return cy.get('#country') }
  get stateInput() { return cy.get('#state') }
  get cityInput() { return cy.get('#city') }
  get zipcodeInput() { return cy.get('#zipcode') }
  get mobileNumberInput() { return cy.get('#mobile_number') }
  get createAccountButton() { return cy.get('[data-qa="create-account"]') }
  get enterAccountInformationTitle() { return cy.get('.title.text-center b') }

  // --- Ações ---
  preencherDetalhesConta(dados) {
    if (dados.genero === 'Masculino') this.genderMale.check()
    else this.genderFemale.check()

    this.passwordInput.type(dados.senha)
    this.daySelect.select(dados.dia)
    this.monthSelect.select(dados.mes)
    this.yearSelect.select(dados.ano)

    if (dados.newsletter) this.newsletterCheckbox.check()
    if (dados.ofertas) this.specialOffersCheckbox.check()

    this.firstNameInput.type(dados.nome)
    this.lastNameInput.type(dados.ultimoNome)
    this.companyInput.type(dados.empresa)
    this.addressInput.type(dados.endereco)
    if (dados.endereco2) this.address2Input.type(dados.endereco2)
    this.countrySelect.select(dados.pais)
    this.stateInput.type(dados.estado)
    this.cityInput.type(dados.cidade)
    this.zipcodeInput.type(dados.cep)
    this.mobileNumberInput.type(dados.telefone)
  }

  enviarCadastro() {
    this.createAccountButton.click()
  }
}

export default new SignupPage()
