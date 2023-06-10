
//Prototype's Properties are defined here.
function EMPLOYEE(name, designation, yearOfBirth)
{
    //Prototype's Properties are assigned here with incoming values.
    //Funtion + Constructor ==> Prototype.
    this.name=name;
    this.designation=designation;
    this.yearOfBirth=yearOfBirth;
}

//function employee{} --> NOT a Prototype.

//Prototype's Methods are defined here.
EMPLOYEE.prototype.calculateAge=function()
{
    console.log('The Current age is: '+(2023- this.yearOfBirth));
}
//Prototype's is printed.
console.log(EMPLOYEE.prototype)

//Prototype's Objects are created here.
let Emp1=new EMPLOYEE('John','Junior Tester',1995);
console.log('Emp1: '+Emp1);
Emp1.calculateAge();

let Emp2=new EMPLOYEE('Dexter','Senior Software Developer',1990);
console.log('Emp2: '+Emp2);
Emp2.calculateAge();

let Emp3=new EMPLOYEE('Diana','Junior Developer',1997);
console.log('Emp3: '+Emp3);
Emp3.calculateAge();

//*********************************************Below Code is ONLY for Learning************************************** */
/* Java Equivalent Program
public class EMPLOYEE{

    String name;
    String designation;
    String yearOfBirth;

    EMPLOYEE(name, designation, yearOfBirth)
    {
        this.name=name;
        this.designation=designation;
        this.yearOfBirth=yearOfBirth;
    }

void calculateAge()
    {
    System.out.println("The current age is: "+(2022-yearOfBirth));
    }
}

EMPLOYEE Emp1 = new EMPLOYEE("John","Junior Tester",1995);
Emp1.calculateAge();
*/