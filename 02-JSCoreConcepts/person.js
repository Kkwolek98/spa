class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getNameAndSurname() {
        return `${this.name} ${this.surname.toUpperCase()}`;
    }

    getInitials() {
        return `${this.name.charAt(0)}.${this.surname.charAt(0)}`;
    }
}

let person = new Person("Krzysztof", "Kwolek");
console.log(person.getInitials());
console.log(person.getNameAndSurname());