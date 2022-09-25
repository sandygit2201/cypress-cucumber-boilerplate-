import 'cypress-xpath'

class CustomerHomePage{
   depositAmount(amount:number){
        cy.xpath('//button[@ng-class="btnClass2"]').click();
        cy.xpath('//input[@type="number"]').type(String(amount));
        cy.xpath('//button[@type="submit" and text()="Deposit"]').click();
        cy.contains('Deposit Successful').should('be.visible');
        cy.contains('Balance : '+amount).should('be.visible');
    }
}

export default new CustomerHomePage();