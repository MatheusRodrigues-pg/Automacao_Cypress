import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import productsPage from "../pages/products_page"
import cartPage from "../pages/cart_page"
import homePage from "../pages/home_page"

When("eu clico no botão Products", () => {
    homePage.productsLink.click()
})

When("eu adiciono um produto ao carrinho", () => {
    productsPage.adicionarProdutoAoCarrinho(0)
})

When("eu clico no botão View Cart", () => {
    homePage.cartLink.click({ force: true })
})

Then("o produto deve estar no carrinho", () => {
    cartPage.cartItems.should('have.length', 1)
})

Then("o preço, quantidade e preço total do produto devem estar corretos", () => {
    cartPage.cartItems.each(($el, index) => {
        cartPage.getCartItemPrice(index).should('be.visible')
        cartPage.getCartItemQuantity(index).should('have.text', '1')
        cartPage.getCartItemTotal(index).should('be.visible')
    })
})
