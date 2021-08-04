import { dependencies, RoboHand ,RoboEye } from "../../robots/green comute robots/Robot";

context('grenn comute',() => {
    const depen=new dependencies()
    const rbHand= new RoboHand()
    const rbEye= new RoboEye()

    it('visit',() =>{
        depen.visitGreenComute()
    })

    it('Enter job location', ()=>{
        rbHand.typeLocation()
        rbHand.clickNext()
    })

    it('type work location ',()=>{
        rbHand.typeWorkLocation()
        rbHand.clickNextWork()
        
    })

    it('skills selection',() => {
        rbHand.typeOfWork()
        rbHand.clickNextSkills()
        //cy.get('[data-testid=button]').click()
    })


    it('Filter distance', () =>{
        rbHand.clickOnFilter()
        //cy.get(':nth-child(1) > [data-testid=filter-type] > :nth-child(5) > .jss97 > [data-testid=filter]').click()
        rbHand.clickOn30to40()
        rbHand.clickOnApply()
        //cy.get(':nth-child(2) > [data-testid=button] > .MuiButton-label').click()
    })

    it('check if job exists', () => {

        rbEye.checkIfJObExist()
    })

    it('Click On Job', () =>{
        rbHand.clickOnJob()
    })

    it("Save JOb", () => {
        rbHand.saveJob()
    })

    it('Saved job',() =>{
        rbHand.goToSavedJob()
    })
    it('Remove Saved Jobs', () => {
        rbHand.removeSavedJob()
    })
})