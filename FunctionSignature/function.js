var user1;
user1 = function () {
    console.log("First user");
};
user1();
// function signature bole karon function create korar age amra bole diyesi function return ki hobe and parameters ki hobe
// ========================================= 2
var user2;
user2 = function (name) {
    return name;
};
var re = user2("Himu1");
console.log(re);
// ======================================== 3
var user3;
user3 = function (name) {
    console.log(name);
};
user3("Himu");
