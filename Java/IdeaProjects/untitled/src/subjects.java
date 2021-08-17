/* Rule 4) Interface segregation */
interface subjects {
    public void HindiSubject(Sports s);

    public void TeluguSubject(Sports s);


}
interface Hindi {
        public void HindiSubject(Sports s);
    }


interface Telugu {
        public void TeluguSubject(Sports s);
    }



