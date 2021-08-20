import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.sql.Time;
import java.time.Clock;

public class Exceptions {


    public static void main(String []args) {
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Naveengowda\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj5rNaTmbfyAhUW4zgGHbdLBeQQPAgI");
        try {
            driver.findElement(By.name("google")).sendKeys("Zemoso", Keys.ENTER);
        }
        catch (Exception e){
            System.out.println(e);
            System.out.println("Could'nt find element");
        }

        try {
            WebDriverWait wait = new WebDriverWait(driver,4);
            wait.until(ExpectedConditions.presenceOfElementLocated(By.id("submit")));

        } catch (Exception e) {
            System.out.println("TimeOut exception");
        }
    }
}
