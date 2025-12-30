class HeaderPage {
    
    private shoppingCart = () => cy.get('[data-test="shopping-cart-link"]');
    private botonBurgerMenu = () => cy.get(".bm-burger-button");

    public verificarCantidadProductos(cantidadEsperada:string): void{
        this.shoppingCart().should("have.text", cantidadEsperada);
    };

    public abrirBurgerMenu(): void {
        this.botonBurgerMenu().click();
    }
};

export const headerPage = new HeaderPage;