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

    it("Ordenar filtro por: Name(Z to A)", () => {
        shoppingPage.ordenarProducto("za");
        shoppingPage.verificarFiltroPorNombre("Test.allTheThings() T-Shirt (Red)", "Sauce Labs Backpack");
    });

    it("Ordenar filtro por: Name(A to Z)", () => {
        shoppingPage.ordenarProducto('az');
        shoppingPage.verificarFiltroPorNombre("Sauce Labs Backpack", "Test.allTheThings() T-Shirt (Red)");
    });

    it("Ordenar filtro por: Precio(Low to Hight)", () => {
        shoppingPage.ordenarProducto('lohi');
        shoppingPage.verificarFiltroPorPrecio("$7.99", "$49.99");
    });

    it("Ordenar filtro por: Precio(Hight to Low)", () => {
        shoppingPage.ordenarProducto('hilo');
        shoppingPage.verificarFiltroPorPrecio("$49.99", "$7.99");
    });
});