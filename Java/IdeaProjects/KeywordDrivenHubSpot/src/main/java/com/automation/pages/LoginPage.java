package com.automation.pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
public class LoginPage {
    WebDriver driver;
    public LoginPage(WebDriver ldriver)
    {
        this.driver=ldriver;
    }
    @FindBy(name="user[login]") WebElement uname;
    @FindBy(name="user[password]") WebElement pass;
    @FindBy(name="commit") WebElement loginButton;

    public void loginToCRM(String usernameApplication, String passwordApplication)
    {
        uname.sendKeys(usernameApplication);
        pass.sendKeys(passwordApplication);
        loginButton.click();

    }
}