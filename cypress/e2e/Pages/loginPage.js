class LoginPage {

    elements = {
        emailInput: ()=> cy.get('[data-qa="login-email"]'),
        passwordInput: ()=> cy.get('[data-qa="login-password"]'),
        submitButton: ()=> cy.get('[data-qa="login-button"]'),
        errorMessage: ()=> cy.get('[class="login-form"]')
        
    }
    
    typeEmail(email){
        this.elements.emailInput().type(email)
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLoginButton(){
        this.elements.submitButton().click()
    }

    errorMesageText(){
        this.elements.errorMessage().should('contain', 'Your email or password is incorrect!')
    }
}

module.exports = new LoginPage();