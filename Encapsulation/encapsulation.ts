class student{
    // private name:string;
    // let val1 = new student("himu", 25)
    // val1.Myfunc()

    name:string;
    age:number;

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }

    Myfunc(){
        console.log(`Private property access ${this.name}`)
    }

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

let val2 = new student1("himu", 25, 1,4)

// public obosthai thakar karon bahir theke access kora gelo and modify kora gelo
// val2.name = "Moni"

// protected obosthai thakar karon bahir theke access kora jabena sudhu extends kora jabe modify kora jabena
// val2.name = "hello"

// private obosthai thakar karon bahir theke access kora jabena and extends kora jabena modify kora jabena sudhu matro jei block er vhitore private property thakbe sei block thekei access korte hbe
// val2.name = "hello"

val2.Myfunc1()
