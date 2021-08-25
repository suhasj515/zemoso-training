package com.hubspot.engine;

import com.hubspot.base.Base;
import com.opencsv.CSVReader;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.io.*;
import java.util.Properties;

public class KeyworkEngine {

    public WebDriver driver;
    public Properties prop;
    public static Workbook book;
    public static Sheet sheet;
    public WebElement element;

    public Base base;


    public final String SenarioSheet="src/main/java/com/hubspot/engine/HubspotKeydriven4.csv";

    public void startExecution(String sheetName){

        String locatorName=null;
        String locatorValue=null;
        CSVReader reader=null;

        FileInputStream file=null;
        try {
            file= new FileInputStream(SenarioSheet);
            FileReader fr= new FileReader(SenarioSheet);

           // reader = new CSVReader(new FileReader("//home//suhasj//Documents//HubspotKeydriven.xlsx"));



        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            book=WorkbookFactory.create(new File("//home//suhasj//Documents//HubspotKeydriven.xlsx"));
            System.out.println(book);
        } catch (Exception e) {
            System.out.println(e);
            e.printStackTrace();
        }
        System.out.println(book);
        sheet=book.getSheet(sheetName);
        System.out.println(sheet);

        //start reading
        int counter=0;
        for(int i=1;i<sheet.getLastRowNum();i++)
        {
            String loactorColumnValue=sheet.getRow(i).getCell(counter+1).toString().trim();
            if(!loactorColumnValue.equalsIgnoreCase("NA")){
                locatorName=loactorColumnValue.split("=")[0].trim();
                locatorValue=loactorColumnValue.split("=")[1].trim();

            }

            String action=sheet.getRow(i).getCell(counter+2).toString().trim();
            String value=sheet.getRow(i).getCell(counter+3).toString().trim();

            switch (action){
                case "open browser":
                    base=new Base();
                    try {
                        prop= base.initProperties();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    if(value.isEmpty() || value.equals("NA")){
                        driver=base.initDriver(prop.getProperty("browser"));
                    }else{
                        driver=base.initDriver(value);
                    }
                    break;

                case "enter url":
                    if(value.isEmpty() || value.equals("NA")){
                        driver.get(prop.getProperty("url"));
                    }else{
                        driver.get(value);
                    }
                    break;

                case "quit":
                    driver.quit();
                    break;

                default:
                    break;
            }

            switch (locatorName){
                case "id":
                    element=driver.findElement(By.id(locatorValue));
                    if(action.equalsIgnoreCase("sendkeys")){
                        element.clear();
                        element.sendKeys(value);
                    }else if(action.equalsIgnoreCase("click")){
                        element.click();
                    }

                    locatorName=null;
                    break;

                case "linkText":
                    element=driver.findElement(By.linkText(locatorValue));
                    element.click();

                    locatorName=null;
                    break;


                default:
                    break;

            }

        }

    }
}
