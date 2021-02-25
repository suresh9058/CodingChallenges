// function x() {
//   return this;
// }

// console.log(x());

var a = 1; //a bind global context window

var nums = {
    a: 2,
};

function test(b, c) {
    return this.a + b + c;
}

// console.log(test()); //1

console.log(test.call(nums, 1, 2)); //2 // call we need pass comma

console.log(test.apply(nums, [1, 2])); // Apply we need pass as Array

console.log(test.bind(nums, 2, 3));

//1.bind call later
//2.copy 
let testNew = test.bind(nums); //

console.log(testNew(2, 3));