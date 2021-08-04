import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';

export class dependencies extends BaseDependencies{

    visitGreenComute(){
        this.accessUrl("http://bc15-green-commute.dev-apps.io/")
    }
}

export  class RoboHand extends BaseHands{
    typeLocation(){
        //this.typeTextonDom('class','MuiInputBase-input jss17','Hyderabad, Telangana, India')
        this.clickOnDomElement('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
        this.typeTextonDom('class','MuiInputBase-input jss17','Hyderabad, Telangana, India')
        cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div.jss20 > div').type('{downarrow}{enter}')
    }

    clickNext(){
        this.clickOnDomElement(':nth-child(1) > [data-testid=button] > .MuiButton-label')
    }

    typeWorkLocation(){
        this.clickOnDomElement('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
        this.typeTextonDom('class','MuiInputBase-input jss17','Hyderabad, Telangana, India')
        cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div.jss20 > div').type('{downarrow}{enter}')
    }
    clickNextWork(){
        this.clickOnDomElement(':nth-child(1) > [data-testid=button] > .MuiButton-label')
    }

    typeOfWork(){
        this.clickOnDomElement('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
        cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div').type('{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}')
        this.clickOnDomElement('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
        cy.get('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div').type('{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}')
    }
    clickNextSkills(){
        this.clickOnDomElement(':nth-child(1) > [data-testid=button] > .MuiButton-label')
    }

    clickOnFilter()
    {
        this.clickOnDomElement('.MuiButton-label > .MuiTypography-root')
        //this.clickOnDomElement(':nth-child(1) > [data-testid=filter-type] > :nth-child(5) > .jss116 > [data-testid=filter] > .MuiTypography-root')
        //cy.get('[type="checkbox"]').check('20-30 kms')
        //this.clickOnDomElement(':nth-child(1) > [data-testid=filter-type] > :nth-child(2) > .jss116 > [data-testid=filter] > .MuiTypography-root > .jss117')  
        //this.clickOnDomElement(':nth-child(4) > [data-testid=filter-type] > :nth-child(2) > .jss97') 
    }
    clickOn30to40()
    {
        this.clickOnDomElement(':nth-child(1) > [data-testid=filter-type] > :nth-child(5) > .jss97 > [data-testid=filter] > .MuiTypography-root > .jss98')
    }
    clickOnApply()
    {
        this.clickOnDomElement(':nth-child(2) > [data-testid=button] > .MuiButton-label')
    }

    clickOnJob()
    {
        this.clickOnDomElement('[data-testid=jobCard-placeholder]')
    }

    saveJob()
    {
        this.clickOnDomElement('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
    }

    goToSavedJob()
    {
        this.clickOnDomElement(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
    }

    removeSavedJob()
    {
        this.clickOnDomElement('[data-testid=jobCard-placeholder]')
        this.clickOnDomElement('.MuiButton-outlined > .MuiButton-label')
    }

}


export class RoboEye extends BaseEyes{
    checkIfJObExist(){
        this.seesDomContainText(':nth-child(3) > .MuiGrid-container > :nth-child(1) > [data-testid=cardLabel-placeholder]','Python Developer')
        //this.seesTextWithClass('MuiTypography-root jss85 MuiTypography-h4','User Interface Designer')
        //this.seesTextWithId('cardLabel-placeholder','User Interface Designer')
        //this.seesDomContainText('/html/body/div/div/div/div[2]/div[2]/div/div/div[3]/div[1]/div/div/div[3]/div/div[1]/h4','User Interface Designer')
    }
}