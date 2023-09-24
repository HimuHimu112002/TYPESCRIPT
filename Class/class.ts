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
let val1 = new student("himu", 25)
val1.Myfunc1()