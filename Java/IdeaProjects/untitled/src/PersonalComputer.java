/* Rule 5) Dependency inversion */



/*PROBLEM */
public class PersonalComputer {

    final StandardKeyboard keyboard;
    final StandardMouse mouse;

    public PersonalComputer() {
        mouse = new StandardMouse();
        keyboard = new StandardKeyboard();
    }
}



