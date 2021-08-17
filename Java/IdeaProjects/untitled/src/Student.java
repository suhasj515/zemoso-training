class Student {
    Student(int id, String name, String course) {
        this.id = id;
        this.name = name;
        this.course = course;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    private int id;
    private String name;
    private String course;

    public static void printDetails(Student s) {
        System.out.println(s.name + " id no is " + s.id + " and studying " + s.course);
    }
}
