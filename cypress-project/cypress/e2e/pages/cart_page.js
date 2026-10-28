class CartPage {
  // --- Seletores ---
  get cartRows() { return cy.get('#cart_info_table tbody tr') }
  get deleteButtons() { return cy.get('.cart_quantity_delete') }
  get proceedToCheckoutButton() { return cy.get('.check_out') }
  get loginSignupLinkInModal() { return cy.get('#checkoutModal a[href="/login"]') }
  get registerLoginLink() { return cy.contains('a', 'Register / Login') }
  get continueOnCartButton() { return cy.get('.btn.btn-success.close-checkout-modal.btn-block') }
  get cartPrices() { return cy.get('.cart_price') }
  get cartTotalPrices() { return cy.get('.cart_total_price') }

  // --- Ações ---
  visit() {
    cy.visit('/view_cart')
  }

  removerProdutoPorIndice(index) {
    this.deleteButtons.eq(index).click()
  }

  prosseguirParaCheckout() {
    this.proceedToCheckoutButton.click()
  }
}

export default new CartPage()
