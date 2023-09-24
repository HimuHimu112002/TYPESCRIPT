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
    student.prototype.Myfunc = function () {
        console.log("Private property access ".concat(this.name));
    };
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
var val2 = new student1("himu", 25, 1, 4);
// public obosthai thakar karon bahir theke access kora gelo and modify kora gelo
// val2.name = "Moni"
// protected obosthai thakar karon bahir theke access kora jabena sudhu extends kora jabe modify kora jabena
// val2.name = "hello"
// private obosthai thakar karon bahir theke access kora jabena and extends kora jabena modify kora jabena sudhu matro jei block er vhitore private property thakbe sei block thekei access korte hbe
// val2.name = "hello"
val2.Myfunc1();
