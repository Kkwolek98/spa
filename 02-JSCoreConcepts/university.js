names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter) {
        return this.names.filter(name => name.charAt(0) === letter);
    }

    sort() {
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
console.log("SORT", students.sort());
console.log("START WITH", students.startWith('P'));
console.log("START SORT", students.startWith('M').sort());
console.log("SORT GET FIRST", students.sort().getFirst(4));
console.log("START SORT FIRST", students.startWith('M').sort().getFirst(2));
console.log("GET", students.get());



