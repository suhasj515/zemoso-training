import java.io.File;
import java.io.FilenameFilter;
import java.util.regex.*;
class FilesIn {
    public static void main(String[] args) {


        File file = new File("./");

     //   String[] fileList = file.list();
   /*   FilenameFilter filter = new FilenameFilter() {

            public boolean accept(File f, String name)
            {
                return name.startsWith("p");
            }
        };
        File[] files = file.listFiles(filter);


        for (int i = 0; i < files.length; i++) {
            System.out.println(files[i].getName());
            System.out.println(files[i].getAbsolutePath());
        }
*/      String[] fileList = file.list();
        for(String str : fileList) {
            if(Pattern.matches("[a-z]+[0-9].txt", str))
            System.out.println(str);
            System.out.println(file.getAbsolutePath());

        }
    }
}