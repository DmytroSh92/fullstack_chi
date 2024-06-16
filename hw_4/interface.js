var SimpleWorker = /** @class */ (function () {
    function SimpleWorker(position, salary, age, name) {
        this.position = position;
        this.salary = salary;
        this.age = age;
        this.name = name;
    }
    SimpleWorker.prototype.getSalary = function () {
        return this.salary;
    };
    SimpleWorker.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    return SimpleWorker;
}());
var worker1 = new SimpleWorker("Developer", 33333, 33, "John");
console.log(worker1.getSalary());
worker1.setSalary(44444);
console.log(worker1.getSalary());
