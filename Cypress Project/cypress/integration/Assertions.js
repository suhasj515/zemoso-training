/// <reference types="cypress" />

it("Twitter", () => {
    cy.visit("https://twitter.com/?lang=en")
    cy.get('[data-testid=signupButton] > .r-1awozwy',{timeout:6000})
    .should('contain','Sign up')
    .should('have.class','css-901oao')
    .should('be.visible')
    cy.get('[href="https://about.twitter.com"] > .css-901oao')
    .invoke('attr','class')
    .should('equal','css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0')

    cy.get('[data-testid=signupButton] > .r-1awozwy')
    .should('contain','Sign up')
    .and('contain','Sign up')



    //explicit 
    //expect
    let name='twitter'
    expect(name).to.be.equal('twitter')

    //assert
    assert.equal(12,12,"12 error")

    assert.strictEqual("hi","hi","hi not equal")

})