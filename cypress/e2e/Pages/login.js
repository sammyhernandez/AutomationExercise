class LoginPage {

    elements = {
        emailInput: ()=> cy.get('[data-qa="login-email"]'),
        passwordInput: ()=> cy.get('[data-qa="login-password"]'),
        submitButton: ()=> cy.get('[data-qa="login-button"]')
        
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
}

module.exports = new LoginPage();