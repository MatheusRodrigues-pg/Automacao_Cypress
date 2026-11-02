class AccountCreatedPage {
  // --- Seletores ---
  get accountCreatedTitle() { return cy.get('h2[data-qa="account-created"]') }
  get continueButton() { return cy.get('a[data-qa="continue-button"]') }

  // --- Ações ---
  visit() {
    cy.visit('/account_created')
  }

  clicarEmContinue() {
    this.continueButton.click()
  }
}

export default new AccountCreatedPage()
