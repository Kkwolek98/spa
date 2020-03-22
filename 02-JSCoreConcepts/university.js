names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter) {
        return this.names.filter(name => name.charAt(0) === letter);
    }

    sortNames() {
        return this.names.sort();
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        return this.names.slice(0, n);
    }
}

let students = new Students(names);
console.log("GET", students.get());
console.log("SORT", students.sortNames());
console.log("START WITH", students.startWith('P'));
console.log("START SORT", students.startWith('M').sortNames());
console.log("SORT GET FIRST", students.sortNames().getFirst(4));
console.log("START SORT FIRST", students.startWith('M').sortNames().getFirst(2));
console.log("GET", students.get());



