function swap(value) {
    const length = value.length;

    if (length < 2) {
        return value;
    }

    return (
        value.charAt(length - 1) + value.substring(1, length - 1) + value.charAt(0)
    ); //substring(1, 4)
}

console.log(swap("hello")); //"oellh"
console.log(swap("ho")); //"oh"
console.log(swap("h")); //h
console.log(swap(""));