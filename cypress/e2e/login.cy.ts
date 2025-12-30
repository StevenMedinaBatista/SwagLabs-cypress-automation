import { burgerMenu } from "../pages/BurgerMenu";
import { headerPage } from "../pages/HeaderPage";
import { loginPage } from "../pages/LoginPage";
import { shoppingPage } from "../pages/ShoppingPage";

describe("Login Test", () => {

    it("Credenciales erroneas", () => {
        loginPage.rellenarFormulario("error_userrrr", "secret_sauce");
        loginPage.verificarMensajeDeError("Username and password do not match any user in this service");
    });

    it("Credenciales bloqueadas", () => {
        loginPage.rellenarFormulario("locked_out_user", "secret_sauce");
        loginPage.verificarMensajeDeError("Sorry, this user has been locked out.");
    });

    it("Login correcto", () => {
        loginPage.rellenarFormulario("standard_user", "secret_sauce");
        shoppingPage.verificarShoppingPage();
    });

    it("Hacer login y Logout", () => {
        loginPage.rellenarFormulario("standard_user", "secret_sauce");
        headerPage.abrirBurgerMenu();
        burgerMenu.clickBotonLogout();
        loginPage.verificarPaginaDeLogin();
    });
});