import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CustomXpathTenda {
    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Naveengowda\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
        WebDriver driver=new ChromeDriver();
        driver.get("http://192.168.0.1/login.html");
        driver.findElement(By.xpath("//input[@id='login-password']")).sendKeys("gamesforFUN10");
        driver.findElement(By.xpath("//input[@id='subBtn']")).click();
        Thread.sleep(2000);
        driver.findElement(By.xpath("//a[@href='#system']")).click();
        driver.findElement(By.xpath("//*[@id='sys_upgrade']/div[1]")).click();
    }
}