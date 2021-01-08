function secondLargest(arr) {
    let fLarNum = (secLarNum = Math.min(...arr)); //2

    if (arr.length < 2) {
        return "atleast need two numbers compare";
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > fLarNum) { // 2>10
            secLarNum = fLarNum;
            fLarNum = arr[i];
        } else if (arr[i] > secLarNum && arr[i] !== fLarNum) { //2>5
            secLarNum = arr[i];
        }

    }

    if (secLarNum == Math.min(...arr) && secLarNum == fLarNum) {
        return "No second largest in the array";
    }
    return secLarNum;


}

console.log(secondLargest([10, 5, 2, 13]));
console.log(secondLargest([-10, -2, -13, -40]));
console.log(secondLargest([10, 5, 10])); // 5
console.log(secondLargest([10, 10, 10])); // no second largest
console.log(secondLargest([10])); // atleast no number to compare


//normal solution is [10, 5, 10]
// 1. sort an array [5,10,10]
// 2. pick the second element arr[length-2]