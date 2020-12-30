console.time("FizzBuzz Solution");
for (let i = 1; i < 50; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
console.timeEnd("FizzBuzz Solution");

console.time("short solution");

for (let j = 1; j < 50; j++) {
    // 0 is falsy value
    console.log((j % 3 ? "" : "Fizz") + (j % 5 ? "" : "Buzz") || j);
}

console.timeEnd("short solution");