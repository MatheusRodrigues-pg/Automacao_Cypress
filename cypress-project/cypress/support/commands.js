Cypress.Commands.add('estaVisivel', { prevSubject: true }, (subject) => {
  cy.wrap(subject).should('be.visible')
})