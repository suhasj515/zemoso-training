import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class Tables {
    public static void main(String []args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Naveengowda\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://techcanvass.com/examples/webtable.html");
        //*[@id="t01"]/tbody/tr[1]/th[1]
        //*[@id="t01"]/tbody/tr[2]/td[1]

        //*[@id="t01"]/tbody/tr[2]/td[1]

        List<WebElement> rows=driver.findElements(By.tagName("tr"));
        System.out.println(rows.size());
        List<WebElement> colums=driver.findElements(By.tagName("td"));
        System.out.println(colums.size());
        int NoOfRows=rows.size();
        int NoOfCol= colums.size()/(rows.size()-1);
        System.out.println(NoOfCol);

        for(int i=1;i<=NoOfRows;i++)
        {
            for(int j=1;j<=NoOfCol;j++)
            {
                //System.out.println(i+" s "+j);
                if(i==1) {
                    System.out.print(driver.findElement(By.xpath("//*[@id=\"t01\"]/tbody/tr[" + i + "]/th[" + j + "]")).getText()+"  ");
                }else{
                    System.out.print(driver.findElement(By.xpath("//*[@id=\"t01\"]/tbody/tr[" + i + "]/td[" + j + "]")).getText()+"  ");
                }

            }
            System.out.println();
        }
    }
}
