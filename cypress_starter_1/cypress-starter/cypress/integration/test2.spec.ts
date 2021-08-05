describe("netwotk", () =>{
    it("Intercept", ()=>{
         cy.server();
         cy.route({
             method:'GET',
             url:'https://reqres.in/api/users?page=2',
             response:{
                 "page": 2,
                 "per page": 6,
                "status": 200,
                 "total": 3
             }
         }).as("networkIntercept").then((responses)=>{
             expect(responses).to.have.property('status', 200)
             expect(responses).to.have.not.null;
         })
         /* cy.intercept({
            method: 'GET',
           url: '/api/users'
         }).as('int1')  */
        

       //  cy.wait(@networkIntercept)
        })
    })



