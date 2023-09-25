let user1 : ()=> void;
user1 = () =>{
    console.log("First user")
}
user1()

// function signature bole karon function create korar age amra bole diyesi function return ki hobe and parameters ki hobe
// ========================================= 2
let user2 : (name : string)=> string;
user2 = (name: string) =>{
    return name
}
let re = user2("Himu1")
console.log(re)

// ======================================== 3
let user3 : (name : string)=> void;
user3 = (name: string) =>{
    console.log(name)
}
user3("Himu")