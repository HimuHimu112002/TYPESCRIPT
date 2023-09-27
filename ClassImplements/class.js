var user = /** @class */ (function () {
    function user(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        // jodi constructor er majhei private likhi tahole r this.fullName lihar dorkar nai
        this.format = function () {
            return "".concat(_this.fullName, " and ").concat(_this.age);
        };
    }
    return user;
}());
var Ruser = new user("Himu", 25);
console.log(Ruser.format());
