//Task1. Please use TypeScript to write a Student class that includes the following properties and methods.
//Private attributes: name, studentId, and age
//Constructor: takes name, student ID, and age as parameters and verifies age (age cannot be less than 0)
//Common methods: getName() (return name), getStudentId() (return student ID), getAge() (return age), displayInfo() (output all student information on the console)
// Write your code here

class Student {
    
    private name: string;
    private studentId: string;
    private age: number;

    
    constructor(name: string, studentId: string, age: number) {
        if (age < 0) {
            throw new Error("Age cannot be less than 0");
        }
        this.name = name;
        this.studentId = studentId;
        this.age = age;
    }

    
    getName(): string {
        return this.name;
    }

    getStudentId(): string {
        return this.studentId;
    }

    getAge(): number {
        return this.age;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Age: ${this.age}`);
    }
}


const student1 = new Student("Alice", "S12345", 20);
student1.displayInfo(); 

const student2 = new Student("Bob", "S67890", -5);