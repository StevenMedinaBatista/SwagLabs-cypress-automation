class BurgerMenu {

    private botonAllItems = () => cy.get('#inventory_sidebar_link');
    private botonAbout = () => cy.get('[data-test="about-sidebar-link"]');
    private botonLogout = () => cy.get('[data-test="logout-sidebar-link"]');
    private botonResetAppState = () => cy.get('[data-test="reset-sidebar-link"]');

    public clickBotonAllItems(): void{
        this.botonAllItems().should("contain", "All Items");
        this.botonAllItems().click();
    };

    public clickBotonAbout(): void{
        this.botonAbout().should("be.visible");
        this.botonAbout().click();
        cy.origin('https://saucelabs.com', () => {
            cy.get('h1').should('contain', 'Build apps users love with AI-driven quality');
        });
    };

    public clickBotonLogout(): void{
        this.botonLogout().should("be.visible");
        this.botonLogout().click();
    };

    public clickBotonResetAppState(): void{
        this.botonResetAppState().should("be.visible");
        this.botonResetAppState().click();
    };
}

export const burgerMenu = new BurgerMenu;