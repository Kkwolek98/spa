const reverse = function(arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function(arr) {
    let arrSorted = [];
    arrSorted = arr.sort(); 
    return arrSorted;
}

const even = function(arr) {
    let arrEven = [];
    arrEven = arr.filter(el => {return (el % 2 === 0)});
    return arrEven;
}

let numbers = [8,3,2,1,5,4,6];
console.log("nums: ", numbers);
console.log("rev: ", reverse(numbers));
console.log("even: ", even(numbers));
console.log("rev even: ", reverse(even(numbers)));
console.log("even sort: ", even(sort(numbers)));
