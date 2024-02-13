import login from "../Pages/loginPage";
import inventory from "../Pages/inventoryPage";

describe('Login', ()=> {
    beforeEach(()=>{
        cy.visit('https://automationexercise.com/login')
    })

    it('Iniciar sesión con credenciales correcta', ()=>{
        login.typeEmail('test224@test.com')
        login.typePassword('test')
        login.clickLoginButton()

        inventory.elements.carousel().should('to.be.visible')
    })

    it('Iniciar sesión con credenciales incorrecta', ()=>{
        login.typeEmail('test224@test.com')
        login.typePassword('test2')
        login.clickLoginButton()
        login.errorMesageText()
    })
})