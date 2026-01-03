import { cartPage } from "../pages/CartPage";
import { loginPage } from "../pages/LoginPage";
import { shoppingPage } from "../pages/ShoppingPage"
import { headerPage } from "../pages/HeaderPage"

describe("Cart Test", () => {

    beforeEach( () => {
        loginPage.rellenarFormulario("standard_user", "secret_sauce");
        shoppingPage.verificarShoppingPage();
        headerPage.abrirCarritoDeCompras();
    });

    it("Carrito de compras: boton Continue Shopping", () => {
        cartPage.clickContinueShopping();
    });

    it("Carrito de compras: boton Checkout", () => {
        cartPage.clickCheckout();
    }); 
})