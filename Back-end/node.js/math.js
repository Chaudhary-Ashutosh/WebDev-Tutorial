// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;
// const PI = 3.14;
// const g = 9.8;

// module.exports = 123 ;

//method 1
// let obj = {
//     sum:sum,
//     mul:mul,
//     PI:PI,
//     g:g
// };
//module.exports = obj;

//method 2
// module.exports = {
//     sum:sum,
//     mul:mul,
//     PI:PI,
//     g:g
// };

//method 3
// module.exports.sum = (a,b) => a+b;
// module.exports.mul = (a,b) => a*b;
// module.exports.PI = 3.14;
// module.exports.g = 9.8;

//method 4
exports.sum = (a,b) => a+b;
exports.mul = (a,b) => a*b;
exports.PI = 3.14;
exports.g = 9.8;

// export = "hello" : invalid this will not work like module.exports