require('cypress-xpath');

Cypress.Commands.add('navigateToHomepage',()=>{
    cy.log("navigating to Homepage")

    cy.visit('/'); 

})