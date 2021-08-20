import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class MakeMyTripDynamicDropDown {

    public static void main(String []args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Naveengowda\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.makemytrip.com/");
        //driver.findElement(By.id("fromCity")).click();
        WebElement source= driver.findElement(By.id("fromCity"));
        WebElement destination= driver.findElement(By.id("toCity"));

        source.sendKeys("hyd");
        Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div[2]/div[1]/div[1]/div[1]/div/div/div/input")).sendKeys(Keys.ARROW_DOWN,Keys.ENTER);
        destination.sendKeys("del");
        Thread.sleep(1000);
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div[2]/div[1]/div[2]/div[1]/div/div/div[1]/input")).sendKeys(Keys.ARROW_DOWN,Keys.ARROW_DOWN,Keys.ENTER);

    }
}
