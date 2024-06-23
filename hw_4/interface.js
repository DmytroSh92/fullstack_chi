"use strict";
class SimpleWorker {
    constructor(position, salary, age, name) {
        this.position = position;
        this.salary = salary;
        this.age = age;
        this.name = name;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
}
let worker1 = new SimpleWorker("Developer", 33333, 33, "John");
console.log(worker1.getSalary());
worker1.setSalary(44444);
console.log(worker1.getSalary());
