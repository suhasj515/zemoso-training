/// <reference types="cypress" />

it("clock", ()=>{
    cy.clock()
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get('#txtUsername').type("Admin")
    cy.get('#txtPassword').type("admin123")
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#btnAdd').click()
    cy.tick(5000)
    
})