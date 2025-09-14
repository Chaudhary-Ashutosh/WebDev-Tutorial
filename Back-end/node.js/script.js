function add(a, b) {   
  return a + b;
}

function sub(a, b) { 
  return a - b;
}

function mul(a, b) { 
  return a * b;
}

/* method 1 */ 
module.exports = { add, sub, mul };

/* method 2 'obj'*/
// module.exports = {
//   addfn:add,
//   subfn:sub,
//   mulfn:mul
// }


//or simply we can write the whole code in just 3 lines and export it's value
// exports.add = (a,b) => a + b;
// exports.sub =(a,b) => a - b;
// exports.mul =(a,b) => a * b;




