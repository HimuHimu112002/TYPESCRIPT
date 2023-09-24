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
    student.prototype.Myfunc1 = function () {
        console.log("My name is = ".concat(this.name, " and My age is = ").concat(this.age));
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
    student1.prototype.Myfunc2 = function () {
        console.log("My name is = ".concat(this.name, " and My age is = ").concat(this.age, " My roll = ").concat(this.roll, " and My id ").concat(this.id));
    };
    return student1;
}(student));
var student2 = /** @class */ (function (_super) {
    __extends(student2, _super);
    function student2(name, age, roll, id, collage) {
        var _this = _super.call(this, name, age, roll, id) || this;
        _this.collage = collage;
        return _this;
    }
    student2.prototype.Myfunc3 = function () {
        console.log("My name is = ".concat(this.name, " and My age is = ").concat(this.age, " My roll = ").concat(this.roll, " and My id ").concat(this.id, " My collage = ").concat(this.collage));
    };
    return student2;
}(student1));
var val1 = new student("himu", 25);
val1.Myfunc1();
var val2 = new student1("himu", 25, 1, 4);
val2.Myfunc2();
var val3 = new student2("himu", 25, 1, 4, "Sirajgong");
val3.Myfunc3();
