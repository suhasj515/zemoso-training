class OneClass implements takeExam,SharpPenceil {
    public void RefillPenInk() {

        System.out.println("Error!! kids use penceil no pen found");
    }

    public void WriteExam() {

        System.out.println("writing exam");
    }

    /*solution */
    public void SharpPenceil() {
        
        System.out.println("Sharpning penceil");
    }

    static class TenClass implements takeExam
    {
       public void RefillPenInk()
        {
            System.out.println("Refilling ink");
        }
        public void WriteExam()
        {
            System.out.println("writing exam");
        }
    }
}
 