class LandingPage {

    loginAs(userName) {

        cy.contains('Customer Login').click();
        cy.get('#userSelect').select(userName)
        cy.contains('Login').click();
    }

}

export default new LandingPage();