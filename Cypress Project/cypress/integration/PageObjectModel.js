
 import PageObject from './pages/PageObject'

 let pg= new PageObject();
it("login page",() => {
    pg.navigate("https://trytestingthis.netlify.app/")

    pg.usName('test')
    pg.usPass('test')
    pg.loginClick()
})