import { RoboDepen, RoboHand } from "../../robots/amazon robot/Robot";

context("Amazon Assigment", () => {
    const rbDepen= new RoboDepen()
    const rbHand= new RoboHand()
before(()=>{
    //it("visit amazon.in", () => {
        rbDepen.openAmazon()
   // })

   // it('Sign in with amzon',() => {
        rbHand.signInAmazon()
   // })
})

    it("today's deals",() =>{
        rbHand.clickOnTodayDeals()
        rbHand.clickOnThirdElement()
    })

    it('Check Quantity',() => {
        rbHand.getQuantity()
    })
    it('Add cart',() => {
        rbHand.addToCart()
    })



    it('Check quantity ', () => {
        rbHand.checkQuantity()
    })
    it('Search mobile', () => {
        rbHand.signInAmazon()
        rbHand.searchMobile()
    })

    it('Scroll down', () => {
        rbHand.scrollAmazon()
    })


    it("get last mobile details", () => {
        rbHand.getLastMobileDeatils()
    })
    
    it('click prime', () => {
        rbHand.clickPrimeOnly()

    })
    it('Get first element date', () => {
        rbHand.clickFirstElement()
    })
})