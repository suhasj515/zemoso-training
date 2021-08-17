/* Rule 2) open/close principle */
class Sports extends Student {
    Sports(int id, String name, String course, String bloodgroup) {
        super(id, name, course);
        this.bloodgroup = bloodgroup;
    }
         public void PlayingSports()
        {
            System.out.println("Students playing sports");
        }

    public String getBloodgroup() {
        return bloodgroup;
    }

    public void setBloodgroup(String bloodgroup) {
        this.bloodgroup = bloodgroup;
    }

    private String bloodgroup;
}
