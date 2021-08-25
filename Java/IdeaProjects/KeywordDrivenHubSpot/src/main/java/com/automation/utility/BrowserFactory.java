package com.automation.utility;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class BrowserFactory {
    public static WebDriver startApplication(WebDriver driver,String browserName, String appURL){
        if(browserName.equals("Chrome")){
            System.setProperty("webdriver.chrome.driver", "/home/suhasj/Downloads/chromedriver_linux64 (1)/chromedriver");
            driver = new ChromeDriver();
            driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        }
        else
        {
            System.out.println("Does not support this browser");
        }
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get(appURL);
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
        return driver;
    }
    public static void quitBrowser(WebDriver driver){
        driver.quit();
    }
}