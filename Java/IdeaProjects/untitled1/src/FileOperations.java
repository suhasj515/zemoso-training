import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileOperations {
    public static void main(String [] args) throws IOException {
        //Create file
        File fp=new File("f1.txt");
        //Get file info
        System.out.println("File name: "+fp.getName());
        System.out.println("File path: "+fp.getAbsolutePath());
        System.out.println("File acess write: "+fp.canWrite());

        //Write to file
        FileWriter fw=new FileWriter("f1.txt");
        System.out.println("File acess write: "+fp.canWrite());
        fw.write("Hello there Hi from here ");
        fw.close();

        //Read from file
        Scanner sc=new Scanner(fp);
        while(sc.hasNext())
        {
            String s=sc.nextLine();
            System.out.println(s);

        }

    }
}
