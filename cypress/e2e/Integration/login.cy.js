import login from "../Pages/login";
import inventory from "../Pages/inventory";

describe('Login', ()=> {
    beforeEach(()=>{
        cy.visit('https://automationexercise.com/login')
    })

    it('Iniciar sesión de forma correcta', ()=>{
        login.typeEmail('test224@test.com')
        login.typePassword('test')
        login.clickLoginButton()

        inventory.elements.productTitle().should('contain','Products')
    })
})