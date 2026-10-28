class ProductsPage {
  // --- Seletores ---
  get searchInput() { return cy.get('#search_product') }
  get searchButton() { return cy.get('#submit_search') }
  get productCards() { return cy.get('.features_items .product-image-wrapper') }
  get productNames() { return cy.get('.features_items .productinfo p') }
  get viewProductLinks() { return cy.get('.features_items a[href^="/product_details/"]') }

  get continueShoppingButton() { return cy.get('.btn.btn-success.close-modal.btn-block') }
  get viewCartLink() { return cy.get('a[href="/view_cart"]') }

  // --- Ações ---
  visit() {
    cy.visit('/products')
  }

  /**
   * Seleciona um produto pelo nome ou pela ordem (index).
   * @param {string|number} identifier - Nome do produto ou índice (começando em 0).
   */
  selecionarProduto(identifier) {
    if (typeof identifier === 'number') {
      this.viewProductLinks.eq(identifier).click()
    } else {
      // Tenta encontrar o produto pelo nome e clicar no link de detalhes correspondente
      this.productNames.contains(identifier)
        .parents('.product-image-wrapper')
        .find('a[href^="/product_details/"]')
        .click()
    }
  }

  buscarProduto(nome) {
    this.searchInput.type(nome)
    this.searchButton.click()
  }
}

export default new ProductsPage()
