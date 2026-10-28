class LoginPage {
  // --- Login ---
  get loginEmailInput() { return cy.get('[data-qa="login-email"]') }
  get loginPasswordInput() { return cy.get('[data-qa="login-password"]') }
  get loginButton() { return cy.get('[data-qa="login-button"]') }

  // --- Signup ---
  get signupNameInput() { return cy.get('[data-qa="signup-name"]') }
  get signupEmailInput() { return cy.get('[data-qa="signup-email"]') }
  get signupButton() { return cy.get('[data-qa="signup-button"]') }
  get newUserSignupTitle() { return cy.get('.signup-form h2') }
  get enterAccountInformationTitle() { return cy.get('.title.text-center b') }

  // --- Ações ---
  visit() {
    cy.visit('/login')
  }

  logar(email, senha) {
    this.loginEmailInput.type(email)
    this.loginPasswordInput.type(senha)
    this.loginButton.click()
  }

  iniciarSignup(nome, email) {
    this.signupNameInput.type(nome)
    this.signupEmailInput.type(email)
    this.signupButton.click()
  }
}

export default new LoginPage()
