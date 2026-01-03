class CheckoutInformationPage {

    private tittle_CheckoutYourInformation = () => cy.get('data-test="title"');
    private input_FirstName = () => cy.get('[data-test="firstName"]');
    private input_LastName = () => cy.get('[data-test="lastName"]');
    private input_PostalCode = () => cy.get('[data-test="postalCode"]');
    private button_Continue = () => cy.get('[data-test="continue"]');
    private button_Cancel = () => cy.get('[data-test="cancel"]');

    public verificarPaginaCheckoutInformation(): void{
        this.tittle_CheckoutYourInformation().should("be.visible");
    };

    public rellenarFormularioCheckoutInformation(firstName: string, lastName: string, postalCode: string): void{
        this.input_FirstName().type(firstName);
        this.input_LastName().type(lastName);
        this.input_PostalCode().type(postalCode);
    };

    public clickButtonContinue(): void{
        this.button_Continue().should("be.visible");
        this.button_Continue().click();
    };

    public clickButtonCancel(): void{
        this.button_Cancel().should("contain", "Cancel");
        this.button_Cancel().click();
    };

}

export const checkoutInformationPage = new CheckoutInformationPage;