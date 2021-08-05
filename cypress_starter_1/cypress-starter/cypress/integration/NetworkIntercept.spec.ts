
import { Addition } from "./Sample"

const a= new Addition()
it("Stubs", () => {
    const b= a.addOneAndTwo()
    cy.stub(a, 'addOneAndTwo').returns(5)
    cy.spy(a,'callMultiple')
    cy.log(Cypress.env("login"))
    Cypress.env('login')
   // cy.clock()
   // cy.visit(Cypress.env("login"))
    //cy.get('.gLFyf').type('youtube {enter}')
    

   // cy.tick(10000)
   //cy.visit('https://reqres.in/api/users?page=2')
   cy.intercept({
      method: 'GET',
     url: '/api/users'
   }).as('int1')


    
})