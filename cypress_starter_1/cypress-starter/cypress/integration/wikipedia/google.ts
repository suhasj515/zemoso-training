/// <reference types="cypress" />

context('Window', () => {
    it('google.com',() => {
      cy.visit('https://example.cypress.io/commands/window')
    })
} )