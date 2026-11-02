Cypress.Commands.add('estaVisivel', { prevSubject: true }, (subject) => {
  cy.wrap(subject).should('be.visible')
})

Cypress.Commands.add('criarContaViaApi', (dados) => {
  cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/createAccount',
    form: true,
    body: {
      name: dados.nome,
      email: dados.email,
      password: dados.senha,
      title: dados.genero === 'Masculino' ? 'Mr' : 'Mrs',
      birth_date: dados.dia,
      birth_month: dados.mes,
      birth_year: dados.ano,
      firstname: dados.nome,
      lastname: dados.ultimoNome,
      company: dados.empresa,
      address1: dados.endereco,
      address2: dados.endereco2 || '',
      country: dados.pais,
      zipcode: dados.cep,
      state: dados.estado,
      city: dados.cidade,
      mobile_number: dados.telefone
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
    expect(body.responseCode).to.eq(201)
    expect(body.message).to.eq('User created!')
  })
})

Cypress.Commands.add('verificarTextoNaPagina', (texto) => {
  cy.contains(texto).should('be.visible')
})