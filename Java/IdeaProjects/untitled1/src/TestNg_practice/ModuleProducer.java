package TestNg_practice;

import org.testng.annotations.Test;

public class ModuleProducer {

    @Test
    public void webLoginP()
    {
        //selinum code
        System.out.println("Weblogin ");
    }

    @Test
    public void mobileLoginP()
    {
        //appium
        System.out.println("Mobile login");
    }
    @Test
    public void mobileLogoutP()
    {
        //appium
        System.out.println("Mobile logout");
    }
    @Test
    public void mobileSignup()
    {
        //appium
        System.out.println("Mobile signup");
    }

    @Test
    public void loginApiTestP()
    {
        System.out.println("Rest Api");
    }
}
