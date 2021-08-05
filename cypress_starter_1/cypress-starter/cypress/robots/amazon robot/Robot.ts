import { resetHistory } from "cypress/types/sinon";
import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";
import { RobotEyes } from "../wikipedia/Robot";

export class RoboDepen extends BaseDependencies{

    openAmazon() {
        this.accessUrl("https://www.amazon.in/")
    }

}
const bEye= new RobotEyes()
export class RoboHand extends BaseHands{
    signInAmazon(){
        this.clickOnDomElement('#nav-link-accountList-nav-line-1')

        //email assertion
        bEye.seesDomContainText('.a-form-label'," Email or mobile phone number")
        

        this.typeTextonId('ap_email','suhasj515@gmail.com')
        this.clickOnDomElement('.a-button-inner > #continue')

        bEye.seesDomContainText('.a-span5 > .a-form-label',"Password")

        this.typeTextonId('ap_password','gamesforFUN10')
        this.clickOnDomElement('#signInSubmit')


        bEye.seesDomContainText('#nav-link-accountList-nav-line-1',"Hello, suhas")
    }


    scrollAmazon1()
    {
        this.scrollToWithClassName(' a-js a-audio a-video a-canvas a-svg a-drag-drop a-geolocation a-history a-webworker a-autofocus a-input-placeholder a-textarea-placeholder a-local-storage a-gradients a-transform3d a-touch-scrolling a-text-shadow a-text-stroke a-box-shadow a-border-radius a-border-image a-opacity a-transform a-transition null a-touch','bottom')
    }

    clickOnTodayDeals(){
       cy.contains("Today's Deals").click({force : true})
    }
    clickOnThirdElement(){

        //check today's deals
        bEye.seesDomContainText('.a-size-extra-large',"Today's Deals")


       // cy.get(':nth-child(3) > [data-testid=deal-card] > :nth-child(1) > .a-link-normal > .a-image-container > img').click()
        this.clickOnDomElement(':nth-child(3) > [data-testid=deal-card] > :nth-child(3) > .a-size-mini > .a-size-medium')
        /*cy.get(':nth-child(3) > [data-testid=deal-card] > :nth-child(1) > .a-link-normal > .a-image-container > img').then(function(arg1)
                     {
                       let newurl=arg1.prop('href') 
                        
                         cy.log(newurl)
                        cy.visit(newurl)
                     }) */

                     this.clickOnDomElement(':nth-child(2) > .a-list-item > .octopus-dlp-asin-section > .a-spacing-base > .a-link-normal > .a-section')
        
          
    }
    
    getQuantity(){
        cy.get('#quantity').then(function(arg1) {
            var q=arg1.text()
            cy.log(q)
        })
    }

    addToCart(){
        this.clickOnDomElement('#add-to-cart-button')
        
        //sees add to cart
        bEye.seesDomContainText('strong','Please confirm that you want to add the item(s) listed below to your cart.')
    }

    checkQuantity(){
        let q1
        cy.get('tbody > :nth-child(2) > :nth-child(4)').then(function(arg1) {
            q1=arg1.text()
            expect(q1).to.be.equal('1')
        })
    }

    searchMobile(){
        //this.clickOnDomElement('#twotabsearchtextbox')
        this.typeTextonId('twotabsearchtextbox','mobile')
        this.clickOnId('nav-search-submit-button')

         //assertion
         bEye.seesDomContainText('.a-section > .a-color-state',"mobile")
    }

    scrollAmazon() {
      //  cy.scrollTo('bottom')
       
    }

    getLastMobileDeatils() {
      /*  cy.get('[data-asin="B099T7XNGW"] > :nth-child(1) > .celwidget > .s-expand-height > .a-spacing-medium > :nth-child(2) > .sg-col-8-of-16 > :nth-child(1) > :nth-child(1) > :nth-child(1) > .a-size-mini').then(function (arg1) {
            const details=arg1.text()
            cy.log(details)
        }) */
     // cy.get('#s-main-slot').eq(18).click()
      cy.get('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(18) > div > span > div > div > div:nth-child(2) > div.sg-col.sg-col-4-of-12.sg-col-4-of-16.sg-col-4-of-20 > div > div > span > a').then(function(argl){

            const txt = argl.prop('href')
            cy.log(txt);
        
            }) 

            

    } 

    clickPrimeOnly(){
        this.clickOnDomElement('.a-link-normal > .a-icon-prime')
        //cy.get('#search > div.s-desktop-width-max.s-opposite-dir > div.sg-col-4-of-12.s-matching-dir.sg-col-4-of-16 sg-col.sg-col-4-of-20 > div > div.a-section > span > div:nth-child(0) > span > div > div > div:nth-child(0) > ul.a-unordered-list.a-nostyle.a-vertical.a-spacing-medium > li > span > a').click()
        
    }

    clickFirstElement() {
        cy.get('[data-asin="B07WHR5RKH"] > :nth-child(1) > .celwidget > [data-component-type="s-impression-logger"] > div.rush-component > .s-expand-height > .a-spacing-medium > :nth-child(2) > .sg-col-8-of-16 > :nth-child(1) > :nth-child(1) > .sg-row > .sg-col-4-of-20 > .sg-col-inner > .a-spacing-top-micro > .a-row > [aria-label="FREE One-Day"] > span').then(function (arg1) {
            const details=arg1.text()
            cy.log(details)

        })
    }
  rightNavOpen(){
    this.clickOnDomElement('.hm-icon')
  }

  clickOnAcc(){
    cy.get('#hmenu-canvas-background > .nav-sprite').click()
    this.clickOnDomElement('#nav-link-accountList > .nav-line-2')
   // this.clickOnDomElement(':nth-child(2) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner')
   
  }


  goToOrdersWithSignIN(){
    this.clickOnDomElement(':nth-child(2) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner')
   
    this.typeTextonId('ap_email','suhasj515@gmail.com')
    this.clickOnDomElement('.a-button-inner > #continue')
    cy.get('#ap_password').type('gamesforFUN10')
    this.clickOnDomElement('#signInSubmit')
    cy.wait(6000)
  
    
  }

  adressAddVerify() {
    this.clickOnDomElement('#nav-link-accountList > .nav-line-2')
    this.clickOnDomElement(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner')
    

    this.typeTextonId('ap_email','suhasj515@gmail.com')
    this.clickOnDomElement('.a-button-inner > #continue')
    cy.get('#ap_password').type('gamesforFUN10')
    this.clickOnDomElement('#signInSubmit')
    cy.wait(6000)

    this.clickOnDomElement('.a-box-inner > .a-color-tertiary')
    this.typeTextonId('address-ui-widgets-enterAddressFullName','suhas')
    this.typeTextonId('address-ui-widgets-enterAddressPhoneNumber','8073532059')
    this.typeTextonId('address-ui-widgets-enterAddressPostalCode','560065')
    this.typeTextonId('address-ui-widgets-enterAddressLine1','#667')
    this.typeTextonId('address-ui-widgets-enterAddressLine2','17th main, judicial layout, banglore')
    this.clickOnDomElement('.a-button-input')

  }
}
export class RoboEye extends BaseEyes{
    verifyAddress() {
        this.seesTextWithClass('a-alert-heading','Address saved')
    }
}