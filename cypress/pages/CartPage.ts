class CartPage {
    private titulo_YourCart = () => cy.get('[data-test="title"]');
    private label_Description = () => cy.get('[data-test="cart-desc-label"]');
    private button_ContinueShopping = () => cy.get('[data-test="continue-shopping"]');
    private button_Checkout = () => cy.get('[data-test="checkout"]');

    public verificarCarritoDeCompra(): void{
        this.titulo_YourCart().should("have.text", "Your Cart");
        this.label_Description().should("have.text", "Description");
    };

    public clickContinueShopping(): void{
        this.button_ContinueShopping().should("be.visible");
        this.button_ContinueShopping().click();
    };

    public clickCheckout(): void{
        this.button_Checkout().should("be.visible");
        this.button_Checkout().click();
    };
}

export const cartPage = new CartPage;