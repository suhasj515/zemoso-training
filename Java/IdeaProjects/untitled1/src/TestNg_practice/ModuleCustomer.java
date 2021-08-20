package TestNg_practice;

import org.testng.annotations.Test;

public class ModuleCustomer {

    @Test
    public void webLogin()
    {
        //selinum code
        System.out.println("Weblogin ");
    }

    @Test
    public void mobileLogin()
    {
        //appium
        System.out.println("Mobile login");
    }

    @Test
    public void loginApiTest()
    {
        System.out.println("Rest Api");
    }

}
