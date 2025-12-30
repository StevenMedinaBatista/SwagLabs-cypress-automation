import { burgerMenu } from "../pages/BurgerMenu";
import { headerPage } from "../pages/HeaderPage";
import { loginPage } from "../pages/LoginPage";

describe("Burger Menu Test", () => {

    beforeEach(() => {
        loginPage.rellenarFormulario("standard_user", "secret_sauce")
    });

    it("All Items", () => {
        headerPage.abrirBurgerMenu();
        burgerMenu.clickBotonAllItems();
    });

    it("About", () => {
        headerPage.abrirBurgerMenu();
        burgerMenu.clickBotonAbout();
    });

    it("Logout", () => {
        headerPage.abrirBurgerMenu();
        burgerMenu.clickBotonLogout();
    });

    it("Reset App State", () => {
        headerPage.abrirBurgerMenu();
        burgerMenu.clickBotonResetAppState();
    });
});