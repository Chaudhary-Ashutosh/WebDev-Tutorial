//console.log(process);
console.log(process.argv[1]);
/* const math = require("./script");
console.log(math.add(2,4));
console.log(math.mul(2,4));
console.log(math.sub(4,4));
*/

// or 
const {add,sub,mul} = require("./script")
console.log("Add",add(2,4));
console.log("Mul",mul(2,4));
console.log("Sub",sub(4,4));

/* when we will use obj
console.log(math.addfn(2,4));
console.log(math.mulfn(2,4));
console.log(math.subfn(4,4));
*/

const os = require("os");
console.log("CPU length:",os.cpus().length);

const fruits = require("./practice");
console.log("Fruits :",fruits.banana);

const input = process.args[2];
console.log("User input is: ",input);