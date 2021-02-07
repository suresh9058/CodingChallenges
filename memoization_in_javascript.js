const addition = (a, b) => {
    return a + b;
};

// generate unique key
const propNameFromArg = (fnToAddition, args) => {
    let propKey = [];
    propKey = propKey.concat(fnToAddition.name, args); //["addition",10,20]
    return propKey.join("|");
    ("addition|10|20");
};

// function decide to call or to return cache
const memoize = (fnToAddition) => {//Higher Order Function
    const memoCache = {}; // {key:value} {"addition|10|20": 30}

    return function (...args) {
        const propName = propNameFromArg(fnToAddition, args); // key
        if (!memoCache[propName]) {
            // call the and do computation
            memoCache[propName] = fnToAddition(...args);
        } else {
            console.log("from cache");
        }
        return memoCache[propName];
    };
};

const memAddition = memoize(addition);

console.log(memAddition(10, 20)); // 30
console.log(memAddition(20, 20));
console.log(memAddition(30, 20));
console.log(memAddition(10, 20)); // from cache 30
console.log(memAddition(20, 20));
console.log(memAddition(30, 20));