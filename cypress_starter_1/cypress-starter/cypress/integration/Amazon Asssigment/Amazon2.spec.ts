import { RoboDepen, RoboHand, RoboEye } from "../../robots/amazon robot/Robot";

context("Amazon Assigment2", () => {
    const rbDepen= new RoboDepen()
    const rbHand= new RoboHand()
    const rbEye= new RoboEye()

    before(() =>{
        rbDepen.openAmazon()
        rbHand.signInAmazon()
    })

    it('RIght Navigation', () => {
       rbHand.rightNavOpen()

    })
    it("Click on mobile and accesories", () => {
        rbHand.clickOnDomElement(':nth-child(15) > .hmenu-item > div')
    })

    it('GOing back to Main menu ', () =>{
        rbHand.clickOnDomElement('.hmenu-visible > :nth-child(1) > .hmenu-item > div')
    })

    it('Clicking on your orders', () => {
       rbHand.clickOnAcc()
    })

    it('Going to orders', ()=> {
       rbHand.goToOrdersWithSignIN()
        
    })

    it("View last year orders", () => {
        cy.get('#a-autoid-1-announce').type('{downarrow}{enter}')
        rbHand.typeTextonId('ap_email','suhasj515@gmail.com')
    rbHand.clickOnDomElement('.a-button-inner > #continue')
    cy.get('#ap_password').type('gamesforFUN10')
    rbHand.clickOnDomElement('#signInSubmit')
    cy.wait(6000)
    
    })
    it('Adress verify', () => {
        
        rbHand.adressAddVerify()
        rbEye.verifyAddress()
        
    })
})