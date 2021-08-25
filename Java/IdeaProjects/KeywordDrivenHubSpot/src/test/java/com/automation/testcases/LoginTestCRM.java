package com.automation.testcases;
import com.automation.pages.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;
import com.automation.pages.LoginPage;
import com.automation.utility.BrowserFactory;
public class LoginTestCRM extends BaseClass {

    @Test
    public void loginApp()
    {
        LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
        loginpage.loginToCRM("Selenium", "Password");
    }
}