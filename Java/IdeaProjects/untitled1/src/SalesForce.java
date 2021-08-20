import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SalesForce {
    public static void main(String[] args)
    {
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Naveengowda\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
        WebDriver driver=new ChromeDriver();
        driver.get("https://login.salesforce.com/?locale=in");
        driver.findElement(By.id("username")).sendKeys("hello");
        driver.findElement(By.id("password")).sendKeys("password");
        driver.findElement(By.xpath("//*[@id=\"Login\"]")).click();
        System.out.println(driver.findElement(By.xpath("//*[@id=\"error\"]")).getText());

        driver.close();



    }
}
