import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

public class SpiceJetDropDown {

    public static void main(String []args){
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Naveengowda\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
        WebDriver driver=new ChromeDriver();
        driver.get("https://www.spicejet.com/");
        driver.findElement(By.id("divpaxinfo")).click();
        Select select= new Select(driver.findElement(By.xpath("//*[@id=\"ctl00_mainContent_ddl_Adult\"]")));
        select.selectByValue("4");
        select.selectByIndex(5);
        select.selectByVisibleText("7");

        //CheckBoxes
        System.out.println("No of checkboxes "+driver.findElements(By.cssSelector("input[type='checkbox']")).size());
        Assert.assertEquals(driver.findElements(By.cssSelector("input[type='checkbox']")).size(),9);

        //Assert.assertTrue(driver.findElement(By.id("ctl00_mainContent_chk_IndArm")).isSelected());

        driver.findElement(By.id("ctl00_mainContent_chk_IndArm")).click();
        System.out.println("Checkbox is selected? :"+driver.findElement(By.id("ctl00_mainContent_chk_IndArm")).isSelected());
        Assert.assertTrue(driver.findElement(By.id("ctl00_mainContent_chk_IndArm")).isSelected());


        //Check if certain element enabled or not

        if(driver.findElement(By.id("Div1")).getAttribute("style").contains("1"))
        {
            Assert.assertTrue(true);
            System.out.println("Enabled");
        }
        else{
            System.out.println("Disabled");
        }

        driver.findElement(By.id("ctl00_mainContent_rbtnl_Trip_1")).click();

        if(driver.findElement(By.id("Div1")).getAttribute("style").contains("1"))
        {
            Assert.assertTrue(true);
            System.out.println("Enabled");
        }
        else{
            System.out.println("Disabled");
        }


    }

}
