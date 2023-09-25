// array er vhitore object type array push korar jonno first format kore nilam je ay array te amon type er object thakbe and koiti value thakbe type ki setao bole dilam
var user = [];
var user1 = {
    name: "Aktarujjaman",
    age: 25,
    id: 1,
};
console.log(user1.name);
var user2 = {
    name: "Aktarujjaman Himu",
    age: 23,
    id: 2,
};
console.log(user1.name);
// akhane first 2 ti object push korlam array te then forEach use kore loop kore 2ti output ber kore anlam
user.push(user1);
user.push(user2);
var userFunc = function (user) {
    console.log("Name: ".concat(user.name, " Age: ").concat(user.age, " Id: ").concat(user.id));
};
user.forEach(function (x) { return userFunc(x); });
