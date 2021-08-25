package com.hubspot.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Base {

    public WebDriver driver;
    public Properties prop;

    public WebDriver initDriver(String browserName){
        if(browserName.equalsIgnoreCase("chrome")){
            System.setProperty("webdriver.chrome.driver", "/home/suhasj/Downloads/chromedriver_linux64 (1)/chromedriver");
            if(prop.getProperty("headless").equals("yes")){
                ChromeOptions options= new ChromeOptions();
                options.addArguments("--headless");
                driver= new ChromeDriver(options);
            }else{
                driver=new ChromeDriver();
            }

        }
        return driver;
    }

    public Properties initProperties() throws IOException {
        prop=new Properties();
        FileInputStream fip=new FileInputStream("/home/suhasj/IdeaProjects/KeywordDrivenHubSpot/src/main/java/com/hubspot/config/config.properties");
        prop.load(fip);

        return prop;

    }
}
