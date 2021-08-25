package com.automation.pages;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import com.automation.utility.BrowserFactory;
public class BaseClass {
    public WebDriver driver;
    @BeforeClass
    public void setup()
    {
        driver= BrowserFactory.startApplication(driver, "Chrome", "https://www.browserstack.com/users/sign_in");
    }
    @AfterClass
    public void teardown()
    {
        BrowserFactory.quitBrowser(driver);
    }
}