class student{
    name:string;
    age:number;

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }

    Myfunc1(){
        console.log(`My name is = ${this.name} and My age is = ${this.age}`)
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

    Myfunc2(){
        console.log(`My name is = ${this.name} and My age is = ${this.age} My roll = ${this.roll} and My id ${this.id}`)
    }

}

class student2 extends student1{
    collage:string;

    constructor(name:string, age:number, roll: number, id:number, collage:string){
        super(name, age,roll,id)
        this.collage = collage
    }

    Myfunc3(){
        console.log(`My name is = ${this.name} and My age is = ${this.age} My roll = ${this.roll} and My id ${this.id} My collage = ${this.collage}`)
    }

}

let val1 = new student("himu", 25)
val1.Myfunc1()

let val2 = new student1("himu", 25, 1,4)
val2.Myfunc2()

let val3 = new student2("himu", 25, 1,4,"Sirajgong")
val3.Myfunc3()