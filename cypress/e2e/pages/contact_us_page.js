class ContactUsPage {
  // --- Seletores ---
  get nameInput() { return cy.get('[data-qa="name"]') }
  get emailInput() { return cy.get('[data-qa="email"]') }
  get subjectInput() { return cy.get('[data-qa="subject"]') }
  get messageInput() { return cy.get('[data-qa="message"]') }
  get uploadFileButton() { return cy.get('input[name="upload_file"]') }
  get submitButton() { return cy.get('[data-qa="submit-button"]') }

  // --- Ações ---
  visit() {
    cy.visit('/contact_us')
  }

  preencherFormulario(nome, email, assunto, mensagem) {
    this.nameInput.type(nome)
    this.emailInput.type(email)
    this.subjectInput.type(assunto)
    this.messageInput.type(mensagem)
  }

  enviarFormulario() {
    this.submitButton.click()
  }
}

export default new ContactUsPage()
