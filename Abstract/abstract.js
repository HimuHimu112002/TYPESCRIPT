// NOTE --> abstract use korte hole class er samne abstract likhte hobe and abstract er vhitore kono abstract method likht chaile tar samne abstract dite hobe and kono body thakben EX: Myfunc1 jar kono body nai then jei class extends korbe abstract class ke sei extends kora class er vhitore theke abstract method call kore use korte hobe abstract method use jodi na kora hoi taole error dibe
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    return student;
}());
var student1 = /** @class */ (function (_super) {
    __extends(student1, _super);
    function student1(name, age, roll, id) {
        var _this = _super.call(this, name, age) || this;
        _this.roll = roll;
        _this.id = id;
        return _this;
    }
    student1.prototype.Myfunc1 = function () {
        console.log("My name is = ".concat(this.name, " and My age is = ").concat(this.age, " My roll = ").concat(this.roll, " and My id ").concat(this.id));
    };
    return student1;
}(student));
// let val1 = new student("himu", 25)
// val1.Myfunc1()
var val2 = new student1("himu", 25, 1, 4);
val2.Myfunc1();
