/* Rule 1) Single responsibility */
class StudentChangeCourse {
    public void ChangeCourse(Student s, String changename) {
        System.out.println(s.getName() + " has changed course from " + s.getCourse() + " to " + changename);
        s.setCourse(changename);
    }
}
