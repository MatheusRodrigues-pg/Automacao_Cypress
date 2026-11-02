class CartPage {
  get cartItems() { return cy.get('#cart_info_table tbody tr') }

  getCartItemPrice(index) { return this.cartItems.eq(index).find('.cart_price p') }
  getCartItemQuantity(index) { return this.cartItems.eq(index).find('.cart_quantity button') }
  getCartItemTotal(index) { return this.cartItems.eq(index).find('.cart_total_price') }
}

export default new CartPage()
