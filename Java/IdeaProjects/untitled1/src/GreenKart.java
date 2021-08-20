import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;


public class GreenKart {
    public static void main(String []args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Naveengowda\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        //Implicite wait
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

        String[] iteamNeeded = {"Brocolli", "Beetroot","Carrot","Cauliflower"};
        driver.get("https://rahulshettyacademy.com/seleniumPractise/#/");
        Thread.sleep(5000);
        addIteamsBasket(driver,iteamNeeded);

        driver.findElement(By.cssSelector("img[alt='Cart']")).click();

        //Needs wait for 2 seconds
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/header/div/div[3]/div[2]/div[2]/button")).click();
        driver.findElement(By.cssSelector("input[class='promoCode']")).sendKeys("rahulshettyacademy");
        driver.findElement(By.className("promoBtn")).click();

        //Explicit WAit
        WebDriverWait explicitWait= new WebDriverWait(driver,8);
        explicitWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@class='promoInfo']")));


        Assert.assertEquals(driver.findElement(By.xpath("//span[@class='promoInfo']")).getText(),"Code applied ..!");

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/button")).click();
    }

    static void addIteamsBasket(WebDriver driver,String[] iteamNeeded)
    {
        int j=0;
        List<WebElement> products =  driver.findElements(By.cssSelector("h4.product-name"));
        for(int i=0;i<products.size();i++)
        {
            String[] name=products.get(i).getText().split("-");
            String formatedName=name[0].trim();
            System.out.println(formatedName);
            List iteamsNeeded = Arrays.asList(iteamNeeded);

            if(iteamsNeeded.contains(formatedName))
            {
                j++;
                driver.findElements(By.xpath("//div[@class='product-action']/button")).get(i).click();
                if(j==iteamNeeded.length)
                {
                    break;
                }

            }
        }
    }

}

