import java.util.Scanner;

public class newclas {
    public static void main(String []args)
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter id");
        int id=sc.nextInt();
        sc.nextLine();
        System.out.println("enter name");
        String name=sc.nextLine();
        System.out.println("enter course");
        String course=sc.nextLine();
        Student s1=new Student(id,name,course);
        s1.printDetails(s1);
        StudentChangeCourse schange=new StudentChangeCourse();
        schange.ChangeCourse(s1,"M.tech");
        Sports s2=new Sports(3," prajwal "," bcom "," AB+");
        s2.setBloodgroup("a+");
        System.out.println(s2.getName()+s2.getId()+s2.getCourse()+s2.getBloodgroup());

        takeExam obj=new OneClass.TenClass();
        obj.RefillPenInk();
        obj.WriteExam();

        subjects e=new StudentSecoundLanguage();
        e.HindiSubject(s2);
        Telugu c=new StudentSecoundLanguage2();
        c.TeluguSubject(s2);




    }
}



