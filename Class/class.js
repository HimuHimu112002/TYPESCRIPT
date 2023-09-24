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
var val1 = new student("himu", 25);
val1.Myfunc1();
