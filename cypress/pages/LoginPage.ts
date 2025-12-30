class LoginPage {

    private tittleSwagLabs = () => cy.get('.login_logo');
    private inputUserName = () => cy.get('[data-test="username"]');
    private inputPassword = () => cy.get('[data-test="password"]');
    private LoginButton = () => cy.get('[data-test="login-button"]');
    private errorMessage = () => cy.get('[data-test="error"]');

    public rellenarFormulario(username: string, password: string): void{
        this.inputUserName().type(username);
        this.inputPassword().type(password);
        this.LoginButton().click();
    };

    public verificarMensajeDeError(errorText: string): void{
        this.errorMessage().should("contain", errorText);
    };

    public verificarPaginaDeLogin(): void{
        this.tittleSwagLabs().should("have.text", "Swag Labs");
        this.inputUserName().should("be.visible");
        this.inputPassword().should("be.visible");
        this.LoginButton().should("be.visible");
    };
}

export const loginPage = new LoginPage;