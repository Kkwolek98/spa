let arr = new Array(10);


for(let i = 0, n = arr.length; i<n; i++) {
    arr[i] = Math.floor(Math.random() * (20-5)) + 5;
}

console.log(arr);