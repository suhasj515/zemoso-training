/// <reference types="cypress" />

it("orange demo", ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get('#txtUsername').type("Admin")
    cy.get('#txtPassword').type("admin123")
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#btnAdd').click()
    cy.get('#systemUser_employeeName_empName').type("Garry White")
    cy.get('#systemUser_userName').type("garywhite2")
    cy.get('#systemUser_password').type("123456789@Abcd")
    cy.get('#systemUser_confirmPassword').type("123456789@Abcd")
    cy.get('#btnSave').click()

    
})