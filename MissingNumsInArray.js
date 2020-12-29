function missing(arr) {
    let missArray = [];

    // Math.min(1,2,3); //1
    let minNum = Math.min(...arr); //1
    let maxNum = Math.max(...arr); //6

    // indexOf   return its position, not there in -1
    for (let i = minNum; i < maxNum; i++) {
        if (arr.indexOf(i) < 0) {
            missArray.push(i);
        }
    }

    return missArray;
}

console.log(missing([1, 2, 3, 6])); //[4,5]
console.log(missing([-3, -2, 2, 7])); //
console.log(missing([1, 2]));
console.log(missing([]));