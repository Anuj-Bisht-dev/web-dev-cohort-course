// const cache = {};
// const sqCache = {};

// function add(a, b) {
//     const key = `${a},${b}`;
//     if (cache[key]) {
//         return cache[key];
//     }
//     const result = a + b;   // 0.25cpu
//     cache[key] = result;
//     return result;
// }

// add(3, 4);
// // 10M users - add(3, 4)

// // console.log(cache);


// function square(n) {
//     const key = n;
//     if (sqCache[key]) {
//         return sqCache[key];
//     }
//     const result = n * n;
//     sqCache[key] = result;
//     return result;
// }


function createOpatimizeVersion(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function add(a, b) {
    const result = a + b;   // 0.25cpu
    return result;
}

// add(3, 4);
// 10M users - add(3, 4);


function square(n) {
    result = n * n;
    return result;
}

const newadd = createOpatimizeVersion(add);
newadd(1, 2);
