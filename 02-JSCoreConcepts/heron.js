// boki trójkąta
// a = 3;
// b = 4;
// c = 5;
// h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

const heronCount = (a, b, c) => {
    const p = (a+b+c)/2;
    const heron = p*Math.sqrt((p-a)*(p-b)*(p-c));
    return `Pole trójkąta o bokach ${a}, ${b}, ${c}, wynosi ${heron}`;
}

console.log( heronCount(3, 4, 5) );