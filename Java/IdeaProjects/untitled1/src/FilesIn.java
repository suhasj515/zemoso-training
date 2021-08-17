import java.io.File;
import java.io.FilenameFilter;
import java.util.regex.*;
class FilesIn {
    public static void main(String[] args) {


        File file = new File("./");
         String[] fileList = file.list();
        for(String str : fileList) {
            if(Pattern.matches("[a-z]+[0-9].txt", str))
            System.out.println(str);
            System.out.println(file.getAbsolutePath());

        }
    }
}