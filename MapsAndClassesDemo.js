var map1 = new Map();
map1.set("first_name","Robb");
map1.set("last_name","Stark");
map1.set("friend_1","Bran").set("friend_2","John");

console.log(map1.keys()); //Prints all above 4 Key Values.
console.log("map1 has friend_3? "+map1.has("friend_3"));
console.log("get Value for key = friend 3"+map1.get("friend_3")); // null/undefined
console.log("delete element with key = friend_2"+map1.delete("friend_2"));
console.log(map1.size); // Prints only 3 Keys and Values , because friend_2 is deleted from above line.
map1.clear(); // Clears all key values
console.log(map1.size); //Prints Nothing.

//Below is the Class Definition with 2 Properties(id, name) and a Method(detail).
class Employee
{
    constructor(id, name)
    {
        this.id=id;
        this.name=name;
    }

    detail()
    {
        document.writeln(this.id+" "+this.name+"<br>")
    }
}

//After the class is defined, we will start creating 2 objects.
var emp1 = new Employee(101, "Michael");
var emp2 = new Employee(102, "Sathish");
emp1.detail();
emp2.detail();