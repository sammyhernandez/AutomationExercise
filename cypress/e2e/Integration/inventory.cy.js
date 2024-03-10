import login from "../Pages/loginPage";
import inventory from "../Pages/inventoryPage";

describe('Productos',() =>{

    beforeEach(()=>{
        cy.visit('https://automationexercise.com/login')
        login.typeEmail('test224@test.com')
        login.typePassword('test')
        login.clickLoginButton()
    })
    it('Agregando producto al carrro de compras',()=>{
        inventory.validateProductList()
        inventory.viewProduct()
        inventory.addToCar()
        inventory.viewCar()
        inventory.validateProductInTheCart()
    })
})