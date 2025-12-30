class ShoppingPage {
    private tittle_Products = () => cy.get('[data-test="title"]');
    private AddToCart_Backpack = () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    private AddToCart_BikeLight = () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    private AddToCart_BoltTshirt = () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    private AddToCart_FleeceJacket = () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    private AddToCart_Onesie = () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    private AddToCart_TshirtRed = () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');

    public verificarShoppingPage = () => {
        this.tittle_Products().should('have.text', "Products")
    };

    public agregarProductosAlCarrito(): void{
        this.AddToCart_Backpack().click();
        this.AddToCart_BikeLight().click();
        this.AddToCart_BoltTshirt().click();
        this.AddToCart_FleeceJacket().click();
        this.AddToCart_Onesie().click();
        this.AddToCart_TshirtRed().click();
    };
}

export const shoppingPage = new ShoppingPage;