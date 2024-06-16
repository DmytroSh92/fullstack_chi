interface IPerson {
    name: string;
    age: number;
}

interface IWorker extends IPerson{
    position: string;
    salary: number;
}

class SimpleWorker implements IWorker {
    position: string;
    salary: number;
    age: number;
    name: string;

    constructor(position: string, salary: number, age: number, name: string) {
        this.position = position;
        this.salary = salary;
        this.age = age;
        this.name = name;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number) {
        this.salary = salary;
    }
}

let worker1 = new SimpleWorker("Developer", 33333, 33, "John");
console.log(worker1.getSalary());
worker1.setSalary(44444);
console.log(worker1.getSalary());