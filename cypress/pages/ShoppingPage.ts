import { forEach } from "cypress/types/lodash";

class ShoppingPage {
    private tittle_Products = () => cy.get('[data-test="title"]');
    private AddToCart_Backpack = () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    private AddToCart_BikeLight = () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    private AddToCart_BoltTshirt = () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    private AddToCart_FleeceJacket = () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    private AddToCart_Onesie = () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    private AddToCart_TshirtRed = () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    private select_filtro = () => cy.get('[data-test="product-sort-container"]');
    private nombreProducto = () => cy.get('[data-test="inventory-item-name"]');
    private precioProducto = () => cy.get('[data-test="inventory-item-price"]');

    public verificarShoppingPage = () => {
        this.tittle_Products().should('have.text', "Products");
    };

    public verificarTodosLosProductos = () => {
        this.tittle_Products().should('have.text', "Products");
        this.nombreProducto().each( (element) => {
            cy.wrap(element).should("be.visible");
        });
    };

    public agregarProductosAlCarrito(): void{
        this.AddToCart_Backpack().click();
        this.AddToCart_BikeLight().click();
        this.AddToCart_BoltTshirt().click();
        this.AddToCart_FleeceJacket().click();
        this.AddToCart_Onesie().click();
        this.AddToCart_TshirtRed().click();
    };

    public ordenarProducto(value: string): void{
        this.select_filtro().select(value);
    };

    public verificarFiltroPorNombre(primerNombre: string, ultimoNombre: string): void{
        this.nombreProducto().first().should("have.text", primerNombre);
        this.nombreProducto().last().should("have.text", ultimoNombre);
    };

    public verificarFiltroPorPrecio(primerPrecio: string, ultimoPrecio: string): void{
        this.precioProducto().first().should("have.text", primerPrecio);
        this.precioProducto().last().should("have.text", ultimoPrecio);
    };
}

export const shoppingPage = new ShoppingPage;