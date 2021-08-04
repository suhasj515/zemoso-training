class PageObject{

    navigate(url){
        cy.visit(url)
    }

    usName(name){
        cy.get('#uname').type(name)
    }

    usPass(pass){
        cy.get('#pwd').type(pass)
    }

    loginClick(){
        cy.get('[type="submit"]').click()
    }
}
export default PageObject