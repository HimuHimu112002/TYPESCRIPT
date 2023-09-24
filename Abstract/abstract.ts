// NOTE --> abstract use korte hole class er samne abstract likhte hobe and abstract er vhitore kono abstract method likht chaile tar samne abstract dite hobe and kono body thakben EX: Myfunc1 jar kono body nai then jei class extends korbe abstract class ke sei extends kora class er vhitore theke abstract method call kore use korte hobe abstract method use jodi na kora hoi taole error dibe


abstract class student{
    name:string;
    age:number;

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }

    abstract Myfunc1()

}

class student1 extends student{
    roll:number;
    id:number;

    constructor(name:string, age:number, roll: number, id:number){
        super(name, age)
        this.roll = roll
        this.id = id
    }

    Myfunc1(){
        console.log(`My name is = ${this.name} and My age is = ${this.age} My roll = ${this.roll} and My id ${this.id}`)
    }


}

// let val1 = new student("himu", 25)
// val1.Myfunc1()

let val2 = new student1("himu", 25, 1,4)
val2.Myfunc1()
