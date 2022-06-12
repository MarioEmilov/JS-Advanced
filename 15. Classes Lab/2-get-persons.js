function returnPeople() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
            /* Person.prototype.toString = function () {
                return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`}; */
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let p1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let p2 = new Person('SoftUni');
    let p3 = new Person('Stephan', 'Johnson', 25);
    let p4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    return [p1, p2, p3, p4]

}

/*
function getPersons() {

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

    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ]
}
*/