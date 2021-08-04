/// <reference types="cypress" />
it("Google", () =>{
    cy.visit("http://google.com")
    cy.get('.gLFyf',{timeout: 6000}).type("youtube {enter}")
    cy.contains('News').click()
})