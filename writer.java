import java.util.Scanner;
class writer {
    public static void main(String[] args) {
        String name, dob;
        int[] chronic = new int[9];
        int[][] vax = new int[22][2];
        
        //enter patient name and print name for confirm
        Scanner nameInput = new Scanner(System.in);
        System.out.println("enter name:");
        name = nameInput.nextLine();
        System.out.println("Patient name: " + name);

        //init write var and add name
        String write="";
        write += name + ",";

        //enter patient DOB D/M/Y and print for confirm
        Scanner ageInput = new Scanner(System.in);
        System.out.println("enter your Date of Birth (D/M/Y):");
        dob = ageInput.nextLine();
        System.out.println("Patient Date of Birth: " + dob);


        Scanner vaxrecord = new Scanner(System.in);
        String[] vaxdate = new String[22];
        for(int i = 0; i < vax.length; i++){
            System.out.println(vax.length);
            System.out.println(i);
            System.out.println();
            System.out.println("Enter the date you last recieved a dose of "+"[VACCINE]"+" (D/M/Y) ex, \"29/25/2023\"" );
            vaxdate[i] = "22/4/2008";

        
        
        }
    }
}   