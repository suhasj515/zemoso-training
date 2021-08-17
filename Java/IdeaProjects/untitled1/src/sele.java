import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class sele {
    public static void main(String[] args)
    {
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Naveengowda\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
        WebDriver driver=new ChromeDriver();
        driver.get("https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj5rNaTmbfyAhUW4zgGHbdLBeQQPAgI");
        driver.findElement(By.name("q")).sendKeys("Zemoso", Keys.ENTER);


    }
}
