class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        /* Person.prototype.toString = function () {
             return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})` }; */
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

/*
class Person {

    constructor(firstName, lastName, age, email) {

        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._email = email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get email() {
        return this._email;
    }

    toString() {
        return `${this._firstName} ${this._lastName} (age: ${this._age}, email: ${this._email})`
    }
}
*/