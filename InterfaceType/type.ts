// amader coder er vhitore common jei code guli lagbe sei commmon code er akta interface create korte pari and jekhane jekhane proyojon amra common interface reuse korte pari
interface CommonInterface{
    name: string;
    age: number;
    id:number;
}


// array er vhitore object type array push korar jonno first format kore nilam je ay array te amon type er object thakbe and koiti value thakbe type ki setao bole dilam
let user:CommonInterface[] = []

let user1:CommonInterface = {
    name: "Aktarujjaman",
    age: 25,
    id: 1,
}
console.log(user1.name)

let user2:CommonInterface = {
    name: "Aktarujjaman Himu",
    age: 23,
    id: 2,
}
console.log(user1.name)


// akhane first 2 ti object push korlam array te then forEach use kore loop kore 2ti output ber kore anlam
user.push(user1)
user.push(user2)
const userFunc =(user:CommonInterface)=>{
    console.log(`Name: ${user.name} Age: ${user.age} Id: ${user.id}`)
}
user.forEach((x) => userFunc(x))