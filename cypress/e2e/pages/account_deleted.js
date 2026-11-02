class AccountDeletedPage {
  // --- Seletores ---
  get accountDeletedTitle() { return cy.get('h2[data-qa="account-deleted"]') }
  get continueButton() { return cy.get('a[data-qa="continue-button"]') }

  // --- Ações ---
  visit() {
    cy.visit('/account_deleted')
  }

  clicarEmContinue() {
    this.continueButton.click()
  }
}

export default new AccountDeletedPage()
