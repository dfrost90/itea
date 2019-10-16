/* Наследование */
function Developer(name, secondName, age, langs) {
    this.name = name;
    this.secondName = secondName;
    this.age = age;
    this.langs = langs;
}

function Frontend() {
    Developer.apply(this, arguments);
}

function Backend() {
    Developer.apply(this, arguments);
}

function Fullstack() {
    Developer.apply(this, arguments);
}

Developer.prototype.getFullName = function () {
    return this.name + ' ' + this.secondName;
};

Developer.prototype.getLanguages = function () {
    return this.name + ' knows ' + this.langs + ' programming languages';
}

Developer.prototype.getAge = function () {
    return this.age;
}

Frontend.prototype = Object.create(Developer.prototype);
Frontend.prototype.constructor = Developer;

Backend.prototype = Object.create(Developer.prototype);
Backend.prototype.constructor = Developer;

Fullstack.prototype = Object.create(Developer.prototype);
Fullstack.prototype.constructor = Developer;

var user1 = new Developer('John', 'Doe', '30', 'c, c#, Java');
var user2 = new Developer('Jane', 'Doe', '20', 'JavaScript, DART');
var user3 = new Developer('Tim', 'Apple', '50', 'Objective C, Python');

// console.log(user1.getFullName());
// console.log(user2.getLanguages());
// console.log(user3.getAge());


/* es6 */
class Human {
    constructor(name, secondName, age) {
        this.name = name;
        this.age = age;
        this.secondName = secondName;
    }

    getFullName() {
        return this.name + ' ' + this.secondName;
    }

    getAge() {
        return this.age;
    }
}

class User extends Human {
    constructor(name, secondName) {
        super(name, secondName);
    }
}

var dima = new User('Dima', 'Petrov');

console.log(dima.getFullName());
