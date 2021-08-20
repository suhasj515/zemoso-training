import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SpiceJetDynamicDropDown {
    public static void main(String []args) throws InterruptedException {
            System.setProperty("webdriver.chrome.driver", "C:\\Users\\Naveengowda\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
            WebDriver driver = new ChromeDriver();
        driver.get("https://www.spicejet.com/");
        driver.findElement(By.id("ctl00_mainContent_ddl_originStation1_CTXT")).click();
        Thread.sleep(2000);
        //driver.findElement(By.xpath("//a[@value='BLR']")).click();
        //driver.findElement(By.id("//*[@id=\"dropdownGroup1\"]/div/ul[1]/li[10]/a"));
        //driver.findElement(By.id("Select Destination")).click();
        //driver.findElement(By.xpath("(//a[@value='HYD'])[2]")).click();
        driver.findElement(By.xpath("//a[@value='AGR']")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("(//a[@value='CCU'])[2]")).click();
        //driver.findElement(By.xpath("//div[@id='ctl00_mainContent_ddl_destinationStation1_CTNR'] //a[@value='CCU']"));


        //Selecting dates

        driver.findElement(By.cssSelector(".ui-state-default.ui-state-highlight.ui-state-active")).click();






    }
}
