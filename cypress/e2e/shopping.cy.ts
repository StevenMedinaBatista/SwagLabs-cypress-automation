import { loginPage } from '../pages/LoginPage';
import { shoppingPage } from '../pages/ShoppingPage';
import { headerPage} from '../pages/HeaderPage'

describe("Shopping Test", () => {

    beforeEach(() => {
        loginPage.rellenarFormulario("standard_user", "secret_sauce")
    });
    
    it("Agregar todos los productos al carrito", () => {
        shoppingPage.verificarShoppingPage();
        shoppingPage.agregarProductosAlCarrito();
        headerPage.verificarCantidadProductos("6");
    });

});