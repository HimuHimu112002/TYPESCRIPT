interface Iformatter{
    format : () => string
}

class user implements Iformatter{
    constructor(private fullName: string, private age: number){}
    // jodi constructor er majhei private likhi tahole r this.fullName lihar dorkar nai

    format = () => {

        return `${this.fullName} and ${this.age}`
    }; 
}

let Ruser = new user("Himu", 25);
console.log(Ruser.format())