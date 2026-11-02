class ProductsPage {
  // --- Seletores ---
  get searchInput() { return cy.get('#search_product') }
  get searchButton() { return cy.get('#submit_search') }
  get productCards() { return cy.get('.features_items .product-image-wrapper') }
  get productNames() { return cy.get('.features_items .productinfo p') }
  get productPrices() { return cy.get('.features_items .productinfo h2') }
  get viewProductLinks() { return cy.get('.features_items a[href^="/product_details/"]') }

  get continueShoppingButton() { return cy.get('#cartModal .btn.btn-success.close-modal.btn-block').first() }
  get viewCartLink() { return cy.get('#cartModal a[href="/view_cart"]').first() }
  get headerCartLink() { return cy.get('header a[href="/view_cart"]').first() }

  addToCartButtons(index) { return cy.get('.product-overlay .add-to-cart').eq(index) }

  adicionarProdutoAoCarrinho(index) {
    // Rrola até o card do produto e faz hover para exibir o overlay
    this.productCards.eq(index).scrollIntoView().trigger('mouseover')

    // Clica no botão "Add to cart" dentro do overlay do produto
    this.productCards.eq(index).find('.product-overlay .add-to-cart').click({ force: true })

    // Trata a modal de confirmação de forma flexível (se aparecer, fecha; se não, aguarda o AJAX)
    cy.get('body').then(($body) => {
      if ($body.find('#cartModal:visible').length > 0) {
        this.continueShoppingButton.click({ force: true })
        cy.get('#cartModal').should('not.be.visible')
        cy.get('.modal-backdrop').should('not.exist')
      } else {
        cy.wait(1000)
      }
    })
  }

  /**
   * Seleciona um produto pelo nome ou pela ordem (index).
   * @param {string|number} identifier - Nome do produto ou índice (começando em 0).
   */
  selecionarProduto(identifier) {
    if (typeof identifier === 'number') {
      this.viewProductLinks.eq(identifier).click()
    } else {
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
